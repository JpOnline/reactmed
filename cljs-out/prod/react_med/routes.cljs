(ns react-med.routes
  (:require
    [bidi.bidi :as bidi]
    [pushy.core :as pushy]
    [day8.re-frame.tracing :refer-macros [fn-traced defn-traced]]
    [react-med.shell-components :as shell]
    [react-med.screens.patient-info.core :as pi]
    [react-med.util :as util :refer [<sub >evt]]
    [react-med.screens.paciente-avaliacao :as pa]
    [re-frame.core :as re-frame]))

;; This is not being useful. Probably, somehow, I should derive the url from the
;; ui state and vice versa.

(def routes ["/" {""      :home
                  "about" :about
                  ;; true "any"
                  }])

(defn- parse-url [url]
  (bidi/match-route routes url))

(defn-traced set-route
  [app-state [_ ui-route]]
  (assoc-in app-state [:ui :state] ui-route))
(re-frame/reg-event-db ::set-route set-route)

(defn- dispatch-route [matched-route]
  (let [ui-state (:handler matched-route)]
    (re-frame/dispatch [::set-state ui-state])))

(def history
  (pushy/pushy dispatch-route parse-url))

(defn start! []
  (pushy/start! history))

(def url-for (partial bidi/path-for routes))

(def state-machine
  {nil {:init "info"}
   "info" {:edit "info/edit"}
   "info/edit" {:ok "info"
                :cancel "info"}
   "avaliacao/<id>" {:back "info"
                     :edit "avaliacao/<id>/edit"}
   "avaliacao/<id>/edit" {:ok "avaliacao/<id>"
                          :cancel "avaliacao/<id>"}
   })

(defn current->next-state
  [state-machine current-state transition]
  (get-in state-machine [current-state transition]))

(defn next-state-handler
  [db [event]]
  (if-let [new-state (current->next-state
                       state-machine
                       (get-in db [:ui :state])
                       event)]
    (do (println "new-state" new-state)
        (assoc-in db [:ui :state] new-state))
    db))
(defn-traced next-state
  [db event]
  (next-state-handler db event))

(defn-traced backup-domain
  [app-state]
  (let [domain-snapshot (get app-state :domain)]
    (assoc-in app-state [:domain :backup] domain-snapshot)))
(re-frame/reg-event-db ::backup-domain backup-domain)

(defn-traced restore-domain
  [app-state]
  (if-let [old-domain (get-in app-state [:domain :backup])]
    (-> app-state
        (assoc :domain old-domain)
        (update-in [:domain] dissoc :backup))
    app-state))
(re-frame/reg-event-db ::restore-domain restore-domain)

(defn-traced discard-backup
  [app-state]
  (update-in app-state [:domain] dissoc :backup))
(re-frame/reg-event-db ::discard-backup discard-backup)

(defn next-state-then [events]
  (fn [{app-state :db} [event _]]
    {:db (next-state-handler app-state [event])
     :dispatch-n events}))

(re-frame/reg-event-fx :edit (next-state-then [[::backup-domain]
                                               [::shell/close-actions-menu]]))
(re-frame/reg-event-fx :cancel (next-state-then [[::restore-domain]
                                                 [::shell/close-actions-menu]]))
(re-frame/reg-event-fx :ok (next-state-then [[::discard-backup]
                                             [::shell/close-actions-menu]]))
(re-frame/reg-event-fx :back (next-state-then [[::restore-domain]]))

(re-frame/reg-sub
  ::state
  (fn [app-state] (get-in app-state [:ui :state])))

(defn selected-view []
  (case (<sub [::state])
    "info" [pi/patient-info]
    "info/edit" [pi/editing-patient-info]
    "avaliacao/<id>" [pa/detail-view]
    "avaliacao/<id>/edit" [pa/editing-view]
    [pi/patient-info]))
