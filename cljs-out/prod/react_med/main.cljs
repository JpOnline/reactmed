(ns ^:figwheel-hooks react-med.main
  (:require
    [react-med.routes :as routes]
    [goog.dom :as gdom]
    ;; [react-med.external-storage :as ext-store]
    [re-frame.core :as re-frame]
    [day8.re-frame.tracing :refer-macros [fn-traced defn-traced]]
    [reagent.core :as reagent :refer [atom]]))

(defn mount-app-element []
  (when-let [el (gdom/getElement "app")]
    (reagent/render-component [routes/selected-view] el)))

(re-frame/reg-event-db ::init-app-state
  (fn-traced [_ _]
    {:domain {:patients [{:id 1
                          :name "Dani"
                          :birth-date "2000-10-01"
                          :gender "Feminino"
                          :height 166}]}
     :ui {:actions-menu {:opened? false}
          :drawer-menu {:opened? false}
          :state "info"}}))

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(do
  (re-frame/clear-subscription-cache!)

  (re-frame/dispatch-sync [::init-app-state])
  ;; (ext-store/init-app-state "none")

  (mount-app-element))

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element)
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

