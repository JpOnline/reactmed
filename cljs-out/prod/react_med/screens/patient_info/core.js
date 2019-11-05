// Compiled by ClojureScript 1.10.520 {}
goog.provide('react_med.screens.patient_info.core');
goog.require('cljs.core');
goog.require('react_med.shell_components');
goog.require('react_med.util');
goog.require('re_frame.core');
goog.require('day8.re_frame.tracing');
goog.require('reagent.core');
react_med.screens.patient_info.core.selected_patient = (function react_med$screens$patient_info$core$selected_patient(app_state){
var patient_info = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0)], null));
var age = Math.floor((((((((new Date()) - (new Date(patient_info.call(null,new cljs.core.Keyword(null,"birth-date","birth-date",-749581010))))) / (1000)) / (60)) / (60)) / (24)) / (365)));
return cljs.core.assoc.call(null,patient_info,new cljs.core.Keyword(null,"age","age",-604307804),age);
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("react-med.screens.patient-info.core","selected-patient","react-med.screens.patient-info.core/selected-patient",-1719364628),react_med.screens.patient_info.core.selected_patient);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.screens.patient_info.core.change_patient_name = (function react_med$screens$patient_info$core$change_patient_name(app_state,p__14641){
var vec__14642 = p__14641;
var event = cljs.core.nth.call(null,vec__14642,(0),null);
var new_name = cljs.core.nth.call(null,vec__14642,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"name","name",1843675177)], null),new cljs.core.Symbol(null,"new-name","new-name",-1366080711,null)));

var opts__14391__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__14392__auto__ = cljs.core.assoc_in.call(null,(function (){var opts__14391__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14392__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14392__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14392__auto__;
})(),(function (){var opts__14391__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14392__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"name","name",1843675177)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14392__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"name","name",1843675177)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14392__auto__;
})(),(function (){var opts__14391__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14392__auto__ = new_name;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14392__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-name","new-name",-1366080711,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14392__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14392__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"name","name",1843675177)], null),new cljs.core.Symbol(null,"new-name","new-name",-1366080711,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__14392__auto__;
}catch (e14645){var e = e14645;
throw e;
}});
} else {
react_med.screens.patient_info.core.change_patient_name = (function react_med$screens$patient_info$core$change_patient_name(app_state,p__14646){
var vec__14647 = p__14646;
var event = cljs.core.nth.call(null,vec__14647,(0),null);
var new_name = cljs.core.nth.call(null,vec__14647,(1),null);
return cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"name","name",1843675177)], null),new_name);
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.screens.patient-info.core","change-patient-name","react-med.screens.patient-info.core/change-patient-name",1868385065),react_med.screens.patient_info.core.change_patient_name);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.screens.patient_info.core.change_birth_date = (function react_med$screens$patient_info$core$change_birth_date(app_state,p__14650){
var vec__14651 = p__14650;
var event = cljs.core.nth.call(null,vec__14651,(0),null);
var new_birth_date = cljs.core.nth.call(null,vec__14651,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"birth-date","birth-date",-749581010)], null),new cljs.core.Symbol(null,"new-birth-date","new-birth-date",-1200594950,null)));

