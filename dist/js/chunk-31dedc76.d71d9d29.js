(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31dedc76","chunk-bb5ffd2e"],{"20f4":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"height--full"},[a("HeaderFormListVuex2",{attrs:{isProcess:!0}}),a("div",{staticClass:"content-app-form__body",staticStyle:{"background-color":"white","padding-top":"1px !important","margin-left":"15px","margin-right":"15px",height:"95%","overflow-y":"auto","overflow-x":"hidden","padding-bottom":"80px"}},[a("div",{staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+t.PageLevel+"_"+t.TabIndex,"data-vv-value-path":"FormScope_"+t.PageLevel+"_"+t.TabIndex}},[a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-row",[a("b-col",{attrs:{md:"3",offset:"1"}},[a("ABSinputTextVuex",{attrs:{prop:t.PI_Month},model:{value:t.M_BG_ViewBudgetUsage.Month,callback:function(e){t.$set(t.M_BG_ViewBudgetUsage,"Month",e)},expression:"M_BG_ViewBudgetUsage.Month"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"3",offset:"1"}},[a("ABSinputTextVuex",{attrs:{prop:t.PI_Year},model:{value:t.M_BG_ViewBudgetUsage.Year,callback:function(e){t.$set(t.M_BG_ViewBudgetUsage,"Year",e)},expression:"M_BG_ViewBudgetUsage.Year"}})],1),a("b-col",{attrs:{offset:"1"}},[a("b-button",{staticStyle:{"font-size":"10px","padding-top":"3px","padding-bottom":"3px"},on:{click:t.goGenerate}},[a("font-awesome-icon",{staticClass:"icon-style-1",attrs:{icon:"list"}}),t._v(" Generate Inquiry")],1)],1)],1)],1)],1)],1)],1)],1)],1)],1),a("ABSListVuex",{attrs:{prop:t.propList,title:"ViewBudgetList",isProcess:!1},on:{rowClicked:t.rowClicked,rowDblClicked:t.doDoubleClick,rowLinkClick:t.rowLink,pageSize:t.M_PageSize,pagination:t.M_Pagination,filter:t.M_Advance_Filter,headTable:t.M_Head_Table}})],1)],1)},o=[],s=a("b246"),n={data:function(){return{propList:{initialWhere:"SubPortfolioCd='"+this.getDataUser().subportfolio_cd+"'",LineNo:0,PageLevel:1,TabIndex:1,OrderBy:"BudgetCd ASC",ParamView:"'1','2019','001'"},paragraphs:[!0],timer:null,widthModal:"80%",dataModalHeader:[],dataModalDetail:[],FormType:"Process",IEBy:{Input:"",Edit:""},M_BG_ViewBudgetUsage:{Month:"",Year:"",BudgetCd:"",Descs:"",Userinput:"",UserEdit:this.getDataUser().user_id,TimeInput:"",TimeEdit:"",LastUpdateStamp:0,RowId:0},PI_Month:{cValidate:"required|max:2|max_value:12",cName:"Month",cLabel:"Month",cOrder:0,cKey:!0,cPageLevel:1,cTabIndex:1,cParentForm:"FormScope_1_1",cType:"numeric"},PI_Year:{cValidate:"required|max:4",cName:"Year",cLabel:"Year",cOrder:0,cKey:!1,cPageLevel:1,cTabIndex:1,cParentForm:"FormScope_1_1",cType:"numeric"},PI_budgetcd:{cLabel:"Budget Code",cValue:"",cPageLevel:1,cTabIndex:1},PI_budgetcddescs:{cLabel:"Description ",cValue:"",cPageLevel:1,cTabIndex:1},btnText:"Generate",TrxTypeFrom:null,TrxTypeTo:null}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},PageLevel:function(){return 1},TabIndex:function(){return 1}},methods:{setToolbarButton:function(){},M_Search:function(t){this.toList().doGetList(t,"eb_getList")},toList:function(){return this.$children[2]},rowClicked:function(t,e){this.getModal(t),this.M_BG_ViewBudgetUsage.BudgetCd=t.BudgetCd,this.M_BG_ViewBudgetUsage.Descs=t.Descs,this.PI_budgetcd.cValue=t.BudgetCd,this.PI_budgetcddescs.cValue=t.Descs},doDoubleClick:function(){},rowLink:function(t){},M_PageSize:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Head_Table:function(){},goGenerate:function(){this.propList.ParamView="'"+this.M_BG_ViewBudgetUsage.Month+"','"+this.M_BG_ViewBudgetUsage.Year+"','"+this.getDataUser().subportfolio_cd+"'",this.toList().doGetList("","eb_getList")},getDataModalH:function(t){var e=this,a={OptionSeq:this.getOptionSeq().OptionSeq,UserId:this.getDataUser().user_id,PortfolioCd:this.getDataUser().portfolio_cd,SubPortfolioCd:this.getDataUser().subportfolio_cd,LineNo:1,InitialWhere:"SubportfolioCd = '"+this.getDataUser().subportfolio_cd+"' and BudgetCd = '"+t.BudgetCd+"'",SortField:"",ParamView:""};this.postEncode(this.getUrlDataList(),a).then((function(t){null!=t&&(e.dataModalHeader=t.Data)}))},getDataModalD:function(t){var e=this,a={OptionSeq:this.getOptionSeq().OptionSeq,UserId:this.getDataUser().user_id,PortfolioCd:this.getDataUser().portfolio_cd,SubPortfolioCd:this.getDataUser().subportfolio_cd,LineNo:2,InitialWhere:"SubportfolioCd = '"+this.getDataUser().subportfolio_cd+"' and BudgetCd = '"+t.BudgetCd+"'",SortField:"",ParamView:""};this.postEncode(this.getUrlDataList(),a).then((function(t){null!=t&&(e.dataModalDetail=t.Data)}))},getModal:function(t){console.log(JSON.stringify(t,null,2)),this.$modal.show(s["default"],{dataModal:t},{height:"90%",width:"80%",minWidth:"300",minHeight:"300",draggable:!0,resizable:!0,reset:!0},{"before-open":function(t){console.log("this will be called before the modal before Oepn",t)},"before-close":function(t){console.log("this will be called before the modal before closes",t)},opened:function(t){console.log("this will be called before the modal opended",t)},closed:function(t){console.log("this will be called before the modal closed",t)}})}},beforeCreate:function(){},created:function(){this.$store.commit("setFormType","View"),this.$store.commit("setStatus","new")},beforeMount:function(){},mounted:function(){this.$store.commit("setLevel",1),this.$store.commit("setTab",1),this.$store.commit("setListDisable",!1);var t=new Date,e=t.getMonth()+1,a=t.getFullYear();this.M_BG_ViewBudgetUsage.Month=e,this.M_BG_ViewBudgetUsage.Year=a,this.hideSideBarMenu(),this.toList().doGetList("","eb_getList")},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},r=n,l=(a("43e3"),a("2877")),d=Object(l["a"])(r,i,o,!1,null,"fb145942",null);e["default"]=d.exports},"43e3":function(t,e,a){"use strict";var i=a("e9ea"),o=a.n(i);o.a},"7a4d":function(t,e,a){},"9a44":function(t,e,a){"use strict";var i=a("7a4d"),o=a.n(i);o.a},b246:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-row",{staticClass:"size-modal-content"},[a("b-col",{staticStyle:{"margin-left":"4px","margin-bottom":"10px","margin-top":"10px"},attrs:{sm:"12"}},[a("div",{staticClass:"modal-customize-abs__modal-header"},[a("div",{staticClass:"modal-customize-abs__modal-header--title"},[t._v("\n                  View Budget Usage Detail\n                ")]),a("div",{staticClass:"modal-customize-abs__modal-header--icon",on:{click:function(e){return t.$emit("close")}}},[a("i",{staticClass:"icon-close"})])]),a("div",{staticClass:"modal-customize-abs__modal-body",staticStyle:{"padding-right":"0px"}},[a("div",{staticClass:"box-category"},[a("div",{staticClass:"table--list",staticStyle:{"max-height":"500px",width:"100%"}},[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSCompute",{attrs:{prop:t.PI_budgetcd},model:{value:t.M_BG_ViewBudgetUsage.BudgetCd,callback:function(e){t.$set(t.M_BG_ViewBudgetUsage,"BudgetCd",e)},expression:"M_BG_ViewBudgetUsage.BudgetCd"}})],1),a("b-col",{attrs:{md:"6"}},[a("ABSCompute",{attrs:{prop:t.PI_budgetcddescs},model:{value:t.M_BG_ViewBudgetUsage.Descs,callback:function(e){t.$set(t.M_BG_ViewBudgetUsage,"Descs",e)},expression:"M_BG_ViewBudgetUsage.Descs"}})],1)],1),a("b-row",{staticStyle:{"padding-bottom":"10px"}},[a("b-col",{attrs:{md:"12"}},[a("b-container",{staticClass:"bv-example-row"},[a("table",{staticStyle:{"font-size":"11px"}},[a("thead",{staticStyle:{"text-align":"center !important","background-color":"#e9ecef"}},[a("tr",[a("th",{staticStyle:{"font-weight":"normal !important"}},[t._v("Month")]),a("th",{staticStyle:{"font-weight":"normal !important"}},[t._v("Year")]),a("th",{staticStyle:{"min-width":"50px","font-weight":"normal !important"}},[t._v("SR")]),a("th",{staticStyle:{"min-width":"50px","font-weight":"normal !important"}},[t._v("PO")]),a("th",{staticStyle:{"min-width":"50px","font-weight":"normal !important"}},[t._v("GRN")]),a("th",{staticStyle:{"min-width":"50px","font-weight":"normal !important"}},[t._v("InvoiceGRN")]),a("th",{staticStyle:{"min-width":"50px","font-weight":"normal !important"}},[t._v("Invoice Manual")]),a("th",{staticStyle:{"min-width":"50px","font-weight":"normal !important"}},[t._v("PO Contract")]),a("th",{staticStyle:{"min-width":"50px","font-weight":"normal !important"}},[t._v("Invoice Contract")]),a("th",{staticStyle:{"min-width":"50px","font-weight":"normal !important"}},[t._v("Cash Purchase")]),a("th",{staticStyle:{"min-width":"50px","font-weight":"normal !important"}},[t._v("Stock Issue Manual")]),a("th",{staticStyle:{"min-width":"50px","font-weight":"normal !important"}},[t._v("Payment")]),a("th",{staticStyle:{"min-width":"50px","font-weight":"normal !important"}},[t._v("Debit Note")]),a("th",{staticStyle:{"min-width":"50px","font-weight":"normal !important"}},[t._v("Total AMount")])])]),t._l(t.dataModalHeader,(function(e,i){return a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("span",[t._v(t._s(e.BudgetMonth))])]),a("td",{staticStyle:{"text-align":"center"}},[a("span",[t._v(t._s(e.BudgetYear))])]),a("td",{staticStyle:{"text-align":"right"}},[a("span",[t._v(t._s(e.SRAmt))])]),a("td",{staticStyle:{"text-align":"right"}},[a("span",[t._v(t._s(e.POAmt))])]),a("td",{staticStyle:{"text-align":"right"}},[a("span",[t._v(t._s(e.GRNAmt))])]),a("td",{staticStyle:{"text-align":"right"}},[a("span",[t._v(t._s(e.InvoiceGRNAmt))])]),a("td",{staticStyle:{"text-align":"right"}},[a("span",[t._v(t._s(e.InvoiceManualAmt))])]),a("td",{staticStyle:{"text-align":"right"}},[a("span",[t._v(t._s(e.PoContractAmt))])]),a("td",{staticStyle:{"text-align":"right"}},[a("span",[t._v(t._s(e.InvoiceContractAmt))])]),a("td",{staticStyle:{"text-align":"right"}},[a("span",[t._v(t._s(e.CashPurchaseAmt))])]),a("td",{staticStyle:{"text-align":"right"}},[a("span",[t._v(t._s(e.StockIssueAmt))])]),a("td",{staticStyle:{"text-align":"right"}},[a("span",[t._v(t._s(e.PaymentAmt))])]),a("td",{staticStyle:{"text-align":"right"}},[a("span",[t._v(t._s(e.DebitNoteAmt))])]),a("td",{staticStyle:{"text-align":"right"}},[a("span",[t._v(t._s(e.TotalAmt))])])])])}))],2)])],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("b-container",{staticClass:"bv-example-row"},[a("table",{staticStyle:{"font-size":"11px"}},[a("thead",{staticStyle:{"text-align":"center !important","background-color":"#e9ecef"}},[a("tr",[a("th",{staticStyle:{"font-weight":"normal !important"}},[t._v("Month")]),a("th",{staticStyle:{"font-weight":"normal !important"}},[t._v("Year")]),a("th",{staticStyle:{"min-width":"50px","font-weight":"normal !important"}},[t._v("Prev. Process")]),a("th",{staticStyle:{"min-width":"50px","font-weight":"normal !important"}},[t._v("Curr. Process")]),a("th",{staticStyle:{"min-width":"50px","font-weight":"normal !important"}},[t._v("Prev Seq. No")]),a("th",{staticStyle:{"min-width":"50px","font-weight":"normal !important"}},[t._v("Curr. Seq. No")]),a("th",{staticStyle:{"min-width":"50px","font-weight":"normal !important"}},[t._v("Prev Trans. No")]),a("th",{staticStyle:{"min-width":"50px","font-weight":"normal !important"}},[t._v("Curr. Trans. No")]),a("th",{staticStyle:{"min-width":"50px","font-weight":"normal !important"}},[t._v("Previous Amount")]),a("th",{staticStyle:{"min-width":"50px","font-weight":"normal !important"}},[t._v("Current Amount")])])]),t._l(t.dataModalDetail,(function(e,i){return a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("span",[t._v(t._s(e.BudgetMonth))])]),a("td",{staticStyle:{"text-align":"center"}},[a("span",[t._v(t._s(e.BudgetYear))])]),a("td",{staticStyle:{"text-align":"center"}},[a("span",[t._v(t._s(e.PreviousProcess))])]),a("td",{staticStyle:{"text-align":"center"}},[a("span",[t._v(t._s(e.CurrentProcess))])]),a("td",{staticStyle:{"text-align":"center"}},[a("span",[t._v(t._s(e.PreviousBudgetSequenceNo))])]),a("td",{staticStyle:{"text-align":"center"}},[a("span",[t._v(t._s(e.BudgetSequenceNo))])]),a("td",{staticStyle:{"text-align":"center"}},[a("span",[t._v(t._s(e.PreviousTransactionNo))])]),a("td",{staticStyle:{"text-align":"center"}},[a("span",[t._v(t._s(e.CurrentTransactionNo))])]),a("td",{staticStyle:{"text-align":"right"}},[a("span",[t._v(t._s(e.PreviousAmt))])]),a("td",{staticStyle:{"text-align":"right"}},[a("span",[t._v(t._s(e.CurrentAmt))])])])])}))],2)])],1)],1)],1)])])])],1)],1)},o=[],s={props:{dataModal:[]},data:function(){return{dataModalHeader:[],dataModalDetail:[],M_BG_ViewBudgetUsage:{Month:"",Year:"",BudgetCd:"",Descs:"",Userinput:"",UserEdit:this.getDataUser().user_id,TimeInput:"",TimeEdit:"",LastUpdateStamp:0,RowId:0},PI_budgetcd:{cLabel:"Budget Code",cValue:"",cPageLevel:1,cTabIndex:1},PI_budgetcddescs:{cLabel:"Description ",cValue:"",cPageLevel:1,cTabIndex:1}}},methods:{getDataModalH:function(t){var e=this,a={OptionSeq:this.getOptionSeq().OptionSeq,UserId:this.getDataUser().user_id,PortfolioCd:this.getDataUser().portfolio_cd,SubPortfolioCd:this.getDataUser().subportfolio_cd,LineNo:1,InitialWhere:"SubportfolioCd = '"+this.getDataUser().subportfolio_cd+"' and BudgetCd = '"+t.BudgetCd+"'",SortField:"",ParamView:""};this.postEncode(this.getUrlDataList(),a).then((function(t){null!=t&&(e.dataModalHeader=t.Data)}))},getDataModalD:function(t){var e=this,a={OptionSeq:this.getOptionSeq().OptionSeq,UserId:this.getDataUser().user_id,PortfolioCd:this.getDataUser().portfolio_cd,SubPortfolioCd:this.getDataUser().subportfolio_cd,LineNo:2,InitialWhere:"SubportfolioCd = '"+this.getDataUser().subportfolio_cd+"' and BudgetCd = '"+t.BudgetCd+"'",SortField:"BudgetSequenceNo ASC",ParamView:""};this.postEncode(this.getUrlDataList(),a).then((function(t){null!=t&&(e.dataModalDetail=t.Data)}))}},beforeCreate:function(){},created:function(){this.M_BG_ViewBudgetUsage.BudgetCd=this.dataModal.BudgetCd,this.M_BG_ViewBudgetUsage.Descs=this.dataModal.Descs,this.getDataModalH(this.dataModal),this.getDataModalD(this.dataModal)},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},n=s,r=(a("9a44"),a("2877")),l=Object(r["a"])(n,i,o,!1,null,"25a155e6",null);e["default"]=l.exports},e9ea:function(t,e,a){}}]);
//# sourceMappingURL=chunk-31dedc76.d71d9d29.js.map