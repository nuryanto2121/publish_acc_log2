(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cc223"],{"4d41":function(t,i,s){"use strict";s.r(i);var o=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"card",staticStyle:{height:"95%"}},[s("div",{staticClass:"card__title"},[s("b-row",[s("b-col",{staticStyle:{"max-width":"max-content !important"}},[s("span",[t._v("Commision")])]),s("b-col",{staticStyle:{"text-align":"right"}},[s("span",[s("ABSButton",{attrs:{text:"View All",classButton:"button button--new",classIcon:"icon-style-1",disabled:!1},on:{click:t.viewAll}})],1)])],1)],1),s("div",{staticClass:"card__body"},[s("b-row",{staticClass:"CommisionData"},[s("b-col",{staticClass:"CommisionIcon",staticStyle:{cursor:"pointer !important"},on:{click:function(i){return t.showCommisionByStatus("P")}}},[s("span",[s("font-awesome-icon",{staticStyle:{color:"#333399","margin-right":"20px"},attrs:{icon:"coins",size:"4x"}})],1)]),s("b-col",{staticStyle:{margin:"auto"}},[s("span",{staticClass:"Commision__TitleBlue"},[t._v("Paid")]),t._v(" "),s("span",{staticClass:"CommisionTitle"},[t._v("(Last 12 Months)")]),s("br"),s("span",{staticClass:"CommisionDescs"},[t._v(t._s("Rp "+t.isCurrency(t.DataComission.paid,t.decimal)))])])],1),s("b-row",{staticClass:"CommisionData"},[s("b-col",{staticClass:"CommisionIcon",staticStyle:{cursor:"pointer !important"},on:{click:function(i){return t.showCommisionByStatus("C")}}},[s("span",[s("font-awesome-icon",{staticStyle:{color:"#cc0000","margin-right":"20px"},attrs:{icon:"exclamation-circle",size:"4x"}})],1)]),s("b-col",{staticStyle:{margin:"auto"}},[s("span",{staticClass:"Commision__TitleRed"},[t._v("Overdue")]),t._v(" "),s("span",{staticClass:"CommisionTitle"}),s("br"),s("span",{staticClass:"CommisionDescs"},[t._v(t._s("Rp "+t.isCurrency(t.DataComission.overdue,t.decimal)))])])],1),s("b-row",{staticClass:"CommisionData"},[s("b-col",{staticClass:"CommisionIcon",staticStyle:{cursor:"pointer !important"},on:{click:function(i){return t.showCommisionByStatus("N")}}},[s("span",[s("font-awesome-icon",{staticStyle:{color:"#00cc33","margin-right":"20px"},attrs:{icon:"stopwatch",size:"5x"}})],1)]),s("b-col",{staticStyle:{margin:"auto"}},[s("span",{staticClass:"Commision__TitleGreen"},[t._v("Pending")]),t._v(" "),s("span",{staticClass:"CommisionTitle"}),s("br"),s("span",{staticClass:"CommisionDescs"},[t._v(t._s("Rp "+t.isCurrency(t.DataComission.pending,t.decimal)))])])],1)],1)])},a=[],n={data:function(){return{DataComission:{paid:0,overdue:0,pending:0}}},methods:{getCommision:function(){var t=this,i={option_function_cd:"GetMkCommisionDash",module_cd:"MK",ss_portfolio_id:this.getDataUser().portfolio_id,user_id:this.getDataUser().user_id,month:(new Date).getMonth()+1,year:(new Date).getFullYear()};this.CallFunction(i).then((function(i){if(null!=i&&i.Data.length>0){var s=i.Data[0];t.DataComission={paid:s.paid_amt,overdue:s.overdue_amt,pending:s.pending_amt}}}))},viewAll:function(){this.$router.push({name:"MK_CommisionViewAll"})},showCommisionByStatus:function(t){this.$store.commit("setParamPage",t),this.$router.push({name:"MK_CommisionViewByStatus"})}},mounted:function(){this.getCommision()}},e=n,c=s("2877"),l=Object(c["a"])(e,o,a,!1,null,null,null);i["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0cc223.623b00c1.js.map