(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7720a6bf"],{bf11:function(t,e,i){},d3ee:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card"},[i("div",{staticClass:"card__title"},[i("b-row",[i("b-col",{staticStyle:{"max-width":"max-content !important"}},[i("span",[t._v("Ticket")])]),i("b-col",{staticStyle:{"text-align":"right"}},[i("span",[i("ABSButton",{attrs:{text:"View All",classButton:"button button--back",classIcon:"icon-style-1",disabled:!1},on:{click:t.doViewALl}})],1)])],1)],1),i("div",{staticClass:"card__body",staticStyle:{height:"230px"}},[i("div",[i("ACCFormList",{ref:"ref_VendorList",attrs:{prop:t.propList,title:""},on:{rowClicked:t.rowClicked,onRenderData:t.onRenderData}})],1)])])},a=[],n={data:function(){return{search:"",propList:{OptionUrl:"/OP/OP_Dashboard",LineNo:7,initialWhere:"ss_portfolio_id='"+this.getDataUser().portfolio_id+"'",OrderBy:"",SourceField:"",ParamView:"",PerPage:6},FilterC:"",FilterS:"",PlanExecution:[]}},computed:{},methods:{doViewALl:function(){this.$router.push({name:"OP_Ticket"})},rowClicked:function(t,e){var i=t;i.isEdit=!0,i.isView=!0,this.$store.commit("setParamPage",i),this.$router.push({name:"OP_TicketForm"})},RenderData:function(){this.$refs.ref_VendorList.doGetList("")}},mounted:function(){this.RenderData()}},r=n,s=(i("dcdd"),i("2877")),c=Object(s["a"])(r,o,a,!1,null,"19c8182a",null);e["default"]=c.exports},dcdd:function(t,e,i){"use strict";i("bf11")}}]);
//# sourceMappingURL=chunk-7720a6bf.3de602d2.js.map