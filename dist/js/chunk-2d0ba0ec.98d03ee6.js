(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ba0ec"],{"361d":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card",staticStyle:{height:"95%"}},[e("div",{staticClass:"card__title"},[e("b-row",[e("b-col",{staticStyle:{"max-width":"fit-content !important"}},[e("span",[t._v("Fleet Master Status")])])],1)],1),e("div",{staticClass:"card__body"},[e("b-row",[e("b-col",{staticStyle:{"max-width":"fit-content !important"}},[e("span",{staticStyle:{cursor:"pointer"},on:{click:function(a){return t.changeProspect("min")}}},[e("font-awesome-icon",{staticClass:"isGrey",attrs:{icon:"less-than",size:"lg"}})],1)]),e("b-col",{staticStyle:{"text-align":"center"}},[e("span",[e("h6",{staticClass:"isGrey"},[t._v(t._s(t.DataProspect.monthName+" "+t.DataProspect.year))])])]),e("b-col",{staticStyle:{"text-align":"right","max-width":"fit-content !important"}},[e("span",{staticStyle:{cursor:"pointer"},on:{click:function(a){return t.changeProspect("add")}}},[e("font-awesome-icon",{staticClass:"isGrey",attrs:{icon:"greater-than",size:"lg"}})],1)])],1),e("b-row",{staticClass:"row-dash-new-prospect-top",staticStyle:{"margin-top":"70px"}},[e("b-col",[e("div",{staticClass:"buleth__blue"},[e("span",[t._v(t._s(t.DataProspect.applicable))])]),e("div",{staticClass:"buleth-text",staticStyle:{"margin-top":"20px !important"}},[t._v("Applicable")])]),e("b-col",[e("div",{staticClass:"buleth__red"},[e("span",[t._v(t._s(t.DataProspect.expire))])]),e("div",{staticClass:"buleth-text",staticStyle:{"margin-top":"20px !important"}},[t._v("Expire")])])],1)],1)])},i=[],n={data:function(){return{DataProspect:{month:"",monthName:"",year:"",applicable:0,expire:0}}},methods:{getProspect:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=a?new Date(a):new Date,s=e.getMonth(),i=e.getFullYear();this.DataProspect={month:s+1,monthName:this.getMonthName(e),year:i,applicable:0,expire:0};var n={option_function_cd:"GetFleetStatusDash",module_cd:"SP",ss_portfolio_id:this.getDataUser().portfolio_id,user_id:this.getDataUser().user_id,years:i,months:s+1};this.CallFunction(n).then((function(a){if(null!=a)if(a.Data.length>0){var n=a.Data[0];t.DataProspect={month:s+1,monthName:t.getMonthName(e),year:i,applicable:n.applicable,expire:n.stnk_expiry}}else t.DataProspect={month:s+1,monthName:t.getMonthName(e),year:i,applicable:0,expire:0}}))},changeProspect:function(t){var a=new Date;if("min"===t){var e=this.DataProspect.month&&""!==this.DataProspect.month?parseInt(this.DataProspect.month):0,s=this.DataProspect.year;e=e<10?"0"+e:e;var i=s+"-"+e+"-01";a=this.dateAdd2("m",i,-1)}else if("add"===t){e=this.DataProspect.month&&""!==this.DataProspect.month?parseInt(this.DataProspect.month):0,s=this.DataProspect.year;e=e<10?"0"+e:e;i=s+"-"+e+"-01";a=a=this.dateAdd2("m",i,1)}this.getProspect(a)}},mounted:function(){this.getProspect()}},o=n,r=e("2877"),c=Object(r["a"])(o,s,i,!1,null,null,null);a["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0ba0ec.98d03ee6.js.map