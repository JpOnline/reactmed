// Compiled by ClojureScript 1.10.520 {}
goog.provide('react_med.routes');
goog.require('cljs.core');
goog.require('bidi.bidi');
goog.require('pushy.core');
goog.require('day8.re_frame.tracing');
goog.require('react_med.shell_components');
goog.require('react_med.screens.patient_info.core');
goog.require('react_med.util');
goog.require('react_med.screens.paciente_avaliacao');
goog.require('re_frame.core');
react_med.routes.routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 2, ["",new cljs.core.Keyword(null,"home","home",-74557309),"about",new cljs.core.Keyword(null,"about","about",1423892543)], null)], null);
react_med.routes.parse_url = (function react_med$routes$parse_url(url){
return bidi.bidi.match_route.call(null,react_med.routes.routes,url);
});
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.routes.set_route = (function react_med$routes$set_route(app_state,p__14682){
var vec__14683 = p__14682;
var _ = cljs.core.nth.call(null,vec__14683,(0),null);
var ui_route = cljs.core.nth.call(null,vec__14683,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Symbol(null,"ui-route","ui-route",1828352800,null)));

var opts__14391__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__14392__auto__ = cljs.core.assoc_in.call(null,(function (){var opts__14391__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14392__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14392__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14392__auto__;
})(),(function (){var opts__14391__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14392__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14392__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14392__auto__;
})(),(function (){var opts__14391__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14392__auto__ = ui_route;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14392__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"ui-route","ui-route",1828352800,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14392__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14392__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Symbol(null,"ui-route","ui-route",1828352800,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__14392__auto__;
}catch (e14686){var e = e14686;
throw e;
}});
} else {
react_med.routes.set_route = (function react_med$routes$set_route(app_state,p__14687){
var vec__14688 = p__14687;
var _ = cljs.core.nth.call(null,vec__14688,(0),null);
var ui_route = cljs.core.nth.call(null,vec__14688,(1),null);
return cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),ui_route);
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.routes","set-route","react-med.routes/set-route",-701732541),react_med.routes.set_route);
react_med.routes.dispatch_route = (function react_med$routes$dispatch_route(matched_route){
var ui_state = new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(matched_route);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","set-state","react-med.routes/set-state",-1870839305),ui_state], null));
});
react_med.routes.history = pushy.core.pushy.call(null,react_med.routes.dispatch_route,react_med.routes.parse_url);
react_med.routes.start_BANG_ = (function react_med$routes$start_BANG_(){
return pushy.core.start_BANG_.call(null,react_med.routes.history);
});
react_med.routes.url_for = cljs.core.partial.call(null,bidi.bidi.path_for,react_med.routes.routes);
react_med.routes.state_machine = new cljs.core.PersistentArrayMap(null, 5, [null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",-1875481434),"info"], null),"info",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edit","edit",-1641834166),"info/edit"], null),"info/edit",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ok","ok",967785236),"info",new cljs.core.Keyword(null,"cancel","cancel",-1964088360),"info"], null),"avaliacao/<id>",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"back","back",-417520012),"info",new cljs.core.Keyword(null,"edit","edit",-1641834166),"avaliacao/<id>/edit"], null),"avaliacao/<id>/edit",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ok","ok",967785236),"avaliacao/<id>",new cljs.core.Keyword(null,"cancel","cancel",-1964088360),"avaliacao/<id>"], null)], null);
react_med.routes.current__GT_next_state = (function react_med$routes$current__GT_next_state(state_machine,current_state,transition){
return cljs.core.get_in.call(null,state_machine,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_state,transition], null));
});
react_med.routes.next_state_handler = (function react_med$routes$next_state_handler(db,p__14691){
var vec__14692 = p__14691;
var event = cljs.core.nth.call(null,vec__14692,(0),null);
var temp__5733__auto__ = react_med.routes.current__GT_next_state.call(null,react_med.routes.state_machine,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null)),event);
if(cljs.core.truth_(temp__5733__auto__)){
var new_state = temp__5733__auto__;
cljs.core.println.call(null,"new-state",new_state);

return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new_state);
} else {
return db;
}
});
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.routes.next_state = (function react_med$routes$next_state(db,event){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"next-state-handler","next-state-handler",-503541646,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"event","event",1941966969,null)));

