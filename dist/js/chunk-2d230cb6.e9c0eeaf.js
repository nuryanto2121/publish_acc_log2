(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d230cb6"],{ee99:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"card",staticStyle:{height:"95%"}},[o("div",{staticClass:"card__title"},[o("b-row",[o("b-col",[o("span",[t._v("Generate Invoice (Customer)")])]),o("b-col",[o("div",{staticClass:"Plan-Header-Bagde"},[o("span",[t._v(" Total : "+t._s(t.M_TotalCustomerAmt)+" ")])])]),o("b-col",{staticStyle:{"text-align":"right"}},[o("span",[o("ABSButton",{attrs:{text:"Rental Billing",classButton:"button button--back",classIcon:"icon-style-1"},on:{click:t.doRentalBilling}})],1),o("span",[o("ABSButton",{attrs:{text:"Print",classButton:"button button--back",classIcon:"icon-style-1"},on:{click:t.doPrint}})],1),o("span",[o("ABSButton",{attrs:{text:"View All",classButton:"button button--back",classIcon:"icon-style-1"},on:{click:t.onViewAll}})],1)])],1)],1),o("div",{staticClass:"card__body"},[o("div",[o("ACCFormList",{ref:"ref_completed_order_customer",attrs:{prop:t.propList,title:""},on:{rowClicked:t.rowClicked,onRenderData:t.onRenderData},scopedSlots:t._u([{key:"total_order",fn:function(e){return[o("div",{class:"Plan-Dot-Primary",style:"font-size: 10px !important; padding-top: 9px !important;"},[t._v(" "+t._s(e.item.total_order)+" ")])]}},{key:"total_amount",fn:function(e){return[o("span",[t._v(t._s(t.isCurrency(e.item.total_amount,t.decimal)))])]}}])})],1)])])},r=[],a={data:function(){return{M_TotalCustomerAmt:"0",search:"",propList:{OptionUrl:"/ST/ST_CompletedOrderCustomer",LineNo:0,initialWhere:"ss_portfolio_id='"+this.getDataUser().portfolio_id+"'",OrderBy:"customer_name",SourceField:"",ParamView:"",PerPage:8}}},computed:{},methods:{rowClicked:function(t,e){var o=t;this.$store.commit("setParamPage",o),this.$router.push({name:"ST_CompletedOrderCustomerView"})},RenderData:function(){this.$refs.ref_completed_order_customer.doGetList("")},doRentalBilling:function(){this.$router.push({name:"ST_RentalBilling"})},doPrint:function(){this.$router.push({name:"ST_CompletedOrderCustomerPrint"})},onViewAll:function(){this.$router.push({name:"ST_CompletedOrderCustomer"})},onRenderData:function(t){t&&t[0].total_customer_amount&&""!==t[0].total_customer_amount&&(this.M_TotalCustomerAmt=this.isCurrency(t[0].total_customer_amount,this.decimal))}},mounted:function(){this.RenderData()}},s=a,i=o("2877"),l=Object(i["a"])(s,n,r,!1,null,"f524ce3a",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d230cb6.e9c0eeaf.js.map