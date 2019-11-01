// Compiled by ClojureScript 1.10.520 {}
goog.provide('react_med.routes');
goog.require('cljs.core');
goog.require('bidi.bidi');
goog.require('pushy.core');
goog.require('day8.re_frame.tracing');
goog.require('react_med.shell_components');
goog.require('react_med.screens.patient_info.core');
goog.require('react_med.util');
goog.require('re_frame.core');
react_med.routes.routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 2, ["",new cljs.core.Keyword(null,"home","home",-74557309),"about",new cljs.core.Keyword(null,"about","about",1423892543)], null)], null);
react_med.routes.parse_url = (function react_med$routes$parse_url(url){
return bidi.bidi.match_route.call(null,react_med.routes.routes,url);
});
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
react_med.routes.set_state = (function react_med$routes$set_state(app_state,p__14621){
var vec__14622 = p__14621;
var _ = cljs.core.nth.call(null,vec__14622,(0),null);
var ui_state = cljs.core.nth.call(null,vec__14622,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Symbol(null,"ui-state","ui-state",-2007503418,null)));

var opts__14385__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__14386__auto__ = cljs.core.assoc_in.call(null,(function (){var opts__14385__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14386__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14386__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14386__auto__;
})(),(function (){var opts__14385__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14386__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14386__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14386__auto__;
})(),(function (){var opts__14385__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14386__auto__ = ui_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14386__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"ui-state","ui-state",-2007503418,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14386__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14386__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Symbol(null,"ui-state","ui-state",-2007503418,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__14386__auto__;
}catch (e14625){var e = e14625;
throw e;
}});
} else {
react_med.routes.set_state = (function react_med$routes$set_state(app_state,p__14626){
var vec__14627 = p__14626;
var _ = cljs.core.nth.call(null,vec__14627,(0),null);
var ui_state = cljs.core.nth.call(null,vec__14627,(1),null);
return cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null),ui_state);
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("react-med.routes","set-state","react-med.routes/set-state",-1870839305),react_med.routes.set_state);
react_med.routes.dispatch_route = (function react_med$routes$dispatch_route(matched_route){
var ui_state = new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(matched_route);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","set-state","react-med.routes/set-state",-1870839305),ui_state], null));
});
react_med.routes.history = pushy.core.pushy.call(null,react_med.routes.dispatch_route,react_med.routes.parse_url);
react_med.routes.start_BANG_ = (function react_med$routes$start_BANG_(){
return pushy.core.start_BANG_.call(null,react_med.routes.history);
});
react_med.routes.url_for = cljs.core.partial.call(null,bidi.bidi.path_for,react_med.routes.routes);
react_med.routes.state_machine = new cljs.core.PersistentArrayMap(null, 3, [null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"initial","initial",1854648214)], null),"info",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edit","edit",-1641834166),"info/edit"], null),"info/edit",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ok","ok",967785236),"info",new cljs.core.Keyword(null,"cancel","cancel",-1964088360),"info"], null)], null);
react_med.routes.current__GT_next_state = (function react_med$routes$current__GT_next_state(state_machine,current_state,transition){
return cljs.core.get_in.call(null,state_machine,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_state,transition], null));
});
react_med.routes.next_state_handler = (function react_med$routes$next_state_handler(db,p__14630){
var vec__14631 = p__14630;
var event = cljs.core.nth.call(null,vec__14631,(0),null);
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

var opts__14385__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__14386__auto__ = react_med.routes.next_state_handler.call(null,(function (){var opts__14385__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14386__auto__ = db;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14386__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14386__auto__;
})(),(function (){var opts__14385__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__14386__auto__ = event;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14386__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"event","event",1941966969,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__14386__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__14386__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"next-state-handler","next-state-handler",-503541646,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"event","event",1941966969,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__14386__auto__;
}catch (e14634){var e = e14634;
throw e;
}});
} else {
react_med.routes.next_state = (function react_med$routes$next_state(db,event){
return react_med.routes.next_state_handler.call(null,db,event);
});
}
react_med.routes.next_state_then = (function react_med$routes$next_state_then(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14643 = arguments.length;
var i__4731__auto___14644 = (0);
while(true){
if((i__4731__auto___14644 < len__4730__auto___14643)){
args__4736__auto__.push((arguments[i__4731__auto___14644]));

var G__14645 = (i__4731__auto___14644 + (1));
i__4731__auto___14644 = G__14645;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return react_med.routes.next_state_then.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

react_med.routes.next_state_then.cljs$core$IFn$_invoke$arity$variadic = (function (events){
return (function (p__14636,p__14637){
var map__14638 = p__14636;
var map__14638__$1 = (((((!((map__14638 == null))))?(((((map__14638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14638):map__14638);
var app_state = cljs.core.get.call(null,map__14638__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__14639 = p__14637;
var event = cljs.core.nth.call(null,vec__14639,(0),null);
var _ = cljs.core.nth.call(null,vec__14639,(1),null);
cljs.core.println.call(null,"next-state-then",react_med.routes.next_state_handler.call(null,app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event], null)));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),react_med.routes.next_state_handler.call(null,app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event], null)),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),events], null);
});
});

react_med.routes.next_state_then.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
react_med.routes.next_state_then.cljs$lang$applyTo = (function (seq14635){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14635));
});

re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"cancel","cancel",-1964088360),react_med.routes.next_state_then.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.shell-components","close-actions-menu","react-med.shell-components/close-actions-menu",-628250487)], null)));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"edit","edit",-1641834166),react_med.routes.next_state_then.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.shell-components","close-actions-menu","react-med.shell-components/close-actions-menu",-628250487)], null)));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),react_med.routes.next_state_then.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.shell-components","close-actions-menu","react-med.shell-components/close-actions-menu",-628250487)], null)));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("react-med.routes","state","react-med.routes/state",1226363239),(function (app_state){
return cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"state","state",-1988618099)], null));
}));
react_med.routes.selected_view = (function react_med$routes$selected_view(){
var G__14646 = react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","state","react-med.routes/state",1226363239)], null));
switch (G__14646) {
case "info":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.patient_info.core.patient_info], null);

break;
case "info/edit":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.patient_info.core.editing_patient_info], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.patient_info.core.patient_info], null);

}
});

//# sourceMappingURL=routes.js.map
