(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01f15bb2"],{"10bd":function(t,e,i){},2479:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card"},[i("div",{staticClass:"card__title"},[i("b-row",[i("b-col",{staticStyle:{"max-width":"max-content !important"}},[i("span",[t._v("Outsource Order")])]),i("b-col",{staticStyle:{"text-align":"right"}},[i("span",[i("ABSButton",{attrs:{text:"View All",classButton:"button button--back",classIcon:"icon-style-1",disabled:!1},on:{click:t.doViewALl}})],1)])],1)],1),i("div",{staticClass:"card__body",staticStyle:{height:"230px"}},[i("div",[i("ACCFormList",{ref:"ref_VendorList",attrs:{prop:t.propList,title:""},on:{rowClicked:t.rowClicked,onRenderData:t.onRenderData}})],1)])])},r=[],n={data:function(){return{search:"",propList:{OptionUrl:"/OP/OP_Dashboard",LineNo:6,initialWhere:"ss_portfolio_id='"+this.getDataUser().portfolio_id+"'",OrderBy:"vendor_name",SourceField:"",ParamView:"",PerPage:6},FilterC:"",FilterS:"",PlanExecution:[]}},computed:{},methods:{doViewALl:function(){this.$router.push({name:"OP_OutsourceVendor"})},rowClicked:function(t,e){var i=t;i.isEdit=!0,i.isView=!0,console.log("doViewClick",i),this.$store.commit("setParamPage",i),this.$router.push({name:"OP_OutsourceVendorDtl"})},RenderData:function(){this.$refs.ref_VendorList.doGetList("")}},mounted:function(){this.RenderData()}},s=n,a=(i("8469"),i("2877")),c=Object(a["a"])(s,o,r,!1,null,"9cf2a23c",null);e["default"]=c.exports},8469:function(t,e,i){"use strict";i("10bd")}}]);
//# sourceMappingURL=chunk-01f15bb2.b7198d56.js.map