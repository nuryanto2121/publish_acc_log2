(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d208107"],{a2cc:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",[r("b-row",{directives:[{name:"show",rawName:"v-show",value:e.prop.cVisible,expression:"prop.cVisible"}]},[r("b-col",{staticClass:"lbl-col-align",attrs:{md:e.prop.cLabelSize}},[r("label",{directives:[{name:"show",rawName:"v-show",value:"new"==e.inputStatus||"edit"==e.inputStatus,expression:"inputStatus=='new' || inputStatus=='edit'"}],staticClass:"text-field-form"},[e.isRequired?r("span",{staticStyle:{color:"red"}},[e._v("*")]):e._e(),e._v(" "+e._s(e.prop.cLabel)+" : ")]),r("label",{directives:[{name:"show",rawName:"v-show",value:"view"==e.inputStatus,expression:"inputStatus=='view'"}],staticClass:"lbl-view-form"},[e.isRequired?r("span",{staticStyle:{color:"red"}},[e._v("*")]):e._e(),e._v(" "+e._s(e.prop.cLabel)+" : ")])]),r("b-col",[r("b-form-textarea",{directives:[{name:"show",rawName:"v-show",value:"view"!==e.inputStatus,expression:"inputStatus!=='view'"},{name:"validate",rawName:"v-validate",value:e.prop.cValidate,expression:"prop.cValidate"}],ref:e.prop.cName,staticClass:"text-field-form",class:{input:!0,"error-text-field":e.errors.has(e.prop.cParentForm+"."+e.prop.cName)},style:e.style,attrs:{name:e.prop.cName,"data-vv-as":e.prop.cLabel,maxlength:e.size,tabindex:e.prop.cOrder,disabled:"edit"==e.inputStatus&&e.prop.cKey||e.prop.cProtect,id:e.prop.cName,"no-resize":e.prop.cResize,rows:e.prop.cRows,"max-rows":e.prop.cMaxRows,readonly:e.prop.cReadonly,size:e.prop.cSize},on:{input:e.handleInput},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has(e.prop.cParentForm+"."+e.prop.cName),expression:"errors.has(prop.cParentForm+'.'+prop.cName)"}],staticClass:"error-span"},[e._v(e._s(e.errors.first(e.prop.cParentForm+"."+e.prop.cName))+" ")]),r("label",{directives:[{name:"show",rawName:"v-show",value:"view"==e.inputStatus,expression:"inputStatus=='view'"}],staticClass:"lbl-value-view-form notranslate"},[e._v(e._s(e.value))])],1)],1)],1)},s=[],a=(r("28a5"),r("c5f6"),r("56d7"),{props:{prop:{cValidate:String,cName:String,cLabel:String,cLabelSize:String,cOrder:Number,cKey:Boolean,cDefault:String,cProtect:Boolean,cVisible:Boolean,cResize:Boolean,cReadonly:Boolean,cRows:Number,cMaxRows:Number,cSize:String,cPageLevel:String,cTabIndex:String,cParentForm:String},value:String},data:function(){return{size:0,isRequired:!1,style:{}}},computed:{inputStatus:function(){var e=this;return this.$validator.pause(),this.$nextTick((function(){e.$validator.errors.clear(e.prop.cParentForm),e.$validator.resume()})),this.$store.getters.getLevel==this.prop.cPageLevel&&this.$store.getters.getTab==this.prop.cTabIndex?this.$store.getters.getStatus:"view"}},methods:{handleInput:function(){this.$emit("input",this.value)},focus:function(){var e=this;this.$nextTick().then((function(){return document.getElementById(e.prop.cName).focus()}))}},watch:{},created:function(){if(this.prop.cLabelSize=this.prop.cLabelSize?this.prop.cLabelSize:4,this.prop.cSize=this.prop.cSize?this.prop.cSize:"md",this.prop.cProtect=!!this.prop.cProtect&&this.prop.cProtect,this.prop.cResize=!!this.prop.cResize&&this.prop.cResize,this.prop.cReadonly=!!this.prop.cReadonly&&this.prop.cReadonly,this.prop.cVisible=void 0===this.prop.cVisible||this.prop.cVisible,this.value=this.prop.cDefault?this.prop.cDefault:"",this.prop.cRows=this.prop.cRows?this.prop.cRows:3,this.prop.cMaxRows=this.prop.cMaxRows?this.prop.cMaxRows:this.prop.cRows,void 0!==this.prop.cValidate&&null!==this.prop.cValidate&&""!==this.prop.cValidate)for(var e=this.prop.cValidate.split("|"),t=0;t<e.length;t++){var r=e[t].split(":");"required"==r[0]&&(this.isRequired=!0)}},mounted:function(){},beforeDestroy:function(){},updated:function(){}}),o=a,p=r("2877"),c=Object(p["a"])(o,i,s,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d208107.4469fc3a.js.map