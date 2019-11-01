(ns react-med.screens.patient-info.core
  (:require
    [react-med.shell-components :as shell]
    [react-med.util :as util :refer [<sub >evt]]
    [re-frame.core :as re-frame]
    ))

(defn selected-patient
  [app-state]
  (get-in app-state [:domain :patients 0]))
(re-frame/reg-sub ::selected-patient selected-patient)

(defn editing-patient-info-component []
  (let [{:keys [name birth-date gender height]} (<sub [::selected-patient])]
    [:<>
     [:p
      [:b "Nome: "]
      [:span
       {:style #js {:backgroundColor "#e5e9ed"
                    :padding "4px 15px"
                    :borderRadius "5px"}}
       [:u {:contentEditable ""} name]]]
     [:p [:b "Nascimento: "]
      [:dom-module#vaadin-style
       {:theme-for "vaadin-date-picker-overlay"}
       [:template
        [:style
         "vaadin-date-picker-overlay{
           z-index: 1200;
         }"]]]
      [:vaadin-date-picker
       {:value "2001-10-01"}]
      " (18 anos)"]
     [:p [:b "Sexo: "]
      [:span
       {:style #js {:backgroundColor "#e5e9ed"
                    :cursor "pointer"
                    :borderRadius "30px"
                    :padding "7px 13px"}}
       "Feminino"]]
     [:p
      [:b "Estatura: "]
      [:span
       {:style #js {:backgroundColor "#e5e9ed"
                    :padding "4px 15px"
                    :borderRadius "5px"}}
       [:input
        {:style #js {:textDecoration "underline"
                     :width "34px"
                     :backgroundColor "#e5e9ed"
                     :WebkitAppearance "meter"}
         :type "number"
         :defaultValue "166"
         :min 0
         :max 500}]
       "cm"]]]))

(defn patient-info-component []
  [:<>
   [:p [:b "Nome: "] "Daniela"]
   [:p [:b "Nascimento: "] "01/10/2001 (18 anos)"]
   [:p [:b "Sexo: "] "Feminino"]
   [:p [:b "Estatura: "] "166,8 cm"]])

(defn patient-detail [{:keys [actions]} content-view]
  [shell/main-panel
   [shell/header
    [shell/top-bar
     [shell/left-icon]
     [shell/screen-title
      "Detalhes do Paciente"]]
    [shell/tabs-menu
     "Informações Pessoais"
     "Avaliações"]]
   [shell/main-content
    (with-meta content-view {:key 1})]
   [shell/drawer-menu]
   [shell/actions-menu
    {:actions actions}]
   [shell/bottom-bar]])

(def patient-info-actions
  [{:name "Voltar" :event :back}
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
