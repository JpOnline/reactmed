(ns react-med.screens.paciente-avaliacao
  (:require
    [react-med.shell-components :as shell]
    [react-med.util :as util :refer [<sub >evt]]
    [re-frame.core :as re-frame]
    [day8.re-frame.tracing :refer-macros [fn-traced defn-traced]]
    [reagent.core :as reagent]
    ))

(defn paciente-avaliacao-shell [{:keys [actions]} content-view]
  (let [patient-name (:name (<sub [:react-med.screens.patient-info.core/selected-patient]))]
    [shell/main-panel
   [shell/header
    [shell/top-bar
     [shell/left-icon
      {:variation "<-"}]
     [shell/screen-title
      "Avaliação (" patient-name ")"]]
    [shell/tabs-menu
     {:menu-options
      [{:label "Informações Pessoais"
        :state "info"}
       {:label "Avaliações"
        :state "avaliacao/<id>"}]}] 
    #_[shell/tabs-menu
     "Coleta"
     "Resultado"]]
   [shell/main-content
    (with-meta content-view {:key 1})]
   [shell/drawer-menu]
   [shell/actions-menu
    {:actions actions}]
   [shell/bottom-bar]]))

(defn selected-avaliacao
  [app-state]
  (let [avaliacao (get-in app-state [:domain :patients 0 :avaliacoes 0])]
    avaliacao))
(re-frame/reg-sub ::selected-avaliacao selected-avaliacao)

(defn details-component []
  (let [{:keys [data peso circunferencia-cintura circunferencia-braco
                circunferencia-perna estatura resistencia reatancia
                atividade-fisica]} (<sub [::selected-avaliacao])
        line-style #js {:display "flex"
                        :alignItems "center"
                        :height 48
                        :whiteSpace "pre"}]
    [:<>
     [:div
      {:style line-style}
      [:b "Data: "] data]
     [:div
      {:style line-style}
      [:b "Peso: "] peso " Kg"]
     [:div
      {:style line-style}
      [:b "Circunferência da Cintura: "] circunferencia-cintura " cm"]
     [:div
      {:style line-style}
      [:b "Circunferência de Braço: "] circunferencia-braco " cm"]
     [:div
      {:style line-style}
      [:b "Circunferência de Perna: "] circunferencia-perna " cm"]
     [:div
      {:style line-style}
      [:b "Estatura: "] estatura " cm"]
     [:div
      {:style line-style}
      [:b "Resistência: "] resistencia]
     [:div
      {:style line-style}
      [:b "Reatância: "] reatancia]]))

(defn editing-component []
  (let [{:keys [data peso circunferencia-cintura circunferencia-braco
                circunferencia-perna estatura resistencia reatancia
                atividade-fisica]} (<sub [::selected-avaliacao])
        line-style #js {:display "flex"
                        :alignItems "center"
                        :height 48}]
    [:<>
     [:div
      {:style line-style}
      [:b "Data: "]
      [:dom-module#vaadin-style
       {:theme-for "vaadin-date-picker-overlay"}
       [:template
        [:style
         "vaadin-date-picker-overlay{
         z-index: 1200;
         }"]]]
      [(util/with-mount-fn
         [:vaadin-date-picker
          {:value data
           :component-did-mount
           (fn [this]
             (set! (-> (reagent/dom-node this) .-onchange)
                   #(>evt [::change-avaliacao-data (-> % .-target .-value)])))}])]]
     [:div
      {:style line-style}
      [:b "Peso: "]
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
         :defaultValue peso
         #_#_:onBlur #(>evt [::change-height (-> % .-target .-value)])
         :min 0
         :max 500}]
       "Kg"]]
     [:div
      {:style line-style}
      [:b "Circunferência da Cintura: "]
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
         :defaultValue circunferencia-cintura
         #_#_:onBlur #(>evt [::change-height (-> % .-target .-value)])
         :min 0
         :max 500}]
       "cm"]]
     [:div
      {:style line-style}
      [:b "Circunferência de Braço: "]
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
         :defaultValue circunferencia-braco
         #_#_:onBlur #(>evt [::change-height (-> % .-target .-value)])
         :min 0
         :max 500}]
       "cm"]]
     [:div
      {:style line-style}
      [:b "Circunferência de Perna: "]
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
         :defaultValue circunferencia-perna
         #_#_:onBlur #(>evt [::change-height (-> % .-target .-value)])
         :min 0
         :max 500}]
       "cm"]]
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
         :defaultValue estatura
         #_#_:onBlur #(>evt [::change-height (-> % .-target .-value)])
         :min 0
         :max 500}]
       "cm"]]
     [:div
      {:style line-style}
      [:b "Resistência: "]
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
         :defaultValue resistencia
         #_#_:onBlur #(>evt [::change-height (-> % .-target .-value)])
         :min 0
         :max 500}]]]
     [:div
      {:style line-style}
      [:b "Reatância: "]
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
         :defaultValue reatancia
         #_#_:onBlur #(>evt [::change-height (-> % .-target .-value)])
         :min 0
         :max 500}]]]]))

(def actions
  [{:name "Voltar" :event :back}
   {:name "Editar" :event :edit}])

(defn detail-view []
  [paciente-avaliacao-shell
   {:actions actions}
   [details-component]])

(def editing-actions
  [{:name "Pronto" :event :ok}
   {:name "Cancelar" :event :cancel}])

(defn editing-view []
  [paciente-avaliacao-shell
   {:actions editing-actions}
   [editing-component]])