var opts__14391__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__14392__auto__ = react_med.routes.next_state_handler.call(null,(function (){var opts__14391__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14392__auto__ = db;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14392__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14392__auto__;
})(),(function (){var opts__14391__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14392__auto__ = event;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14392__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"event","event",1941966969,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14392__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14392__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"next-state-handler","next-state-handler",-503541646,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__14392__auto__;
}catch (e14695){var e = e14695;
throw e;
}});
} else {
react_med.routes.next_state = (function react_med$routes$next_state(db,event){
return react_med.routes.next_state_handler.call(null,db,event);
});
}
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.routes.backup_domain = (function react_med$routes$backup_domain(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"domain-snapshot","domain-snapshot",-1672358085,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"domain","domain",1847214937))], null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"backup","backup",26347393)], null),new cljs.core.Symbol(null,"domain-snapshot","domain-snapshot",-1672358085,null))));

var opts__14391__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__14392__auto__ = (function (){var domain_snapshot = (function (){var opts__14391__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14392__auto__ = cljs.core.get.call(null,(function (){var opts__14391__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__14392__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14392__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14392__auto__;
})(),new cljs.core.Keyword(null,"domain","domain",1847214937));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14392__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"domain","domain",1847214937)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__14392__auto__;
})();
var opts__14391__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14392__auto__ = cljs.core.assoc_in.call(null,(function (){var opts__14391__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__14392__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14392__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__14392__auto__;
})(),(function (){var opts__14391__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__14392__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"backup","backup",26347393)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14392__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"backup","backup",26347393)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__14392__auto__;
})(),(function (){var opts__14391__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__14392__auto__ = domain_snapshot;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14392__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"domain-snapshot","domain-snapshot",-1672358085,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__14392__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14392__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"backup","backup",26347393)], null),new cljs.core.Symbol(null,"domain-snapshot","domain-snapshot",-1672358085,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14392__auto__;
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14392__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"domain-snapshot","domain-snapshot",-1672358085,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"domain","domain",1847214937))], null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"backup","backup",26347393)], null),new cljs.core.Symbol(null,"domain-snapshot","domain-snapshot",-1672358085,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__14392__auto__;
}catch (e14696){var e = e14696;
throw e;
}});
} else {
react_med.routes.backup_domain = (function react_med$routes$backup_domain(app_state){
var domain_snapshot = cljs.core.get.call(null,app_state,new cljs.core.Keyword(null,"domain","domain",1847214937));
return cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"backup","backup",26347393)], null),domain_snapshot);
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.routes","backup-domain","react-med.routes/backup-domain",-1000428949),react_med.routes.backup_domain);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.routes.restore_domain = (function react_med$routes$restore_domain(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"old-domain","old-domain",-177558496,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"backup","backup",26347393)], null))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Symbol(null,"old-domain","old-domain",-177558496,null)),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"backup","backup",26347393))),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)));