var opts__14391__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__14392__auto__ = cljs.core.assoc_in.call(null,(function (){var opts__14391__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14392__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14392__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14392__auto__;
})(),(function (){var opts__14391__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14392__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"birth-date","birth-date",-749581010)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14392__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"birth-date","birth-date",-749581010)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14392__auto__;
})(),(function (){var opts__14391__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14392__auto__ = new_birth_date;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14392__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-birth-date","new-birth-date",-1200594950,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14392__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14392__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"birth-date","birth-date",-749581010)], null),new cljs.core.Symbol(null,"new-birth-date","new-birth-date",-1200594950,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__14392__auto__;
}catch (e14654){var e = e14654;
throw e;
}});
} else {
react_med.screens.patient_info.core.change_birth_date = (function react_med$screens$patient_info$core$change_birth_date(app_state,p__14655){
var vec__14656 = p__14655;
var event = cljs.core.nth.call(null,vec__14656,(0),null);
var new_birth_date = cljs.core.nth.call(null,vec__14656,(1),null);
return cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"birth-date","birth-date",-749581010)], null),new_birth_date);
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.screens.patient-info.core","change-birth-date","react-med.screens.patient-info.core/change-birth-date",-352684070),react_med.screens.patient_info.core.change_birth_date);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.screens.patient_info.core.toggle_gender = (function react_med$screens$patient_info$core$toggle_gender(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"gender","gender",-733930727)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"%1","%1",1309450150,null),"Feminino"),"Masculino","Feminino"))));

var opts__14391__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__14392__auto__ = cljs.core.update_in.call(null,(function (){var opts__14391__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14392__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14392__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14392__auto__;
})(),(function (){var opts__14391__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14392__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"gender","gender",-733930727)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14392__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"gender","gender",-733930727)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14392__auto__;
})(),(function (){var opts__14391__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14392__auto__ = ((function (opts__14391__auto____$1,opts__14391__auto__,_PLUS_debux_dbg_opts_PLUS_){
return (function (p1__14659_SHARP_){
var opts__14391__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__14392__auto__ = (((function (){var opts__14391__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__14392__auto__ = cljs.core._EQ_.call(null,(function (){var opts__14391__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__14392__auto__ = p1__14659_SHARP_;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14392__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__14659#","p1__14659#",-873939765,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__14392__auto__;
})(),"Feminino");
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14392__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"p1__14659#","p1__14659#",-873939765,null),"Feminino"),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14392__auto__;
})())?"Masculino":"Feminino");
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14392__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"p1__14659#","p1__14659#",-873939765,null),"Feminino"),"Masculino","Feminino"),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__14392__auto__;
});})(opts__14391__auto____$1,opts__14391__auto__,_PLUS_debux_dbg_opts_PLUS_))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14392__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__14659#","p1__14659#",-873939765,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"p1__14659#","p1__14659#",-873939765,null),"Feminino"),"Masculino","Feminino")),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14392__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14392__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"gender","gender",-733930727)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__14659#","p1__14659#",-873939765,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"p1__14659#","p1__14659#",-873939765,null),"Feminino"),"Masculino","Feminino"))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__14392__auto__;
}catch (e14660){var e = e14660;
throw e;
}});
} else {
react_med.screens.patient_info.core.toggle_gender = (function react_med$screens$patient_info$core$toggle_gender(app_state){
return cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"gender","gender",-733930727)], null),(function (p1__14659_SHARP_){
if(cljs.core._EQ_.call(null,p1__14659_SHARP_,"Feminino")){
return "Masculino";
} else {
return "Feminino";
}
}));
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.screens.patient-info.core","toggle-gender","react-med.screens.patient-info.core/toggle-gender",-1245723326),react_med.screens.patient_info.core.toggle_gender);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.screens.patient_info.core.change_height = (function react_med$screens$patient_info$core$change_height(app_state,p__14661){
var vec__14662 = p__14661;
var event = cljs.core.nth.call(null,vec__14662,(0),null);
var new_height = cljs.core.nth.call(null,vec__14662,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"height","height",1025178622)], null),new cljs.core.Symbol(null,"new-height","new-height",-1197882123,null)));

