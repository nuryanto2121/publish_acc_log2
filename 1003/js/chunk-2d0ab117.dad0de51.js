(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ab117"],{1464:function(e,n,a){"use strict";a.r(n);var t=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",[a("ABSListVuex",{attrs:{prop:e.propList,title:e.data.query_name},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn,checkboxChecked:e.$parent.checkboxChecked}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v(" Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_cancellationno",attrs:{prop:e.PI_cancellationno},model:{value:e.M_SM_SalesAddendumCancellationEntry.cancellationno,callback:function(n){e.$set(e.M_SM_SalesAddendumCancellationEntry,"cancellationno",n)},expression:"M_SM_SalesAddendumCancellationEntry.cancellationno"}})],1),a("b-col",{attrs:{md:"6"}},[a("ABSCompute",{ref:"ref_marketingname",attrs:{prop:e.PI_marketingname},model:{value:e.M_SM_SalesAddendumCancellationEntry.marketingname,callback:function(n){e.$set(e.M_SM_SalesAddendumCancellationEntry,"marketingname",n)},expression:"M_SM_SalesAddendumCancellationEntry.marketingname"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputDateVuex",{ref:"ref_cancellationdate",attrs:{prop:e.PI_cancellationdate},on:{input:e.OncancellationdateChange},model:{value:e.M_SM_SalesAddendumCancellationEntry.cancellationdate,callback:function(n){e.$set(e.M_SM_SalesAddendumCancellationEntry,"cancellationdate",n)},expression:"M_SM_SalesAddendumCancellationEntry.cancellationdate"}})],1),a("b-col",{attrs:{md:"6"}},[a("ABSCompute",{ref:"ref_salestype",attrs:{prop:e.PI_salestype},model:{value:e.M_SM_SalesAddendumCancellationEntry.salestype,callback:function(n){e.$set(e.M_SM_SalesAddendumCancellationEntry,"salestype",n)},expression:"M_SM_SalesAddendumCancellationEntry.salestype"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_orderno",attrs:{prop:e.PI_orderno,value:e.M_SM_SalesAddendumCancellationEntry.orderno,label:e.M_SM_SalesAddendumCancellationEntry.ordernoLabel},on:{change:e.OnordernoChange}})],1),a("b-col",{attrs:{md:"6"}},[a("ABSCompute",{ref:"ref_snpnodate",attrs:{prop:e.PI_snpnodate},model:{value:e.M_SM_SalesAddendumCancellationEntry.snpnodate,callback:function(n){e.$set(e.M_SM_SalesAddendumCancellationEntry,"snpnodate",n)},expression:"M_SM_SalesAddendumCancellationEntry.snpnodate"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_reasoncd",attrs:{prop:e.PI_reasoncd,value:e.M_SM_SalesAddendumCancellationEntry.reasoncd,label:e.M_SM_SalesAddendumCancellationEntry.reasoncdLabel},on:{change:e.OnreasoncdChange}})],1),a("b-col",{attrs:{md:"6"}},[a("ABSCompute",{ref:"ref_commisionstatusdescs",attrs:{prop:e.PI_commisionstatusdescs},model:{value:e.M_SM_SalesAddendumCancellationEntry.commisionstatusdescs,callback:function(n){e.$set(e.M_SM_SalesAddendumCancellationEntry,"commisionstatusdescs",n)},expression:"M_SM_SalesAddendumCancellationEntry.commisionstatusdescs"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_reasondescs",attrs:{prop:e.PI_reasondescs},model:{value:e.M_SM_SalesAddendumCancellationEntry.reasondescs,callback:function(n){e.$set(e.M_SM_SalesAddendumCancellationEntry,"reasondescs",n)},expression:"M_SM_SalesAddendumCancellationEntry.reasondescs"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSCompute",{ref:"ref_customername",attrs:{prop:e.PI_customername},model:{value:e.M_SM_SalesAddendumCancellationEntry.customername,callback:function(n){e.$set(e.M_SM_SalesAddendumCancellationEntry,"customername",n)},expression:"M_SM_SalesAddendumCancellationEntry.customername"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSCompute",{ref:"ref_lotno",attrs:{prop:e.PI_lotno},model:{value:e.M_SM_SalesAddendumCancellationEntry.lotno,callback:function(n){e.$set(e.M_SM_SalesAddendumCancellationEntry,"lotno",n)},expression:"M_SM_SalesAddendumCancellationEntry.lotno"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:e.PI_remarks},on:{input:e.OnremarksChange},model:{value:e.M_SM_SalesAddendumCancellationEntry.remarks,callback:function(n){e.$set(e.M_SM_SalesAddendumCancellationEntry,"remarks",n)},expression:"M_SM_SalesAddendumCancellationEntry.remarks"}})],1)],1)],1)],1)],1),a("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)],1)},o=[],l=(a("ac6a"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{cInsertKey:"",FormType:"List",Module:"SM",propList:{initialWhere:"SubPortfolioCd = '"+this.getDataUser().subportfolio_cd+"'",LineNo:this.$parent.data.page_order,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_SM_SalesAddendumCancellationEntry:{cancellationno:"",cancellationdate:this.getToday(),salestype:"",marketingname:"",snpnodate:"",commisionstatusdescs:"",remarks:"",lotno:"",customername:"",reasondescs:"",orderno:""},PI_cancellationno:{cValidate:"",cName:"cancellationno",cLabel:"Cancellation No",cLabelSize:4,cOrder:23,cKey:!1,cType:"text",cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_marketingname:{cLabel:"Marketing Name",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_cancellationdate:{cValidate:"",cName:"cancellationdate",cLabel:"Cancellation Date",cLabelSize:4,cOrder:1,cKey:!1,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_salestype:{cLabel:"Sales Type",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_orderno:{dataLookUp:{LookUpCd:"GetSMLookupOrderNo",ColumnDB:"OrderNo",InitialWhere:"",ParamWhere:"",SourceField:"",DisplayLookup:"OrderNo,OrderNo",ParamView:"'"+this.getDataUser().subportfolio_cd+"'"},cValidate:"required",cName:"orderno",cLabel:"Order No",cKey:!0,cLabelSize:4,cOrder:23,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"OrderNo,OrderNo"},PI_snpnodate:{cLabel:"Snp No-Date",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_reasoncd:{dataLookUp:{LookUpCd:"GetLookupReasonCd",ColumnDB:"ReasonCd",InitialWhere:"",ParamWhere:"",SourceField:"",DisplayLookup:"ReasonCd,Descs"},cValidate:"required",cName:"reasoncd",cLabel:"Reason Code",cKey:!1,cLabelSize:4,cOrder:23,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"ReasonCd,Descs"},PI_commisionstatusdescs:{cLabel:"Commision Status",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_reasondescs:{cValidate:"required|max:60",cName:"reasondescs",cLabel:"Description",cLabelSize:4,cOrder:3,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_customername:{cLabel:"Contact Name",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_lotno:{cLabel:"Unit No",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Remarks",cLabelSize:4,cOrder:33,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder,cProtect:!1}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage1Data},GetDataBy1:function(){return this.$store.getters.GetPage1GetDataBy}},methods:{CekCancellationRunningCd:function(){var e=this,n={OptionFunctionCd:"CheckRunningCd",ModuleCd:this.Module,SubPortfolioCd:this.getDataUser().subportfolio_cd};this.FnDynamicFunction(n).then((function(n){if(null!=n&&!(n.length<1)){var a=n[0];null!=a.SalesAddendumCancellationRunningCd&&""!=a.SalesAddendumCancellationRunningCd?(e.PI_cancellationno.cProtect=!0,e.M_SM_SalesAddendumCancellationEntry.cancellationno="(auto)"):(e.PI_cancellationno.cProtect=!1,e.M_SM_SalesAddendumCancellationEntry.cancellationno="")}}))},GetSales:function(e){var n=this,a={OptionFunctionCd:"GetSalesData",ModuleCd:this.Module,SubPortfolioCd:this.getDataUser().subportfolio_cd,OrderNo:e};this.FnDynamicFunction(a).then((function(e){if(e.length>0){var a=e[0];n.M_SM_SalesAddendumCancellationEntry.marketingname=a.MarketingName,n.M_SM_SalesAddendumCancellationEntry.salestype=a.PaymentDescs,n.M_SM_SalesAddendumCancellationEntry.snpnodate=a.SnPNo+" - "+n.momentDateFormatting(a.SnPDate,"DD/MM/YYYY"),n.M_SM_SalesAddendumCancellationEntry.commisionstatusdescs=a.CommisionStatusDescs,n.M_SM_SalesAddendumCancellationEntry.customername=a.ContactName,n.M_SM_SalesAddendumCancellationEntry.lotno=a.LotDescs,n.M_SM_SalesAddendumCancellationEntry.remarks=a.Remarks}}))},OncancellationdateChange:function(e){var n=this;this.$nextTick((function(){n.inputStatus})),this.$forceUpdate()},OnordernoChange:function(e){var n=this;console.log(e),this.$nextTick((function(){n.M_SM_SalesAddendumCancellationEntry.orderno=e.id,n.M_SM_SalesAddendumCancellationEntry.ordernoLabel=e.label,n.GetSales(e.id),n.inputStatus})),this.$forceUpdate()},OnreasoncdChange:function(e){var n=this;this.$nextTick((function(){n.M_SM_SalesAddendumCancellationEntry.reasoncd=e.id,n.M_SM_SalesAddendumCancellationEntry.reasoncdLabel=e.label,n.M_SM_SalesAddendumCancellationEntry.reasondescs=e.Descs,n.inputStatus})),this.$forceUpdate()},OnremarksChange:function(e){var n=this;this.$nextTick((function(){n.inputStatus})),this.$forceUpdate()},setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,n){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){},M_CheckboxChecked:function(e,n,a){},M_Post:function(e){},M_Insert:function(){var e=this;"(auto)"==this.M_SM_SalesAddendumCancellationEntry.cancellationno?this.M_SM_SalesAddendumCancellationEntry.cancellationno="":this.M_SM_SalesAddendumCancellationEntry.cancellationno=this.M_SM_SalesAddendumCancellationEntry.cancellationno;var n={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,SubPortfolioCd:this.getDataUser().subportfolio_cd,OrderNo:""==this.M_SM_SalesAddendumCancellationEntry.orderno||null==this.M_SM_SalesAddendumCancellationEntry.orderno?"NULL":this.M_SM_SalesAddendumCancellationEntry.orderno,CancellationNo:this.M_SM_SalesAddendumCancellationEntry.cancellationno,CancellationDate:""==this.M_SM_SalesAddendumCancellationEntry.cancellationdate||null==this.M_SM_SalesAddendumCancellationEntry.cancellationdate?"NULL":this.M_SM_SalesAddendumCancellationEntry.cancellationdate,ReasonCd:""==this.M_SM_SalesAddendumCancellationEntry.reasoncd||null==this.M_SM_SalesAddendumCancellationEntry.reasoncd?"NULL":this.M_SM_SalesAddendumCancellationEntry.reasoncd,ReasonDescs:this.M_SM_SalesAddendumCancellationEntry.reasondescs,CancelBy:this.getDataUser().user_id,CancelDate:this.getToday(),Status:"N",Remarks:this.M_SM_SalesAddendumCancellationEntry.remarks,UserInput:this.getDataUser().user_id};this.postJSON(this.getUrlInsert(),n).then((function(n){null!=n&&e.$parent.resultInsert(n.Message)}))},M_Update:function(){var e=this,n={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,SubPortfolioCd:this.getDataUser().subportfolio_cd,OrderNo:""==this.M_SM_SalesAddendumCancellationEntry.orderno||null==this.M_SM_SalesAddendumCancellationEntry.orderno?"NULL":this.M_SM_SalesAddendumCancellationEntry.orderno,CancellationNo:this.M_SM_SalesAddendumCancellationEntry.cancellationno,CancellationDate:""==this.M_SM_SalesAddendumCancellationEntry.cancellationdate||null==this.M_SM_SalesAddendumCancellationEntry.cancellationdate?"NULL":this.M_SM_SalesAddendumCancellationEntry.cancellationdate,ReasonCd:""==this.M_SM_SalesAddendumCancellationEntry.reasoncd||null==this.M_SM_SalesAddendumCancellationEntry.reasoncd?"NULL":this.M_SM_SalesAddendumCancellationEntry.reasoncd,ReasonDescs:this.M_SM_SalesAddendumCancellationEntry.reasondescs,CancelBy:this.getDataUser().user_id,CancelDate:this.getToday(),Status:"N",Remarks:this.M_SM_SalesAddendumCancellationEntry.remarks,UserEdit:this.getDataUser().user_id};this.postJSON(this.getUrlUpdate(),n).then((function(n){null!=n&&e.$parent.resultUpdate(n.Message)}))},M_ClearForm:function(){this.M_SM_SalesAddendumCancellationEntry={cancellationno:"",cancellationdate:this.getToday(),salestype:"",marketingname:"",snpnodate:"",commisionstatusdescs:"",remarks:"",lotno:"",customername:"",reasondescs:"",orderno:""}},M_New:function(){this.CekCancellationRunningCd()},M_Edit:function(){},M_Delete:function(e){var n=this,a=this.FormToABSList().getRowSelected(),t=[];a.forEach((function(e){t.push({_Message_:"",SubPortfolioCd:n.getDataUser().subportfolio_cd,OrderNo:""==e.OrderNo||null==e.OrderNo?"NULL":e.OrderNo,CancellationNo:e.CancellationNo})}));var o={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,Data:t};this.postJSONMulti(this.getUrlDeleteMulti(),o).then((function(e){null!=e&&n.$parent.resultDelete()}))},getDataBy:function(e){var n=this,a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,SubPortfolioCd:this.getDataUser().subportfolio_cd,orderno:e.OrderNo,cancellationno:e.CancellationNo};this.postJSON(this.getUrlById(),a).then((function(e){if(null!=e){var a=e.Data[0];n.M_SM_SalesAddendumCancellationEntry={cancellationno:a.cancellationno,cancellationdate:a.cancellationdate,salestype:a.salestype,marketingname:a.marketingname,snpnodate:a.snpnodate,commisionstatusdescs:a.commisionstatusdescs,remarks:a.remarks,lotno:a.lotno,customername:a.customername,reasondescs:a.reasondescs,orderno:a.orderno,reasoncd:a.reasoncd},n.M_SM_SalesAddendumCancellationEntry.ordernoLabel=null!=n.M_SM_SalesAddendumCancellationEntry.orderno&&""!=n.M_SM_SalesAddendumCancellationEntry.orderno?a.orderno+n.separator+a.orderno:"",n.M_SM_SalesAddendumCancellationEntry.reasoncdLabel=null!=n.M_SM_SalesAddendumCancellationEntry.reasoncd&&""!=n.M_SM_SalesAddendumCancellationEntry.reasoncd?a.reasoncd+n.separator+a.reasondescs:"",n.GetSales(a.orderno),n.IEBy.Input=a.userinput,n.IEBy.Edit=a.useredit}}))}},beforeCreate:function(){},created:function(){this.$store.commit("setFormType","List"),this.getToolbar().ProcessPS()},beforeMount:function(){},mounted:function(){this.hideSideBarMenu(),this.FormToABSList().doGetList("","eb_getList")},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),s=l,i=a("2877"),r=Object(i["a"])(s,t,o,!1,null,null,null);n["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d0ab117.dad0de51.js.map