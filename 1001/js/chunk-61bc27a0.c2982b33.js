(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61bc27a0"],{"14c4":function(t,e,i){},2479:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card"},[i("div",{staticClass:"card__title"},[i("b-row",[i("b-col",{staticStyle:{"max-width":"fit-content !important"}},[i("span",[t._v("Outsource Order")]),t._v("  \n      ")]),i("b-col",{staticStyle:{"text-align":"right"}},[i("span",[i("ABSButton",{attrs:{text:"View All",classButton:"button button--back2",classIcon:"icon-style-1",disabled:!1},on:{click:t.doViewALl}})],1)])],1)],1),i("div",{staticClass:"card__body",staticStyle:{height:"230px"}},[i("div",[i("ACCFormList",{ref:"ref_VendorList",attrs:{prop:t.propList,title:""},on:{rowClicked:t.rowClicked,onRenderData:t.onRenderData}})],1)])])},r=[],n={data:function(){return{search:"",propList:{OptionUrl:"/OP/OP_Dashboard",LineNo:6,initialWhere:"ss_portfolio_id='"+this.getDataUser().portfolio_id+"'",OrderBy:"vendor_name",SourceField:"",ParamView:"",PerPage:6},FilterC:"",FilterS:"",PlanExecution:[]}},computed:{},methods:{doViewALl:function(){this.$router.push({name:"OP_OutsourceVendor"})},rowClicked:function(t,e){var i=t;i.isEdit=!0,i.isView=!0,console.log("doViewClick",i),this.$store.commit("setParamPage",i),this.$router.push({name:"OP_OutsourceVendorDtl"})},RenderData:function(){this.$refs.ref_VendorList.doGetList("")}},mounted:function(){this.RenderData()}},s=n,a=(i("b9d6"),i("2877")),c=Object(a["a"])(s,o,r,!1,null,"18650426",null);e["default"]=c.exports},b9d6:function(t,e,i){"use strict";var o=i("14c4"),r=i.n(o);r.a}}]);
//# sourceMappingURL=chunk-61bc27a0.c2982b33.js.map