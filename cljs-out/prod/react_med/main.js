// Compiled by ClojureScript 1.10.520 {}
goog.provide('react_med.main');
goog.require('cljs.core');
goog.require('react_med.routes');
goog.require('goog.dom');
goog.require('re_frame.core');
goog.require('day8.re_frame.tracing');
goog.require('reagent.core');
react_med.main.mount_app_element = (function react_med$main$mount_app_element(){
var temp__5735__auto__ = goog.dom.getElement("app");
if(cljs.core.truth_(temp__5735__auto__)){
var el = temp__5735__auto__;
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.routes.selected_view], null),el);
} else {
return null;
}
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.main","init-app-state","react-med.main/init-app-state",1938955791),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"Dani",new cljs.core.Keyword(null,"birth-date","birth-date",-749581010),"2000-10-01",new cljs.core.Keyword(null,"gender","gender",-733930727),"Feminino",new cljs.core.Keyword(null,"height","height",1025178622),(166)], null)], null)], null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"actions-menu","actions-menu",-124297398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opened?","opened?",1096959669),false], null),new cljs.core.Keyword(null,"drawer-menu","drawer-menu",266025613),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opened?","opened?",1096959669),false], null),new cljs.core.Keyword(null,"state","state",-1988618099),"info"], null)], null));

var opts__14385__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__14386__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"Dani",new cljs.core.Keyword(null,"birth-date","birth-date",-749581010),"2000-10-01",new cljs.core.Keyword(null,"gender","gender",-733930727),"Feminino",new cljs.core.Keyword(null,"height","height",1025178622),(166)], null)], null)], null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"actions-menu","actions-menu",-124297398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opened?","opened?",1096959669),false], null),new cljs.core.Keyword(null,"drawer-menu","drawer-menu",266025613),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opened?","opened?",1096959669),false], null),new cljs.core.Keyword(null,"state","state",-1988618099),"info"], null)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14386__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"Dani",new cljs.core.Keyword(null,"birth-date","birth-date",-749581010),"2000-10-01",new cljs.core.Keyword(null,"gender","gender",-733930727),"Feminino",new cljs.core.Keyword(null,"height","height",1025178622),(166)], null)], null)], null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"actions-menu","actions-menu",-124297398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opened?","opened?",1096959669),false], null),new cljs.core.Keyword(null,"drawer-menu","drawer-menu",266025613),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opened?","opened?",1096959669),false], null),new cljs.core.Keyword(null,"state","state",-1988618099),"info"], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__14386__auto__;
}catch (e14650){var e = e14650;
throw e;
}}):(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"Dani",new cljs.core.Keyword(null,"birth-date","birth-date",-749581010),"2000-10-01",new cljs.core.Keyword(null,"gender","gender",-733930727),"Feminino",new cljs.core.Keyword(null,"height","height",1025178622),(166)], null)], null)], null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"actions-menu","actions-menu",-124297398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opened?","opened?",1096959669),false], null),new cljs.core.Keyword(null,"drawer-menu","drawer-menu",266025613),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opened?","opened?",1096959669),false], null),new cljs.core.Keyword(null,"state","state",-1988618099),"info"], null)], null);
})));
re_frame.core.clear_subscription_cache_BANG_.call(null);

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.main","init-app-state","react-med.main/init-app-state",1938955791)], null));

react_med.main.mount_app_element.call(null);
react_med.main.on_reload = (function react_med$main$on_reload(){
return react_med.main.mount_app_element.call(null);
});

//# sourceMappingURL=main.js.map
