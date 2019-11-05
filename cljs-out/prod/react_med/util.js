// Compiled by ClojureScript 1.10.520 {}
goog.provide('react_med.util');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
react_med.util._LT_sub = cljs.core.comp.call(null,cljs.core.deref,re_frame.core.subscribe);
react_med.util._GT_evt = re_frame.core.dispatch;
react_med.util.primary_color = "#71838e";
react_med.util.secondary_color = "#c9c92d";
/**
 * Wrap component in the create-class fn so the react component-did-mount
 *   hook can be used.
 */
react_med.util.with_mount_fn = (function react_med$util$with_mount_fn(p__13937){
var vec__13938 = p__13937;
var n = cljs.core.nth.call(null,vec__13938,(0),null);
var map__13941 = cljs.core.nth.call(null,vec__13938,(1),null);
var map__13941__$1 = (((((!((map__13941 == null))))?(((((map__13941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13941):map__13941);
var component_did_mount = cljs.core.get.call(null,map__13941__$1,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518));
var to_render = vec__13938;
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (vec__13938,n,map__13941,map__13941__$1,component_did_mount,to_render){
return (function (){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.update_in.call(null,to_render,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518)));
});})(vec__13938,n,map__13941,map__13941__$1,component_did_mount,to_render))
,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),component_did_mount], null));
});

//# sourceMappingURL=util.js.map