var opts__14391__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__14392__auto__ = cljs.core.assoc_in.call(null,(function (){var opts__14391__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14392__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14392__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14392__auto__;
})(),(function (){var opts__14391__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14392__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"height","height",1025178622)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14392__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"height","height",1025178622)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14392__auto__;
})(),(function (){var opts__14391__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14392__auto__ = new_height;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14392__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-height","new-height",-1197882123,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14392__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14392__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"height","height",1025178622)], null),new cljs.core.Symbol(null,"new-height","new-height",-1197882123,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__14392__auto__;
}catch (e14665){var e = e14665;
throw e;
}});
} else {
react_med.screens.patient_info.core.change_height = (function react_med$screens$patient_info$core$change_height(app_state,p__14666){
var vec__14667 = p__14666;
var event = cljs.core.nth.call(null,vec__14667,(0),null);
var new_height = cljs.core.nth.call(null,vec__14667,(1),null);
return cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"patients","patients",134252075),(0),new cljs.core.Keyword(null,"height","height",1025178622)], null),new_height);
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.screens.patient-info.core","change-height","react-med.screens.patient-info.core/change-height",-1808838546),react_med.screens.patient_info.core.change_height);
react_med.screens.patient_info.core.editing_patient_info_component = (function react_med$screens$patient_info$core$editing_patient_info_component(){
var map__14673 = react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.patient-info.core","selected-patient","react-med.screens.patient-info.core/selected-patient",-1719364628)], null));
var map__14673__$1 = (((((!((map__14673 == null))))?(((((map__14673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14673):map__14673);
var name = cljs.core.get.call(null,map__14673__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var birth_date = cljs.core.get.call(null,map__14673__$1,new cljs.core.Keyword(null,"birth-date","birth-date",-749581010));
var age = cljs.core.get.call(null,map__14673__$1,new cljs.core.Keyword(null,"age","age",-604307804));
var gender = cljs.core.get.call(null,map__14673__$1,new cljs.core.Keyword(null,"gender","gender",-733930727));
var height = cljs.core.get.call(null,map__14673__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var line_style = ({"display": "flex", "alignItems": "center", "height": (48)});
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Nome: "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"backgroundColor": "#e5e9ed", "padding": "4px 15px", "borderRadius": "5px"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u","u",-1156634785),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"contentEditable","contentEditable",-823191689),"",new cljs.core.Keyword(null,"onBlur","onBlur",229342509),((function (map__14673,map__14673__$1,name,birth_date,age,gender,height,line_style){
return (function (p1__14670_SHARP_){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.patient-info.core","change-patient-name","react-med.screens.patient-info.core/change-patient-name",1868385065),p1__14670_SHARP_.target.innerText], null));
});})(map__14673,map__14673__$1,name,birth_date,age,gender,height,line_style))
], null),name], null)], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Nascimento: "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dom-module#vaadin-style","dom-module#vaadin-style",877150704),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"theme-for","theme-for",-1903003204),"vaadin-date-picker-overlay"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),"vaadin-date-picker-overlay{\n           z-index: 1200;\n         }"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.util.with_mount_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vaadin-date-picker","vaadin-date-picker",293781945),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),birth_date,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (map__14673,map__14673__$1,name,birth_date,age,gender,height,line_style){
return (function (this$){
return reagent.core.dom_node.call(null,this$).onchange = ((function (map__14673,map__14673__$1,name,birth_date,age,gender,height,line_style){
return (function (p1__14671_SHARP_){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.patient-info.core","change-birth-date","react-med.screens.patient-info.core/change-birth-date",-352684070),p1__14671_SHARP_.target.value], null));
});})(map__14673,map__14673__$1,name,birth_date,age,gender,height,line_style))
;
});})(map__14673,map__14673__$1,name,birth_date,age,gender,height,line_style))
], null)], null))], null)," (",age," anos)"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Sexo: "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__14673,map__14673__$1,name,birth_date,age,gender,height,line_style){
return (function (){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.patient-info.core","toggle-gender","react-med.screens.patient-info.core/toggle-gender",-1245723326)], null));
});})(map__14673,map__14673__$1,name,birth_date,age,gender,height,line_style))
,new cljs.core.Keyword(null,"style","style",-496642736),({"backgroundColor": "#e5e9ed", "cursor": "pointer", "borderRadius": "30px", "padding": "7px 13px"})], null),gender], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Estatura: "], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"backgroundColor": "#e5e9ed", "padding": "4px 8px", "borderRadius": "5px"})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"style","style",-496642736),({"textDecoration": "underline", "width": "46px", "backgroundColor": "#e5e9ed", "WebkitAppearance": "meter"}),new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),height,new cljs.core.Keyword(null,"onBlur","onBlur",229342509),((function (map__14673,map__14673__$1,name,birth_date,age,gender,height,line_style){
return (function (p1__14672_SHARP_){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.patient-info.core","change-height","react-med.screens.patient-info.core/change-height",-1808838546),p1__14672_SHARP_.target.value], null));
});})(map__14673,map__14673__$1,name,birth_date,age,gender,height,line_style))
,new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(500)], null)], null),"cm"], null)], null)], null);
});
react_med.screens.patient_info.core.patient_info_component = (function react_med$screens$patient_info$core$patient_info_component(){
var map__14675 = react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.patient-info.core","selected-patient","react-med.screens.patient-info.core/selected-patient",-1719364628)], null));
var map__14675__$1 = (((((!((map__14675 == null))))?(((((map__14675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14675):map__14675);
var name = cljs.core.get.call(null,map__14675__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var birth_date = cljs.core.get.call(null,map__14675__$1,new cljs.core.Keyword(null,"birth-date","birth-date",-749581010));
var age = cljs.core.get.call(null,map__14675__$1,new cljs.core.Keyword(null,"age","age",-604307804));
var gender = cljs.core.get.call(null,map__14675__$1,new cljs.core.Keyword(null,"gender","gender",-733930727));
var height = cljs.core.get.call(null,map__14675__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var birth_date_local_fmt = (new Date(birth_date)).toLocaleDateString();
var line_style = ({"display": "flex", "alignItems": "center", "whiteSpace": "pre", "height": (48)});
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Nome: "], null),name], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Nascimento: "], null),birth_date_local_fmt," (",age," anos)"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Sexo: "], null),gender], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Estatura: "], null),height," cm"], null)], null);
});
react_med.screens.patient_info.core.patient_detail = (function react_med$screens$patient_info$core$patient_detail(p__14677,content_view){
var map__14678 = p__14677;
var map__14678__$1 = (((((!((map__14678 == null))))?(((((map__14678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14678):map__14678);
var actions = cljs.core.get.call(null,map__14678__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.main_panel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.header,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.top_bar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.left_icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variation","variation",-450640146),""], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.screen_title,"Detalhes do Paciente"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.tabs_menu,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menu-options","menu-options",-1774050123),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Informa\u00E7\u00F5es Pessoais",new cljs.core.Keyword(null,"state","state",-1988618099),"info"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Avalia\u00E7\u00F5es",new cljs.core.Keyword(null,"state","state",-1988618099),"avaliacao/<id>"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.main_content,cljs.core.with_meta.call(null,content_view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.drawer_menu], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.actions_menu,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),actions], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.bottom_bar], null)], null);
});
react_med.screens.patient_info.core.patient_info_actions = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Editar",new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"edit","edit",-1641834166)], null)], null);
react_med.screens.patient_info.core.patient_info = (function react_med$screens$patient_info$core$patient_info(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.patient_info.core.patient_detail,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),react_med.screens.patient_info.core.patient_info_actions], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.patient_info.core.patient_info_component], null)], null);
});
react_med.screens.patient_info.core.editing_patient_info_actions = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Pronto",new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"ok","ok",967785236)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Cancelar",new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"cancel","cancel",-1964088360)], null)], null);
react_med.screens.patient_info.core.editing_patient_info = (function react_med$screens$patient_info$core$editing_patient_info(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.patient_info.core.patient_detail,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),react_med.screens.patient_info.core.editing_patient_info_actions], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.patient_info.core.editing_patient_info_component], null)], null);
});

//# sourceMappingURL=core.js.map
