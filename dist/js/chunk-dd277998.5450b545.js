(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dd277998"],{"52f2":function(t,e,i){"use strict";var o=i("a13f"),n=i.n(o);n.a},a13f:function(t,e,i){},d3ee:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card"},[i("div",{staticClass:"card__title"},[i("b-row",[i("b-col",{staticStyle:{"max-width":"fit-content !important"}},[i("span",[t._v("Ticket")]),t._v("  \n      ")]),i("b-col",{staticStyle:{"text-align":"right"}},[i("span",[i("ABSButton",{attrs:{text:"View All",classButton:"button button--back2",classIcon:"icon-style-1",disabled:!1},on:{click:t.doViewALl}})],1)])],1)],1),i("div",{staticClass:"card__body",staticStyle:{height:"230px"}},[i("div",[i("ACCFormList",{ref:"ref_VendorList",attrs:{prop:t.propList,title:""},on:{rowClicked:t.rowClicked,onRenderData:t.onRenderData}})],1)])])},n=[],a={data:function(){return{search:"",propList:{OptionUrl:"/OP/OP_Dashboard",LineNo:7,initialWhere:"ss_portfolio_id='"+this.getDataUser().portfolio_id+"'",OrderBy:"ticket_no",SourceField:"",ParamView:"",PerPage:6},FilterC:"",FilterS:"",PlanExecution:[]}},computed:{},methods:{doViewALl:function(){this.$router.push({name:"OP_Ticket"})},rowClicked:function(t,e){var i=t;i.isEdit=!0,i.isView=!0,this.$store.commit("setParamPage",i),this.$router.push({name:"OP_TicketForm"})},RenderData:function(){this.$refs.ref_VendorList.doGetList("")}},mounted:function(){this.RenderData()}},r=a,s=(i("52f2"),i("2877")),c=Object(s["a"])(r,o,n,!1,null,"4969e9bc",null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-dd277998.5450b545.js.map