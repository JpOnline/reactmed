(ns react-med.screens.patient-info.core
  (:require
    [react-med.shell-components :as shell]
    [react-med.util :as util :refer [<sub >evt]]
    [re-frame.core :as re-frame]
    [day8.re-frame.tracing :refer-macros [fn-traced defn-traced]]
    [reagent.core :as reagent]
    ))

(defn selected-patient
  [app-state]
  (let [patient-info (get-in app-state [:domain :patients 0])
        age (-> (js/Date.)
                (- (js/Date. (patient-info :birth-date)))
                (/ 1000 60 60 24 365)
                (js/Math.floor))]
    (assoc patient-info :age age)))
(re-frame/reg-sub ::selected-patient selected-patient)

(defn-traced change-patient-name
  [app-state [event new-name]]
  (assoc-in app-state [:domain :patients 0 :name] new-name))
(re-frame/reg-event-db ::change-patient-name change-patient-name)

(defn-traced change-birth-date
  [app-state [event new-birth-date]]
  (assoc-in app-state [:domain :patients 0 :birth-date] new-birth-date))
(re-frame/reg-event-db ::change-birth-date change-birth-date)

(defn-traced toggle-gender
  [app-state]
  (update-in app-state [:domain :patients 0 :gender] #(if (= % "Feminino")
                                                        "Masculino"
                                                        "Feminino")))
(re-frame/reg-event-db ::toggle-gender toggle-gender)

(defn-traced change-height
  [app-state [event new-height]]
  (assoc-in app-state [:domain :patients 0 :height] new-height))
(re-frame/reg-event-db ::change-height change-height)

(defn editing-patient-info-component []
  (let [{:keys [name birth-date age gender height]} (<sub [::selected-patient])
        line-style #js {:display "flex"
                        :alignItems "center"
                        :height 48}]
    [:<>
     [:div
      {:style line-style}
      [:b "Nome: "]
      [:span
       {:style #js {:backgroundColor "#e5e9ed"
                    :padding "4px 15px"
                    :borderRadius "5px"}}
       [:u
        {:contentEditable ""
         :onBlur #(>evt [::change-patient-name (-> % .-target .-innerText)])}
        name]]]
     [:div
      {:style line-style}
      [:b "Nascimento: "]
      [:dom-module#vaadin-style
       {:theme-for "vaadin-date-picker-overlay"}
       [:template
        [:style
         "vaadin-date-picker-overlay{
           z-index: 1200;
         }"]]]
      [(util/with-mount-fn
         [:vaadin-date-picker
          {:value birth-date
           :component-did-mount
           (fn [this]
             (set! (-> (reagent/dom-node this) .-onchange)
                   #(>evt [::change-birth-date (-> % .-target .-value)])))}])]
      " (" age " anos)"]
     [:div
      {:style line-style}
      [:b "Sexo: "]
      [:span
       {:onClick #(>evt [::toggle-gender])
        :style #js {:backgroundColor "#e5e9ed"
                    :cursor "pointer"
                    :borderRadius "30px"
                    :padding "7px 13px"}}
       gender]]
     [:div
      {:style line-style}
      [:b "Estatura: "]
      [:span
       {:style #js {:backgroundColor "#e5e9ed"
                    :padding "4px 8px"
                    :borderRadius "5px"}}
       [:input
        {:style #js {:textDecoration "underline"
                     :width "46px"
                     :backgroundColor "#e5e9ed"
                     :WebkitAppearance "meter"}
         :type "number"
         :defaultValue height
         :onBlur #(>evt [::change-height (-> % .-target .-value)])
         :min 0
         :max 500}]
       "cm"]]]))

(defn patient-info-component []
  (let [{:keys [name birth-date age gender height]} (<sub [::selected-patient])
        birth-date-local-fmt (-> birth-date js/Date. .toLocaleDateString)
        line-style #js {:display "flex"
                        :alignItems "center"
                        :whiteSpace "pre"
                        :height 48}]
    [:<>
     [:div
      {:style line-style}
      [:b "Nome: "] name]
     [:div
      {:style line-style}
      [:b "Nascimento: "] birth-date-local-fmt " (" age " anos)"]
     [:div
      {:style line-style}
      [:b "Sexo: "] gender]
     [:div
      {:style line-style}
      [:b "Estatura: "] height " cm"]]))

(defn patient-detail [{:keys [actions]} content-view]
  [shell/main-panel
   [shell/header
    [shell/top-bar
     [shell/left-icon
      {:variation ""}]
     [shell/screen-title
      "Detalhes do Paciente"]]
    [shell/tabs-menu
     {:menu-options
      [{:label "Informações Pessoais"
        :state "info"}
       {:label "Avaliações"
        :state "avaliacao/<id>"}]}]]
   [shell/main-content
    (with-meta content-view {:key 1})]
   [shell/drawer-menu]
   [shell/actions-menu
    {:actions actions}]
   [shell/bottom-bar]])

(def patient-info-actions
  [#_{:name "Voltar" :event :back}
   {:name "Editar" :event :edit}])

(defn patient-info []
  [patient-detail
   {:actions patient-info-actions}
   [patient-info-component]])

(def editing-patient-info-actions
  [{:name "Pronto" :event :ok}
   {:name "Cancelar" :event :cancel}])

(defn editing-patient-info []
  [patient-detail
   {:actions editing-patient-info-actions}
   [editing-patient-info-component]])
