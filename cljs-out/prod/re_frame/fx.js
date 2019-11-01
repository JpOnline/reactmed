// Compiled by ClojureScript 1.10.520 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__13592 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__13593 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__13593;

try{try{var seq__13594 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__13595 = null;
var count__13596 = (0);
var i__13597 = (0);
while(true){
if((i__13597 < count__13596)){
var vec__13604 = cljs.core._nth.call(null,chunk__13595,i__13597);
var effect_key = cljs.core.nth.call(null,vec__13604,(0),null);
var effect_value = cljs.core.nth.call(null,vec__13604,(1),null);
var temp__5733__auto___13626 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___13626)){
var effect_fn_13627 = temp__5733__auto___13626;
effect_fn_13627.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__13628 = seq__13594;
var G__13629 = chunk__13595;
var G__13630 = count__13596;
var G__13631 = (i__13597 + (1));
seq__13594 = G__13628;
chunk__13595 = G__13629;
count__13596 = G__13630;
i__13597 = G__13631;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__13594);
if(temp__5735__auto__){
var seq__13594__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13594__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__13594__$1);
var G__13632 = cljs.core.chunk_rest.call(null,seq__13594__$1);
var G__13633 = c__4550__auto__;
var G__13634 = cljs.core.count.call(null,c__4550__auto__);
var G__13635 = (0);
seq__13594 = G__13632;
chunk__13595 = G__13633;
count__13596 = G__13634;
i__13597 = G__13635;
continue;
} else {
var vec__13607 = cljs.core.first.call(null,seq__13594__$1);
var effect_key = cljs.core.nth.call(null,vec__13607,(0),null);
var effect_value = cljs.core.nth.call(null,vec__13607,(1),null);
var temp__5733__auto___13636 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___13636)){
var effect_fn_13637 = temp__5733__auto___13636;
effect_fn_13637.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__13638 = cljs.core.next.call(null,seq__13594__$1);
var G__13639 = null;
var G__13640 = (0);
var G__13641 = (0);
seq__13594 = G__13638;
chunk__13595 = G__13639;
count__13596 = G__13640;
i__13597 = G__13641;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__9329__auto___13642 = re_frame.interop.now.call(null);
var duration__9330__auto___13643 = (end__9329__auto___13642 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__9330__auto___13643,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__9329__auto___13642);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__13592;
}} else {
var seq__13610 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__13611 = null;
var count__13612 = (0);
var i__13613 = (0);
while(true){
if((i__13613 < count__13612)){
var vec__13620 = cljs.core._nth.call(null,chunk__13611,i__13613);
var effect_key = cljs.core.nth.call(null,vec__13620,(0),null);
var effect_value = cljs.core.nth.call(null,vec__13620,(1),null);
var temp__5733__auto___13644 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___13644)){
var effect_fn_13645 = temp__5733__auto___13644;
effect_fn_13645.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__13646 = seq__13610;
var G__13647 = chunk__13611;
var G__13648 = count__13612;
var G__13649 = (i__13613 + (1));
seq__13610 = G__13646;
chunk__13611 = G__13647;
count__13612 = G__13648;
i__13613 = G__13649;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__13610);
if(temp__5735__auto__){
var seq__13610__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13610__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__13610__$1);
var G__13650 = cljs.core.chunk_rest.call(null,seq__13610__$1);
var G__13651 = c__4550__auto__;
var G__13652 = cljs.core.count.call(null,c__4550__auto__);
var G__13653 = (0);
seq__13610 = G__13650;
chunk__13611 = G__13651;
count__13612 = G__13652;
i__13613 = G__13653;
continue;
} else {
var vec__13623 = cljs.core.first.call(null,seq__13610__$1);
var effect_key = cljs.core.nth.call(null,vec__13623,(0),null);
var effect_value = cljs.core.nth.call(null,vec__13623,(1),null);
var temp__5733__auto___13654 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___13654)){
var effect_fn_13655 = temp__5733__auto___13654;
effect_fn_13655.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__13656 = cljs.core.next.call(null,seq__13610__$1);
var G__13657 = null;
var G__13658 = (0);
var G__13659 = (0);
seq__13610 = G__13656;
chunk__13611 = G__13657;
count__13612 = G__13658;
i__13613 = G__13659;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__13660 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__13661 = null;
var count__13662 = (0);
var i__13663 = (0);
while(true){
if((i__13663 < count__13662)){
var map__13668 = cljs.core._nth.call(null,chunk__13661,i__13663);
var map__13668__$1 = (((((!((map__13668 == null))))?(((((map__13668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13668):map__13668);
var effect = map__13668__$1;
var ms = cljs.core.get.call(null,map__13668__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__13668__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__13660,chunk__13661,count__13662,i__13663,map__13668,map__13668__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__13660,chunk__13661,count__13662,i__13663,map__13668,map__13668__$1,effect,ms,dispatch))
,ms);
}


var G__13672 = seq__13660;
var G__13673 = chunk__13661;
var G__13674 = count__13662;
var G__13675 = (i__13663 + (1));
seq__13660 = G__13672;
chunk__13661 = G__13673;
count__13662 = G__13674;
i__13663 = G__13675;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__13660);
if(temp__5735__auto__){
var seq__13660__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13660__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__13660__$1);
var G__13676 = cljs.core.chunk_rest.call(null,seq__13660__$1);
var G__13677 = c__4550__auto__;
var G__13678 = cljs.core.count.call(null,c__4550__auto__);
var G__13679 = (0);
seq__13660 = G__13676;
chunk__13661 = G__13677;
count__13662 = G__13678;
i__13663 = G__13679;
continue;
} else {
var map__13670 = cljs.core.first.call(null,seq__13660__$1);
var map__13670__$1 = (((((!((map__13670 == null))))?(((((map__13670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13670):map__13670);
var effect = map__13670__$1;
var ms = cljs.core.get.call(null,map__13670__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__13670__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__13660,chunk__13661,count__13662,i__13663,map__13670,map__13670__$1,effect,ms,dispatch,seq__13660__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__13660,chunk__13661,count__13662,i__13663,map__13670,map__13670__$1,effect,ms,dispatch,seq__13660__$1,temp__5735__auto__))
,ms);
}


var G__13680 = cljs.core.next.call(null,seq__13660__$1);
var G__13681 = null;
var G__13682 = (0);
var G__13683 = (0);
seq__13660 = G__13680;
chunk__13661 = G__13681;
count__13662 = G__13682;
i__13663 = G__13683;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value);
} else {
var seq__13684 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__13685 = null;
var count__13686 = (0);
var i__13687 = (0);
while(true){
if((i__13687 < count__13686)){
var event = cljs.core._nth.call(null,chunk__13685,i__13687);
re_frame.router.dispatch.call(null,event);


var G__13688 = seq__13684;
var G__13689 = chunk__13685;
var G__13690 = count__13686;
var G__13691 = (i__13687 + (1));
seq__13684 = G__13688;
chunk__13685 = G__13689;
count__13686 = G__13690;
i__13687 = G__13691;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__13684);
if(temp__5735__auto__){
var seq__13684__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13684__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__13684__$1);
var G__13692 = cljs.core.chunk_rest.call(null,seq__13684__$1);
var G__13693 = c__4550__auto__;
var G__13694 = cljs.core.count.call(null,c__4550__auto__);
var G__13695 = (0);
seq__13684 = G__13692;
chunk__13685 = G__13693;
count__13686 = G__13694;
i__13687 = G__13695;
continue;
} else {
var event = cljs.core.first.call(null,seq__13684__$1);
re_frame.router.dispatch.call(null,event);


var G__13696 = cljs.core.next.call(null,seq__13684__$1);
var G__13697 = null;
var G__13698 = (0);
var G__13699 = (0);
seq__13684 = G__13696;
chunk__13685 = G__13697;
count__13686 = G__13698;
i__13687 = G__13699;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__13700 = cljs.core.seq.call(null,value);
var chunk__13701 = null;
var count__13702 = (0);
var i__13703 = (0);
while(true){
if((i__13703 < count__13702)){
var event = cljs.core._nth.call(null,chunk__13701,i__13703);
clear_event.call(null,event);


var G__13704 = seq__13700;
var G__13705 = chunk__13701;
var G__13706 = count__13702;
var G__13707 = (i__13703 + (1));
seq__13700 = G__13704;
chunk__13701 = G__13705;
count__13702 = G__13706;
i__13703 = G__13707;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__13700);
if(temp__5735__auto__){
var seq__13700__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13700__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__13700__$1);
var G__13708 = cljs.core.chunk_rest.call(null,seq__13700__$1);
var G__13709 = c__4550__auto__;
var G__13710 = cljs.core.count.call(null,c__4550__auto__);
var G__13711 = (0);
seq__13700 = G__13708;
chunk__13701 = G__13709;
count__13702 = G__13710;
i__13703 = G__13711;
continue;
} else {
var event = cljs.core.first.call(null,seq__13700__$1);
clear_event.call(null,event);


var G__13712 = cljs.core.next.call(null,seq__13700__$1);
var G__13713 = null;
var G__13714 = (0);
var G__13715 = (0);
seq__13700 = G__13712;
chunk__13701 = G__13713;
count__13702 = G__13714;
i__13703 = G__13715;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
