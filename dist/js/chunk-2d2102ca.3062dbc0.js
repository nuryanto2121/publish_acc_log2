(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2102ca"],{b787:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card",staticStyle:{height:"95%"}},[r("div",{staticClass:"card__title"},[r("b-row",[r("b-col",{staticStyle:{"max-width":"fit-content !important"}},[r("span",[t._v("Order")])]),r("b-col",{staticStyle:{"text-align":"right"}},[r("b-badge",{staticStyle:{cursor:"pointer"},attrs:{variant:"warning"}},[t._v(t._s(t.Order.pending))]),r("span",{staticStyle:{color:"#7f8084","font-weight":"normal","margin-left":"5px",cursor:"pointer"}},[t._v("Pending")]),t._v("  \n                "),r("b-badge",{staticStyle:{cursor:"pointer"},attrs:{variant:"success"}},[t._v(t._s(t.Order.progress))]),r("span",{staticStyle:{color:"#7f8084","font-weight":"normal","margin-left":"5px",cursor:"pointer"}},[t._v("On Progress")]),t._v("  \n                "),r("b-badge",{staticStyle:{cursor:"pointer"},attrs:{variant:"danger"}},[t._v(t._s(t.Order.issue))]),r("span",{staticStyle:{color:"#7f8084","font-weight":"normal","margin-left":"5px",cursor:"pointer"}},[t._v("Issue")]),t._v("  \n\n                "),r("span",[r("ABSButton",{attrs:{text:"View All",classButton:"button button--new",classIcon:"icon-style-1",disabled:!1},on:{click:t.doViewAllOrder}})],1)],1)],1)],1),r("div",{staticClass:"card__body"},[r("b-table",{staticClass:"table-sm table-style-3",attrs:{responsive:!0,striped:!1,bordered:!0,outlined:!1,small:!1,hover:!1,dark:!1,fixed:!1,"foot-clone":!1,fields:t.Order.Header,items:t.Order.Data},on:{"row-clicked":t.doViewClick},scopedSlots:t._u([{key:"cell(no)",fn:function(e){return[t._v(t._s(e.index+1))]}},{key:"cell(customer_status)",fn:function(e){return[r("b-badge",{staticStyle:{height:"12px !important",width:"12px !important","font-size":"10px !important",padding:"1px 3px !important"},attrs:{variant:"warning"}},[t._v(t._s(e.item.pending))]),t._v(" \n            "),r("b-badge",{staticStyle:{height:"12px !important",width:"12px !important","font-size":"10px !important",padding:"1px 3px !important"},attrs:{variant:"success"}},[t._v(t._s(e.item.progress))]),t._v(" \n            "),r("b-badge",{staticStyle:{height:"12px !important",width:"12px !important","font-size":"10px !important",padding:"1px 3px !important"},attrs:{variant:"danger"}},[t._v(t._s(e.item.issue))])]}}])})],1)])},i=[],s={data:function(){return{Order:{Header:[{key:"no",label:"No",thClass:"HeaderTable",tdClass:"ContentTable__Center"},{key:"customer_name",label:"Customer",thClass:"HeaderTable",tdClass:"ContentTable"},{key:"customer_status",label:"Status",thClass:"HeaderTable",tdClass:"ContentTable__Center"}],Data:[],pending:0,progress:0,issue:0}}},methods:{doViewClick:function(t,e){var r=t;this.$store.commit("setParamPage",r),this.$router.push({name:"MK_ViewOrder"})},doViewAllOrder:function(){var t="MK_ListOrder";if(t&&""!=t&&void 0!=t){var e={isEdit:!1};this.$router.push({name:t,params:e})}},getListOrder:function(){var t=this,e={option_url:"/MK/MK_Order",line_no:0,user_id:this.getDataUser().user_id,portfolio_id:this.getDataUser().portfolio_id,subportfolio_id:this.getDataUser().subportfolio_id,current_page:1,per_page:8,param_where:"",initial_where:"user_id='"+this.getDataUser().user_id+"'",sort_field:"",source_field:"",param_view:""};this.postJSON(this.getUrlList(),e).then((function(e){t.Order.Data=e.Data,t.Order.pending=e.Data.map((function(t){return t.pending})).reduce((function(t,e){return t+e}),0),t.Order.progress=e.Data.map((function(t){return t.progress})).reduce((function(t,e){return t+e}),0),t.Order.issue=e.Data.map((function(t){return t.issue})).reduce((function(t,e){return t+e}),0)}))}},mounted:function(){this.getListOrder()}},n=s,o=r("2877"),d=Object(o["a"])(n,a,i,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d2102ca.3062dbc0.js.map