(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a40e6"],{"058c":function(t,o,i){"use strict";i.r(o);var n=function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("div",{staticClass:"card"},[i("div",{staticClass:"card__title",staticStyle:{"border-bottom-style":"unset !important"}},[i("b-row",[i("b-col",{attrs:{cols:"12"}},[i("span",[t._v("Open Booking")])]),i("b-col",{staticStyle:{"text-align":"right"},attrs:{cols:"12"}},[i("span",[i("ABSButton",{attrs:{text:"Create Booking",classButton:"button button--back",classIcon:"icon-style-1",disabled:null==t.ButtonStatus||!t.ButtonStatus.btnAddCreateConsole},on:{click:t.onCreateBooking}})],1),i("span",[i("ABSButton",{attrs:{text:"View All",classButton:"button button--back",classIcon:"icon-style-1"},on:{click:t.onViewAll}})],1)])],1)],1),i("div",{staticClass:"card__body"},[i("b-row",[i("b-col",{attrs:{md:"11"}},[i("b-row",t._l(t.OpenBooking,(function(o,n){return i("b-col",{key:n,staticStyle:{"margin-bottom":"5px",cursor:"pointer"},attrs:{md:"2"},on:{click:function(i){return t.onBookingClick(o)}}},[i("div",[i("div",{staticClass:"CardTag-Title",staticStyle:{height:"50px","font-size":"13px !important"}},[t._v(t._s(o.from_to))]),i("div",{staticClass:"CardTag-Descs"},[i("div",{staticStyle:{"margin-bottom":"5px",heigth:"10px",height:"18px","overflow-y":"hidden"}},[i("span",{staticStyle:{color:"#333399","font-weight":"bold"}},[t._v(t._s(o.customer))])]),i("div",{staticStyle:{"margin-bottom":"5px"}},[i("span",{staticStyle:{color:"#7f8186"}},[t._v(t._s("LTL"!==o.category?o.category+" | "+o.fleet_type:o.category))])]),i("div",{staticStyle:{"margin-bottom":"5px"}},[i("span",{staticStyle:{color:"#7f8186"}},[t._v(t._s(o.status))])])])])])})),1)],1),i("b-col",{staticStyle:{"border-left":"solid 1px rgb(127, 129, 134)"},attrs:{md:"1"}},[i("div",{staticClass:"CardTag-Title",staticStyle:{"border-radius":"10px !important","padding-top":"20px !important","padding-bottom":"14px !important",cursor:"pointer"},on:{click:t.IncomingClick}},[i("span",[t._v(" Incoming Booking")]),i("br"),t._v(" "),i("br"),i("span",{staticStyle:{"font-size":"15px"}},[t._v(" "+t._s(t.IncomingBookingCount)+" ")])])])],1)],1)])},s=[],e={data:function(){return{OpenBooking:[],IncomingBookingCount:0}},computed:{ButtonStatus:function(){return this.$store.getters.getButtonStatus}},methods:{onBookingClick:function(t){var o=t;o.isView=!0,this.$store.commit("setParamPage",o),this.$router.push({name:"OP_ViewBookingEntry"})},onCreateBooking:function(){var t={isEdit:!1};this.$store.commit("setParamPage",t),this.$router.push({name:"OP_AddBookingEntry"})},onViewAll:function(){this.$router.push({name:"OP_BookingEntry"})},IncomingClick:function(){this.$router.push({name:"OP_IncomingBooking"})},doGetList:function(){var t=this,o={option_url:"/OP/OP_Dashboard",line_no:2,user_id:this.getDataUser().user_id,portfolio_id:this.getDataUser().portfolio_id,subportfolio_id:this.getDataUser().subportfolio_id,current_page:1,per_page:6,param_where:"",initial_where:"ss_portfolio_id='"+this.getDataUser().portfolio_id+"'",sort_field:"",source_field:"",param_view:""};this.postJSON(this.getUrlList(),o).then((function(o){if(null!=o){var i=o.Data;t.OpenBooking=i}}))},GetIncomingBookingCount:function(){var t=this,o={option_function_cd:"GetSumIncomingBooking",module_cd:"OP",ss_portfolio_id:this.getDataUser().portfolio_id,user_id:this.getDataUser().user_id};this.CallFunction(o).then((function(o){if(null!=o){var i=o.Data[0];t.IncomingBookingCount=i.fop_sum_incoming_booking&&""!==i.fop_sum_incoming_booking?i.fop_sum_incoming_booking:0}}))}},mounted:function(){this.doGetList(),this.GetIncomingBookingCount()}},a=e,r=i("2877"),c=Object(r["a"])(a,n,s,!1,null,null,null);o["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0a40e6.b2483386.js.map