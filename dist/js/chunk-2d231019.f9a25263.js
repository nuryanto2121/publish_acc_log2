(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d231019"],{ef68:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card",staticStyle:{height:"95%"}},[a("div",{staticClass:"card__title"},[a("b-row",[a("b-col",{staticStyle:{"max-width":"fit-content !important"}},[a("span",[e._v("Open Bidding")])]),a("b-col",{staticStyle:{"text-align":"right"}},[a("span",[a("ABSButton",{attrs:{text:"View All",classButton:"button button--new",classIcon:"icon-style-1",disabled:!1},on:{click:e.doViewAll}})],1)])],1)],1),a("div",{staticClass:"card__body"},[a("b-table",{staticClass:"table-sm table-style-3",attrs:{responsive:!0,striped:!1,bordered:!0,outlined:!1,small:!1,hover:!1,dark:!1,fixed:!1,"foot-clone":!1,fields:e.Bidding.Header,items:e.Bidding.Data},on:{"row-clicked":e.doViewClick},scopedSlots:e._u([{key:"cell(order_date)",fn:function(t){return[e._v(e._s(e.momentDateFormat2(t.item.order_date,"DD/MM/YYYY HH:mm","DD/MM/YYYY")))]}},{key:"cell(wish_price)",fn:function(t){return[e._v(e._s(e.isCurrency(t.item.wish_price,e.decimal)))]}}])})],1)])},s=[],l={data:function(){return{Bidding:{Header:[{key:"no",label:"No",thClass:"HeaderTable",tdClass:"ContentTable__Center"},{key:"from_to",label:"From - To",thClass:"HeaderTable",tdClass:"ContentTable__Center"},{key:"pick_up_date",label:"Pick Up Date",thClass:"HeaderTable",tdClass:"ContentTable"},{key:"customer",label:"Customer",thClass:"HeaderTable",tdClass:"ContentTable__Center"},{key:"category",label:"Category",thClass:"HeaderTable",tdClass:"ContentTable__Center"},{key:"wish_price",label:"Wish Price",thClass:"HeaderTable",tdClass:"ContentTable__Center"}],Data:[]}}},methods:{doViewClick:function(e,t){var a=e;this.$store.commit("setParamPage",a),this.$router.push({name:"MK_OpenOrderView"})},doViewAll:function(){this.$router.push({name:"MK_OpenOrder"})},getListBiding:function(){var e=this,t={option_url:"/MK/MK_OpenOrder",line_no:0,user_id:this.getDataUser().user_id,portfolio_id:this.getDataUser().portfolio_id,subportfolio_id:this.getDataUser().subportfolio_id,current_page:1,per_page:8,param_where:"",initial_where:"",sort_field:"",source_field:"",param_view:""};this.postJSON(this.getUrlList(),t).then((function(t){e.Bidding.Data=t.Data}))}},mounted:function(){this.getListBiding()}},n=l,r=a("2877"),o=Object(r["a"])(n,i,s,!1,null,null,null);t["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d231019.f9a25263.js.map