(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22cce3"],{f597:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"dashboard-page-chart"},[e("div",{staticClass:"dashboard-page-chart__body"},[e("b-row",{staticClass:"dashboardBody"},[e("b-col",{attrs:{md:"12"}},[e("div",{staticClass:"card"},[e("div",{staticClass:"card__title"},[e("b-row",[e("b-col",{staticStyle:{"max-width":"max-content !important"}},[e("span",[t._v("View CostType")])]),e("b-col",{staticStyle:{"text-align":"right"}},[e("ABSButton",{attrs:{text:"Back",classButton:"button button--back",classIcon:"icon-style-1"},on:{click:t.doBack}})],1)],1)],1),e("div",{staticClass:"card__body"},[e("b-form",{attrs:{"data-vv-scope":"parent","data-vv-value-path":"parent"}},[e("b-row",[e("b-col",{attrs:{md:"2"}},[e("div",[e("img",{staticStyle:{width:"70px"},attrs:{src:a("c079"),alt:""}})])]),e("b-col",{attrs:{md:"10"}},[e("b-row",{staticClass:"row-view"},[e("b-col",[e("span",[e("label",[t._v("Cost Type")])]),e("br"),e("span",[e("label",[t._v(t._s(t.M_OpCostType.cost_type))])])]),e("b-col",{staticStyle:{"text-align":"right"}},[e("span",[e("ABSButton",{attrs:{text:"Edit",classButton:"btn btn--default",classIcon:"icon-style-1"},on:{click:t.doEdit}})],1)])],1),e("b-row",{staticClass:"row-view"},[e("b-col",[e("span",[e("label",[t._v("Descs")])]),e("br"),e("span",[e("label",[t._v(t._s(t.M_OpCostType.descs))])])])],1),e("b-row",{staticClass:"row-view"},[e("b-col",[e("span",[e("label",[t._v("Cost Acct")])]),e("br"),e("span",[e("label",[t._v(t._s(t.M_OpCostType.cost_acct))])])])],1)],1)],1)],1)],1)])])],1)],1)])},o=[],i=(a("ac6a"),a("456d"),{data:function(){return{M_OpCostType:{op_cost_type_id:0,ss_portfolio_id:0,cost_type:"",descs:"",cost_acct:"",user_input:"",user_edit:"",time_input:"",time_edit:"",row_id:0,lastupdatestamp:0}}},computed:{paramFromList:function(){var t=this.$store.getters.getParamPage;if(null==t||void 0==t)this.doBack();else{if(!(Object.keys(t).length<1))return t;this.doBack()}}},methods:{doBack:function(){this.$router.go(-1)},doEdit:function(){var t=this.paramFromList;t.isView=!1,t.isEdit=!0,this.$store.commit("setParamPage",t),this.$router.push({name:"OP_CostTypeForm",params:t})},doDelete:function(){var t=this;this.alertConfirmation("Are You Sure Want To Delete This Data ?").then((function(s){s.value&&t.M_Delete()}))},M_Delete:function(){var t=this,s={option_url:"/OP/OP_CostType",line_no:0,id:this.paramFromList.row_id,lastupdatestamp:this.paramFromList.lastupdatestamp};this.deleteJSON(this.getUrlCRUD(),s).then((function(s){null!=s&&t.doBack()}))},GetDataBy:function(){var t=this,s={option_url:"/OP/OP_CostType",line_no:0,id:this.paramFromList.row_id,lastupdatestamp:this.paramFromList.lastupdatestamp};this.getJSON(this.getUrlCRUD(),s).then((function(s){if(null!=s){var a=s.Data[0];t.M_OpCostType={op_cost_type_id:a.op_cost_type_id,ss_portfolio_id:a.ss_portfolio_id,cost_type:a.cost_type__tb_1,descs:a.descs__tb_2,cost_acct:a.cost_acct__tb_3,user_input:a.user_input,user_edit:a.user_edit,time_input:a.time_input,time_edit:a.time_edit,row_id:a.row_id,lastupdatestamp:a.lastupdatestamp}}}))}},mounted:function(){this.GetDataBy()},beforeMount:function(){}}),c=i,r=a("2877"),n=Object(r["a"])(c,e,o,!1,null,null,null);s["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d22cce3.45dc022e.js.map