(ns react-med.routes
  (:require
    [bidi.bidi :as bidi]
    [pushy.core :as pushy]
    [day8.re-frame.tracing :refer-macros [fn-traced defn-traced]]
    [react-med.shell-components :as shell]
    [react-med.screens.patient-info.core :as pi]
    [react-med.util :as util :refer [<sub >evt]]
    [re-frame.core :as re-frame]))

;; This is not being useful. Probably, somehow, I should derive the url from the
;; ui state and vice versa.

(def routes ["/" {""      :home
                  "about" :about
                  ;; true "any"
                  }])

(defn- parse-url [url]
  (bidi/match-route routes url))

(defn-traced set-state
  [app-state [_ ui-state]]
  (assoc-in app-state [:ui :state] ui-state))
(re-frame/reg-event-db ::set-state set-state)

(defn- dispatch-route [matched-route]
  (let [ui-state (:handler matched-route)]
    (re-frame/dispatch [::set-state ui-state])))

(def history
  (pushy/pushy dispatch-route parse-url))

(defn start! []
  (pushy/start! history))

(def url-for (partial bidi/path-for routes))

(def state-machine
  {nil {:init :initial}
   "info" {:edit "info/edit"}
   "info/edit" {:ok "info"
                :cancel "info"}})

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

(defn next-state-then [& events]
  (fn [{app-state :db} [event _]]
    (println "next-state-then" (next-state-handler app-state [event]))
    {:db (next-state-handler app-state [event])
     :dispatch-n events}))

(re-frame/reg-event-fx :cancel (next-state-then [::shell/close-actions-menu]))
(re-frame/reg-event-fx :edit (next-state-then [::shell/close-actions-menu]))
(re-frame/reg-event-fx :ok (next-state-then [::shell/close-actions-menu]))

(re-frame/reg-sub
  ::state
  (fn [app-state] (get-in app-state [:ui :state])))

(defn selected-view []
  (case (<sub [::state])
    "info" [pi/patient-info]
    "info/edit" [pi/editing-patient-info]
    [pi/patient-info]))
 
