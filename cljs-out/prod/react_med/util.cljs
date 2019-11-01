(ns react-med.util
  (:require
    [re-frame.core :as re-frame]
    ))

;; Redef re-frame subscribe and dispatch for brevity
(def <sub (comp deref re-frame.core/subscribe))
(def >evt re-frame.core/dispatch)

(def primary-color "#71838e")
(def secondary-color "#c9c92d")
