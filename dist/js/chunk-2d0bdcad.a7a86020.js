(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bdcad"],{"2e04":function(e,t,a){"use strict";a.r(t);var d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ABSListVuex",{attrs:{prop:e.propList,title:e.data.query_name},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn,checkboxChecked:e.$parent.checkboxChecked}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputRadioButtonVuex",{ref:"ref_chargetype",attrs:{prop:e.PI_chargetype},on:{input:e.OnchargetypeChange},model:{value:e.M_SM_SalesPaymentScheduleAddendum.chargetype,callback:function(t){e.$set(e.M_SM_SalesPaymentScheduleAddendum,"chargetype",t)},expression:"M_SM_SalesPaymentScheduleAddendum.chargetype"}})],1),a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_taxcd",attrs:{prop:e.PI_taxcd,value:e.M_SM_SalesPaymentScheduleAddendum.taxcd,label:e.M_SM_SalesPaymentScheduleAddendum.taxcdLabel},on:{change:e.OntaxcdChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_trxtype",attrs:{prop:e.PI_trxtype,value:e.M_SM_SalesPaymentScheduleAddendum.trxtype,label:e.M_SM_SalesPaymentScheduleAddendum.trxtypeLabel},on:{change:e.OntrxtypeChange}})],1),a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_billingamt",attrs:{prop:e.PI_billingamt},on:{input:e.OnbillingamtChange},model:{value:e.M_SM_SalesPaymentScheduleAddendum.billingamt,callback:function(t){e.$set(e.M_SM_SalesPaymentScheduleAddendum,"billingamt",t)},expression:"M_SM_SalesPaymentScheduleAddendum.billingamt"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_descs",attrs:{prop:e.PI_descs},model:{value:e.M_SM_SalesPaymentScheduleAddendum.descs,callback:function(t){e.$set(e.M_SM_SalesPaymentScheduleAddendum,"descs",t)},expression:"M_SM_SalesPaymentScheduleAddendum.descs"}})],1),a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_baseamt",attrs:{prop:e.PI_baseamt},model:{value:e.M_SM_SalesPaymentScheduleAddendum.baseamt,callback:function(t){e.$set(e.M_SM_SalesPaymentScheduleAddendum,"baseamt",t)},expression:"M_SM_SalesPaymentScheduleAddendum.baseamt"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_credittermscd",attrs:{prop:e.PI_credittermscd,value:e.M_SM_SalesPaymentScheduleAddendum.credittermscd,label:e.M_SM_SalesPaymentScheduleAddendum.credittermscdLabel},on:{change:e.OncredittermscdChange}})],1),a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_taxamt",attrs:{prop:e.PI_taxamt},model:{value:e.M_SM_SalesPaymentScheduleAddendum.taxamt,callback:function(t){e.$set(e.M_SM_SalesPaymentScheduleAddendum,"taxamt",t)},expression:"M_SM_SalesPaymentScheduleAddendum.taxamt"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputDateVuex",{ref:"ref_billingdate",attrs:{prop:e.PI_billingdate},model:{value:e.M_SM_SalesPaymentScheduleAddendum.billingdate,callback:function(t){e.$set(e.M_SM_SalesPaymentScheduleAddendum,"billingdate",t)},expression:"M_SM_SalesPaymentScheduleAddendum.billingdate"}})],1),a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_totalamt",attrs:{prop:e.PI_totalamt},model:{value:e.M_SM_SalesPaymentScheduleAddendum.totalamt,callback:function(t){e.$set(e.M_SM_SalesPaymentScheduleAddendum,"totalamt",t)},expression:"M_SM_SalesPaymentScheduleAddendum.totalamt"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}}),a("b-col",{attrs:{md:"6"}},[a("ABSinputDateVuex",{ref:"ref_paymentdate",attrs:{prop:e.PI_paymentdate},model:{value:e.M_SM_SalesPaymentScheduleAddendum.paymentdate,callback:function(t){e.$set(e.M_SM_SalesPaymentScheduleAddendum,"paymentdate",t)},expression:"M_SM_SalesPaymentScheduleAddendum.paymentdate"}})],1)],1)],1)],1),a("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)],1)},n=[],s=(a("ac6a"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{ValKey:null,FormType:"List",Module:"SM",propList:{initialWhere:"LotNo = '"+this.ValKey+"'",LineNo:this.$parent.data.page_order,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"trxtype ASC",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_SM_SalesPaymentScheduleAddendum:{chargetype:"U",taxcd:"",trxtype:"",billingamt:0,descs:"",baseamt:0,credittermscd:"",addendumsequenceno:0,taxamt:0,totalamt:0,paymentdate:null,lotno:"",billingdate:null,lastupdatestamp:0},PI_chargetype:{cValidate:"",cName:"chargetype1",cId:"rdbchargetype",cRadioOptions:[{text:"Unit",value:"U"},{text:"VO",value:"V"},{text:"Others",value:"O"},{text:"Penalty",value:"P"}],cRadioDefaultOption:"U",cLabel:"Charge Type",cLabelSize:4,cDefault:"U",cOrder:0,cProtect:!1,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_taxcd:{dataLookUp:{LookUpCd:"GetTaxCd",ColumnDB:"TaxCd",InitialWhere:"",ParamWhere:"",SourceField:"",DisplayLookup:"TaxCd"},cValidate:"required",cName:"taxcd",cLabel:"Tax Code",cKey:!1,cLabelSize:4,cOrder:1,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"TaxCd"},PI_trxtype:{dataLookUp:{LookUpCd:"GetLookupCMTransTypeMaster",ColumnDB:"TrxType",InitialWhere:" ModuleCd ='SM' ",ParamWhere:"",SourceField:"",DisplayLookup:"TrxType,Descs"},cValidate:"required",cName:"trxtype",cLabel:"Transaction Type",cKey:!1,cLabelSize:4,cOrder:0,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"TrxType,Descs"},PI_billingamt:{cValidate:"required|max:20",cName:"billingamt",cLabel:"Trans. Amount",cLabelSize:4,cOrder:1,cKey:!1,cType:"numeric",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_descs:{cValidate:"",cName:"descs",cLabel:"Description",cLabelSize:4,cOrder:0,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_baseamt:{cValidate:"",cName:"baseamt",cLabel:"Net Amount",cLabelSize:4,cOrder:1,cKey:!1,cType:"numeric",cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_credittermscd:{dataLookUp:{LookUpCd:"GetLookupCMCreditTerms",ColumnDB:"CreditTermsCd",InitialWhere:"",ParamWhere:"",SourceField:"",DisplayLookup:"CreditTermsCd,Descs"},cValidate:"required",cName:"credittermscd",cLabel:"Credit Terms",cKey:!1,cLabelSize:4,cOrder:0,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"CM/CM_CreditTerms",cDisplayColumn:"CreditTermsCd,Descs"},PI_taxamt:{cValidate:"",cName:"taxamt",cLabel:"Vat Amount",cLabelSize:4,cOrder:1,cKey:!1,cType:"numeric",cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_totalamt:{cValidate:"",cName:"totalamt",cLabel:"Total Amount (Net + VAT)",cLabelSize:4,cOrder:1,cKey:!1,cType:"numeric",cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_billingdate:{cValidate:"",cName:"billingdate",cLabel:"Billing Date",cLabelSize:4,cOrder:0,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_paymentdate:{cValidate:"",cName:"paymentdate",cLabel:"Payment Date",cLabelSize:4,cOrder:0,cKey:!1,cType:"text",cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder,cProtect:!1}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage2Data},DataRowPage1:function(){return this.$store.getters.GetPage1Data},GetDataBy1:function(){return this.$store.getters.GetPage1GetDataBy}},methods:{CalculateTax:function(){var e=this,t={OptionFunctionCd:"SMCalculateTax",ModuleCd:this.Module,SubPortfolioCd:this.getDataUser().subportfolio_cd,AfterDiscountAmt:this.M_SM_SalesPaymentScheduleAddendum.billingamt,TaxCd:this.M_SM_SalesPaymentScheduleAddendum.taxcd,BaseAmt_Output:0,TaxAmt_Output:0};this.FnDynamicFunction(t).then((function(t){console.log(JSON.stringify(t,null,2));var a=t;e.M_SM_SalesPaymentScheduleAddendum.baseamt=e.isCurrency(a.BaseAmt,e.decimal),e.M_SM_SalesPaymentScheduleAddendum.taxamt=e.isCurrency(a.TaxAmt,e.decimal),e.M_SM_SalesPaymentScheduleAddendum.totalamt=e.isCurrency(parseFloat(a.BaseAmt)+parseFloat(a.TaxAmt),e.decimal)}))},OnbillingamtChange:function(e){var t=this;this.$nextTick((function(){"VIEW"!=t.inputStatus&&t.CalculateTax()})),this.$forceUpdate()},OnchargetypeChange:function(e){var t=this;this.$nextTick((function(){t.inputStatus})),this.$forceUpdate()},OntrxtypeChange:function(e){var t=this;this.$nextTick((function(){console.log(e),t.M_SM_SalesPaymentScheduleAddendum.trxtype=e.id,t.M_SM_SalesPaymentScheduleAddendum.trxtypeLabel=e.id+t.separator+e.label,t.M_SM_SalesPaymentScheduleAddendum.descs=e.Descs,t.inputStatus})),this.$forceUpdate()},OntaxcdChange:function(e){var t=this;this.$nextTick((function(){t.M_SM_SalesPaymentScheduleAddendum.taxcd=e.id,t.M_SM_SalesPaymentScheduleAddendum.taxcdLabel=e.id+t.separator+e.label,"VIEW"!=t.inputStatus&&t.CalculateTax()})),this.$forceUpdate()},OncredittermscdChange:function(e){var t=this;this.$nextTick((function(){t.M_SM_SalesPaymentScheduleAddendum.credittermscd=e.id,t.M_SM_SalesPaymentScheduleAddendum.credittermscdLabel=e.id+t.separator+e.label,t.inputStatus})),this.$forceUpdate()},setToolbarButton:function(){"N"==this.DataRowPage1.StatusCd?this.getToolbar().statusFunction[0].disabled=!1:this.getToolbar().statusFunction[0].disabled=!0},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){this.$parent.showForm=!1;var e=this.$store.getters.GetPage1Data;console.log(e),"N"==e.StatusCd?(this.getToolbar().FormStatus="EDIT",this.getToolbar().ProcessPS()):(e.StatusCd,this.getToolbar().FormStatus="VIEW",this.getToolbar().ProcessPS()),this.propList.initialWhere=" SubPortfolioCd='"+this.getDataUser().subportfolio_cd+"' AND OrderNo ='"+e.OrderNo+"' AND AddendumSequenceNo='"+e.AddendumSequenceNo+"'",this.FormToABSList().doGetList("","eb_getList")},M_CheckboxChecked:function(e,t,a){},M_Insert:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,SubPortfolioCd:this.getDataUser().subportfolio_cd,OrderNo:this.DataRowPage1.OrderNo,LotNo:this.DataRowPage1.LotNo,TrxType:this.M_SM_SalesPaymentScheduleAddendum.trxtype,BillingDate:this.M_SM_SalesPaymentScheduleAddendum.billingdate,Descs:this.M_SM_SalesPaymentScheduleAddendum.descs,TaxCd:""==this.M_SM_SalesPaymentScheduleAddendum.taxcd||null==this.M_SM_SalesPaymentScheduleAddendum.taxcd?"NULL":this.M_SM_SalesPaymentScheduleAddendum.taxcd,CreditTermsCd:""==this.M_SM_SalesPaymentScheduleAddendum.credittermscd||null==this.M_SM_SalesPaymentScheduleAddendum.credittermscd?"NULL":this.M_SM_SalesPaymentScheduleAddendum.credittermscd,BillingAmt:this.M_SM_SalesPaymentScheduleAddendum.billingamt,ChargeType:this.M_SM_SalesPaymentScheduleAddendum.chargetype,UserInput:this.getDataUser().user_id};this.postJSON(this.getUrlInsert(),t).then((function(t){null!=t&&e.$parent.resultInsert(t.Message)}))},M_Update:function(){var e=this;console.log(this.DataRowPage1);var t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,SubPortfolioCd:this.getDataUser().subportfolio_cd,PaymentSequenceNo:this.M_SM_SalesPaymentScheduleAddendum.paymentsequenceno,OrderNo:this.DataRowPage1.OrderNo,LotNo:this.DataRowPage1.LotNo,BillingDate:this.M_SM_SalesPaymentScheduleAddendum.billingdate,BillingAmt:this.M_SM_SalesPaymentScheduleAddendum.billingamt,TrxType:this.M_SM_SalesPaymentScheduleAddendum.trxtype,TaxCd:""==this.M_SM_SalesPaymentScheduleAddendum.taxcd||null==this.M_SM_SalesPaymentScheduleAddendum.taxcd?"NULL":this.M_SM_SalesPaymentScheduleAddendum.taxcd,CreditTermsCd:""==this.M_SM_SalesPaymentScheduleAddendum.credittermscd||null==this.M_SM_SalesPaymentScheduleAddendum.credittermscd?"NULL":this.M_SM_SalesPaymentScheduleAddendum.credittermscd,Descs:this.M_SM_SalesPaymentScheduleAddendum.descs,ChargeType:this.M_SM_SalesPaymentScheduleAddendum.chargetype,UserEdit:this.getDataUser().user_id,LastUpdateStamp:this.M_SM_SalesPaymentScheduleAddendum.lastupdatestamp};this.postJSON(this.getUrlUpdate(),t).then((function(t){null!=t&&e.$parent.resultUpdate(t.Message)}))},M_ClearForm:function(){this.M_SM_SalesPaymentScheduleAddendum={chargetype:"U",taxcd:"",trxtype:"",billingamt:0,descs:"",baseamt:0,addendumsequenceno:0,credittermscd:"",taxamt:0,totalamt:0,paymentdate:null,lotno:""}},M_New:function(){var e=this.$store.getters.GetPage1Data;this.M_SM_SalesPaymentScheduleAddendum.lotno=e.LotNo},M_Edit:function(){},M_Delete:function(e){var t=this,a=this.FormToABSList().getRowSelected(),d=[];a.forEach((function(e){d.push({_Message_:"",SubPortfolioCd:t.getDataUser().subportfolio_cd,PaymentSequenceNo:e.PaymentSequenceNo,OrderNo:t.DataRowPage1.OrderNo,TrxType:e.TrxType,LotNo:t.DataRowPage1.LotNo,LastUpdateStamp:e.LastUpdateStamp})}));var n={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,Data:d};this.postJSONMulti(this.getUrlDeleteMulti(),n).then((function(e){null!=e&&t.$parent.resultDelete()}))},getDataBy:function(e){var t=this,a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,SubPortfolioCd:this.getDataUser().subportfolio_cd,paymentsequenceno:e.PaymentSequenceNo,orderno:e.OrderNo,trxtype:e.TrxType,lotno:e.LotNo,addendumsequenceno:e.AddendumSequenceNo};this.postJSON(this.getUrlById(),a).then((function(a){if(null!=a){var d=a.Data[0];t.M_SM_SalesPaymentScheduleAddendum={chargetype:d.chargetype,taxcd:d.taxcd,trxtype:d.trxtype,billingamt:t.isCurrency(d.billingamt,t.decimal),descs:d.descs,baseamt:t.isCurrency(d.baseamt,t.decimal),credittermscd:d.credittermscd,taxamt:t.isCurrency(d.taxamt,t.decimal),totalamt:t.isCurrency(parseFloat(d.baseamt)+parseFloat(d.taxamt),t.decimal),paymentdate:d.paymentdate,billingdate:d.billingdate,lastupdatestamp:e.LastUpdateStamp,paymentsequenceno:e.PaymentSequenceNo},t.M_SM_SalesPaymentScheduleAddendum.trxtypeLabel=null!=t.M_SM_SalesPaymentScheduleAddendum.trxtype&&""!=t.M_SM_SalesPaymentScheduleAddendum.trxtype?d.trxtype+t.separator:"",t.M_SM_SalesPaymentScheduleAddendum.taxcdLabel=null!=t.M_SM_SalesPaymentScheduleAddendum.taxcd&&""!=t.M_SM_SalesPaymentScheduleAddendum.taxcd?d.taxcd+t.separator:"",t.M_SM_SalesPaymentScheduleAddendum.credittermscdLabel=null!=t.M_SM_SalesPaymentScheduleAddendum.credittermscd&&""!=t.M_SM_SalesPaymentScheduleAddendum.credittermscd?d.credittermscd+t.separator:"",t.IEBy.Input=d.userinput,t.IEBy.Edit=d.useredit}}))}},created:function(){},beforeMount:function(){},mounted:function(){this.hideSideBarMenu()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),l=s,c=a("2877"),i=Object(c["a"])(l,d,n,!1,null,null,null);t["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d0bdcad.a7a86020.js.map