(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69bedc3b"],{"546c":function(e,t,r){"use strict";r("5dd0")},"5dd0":function(e,t,r){},f090:function(e,t,r){"use strict";r.r(t);var c=r("7a23");const o={class:"dictionary-field-control"},i={class:"dictionary-header"},s={class:"text"},a={key:0,class:"dictionary-contents"},l={key:1,class:"no-properties"};function n(e,t,r,n,p,d){const b=Object(c["y"])("CollapseArrow"),u=Object(c["y"])("DictionaryFieldContents");return Object(c["r"])(),Object(c["f"])("div",o,[Object(c["g"])("div",{class:Object(c["p"])(["dictionary-header-container",{collapsed:e.collapsed}]),onClick:t[0]||(t[0]=t=>e.collapsed=!e.collapsed)},[Object(c["g"])("div",i,[Object(c["i"])(b,{class:"icon",collapsed:e.collapsed},null,8,["collapsed"]),Object(c["g"])("p",s,Object(c["A"])(e._property.toString()),1)]),Object(c["x"])(e.$slots,"default",{},void 0,!0)],2),e.collapsed?Object(c["e"])("",!0):(Object(c["r"])(),Object(c["f"])("div",a,[e.hasEditableProperties?(Object(c["r"])(),Object(c["d"])(u,{key:0,property:e.property,onChange:t[1]||(t[1]=(...t)=>e.$emit("change",...t)),onCreate:t[2]||(t[2]=(...t)=>e.$emit("create",...t)),onDelete:t[3]||(t[3]=(...t)=>e.$emit("delete",...t))},null,8,["property"])):(Object(c["r"])(),Object(c["f"])("p",l,"No visible properties."))]))])}var p=r("1b79"),d=r("69ee"),b=Object(c["k"])({name:"DictionaryField",props:{property:{type:Object,required:!0}},data(){return{collapsed:!0}},computed:{_property(){this.property.trigger.value;return this.property},hasEditableProperties(){var e;for(let t of this._property.value.values())if(null===(e=t.descriptor.is_visible)||void 0===e||e)return!0;return!1}},emits:["change","create","delete"],components:{CollapseArrow:p["a"],DictionaryFieldContents:d["a"]}}),u=(r("546c"),r("6b0d")),y=r.n(u);const j=y()(b,[["render",n],["__scopeId","data-v-a32259d4"]]);t["default"]=j}}]);
//# sourceMappingURL=chunk-69bedc3b.926d2850.js.map