var opts__14391__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__14392__auto__ = (function (){var temp__5733__auto__ = (function (){var opts__14391__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14392__auto__ = cljs.core.get_in.call(null,(function (){var opts__14391__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__14392__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14392__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14392__auto__;
})(),(function (){var opts__14391__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__14392__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"backup","backup",26347393)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14392__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"backup","backup",26347393)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14392__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14392__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"backup","backup",26347393)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__14392__auto__;
})();
if(cljs.core.truth_(temp__5733__auto__)){
var old_domain = temp__5733__auto__;
return debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,cljs.core.assoc.call(null,debux.common.util.spy_first.call(null,app_state,new cljs.core.Symbol(null,"app-state","app-state",130568249,null),(3)),new cljs.core.Keyword(null,"domain","domain",1847214937),(function (){var opts__14391__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14392__auto__ = old_domain;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14392__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"old-domain","old-domain",-177558496,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__14392__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Symbol(null,"old-domain","old-domain",-177558496,null)),(2)),(function (){var opts__14391__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14392__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14392__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__14392__auto__;
})(),(function (){var opts__14391__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14392__auto__ = cljs.core.dissoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14392__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__14392__auto__;
})(),new cljs.core.Keyword(null,"backup","backup",26347393)),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"backup","backup",26347393)),(1));
} else {
var opts__14391__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14392__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14392__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14392__auto__;
}
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14392__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"old-domain","old-domain",-177558496,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"backup","backup",26347393)], null))], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"backup","backup",26347393))),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__14392__auto__;
}catch (e14697){var e = e14697;
throw e;
}});
} else {
react_med.routes.restore_domain = (function react_med$routes$restore_domain(app_state){
var temp__5733__auto__ = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"backup","backup",26347393)], null));
if(cljs.core.truth_(temp__5733__auto__)){
var old_domain = temp__5733__auto__;
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,app_state,new cljs.core.Keyword(null,"domain","domain",1847214937),old_domain),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"backup","backup",26347393));
} else {
return app_state;
}
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.routes","restore-domain","react-med.routes/restore-domain",1200856465),react_med.routes.restore_domain);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.routes.discard_backup = (function react_med$routes$discard_backup(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"backup","backup",26347393)));

var opts__14391__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__14392__auto__ = cljs.core.update_in.call(null,(function (){var opts__14391__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14392__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14392__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14392__auto__;
})(),(function (){var opts__14391__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14392__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14392__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14392__auto__;
})(),(function (){var opts__14391__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14392__auto__ = cljs.core.dissoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14392__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14392__auto__;
})(),new cljs.core.Keyword(null,"backup","backup",26347393));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14392__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"backup","backup",26347393)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__14392__auto__;
}catch (e14698){var e = e14698;
throw e;
}});
} else {
react_med.routes.discard_backup = (function react_med$routes$discard_backup(app_state){
return cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"backup","backup",26347393));
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.routes","discard-backup","react-med.routes/discard-backup",-1883862736),react_med.routes.discard_backup);
react_med.routes.next_state_then = (function react_med$routes$next_state_then(events){
return (function (p__14699,p__14700){
var map__14701 = p__14699;
var map__14701__$1 = (((((!((map__14701 == null))))?(((((map__14701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14701):map__14701);
var app_state = cljs.core.get.call(null,map__14701__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__14702 = p__14700;
var event = cljs.core.nth.call(null,vec__14702,(0),null);
var _ = cljs.core.nth.call(null,vec__14702,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),react_med.routes.next_state_handler.call(null,app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event], null)),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),events], null);
});
});
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"edit","edit",-1641834166),react_med.routes.next_state_then.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","backup-domain","react-med.routes/backup-domain",-1000428949)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.shell-components","close-actions-menu","react-med.shell-components/close-actions-menu",-628250487)], null)], null)));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"cancel","cancel",-1964088360),react_med.routes.next_state_then.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","restore-domain","react-med.routes/restore-domain",1200856465)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.shell-components","close-actions-menu","react-med.shell-components/close-actions-menu",-628250487)], null)], null)));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),react_med.routes.next_state_then.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","discard-backup","react-med.routes/discard-backup",-1883862736)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.shell-components","close-actions-menu","react-med.shell-components/close-actions-menu",-628250487)], null)], null)));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"back","back",-417520012),react_med.routes.next_state_then.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","restore-domain","react-med.routes/restore-domain",1200856465)], null)], null)));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("react-med.routes","state","react-med.routes/state",1226363239),(function (app_state){
return cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null));
}));
react_med.routes.selected_view = (function react_med$routes$selected_view(){
var G__14706 = react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","state","react-med.routes/state",1226363239)], null));
switch (G__14706) {
case "info":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.patient_info.core.patient_info], null);

break;
case "info/edit":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.patient_info.core.editing_patient_info], null);

break;
case "avaliacao/<id>":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_avaliacao.detail_view], null);

break;
case "avaliacao/<id>/edit":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_avaliacao.editing_view], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.patient_info.core.patient_info], null);

}
});

//# sourceMappingURL=routes.js.map
