(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cf0e1"],{"61a1":function(e,t,a){"use strict";a.r(t);var c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ABSListVuex",{attrs:{prop:e.propList,title:e.data.query_name},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-row",[a("b-col",{attrs:{md:"3"}},[a("ABSInputSelectList",{ref:"ref_batchno",attrs:{prop:e.PI_batchno,value:e.M_CB_SalesPaymentReceivedH.batchno,label:e.M_CB_SalesPaymentReceivedH.batchnoLabel},on:{change:e.OnbatchnoChange}})],1),a("b-col",{attrs:{md:"3"}},[a("ABSCompute",{ref:"ref_documentcount",attrs:{prop:e.PI_documentcount},model:{value:e.M_CB_SalesPaymentReceivedH.documentcount,callback:function(t){e.$set(e.M_CB_SalesPaymentReceivedH,"documentcount",t)},expression:"M_CB_SalesPaymentReceivedH.documentcount"}})],1),a("b-col",{attrs:{md:"3"}},[a("ABSCompute",{ref:"ref_batchtotal",attrs:{prop:e.PI_batchtotal},model:{value:e.M_CB_SalesPaymentReceivedH.batchtotal,callback:function(t){e.$set(e.M_CB_SalesPaymentReceivedH,"batchtotal",t)},expression:"M_CB_SalesPaymentReceivedH.batchtotal"}})],1),a("b-col",{attrs:{md:"3"}},[a("ABSinputCheckBox",{ref:"ref_batchtotal",attrs:{prop:e.PI_batchtotal},on:{input:e.OnbatchtotalChange},model:{value:e.M_CB_SalesPaymentReceivedH.batchtotal,callback:function(t){e.$set(e.M_CB_SalesPaymentReceivedH,"batchtotal",t)},expression:"M_CB_SalesPaymentReceivedH.batchtotal"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSCompute",{ref:"ref_currentdocumentcount",attrs:{prop:e.PI_currentdocumentcount},model:{value:e.M_CB_SalesPaymentReceivedH.currentdocumentcount,callback:function(t){e.$set(e.M_CB_SalesPaymentReceivedH,"currentdocumentcount",t)},expression:"M_CB_SalesPaymentReceivedH.currentdocumentcount"}})],1),a("b-col",{attrs:{md:"6"}},[a("ABSCompute",{ref:"ref_currentbatchtotal",attrs:{prop:e.PI_currentbatchtotal},model:{value:e.M_CB_SalesPaymentReceivedH.currentbatchtotal,callback:function(t){e.$set(e.M_CB_SalesPaymentReceivedH,"currentbatchtotal",t)},expression:"M_CB_SalesPaymentReceivedH.currentbatchtotal"}})],1)],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputCheckBox",{ref:"ref_status",attrs:{prop:e.PI_status},on:{input:e.OnstatusChange},model:{value:e.M_CB_SalesPaymentReceivedH.status,callback:function(t){e.$set(e.M_CB_SalesPaymentReceivedH,"status",t)},expression:"M_CB_SalesPaymentReceivedH.status"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_trxtype",attrs:{prop:e.PI_trxtype,value:e.M_CB_SalesPaymentReceivedH.trxtype,label:e.M_CB_SalesPaymentReceivedH.trxtypeLabel},on:{change:e.OnTrxTypeChange}})],1),a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_trxamt",attrs:{prop:e.PI_trxamt},model:{value:e.M_CB_SalesPaymentReceivedH.trxamt,callback:function(t){e.$set(e.M_CB_SalesPaymentReceivedH,"trxamt",t)},expression:"M_CB_SalesPaymentReceivedH.trxamt"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_paymentno",attrs:{prop:e.PI_paymentno},model:{value:e.M_CB_SalesPaymentReceivedH.paymentno,callback:function(t){e.$set(e.M_CB_SalesPaymentReceivedH,"paymentno",t)},expression:"M_CB_SalesPaymentReceivedH.paymentno"}})],1),a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_bankchargesamt",attrs:{prop:e.PI_bankchargesamt},model:{value:e.M_CB_SalesPaymentReceivedH.bankchargesamt,callback:function(t){e.$set(e.M_CB_SalesPaymentReceivedH,"bankchargesamt",t)},expression:"M_CB_SalesPaymentReceivedH.bankchargesamt"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputDateVuex",{ref:"ref_paymentdate",attrs:{prop:e.PI_paymentdate},model:{value:e.M_CB_SalesPaymentReceivedH.paymentdate,callback:function(t){e.$set(e.M_CB_SalesPaymentReceivedH,"paymentdate",t)},expression:"M_CB_SalesPaymentReceivedH.paymentdate"}})],1),a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_overpaymentamt",attrs:{prop:e.PI_overpaymentamt},model:{value:e.M_CB_SalesPaymentReceivedH.overpaymentamt,callback:function(t){e.$set(e.M_CB_SalesPaymentReceivedH,"overpaymentamt",t)},expression:"M_CB_SalesPaymentReceivedH.overpaymentamt"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_referenceno",attrs:{prop:e.PI_referenceno},model:{value:e.M_CB_SalesPaymentReceivedH.referenceno,callback:function(t){e.$set(e.M_CB_SalesPaymentReceivedH,"referenceno",t)},expression:"M_CB_SalesPaymentReceivedH.referenceno"}})],1),a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_underpaymentamt",attrs:{prop:e.PI_underpaymentamt},model:{value:e.M_CB_SalesPaymentReceivedH.underpaymentamt,callback:function(t){e.$set(e.M_CB_SalesPaymentReceivedH,"underpaymentamt",t)},expression:"M_CB_SalesPaymentReceivedH.underpaymentamt"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_descs",attrs:{prop:e.PI_descs},model:{value:e.M_CB_SalesPaymentReceivedH.descs,callback:function(t){e.$set(e.M_CB_SalesPaymentReceivedH,"descs",t)},expression:"M_CB_SalesPaymentReceivedH.descs"}})],1),a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_totalallocationamt",attrs:{prop:e.PI_totalallocationamt},model:{value:e.M_CB_SalesPaymentReceivedH.totalallocationamt,callback:function(t){e.$set(e.M_CB_SalesPaymentReceivedH,"totalallocationamt",t)},expression:"M_CB_SalesPaymentReceivedH.totalallocationamt"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_debtorcd",attrs:{prop:e.PI_debtorcd,value:e.M_CB_SalesPaymentReceivedH.debtorcd,label:e.M_CB_SalesPaymentReceivedH.debtorcdLabel},on:{change:e.OndebtorcdChange}})],1),a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_totalallocatedamt",attrs:{prop:e.PI_totalallocatedamt},model:{value:e.M_CB_SalesPaymentReceivedH.totalallocatedamt,callback:function(t){e.$set(e.M_CB_SalesPaymentReceivedH,"totalallocatedamt",t)},expression:"M_CB_SalesPaymentReceivedH.totalallocatedamt"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_paymentcd",attrs:{prop:e.PI_paymentcd,value:e.M_CB_SalesPaymentReceivedH.paymentcd,label:e.M_CB_SalesPaymentReceivedH.paymentcdLabel},on:{change:e.OnpaymentcdChange}})],1),a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_balance",attrs:{prop:e.PI_balance},model:{value:e.M_CB_SalesPaymentReceivedH.balance,callback:function(t){e.$set(e.M_CB_SalesPaymentReceivedH,"balance",t)},expression:"M_CB_SalesPaymentReceivedH.balance"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_bankcd",attrs:{prop:e.PI_bankcd,value:e.M_CB_SalesPaymentReceivedH.bankcd,label:e.M_CB_SalesPaymentReceivedH.bankcdLabel},on:{change:e.OnbankcdChange}})],1),a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_salesorno",attrs:{prop:e.PI_salesorno},model:{value:e.M_CB_SalesPaymentReceivedH.salesorno,callback:function(t){e.$set(e.M_CB_SalesPaymentReceivedH,"salesorno",t)},expression:"M_CB_SalesPaymentReceivedH.salesorno"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_currencycd",attrs:{prop:e.PI_currencycd},model:{value:e.M_CB_SalesPaymentReceivedH.currencycd,callback:function(t){e.$set(e.M_CB_SalesPaymentReceivedH,"currencycd",t)},expression:"M_CB_SalesPaymentReceivedH.currencycd"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_currencyrate",attrs:{prop:e.PI_currencyrate},model:{value:e.M_CB_SalesPaymentReceivedH.currencyrate,callback:function(t){e.$set(e.M_CB_SalesPaymentReceivedH,"currencyrate",t)},expression:"M_CB_SalesPaymentReceivedH.currencyrate"}})],1)],1),a("div",{staticClass:"div-collapse"},[a("span",{staticClass:"master-span-form"},[e._v("\n                                            Cheque / Reference No\n                                        ")])]),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_customerbankaccountno",attrs:{prop:e.PI_customerbankaccountno},model:{value:e.M_CB_SalesPaymentReceivedH.customerbankaccountno,callback:function(t){e.$set(e.M_CB_SalesPaymentReceivedH,"customerbankaccountno",t)},expression:"M_CB_SalesPaymentReceivedH.customerbankaccountno"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_chequereferenceno",attrs:{prop:e.PI_chequereferenceno},model:{value:e.M_CB_SalesPaymentReceivedH.chequereferenceno,callback:function(t){e.$set(e.M_CB_SalesPaymentReceivedH,"chequereferenceno",t)},expression:"M_CB_SalesPaymentReceivedH.chequereferenceno"}})],1),a("b-col",{attrs:{md:"6"}},[a("ABSinputDateVuex",{ref:"ref_chequereferencedate",attrs:{prop:e.PI_chequereferencedate},on:{input:e.OnchequereferencedateChange},model:{value:e.M_CB_SalesPaymentReceivedH.chequereferencedate,callback:function(t){e.$set(e.M_CB_SalesPaymentReceivedH,"chequereferencedate",t)},expression:"M_CB_SalesPaymentReceivedH.chequereferencedate"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_issuedbank",attrs:{prop:e.PI_issuedbank},model:{value:e.M_CB_SalesPaymentReceivedH.issuedbank,callback:function(t){e.$set(e.M_CB_SalesPaymentReceivedH,"issuedbank",t)},expression:"M_CB_SalesPaymentReceivedH.issuedbank"}})],1),a("b-col",{attrs:{md:"6"}},[a("ABSinputDateVuex",{ref:"ref_chequeduedate",attrs:{prop:e.PI_chequeduedate},on:{input:e.OnchequeduedateChange},model:{value:e.M_CB_SalesPaymentReceivedH.chequeduedate,callback:function(t){e.$set(e.M_CB_SalesPaymentReceivedH,"chequeduedate",t)},expression:"M_CB_SalesPaymentReceivedH.chequeduedate"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:e.PI_remarks},on:{input:e.OnremarksChange},model:{value:e.M_CB_SalesPaymentReceivedH.remarks,callback:function(t){e.$set(e.M_CB_SalesPaymentReceivedH,"remarks",t)},expression:"M_CB_SalesPaymentReceivedH.remarks"}})],1)],1)],1)],1),a("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)],1)},n=[],r=(a("ac6a"),a("ade3")),s={props:{PageLevel:"",TabIndex:"",data:""},data:function(){var e;return e={cInsertKey:"",FormType:"List",Module:"SM",propList:{initialWhere:"Source = 'S' AND PaymentStatus IN ('B','E') AND SubPortfolioCd = '"+this.getDataUser().subportfolio_cd+"'",LineNo:this.$parent.data.page_order,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},RunningCd:"",M_CB_SalesPaymentReceivedH:{batchno:0,source:"",runningcd:"",trxtype:"",trxtypeLabel:"",modulecd:"",paymentdate:"",descs:"",debtorcd:"",debtorcdLabel:"",paymentcategory:"",paymentno:"",documentcount:0,batchtotal:"",batchstatus:"",paymentcd:"",bankcd:"",bankcdLabel:"",currencycd:"",currencyrate:"0",taxrate:"",originalcurrencyrate:"",trxamt:"0",netamt:"",withholdingamt:"",vatamt:"",totalamt:"",overpaymentamt:"0",underpaymentamt:"0",bankchargesamt:"0",chequereferenceno:"",chequereferencedate:"",chequeduedate:"",issuedbank:"",remarks:"",trxtypedescs:"",paymentdescs:"",paymenttype:"",customerbankaccountno:"",bankname:"",runningdescs:"",userinput:"",useredit:this.getDataUser().user_id,lastupdatestamp:0,currentbatchtotal:0,currentdocumentcount:0,referenceno:"",totalallocationamt:"0",totalallocatedamt:"0",status:"",debtorname:"",salesorno:"",subportfoliocd:this.getDataUser().subportfolio_cd,basecurrencycd:"",currencyoperator:"",timeedit:"",rowid:0,balance:"0"},PI_batchno:{dataLookUp:{LookUpCd:"GetLookupCBBatch",ColumnDB:"BatchNo",InitialWhere:"SUBPORTFOLIOCD='"+this.getDataUser().subportfolio_cd+"'",ParamWhere:""},cValidate:"",cName:"batchno",cLabel:"",cKey:!1,cLabelSize:4,cOrder:1,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!1,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"CB/CB_BatchMaster",cDisplayColumn:"BatchNo,DocumentCount"},PI_documentcount:{cLabel:"Doc. Count",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!1},PI_batchtotal:{cLabel:"Batch Total",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!1}},Object(r["a"])(e,"PI_batchtotal",{cValidate:"",cName:"batchtotal",cLabel:"",cLabelSize:4,cOptions:[],cOrder:0,cKey:!1,cVisible:!1,cProtect:!1,cDefault:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex}),Object(r["a"])(e,"PI_currentdocumentcount",{cLabel:"Curr. Doc. Count",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!1}),Object(r["a"])(e,"PI_currentbatchtotal",{cLabel:"Curr. Batch Total  ",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!1}),Object(r["a"])(e,"PI_status",{cValidate:"",cName:"status",cLabel:"",cLabelSize:4,cOptions:[],cOrder:0,cKey:!1,cVisible:!1,cProtect:!1,cDefault:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex}),Object(r["a"])(e,"PI_trxtype",{dataLookUp:{LookUpCd:"GetLookupCBSalesPaymentReceivedTrxType",ColumnDB:"TrxType",InitialWhere:"SubPortfolioCd = '"+this.getDataUser().subportfolio_cd+"'",ParamWhere:""},cValidate:"required",cName:"transType",cLabel:"Trans. Type",cKey:!0,cLabelSize:4,cOrder:8,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"CB/CB_SubPortofolioTransType",cDisplayColumn:"TrxType,Descs"}),Object(r["a"])(e,"PI_trxamt",{cValidate:"",cName:"trxamt",cLabel:"Trans. Amount",cLabelSize:4,cOrder:10,cKey:!1,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex}),Object(r["a"])(e,"PI_paymentno",{cValidate:"max:20",cName:"paymentno",cLabel:"Payment No",cLabelSize:4,cOrder:3,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex}),Object(r["a"])(e,"PI_bankchargesamt",{cValidate:"",cName:"bankchargesamt",cLabel:"Bank Charges Amount",cLabelSize:4,cOrder:11,cKey:!1,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex}),Object(r["a"])(e,"PI_paymentdate",{cValidate:"required",cName:"paymentdate",cLabel:"Payment Date ",cLabelSize:4,cOrder:4,cKey:!1,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex}),Object(r["a"])(e,"PI_overpaymentamt",{cValidate:"",cName:"overpaymentamt",cLabel:"Over Payment Amount",cLabelSize:4,cOrder:12,cKey:!1,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex}),Object(r["a"])(e,"PI_referenceno",{cValidate:"max:20",cName:"referenceno",cLabel:"Reference No",cLabelSize:4,cOrder:5,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex}),Object(r["a"])(e,"PI_underpaymentamt",{cValidate:"",cName:"underpaymentamt",cLabel:"Under Payment Amount",cLabelSize:4,cOrder:13,cKey:!1,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex}),Object(r["a"])(e,"PI_descs",{cValidate:"max:150",cName:"descs",cLabel:"Description",cLabelSize:4,cOrder:6,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex}),Object(r["a"])(e,"PI_totalallocationamt",{cValidate:"",cName:"totalallocationamt",cLabel:"Total Allocation Amount",cLabelSize:4,cOrder:14,cKey:!1,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex}),Object(r["a"])(e,"PI_debtorcd",{dataLookUp:{LookUpCd:"GetLookupARDebtor",ColumnDB:"DebtorCd",InitialWhere:"SUBPORTFOLIOCD='"+this.getDataUser().subportfolio_cd+"' And Status='Y' And DebtorCd Not IN (Select ISNULL(UnidentifiedDebtorCd,'') From AR_Specification Where SubportfolioCd='"+this.getDataUser().subportfolio_cd+"')",ParamWhere:""},cValidate:"required",cName:"debtorcd",cLabel:"Debtor Code",cKey:!1,cLabelSize:4,cOrder:0,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"AR/AR_Debtor",cDisplayColumn:"DebtorCd,DebtorName"}),Object(r["a"])(e,"PI_totalallocatedamt",{cValidate:"",cName:"totalallocatedamt",cLabel:"Allocated Amount",cLabelSize:4,cOrder:15,cKey:!1,cType:"decimal",cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex}),Object(r["a"])(e,"PI_paymentcd",{dataLookUp:{LookUpCd:"GetLookupCMPaymentType",ColumnDB:"PaymentCd",InitialWhere:"",ParamWhere:""},cValidate:"required",cName:"paymentcd",cLabel:"Payment Type ",cKey:!1,cLabelSize:4,cOrder:8,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"CM/CM_PaymentType",cDisplayColumn:"PaymentCd,Descs"}),Object(r["a"])(e,"PI_balance",{cValidate:"",cName:"balance",cLabel:"Balance",cLabelSize:4,cOrder:16,cKey:!1,cType:"decimal",cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex}),Object(r["a"])(e,"PI_bankcd",{dataLookUp:{LookUpCd:"GetLookupCBBank",ColumnDB:"BankCd",InitialWhere:"",ParamWhere:""},cValidate:"required",cName:"bankcd",cLabel:"Bank",cKey:!1,cLabelSize:4,cOrder:0,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"CB/CB_Bank",cDisplayColumn:"BankCd,ContactId"}),Object(r["a"])(e,"PI_salesorno",{cValidate:"max:20",cName:"salesorno",cLabel:"Sales OR No",cLabelSize:4,cOrder:9,cKey:!1,cType:"text",cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex}),Object(r["a"])(e,"PI_currencycd",{cValidate:"max:13",cName:"currencycd",cLabel:"Currency",cLabelSize:4,cOrder:0,cKey:!0,cType:"text",cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex}),Object(r["a"])(e,"PI_currencyrate",{cValidate:"required",cName:"currencyrate",cLabel:"Currency Rate ",cLabelSize:4,cOrder:0,cKey:!1,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex}),Object(r["a"])(e,"PI_customerbankaccountno",{cValidate:"max:30",cName:"customerbankaccountno",cLabel:"Customer Bank A/C",cLabelSize:4,cOrder:17,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex}),Object(r["a"])(e,"PI_chequereferenceno",{cValidate:"max:20",cName:"chequereferenceno",cLabel:"Cheque / Ref. No",cLabelSize:4,cOrder:18,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex}),Object(r["a"])(e,"PI_chequereferencedate",{cValidate:"",cName:"chequereferencedate",cLabel:"Cheque / Ref. Date",cLabelSize:4,cOrder:0,cKey:!1,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex}),Object(r["a"])(e,"PI_issuedbank",{cValidate:"max:30",cName:"issuedbank",cLabel:"Issue Bank",cLabelSize:4,cOrder:19,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex}),Object(r["a"])(e,"PI_chequeduedate",{cValidate:"",cName:"chequeduedate",cLabel:"Due Date",cLabelSize:4,cOrder:21,cKey:!1,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex}),Object(r["a"])(e,"PI_remarks",{cValidate:"",cName:"remarks",cLabel:"Remarks",cLabelSize:4,cOrder:22,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex}),Object(r["a"])(e,"PTAnalysis",{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder}),e},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage1Data}},methods:{OnbatchnoChange:function(e){var t=this;this.$nextTick((function(){t.M_CB_SalesPaymentReceivedH.batchno=e.id,t.M_CB_SalesPaymentReceivedH.batchnoLabel=e.label,t.inputStatus})),this.$forceUpdate()},OnbatchtotalChange:function(e){var t=this;this.$nextTick((function(){t.inputStatus})),this.$forceUpdate()},OndebtorcdChange:function(e){var t=this;this.$nextTick((function(){t.M_CB_SalesPaymentReceivedH.debtorcd=e.id,t.M_CB_SalesPaymentReceivedH.debtorcdLabel=e.label,t.inputStatus})),this.$forceUpdate()},OnbankcdChange:function(e){var t=this;this.$nextTick((function(){t.M_CB_SalesPaymentReceivedH.bankcd=e.id,t.M_CB_SalesPaymentReceivedH.bankcdLabel=e.label,t.inputStatus})),this.$forceUpdate()},OnstatusChange:function(e){var t=this;this.$nextTick((function(){t.inputStatus})),this.$forceUpdate()},OnTrxTypeChange:function(e){var t=this;this.$nextTick((function(){t.M_CB_SalesPaymentReceivedH.trxtype=e.id,t.M_CB_SalesPaymentReceivedH.trxtypeLabel=e.label,"VIEW"!=t.inputStatus&&t.FnGetTrxTypeData(t.getDataUser().subportfolio_cd,"CB",e.id).then((function(a){if(null!=a){var c=a[0];if(t.M_CB_SalesPaymentReceivedH.runningcd=c.RunningCd,t.M_CB_SalesPaymentReceivedH.trxtypeLabel=e.id+t.separator+c.TrxTypeDescs,t.M_CB_SalesPaymentReceivedH.bankcd=c.DefaultBankCd,t.M_CB_SalesPaymentReceivedH.bankcdLabel=c.DefaultBankCd&&""!=c.DefaultBankCd?c.DefaultBankCd+t.separator:"","EDIT"!=t.inputStatus&&(""!=c.RunningCd?(t.M_CB_SalesPaymentReceivedH.paymentno="(auto)",t.PI_paymentno.cProtect=!0):(t.M_CB_SalesPaymentReceivedH.paymentno="",t.PI_paymentno.cProtect=!1)),c.DefaultBankCd&&""!=c.DefaultBankCd){var n={OptionFunctionCd:"GetBankCurrencyCd",ModuleCd:"CB",SubPortfolioCd:t.getDataUser().subportfolio_cd,BankCd:c.DefaultBankCd,BankCurrencyCd_Output:""};t.FnDynamicFunction(n).then((function(e){if(null!=e&&(t.M_CB_SalesPaymentReceivedH.currencycd=e.BankCurrencyCd,t.M_CB_SalesPaymentReceivedH.paymentdate&&""!=t.M_CB_SalesPaymentReceivedH.paymentdate)){var a={OptionFunctionCd:"GetRevaluationCurrencyRate",ModuleCd:"CB",RevaluationCurrencyRate_Output:"",BankCd:e.BankCurrencyCd,SubPortfolioCd:t.getDataUser().subportfolio_cd,PaymentDate:t.M_CB_SalesPaymentReceivedH.paymentdate};t.FnDynamicFunction(a).then((function(e){t.M_CB_SalesPaymentReceivedH.currencyrate=t.isCurrency(e.RevaluationCurrencyRate,t.decimal)}))}}))}}}))})),this.$forceUpdate()},OnpaymentcdChange:function(e){var t=this;this.$nextTick((function(){t.M_CB_SalesPaymentReceivedH.paymentcd=e.id,t.M_CB_SalesPaymentReceivedH.paymentcdLabel=e.label,t.inputStatus})),this.$forceUpdate()},OnchequereferencedateChange:function(e){var t=this;this.$nextTick((function(){t.inputStatus})),this.$forceUpdate()},OnchequeduedateChange:function(e){var t=this;this.$nextTick((function(){t.inputStatus})),this.$forceUpdate()},OnremarksChange:function(e){var t=this;this.$nextTick((function(){t.inputStatus})),this.$forceUpdate()},setToolbarButton:function(){this.getToolbar().statusFunction[4].disabled=!1,this.getToolbar().statusFunction[4].text="Post"},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){},M_Post:function(e){var t=this,a=[],c=this.FormToABSList().getRowSelected();c.forEach((function(e){a.push({SubPortfolioCd:t.getDataUser().subportfolio_cd,BatchNo:e.BatchNo,PostBy:t.getDataUser().user_id,_Message_:"Payment No "+e.PaymentNo})}));var n={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:0,Data:a};this.postJSONMulti(this.getUrlPostMulti(),n).then((function(e){null!=e&&(t.$store.commit("setEventStatus","POST"),t.FormToABSList().doGetList("","eb_getList"))}))},M_Insert:function(){var e=this;if(""!=this.M_CB_SalesPaymentReceivedH.runningcd)this.FnGenerateRunningCode(this.getDataUser().subportfolio_cd,this.M_CB_SalesPaymentReceivedH.runningcd,this.getDataUser().user_id,this.M_CB_SalesPaymentReceivedH.paymentdate).then((function(t){if(null!=t){e.M_CB_SalesPaymentReceivedH.paymentno=t.RunningCode;var a={OptionSeq:e.getOptionSeq().OptionSeq,LineNo:e.$parent.data.page_order,SubPortfolioCd:e.getDataUser().subportfolio_cd,TrxType:""==e.M_CB_SalesPaymentReceivedH.trxtype||null==e.M_CB_SalesPaymentReceivedH.trxtype?"NULL":e.M_CB_SalesPaymentReceivedH.trxtype,PaymentNo:e.M_CB_SalesPaymentReceivedH.paymentno,BatchNo:0,PaymentDate:""==e.M_CB_SalesPaymentReceivedH.paymentdate||null==e.M_CB_SalesPaymentReceivedH.paymentdate?"NULL":e.M_CB_SalesPaymentReceivedH.paymentdate,Descs:e.M_CB_SalesPaymentReceivedH.descs,DebtorCd:""==e.M_CB_SalesPaymentReceivedH.debtorcd||null==e.M_CB_SalesPaymentReceivedH.debtorcd?"NULL":e.M_CB_SalesPaymentReceivedH.debtorcd,BankChargesAmt:e.M_CB_SalesPaymentReceivedH.bankchargesamt?e.replaceAllString(e.M_CB_SalesPaymentReceivedH.bankchargesamt,",","","number"):0,OverPaymentAmt:e.M_CB_SalesPaymentReceivedH.overpaymentamt?e.replaceAllString(e.M_CB_SalesPaymentReceivedH.overpaymentamt,",","","number"):0,UnderPaymentAmt:e.M_CB_SalesPaymentReceivedH.underpaymentamt?e.replaceAllString(e.M_CB_SalesPaymentReceivedH.underpaymentamt,",","","number"):0,PaymentCd:""==e.M_CB_SalesPaymentReceivedH.paymentcd||null==e.M_CB_SalesPaymentReceivedH.paymentcd?"NULL":e.M_CB_SalesPaymentReceivedH.paymentcd,BankCd:""==e.M_CB_SalesPaymentReceivedH.bankcd||null==e.M_CB_SalesPaymentReceivedH.bankcd?"NULL":e.M_CB_SalesPaymentReceivedH.bankcd,CurrencyCd:e.M_CB_SalesPaymentReceivedH.currencycd,CurrencyRate:e.M_CB_SalesPaymentReceivedH.currencyrate?e.replaceAllString(e.M_CB_SalesPaymentReceivedH.currencyrate,",","","number"):0,TrxAmt:e.M_CB_SalesPaymentReceivedH.trxamt?e.replaceAllString(e.M_CB_SalesPaymentReceivedH.trxamt,",","","number"):0,TaxCurrencyRate:e.M_CB_SalesPaymentReceivedH.taxcurrencyrate?e.replaceAllString(e.M_CB_SalesPaymentReceivedH.taxcurrencyrate,",","","number"):0,ChequeReferenceNo:e.M_CB_SalesPaymentReceivedH.chequereferenceno,ChequeReferenceDate:""==e.M_CB_SalesPaymentReceivedH.chequereferencedate||null==e.M_CB_SalesPaymentReceivedH.chequereferencedate?"NULL":e.M_CB_SalesPaymentReceivedH.chequereferencedate,ChequeDueDate:""==e.M_CB_SalesPaymentReceivedH.chequeduedate||null==e.M_CB_SalesPaymentReceivedH.chequeduedate?"NULL":e.M_CB_SalesPaymentReceivedH.chequeduedate,IssuedBank:e.M_CB_SalesPaymentReceivedH.issuedbank,Remarks:e.M_CB_SalesPaymentReceivedH.remarks,UserInput:e.getDataUser().user_id,EntryType:"S",PaymentCategory:"I",ReferenceNo:e.M_CB_SalesPaymentReceivedH.referenceno,CustomerBankAccountNo:e.M_CB_SalesPaymentReceivedH.customerbankaccountno};e.postJSON(e.getUrlInsert(),a).then((function(t){null!=t&&e.$parent.resultInsert(t.Message)}))}}));else{var t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,SubPortfolioCd:this.getDataUser().subportfolio_cd,TrxType:""==this.M_CB_SalesPaymentReceivedH.trxtype||null==this.M_CB_SalesPaymentReceivedH.trxtype?"NULL":this.M_CB_SalesPaymentReceivedH.trxtype,PaymentNo:this.M_CB_SalesPaymentReceivedH.paymentno,BatchNo:0,PaymentDate:""==this.M_CB_SalesPaymentReceivedH.paymentdate||null==this.M_CB_SalesPaymentReceivedH.paymentdate?"NULL":this.M_CB_SalesPaymentReceivedH.paymentdate,Descs:this.M_CB_SalesPaymentReceivedH.descs,DebtorCd:""==this.M_CB_SalesPaymentReceivedH.debtorcd||null==this.M_CB_SalesPaymentReceivedH.debtorcd?"NULL":this.M_CB_SalesPaymentReceivedH.debtorcd,BankChargesAmt:this.M_CB_SalesPaymentReceivedH.bankchargesamt?this.replaceAllString(this.M_CB_SalesPaymentReceivedH.bankchargesamt,",","","number"):0,OverPaymentAmt:this.M_CB_SalesPaymentReceivedH.overpaymentamt?this.replaceAllString(this.M_CB_SalesPaymentReceivedH.overpaymentamt,",","","number"):0,UnderPaymentAmt:this.M_CB_SalesPaymentReceivedH.underpaymentamt?this.replaceAllString(this.M_CB_SalesPaymentReceivedH.underpaymentamt,",","","number"):0,PaymentCd:""==this.M_CB_SalesPaymentReceivedH.paymentcd||null==this.M_CB_SalesPaymentReceivedH.paymentcd?"NULL":this.M_CB_SalesPaymentReceivedH.paymentcd,BankCd:""==this.M_CB_SalesPaymentReceivedH.bankcd||null==this.M_CB_SalesPaymentReceivedH.bankcd?"NULL":this.M_CB_SalesPaymentReceivedH.bankcd,CurrencyCd:this.M_CB_SalesPaymentReceivedH.currencycd,CurrencyRate:this.M_CB_SalesPaymentReceivedH.currencyrate?this.replaceAllString(this.M_CB_SalesPaymentReceivedH.currencyrate,",","","number"):0,TrxAmt:this.M_CB_SalesPaymentReceivedH.trxamt?this.replaceAllString(this.M_CB_SalesPaymentReceivedH.trxamt,",","","number"):0,TaxCurrencyRate:this.M_CB_SalesPaymentReceivedH.taxcurrencyrate?this.replaceAllString(this.M_CB_SalesPaymentReceivedH.taxcurrencyrate,",","","number"):0,ChequeReferenceNo:this.M_CB_SalesPaymentReceivedH.chequereferenceno,ChequeReferenceDate:""==this.M_CB_SalesPaymentReceivedH.chequereferencedate||null==this.M_CB_SalesPaymentReceivedH.chequereferencedate?"NULL":this.M_CB_SalesPaymentReceivedH.chequereferencedate,ChequeDueDate:""==this.M_CB_SalesPaymentReceivedH.chequeduedate||null==this.M_CB_SalesPaymentReceivedH.chequeduedate?"NULL":this.M_CB_SalesPaymentReceivedH.chequeduedate,IssuedBank:this.M_CB_SalesPaymentReceivedH.issuedbank,Remarks:this.M_CB_SalesPaymentReceivedH.remarks,UserInput:this.getDataUser().user_id,EntryType:"S",PaymentCategory:"I",ReferenceNo:this.M_CB_SalesPaymentReceivedH.referenceno,CustomerBankAccountNo:this.M_CB_SalesPaymentReceivedH.customerbankaccountno};this.postJSON(this.getUrlInsert(),t).then((function(t){null!=t&&e.$parent.resultInsert(t.Message)}))}},M_Update:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,SubPortfolioCd:this.getDataUser().subportfolio_cd,BatchNo:""==this.M_CB_SalesPaymentReceivedH.batchno||null==this.M_CB_SalesPaymentReceivedH.batchno?"NULL":this.M_CB_SalesPaymentReceivedH.batchno,TrxType:""==this.M_CB_SalesPaymentReceivedH.trxtype||null==this.M_CB_SalesPaymentReceivedH.trxtype?"NULL":this.M_CB_SalesPaymentReceivedH.trxtype,PaymentNo:this.M_CB_SalesPaymentReceivedH.paymentno,PaymentDate:""==this.M_CB_SalesPaymentReceivedH.paymentdate||null==this.M_CB_SalesPaymentReceivedH.paymentdate?"NULL":this.M_CB_SalesPaymentReceivedH.paymentdate,Descs:this.M_CB_SalesPaymentReceivedH.descs,DebtorCd:""==this.M_CB_SalesPaymentReceivedH.debtorcd||null==this.M_CB_SalesPaymentReceivedH.debtorcd?"NULL":this.M_CB_SalesPaymentReceivedH.debtorcd,TrxAmt:this.M_CB_SalesPaymentReceivedH.trxamt?this.replaceAllString(this.M_CB_SalesPaymentReceivedH.trxamt,",","","number"):0,BankChargesAmt:this.M_CB_SalesPaymentReceivedH.bankchargesamt?this.replaceAllString(this.M_CB_SalesPaymentReceivedH.bankchargesamt,",","","number"):0,OverPaymentAmt:this.M_CB_SalesPaymentReceivedH.overpaymentamt?this.replaceAllString(this.M_CB_SalesPaymentReceivedH.overpaymentamt,",","","number"):0,UnderPaymentAmt:this.M_CB_SalesPaymentReceivedH.underpaymentamt?this.replaceAllString(this.M_CB_SalesPaymentReceivedH.underpaymentamt,",","","number"):0,PaymentCd:""==this.M_CB_SalesPaymentReceivedH.paymentcd||null==this.M_CB_SalesPaymentReceivedH.paymentcd?"NULL":this.M_CB_SalesPaymentReceivedH.paymentcd,BankCd:""==this.M_CB_SalesPaymentReceivedH.bankcd||null==this.M_CB_SalesPaymentReceivedH.bankcd?"NULL":this.M_CB_SalesPaymentReceivedH.bankcd,CurrencyCd:this.M_CB_SalesPaymentReceivedH.currencycd,CurrencyRate:this.M_CB_SalesPaymentReceivedH.currencyrate?this.replaceAllString(this.M_CB_SalesPaymentReceivedH.currencyrate,",","","number"):0,TaxCurrencyRate:this.M_CB_SalesPaymentReceivedH.taxcurrencyrate?this.replaceAllString(this.M_CB_SalesPaymentReceivedH.taxcurrencyrate,",","","number"):0,ChequeReferenceNo:this.M_CB_SalesPaymentReceivedH.chequereferenceno,ChequeReferenceDate:""==this.M_CB_SalesPaymentReceivedH.chequereferencedate||null==this.M_CB_SalesPaymentReceivedH.chequereferencedate?"NULL":this.M_CB_SalesPaymentReceivedH.chequereferencedate,ChequeDueDate:""==this.M_CB_SalesPaymentReceivedH.chequeduedate||null==this.M_CB_SalesPaymentReceivedH.chequeduedate?"NULL":this.M_CB_SalesPaymentReceivedH.chequeduedate,IssuedBank:this.M_CB_SalesPaymentReceivedH.issuedbank,Remarks:this.M_CB_SalesPaymentReceivedH.remarks,UserEdit:this.getDataUser().user_id,EntryType:"S",ReferenceNo:this.M_CB_SalesPaymentReceivedH.referenceno,LastUpdateStamp:this.M_CB_SalesPaymentReceivedH.lastupdatestamp,CustomerBankAccountNo:this.M_CB_SalesPaymentReceivedH.customerbankaccountno};this.postJSON(this.getUrlUpdate(),t).then((function(t){null!=t&&e.$parent.resultUpdate(t.Message)}))},M_ClearForm:function(){this.M_CB_SalesPaymentReceivedH={batchno:0,source:"",runningcd:"",trxtype:"",modulecd:"",paymentdate:"",descs:"",debtorcd:"",debtorcdLabel:"",paymentcategory:"",paymentno:"",documentcount:0,batchtotal:"",batchstatus:"",paymentcd:"",bankcd:"",bankcdLabel:"",currencycd:"",currencyrate:"0",taxrate:"",originalcurrencyrate:"",trxamt:"0",netamt:"",withholdingamt:"",vatamt:"",totalamt:"",overpaymentamt:"0",underpaymentamt:"0",bankchargesamt:"0",chequereferenceno:"",chequereferencedate:"",chequeduedate:"",issuedbank:"",remarks:"",trxtypedescs:"",paymentdescs:"",paymenttype:"",customerbankaccountno:"",bankname:"",runningdescs:"",userinput:"",useredit:this.getDataUser().user_id,lastupdatestamp:0,currentbatchtotal:0,currentdocumentcount:0,referenceno:"",totalallocationamt:"0",totalallocatedamt:"0",status:"",debtorname:"",salesorno:"",subportfoliocd:this.getDataUser().subportfolio_cd,basecurrencycd:"",currencyoperator:"",timeedit:"",rowid:0,balance:"0"}},M_New:function(){},M_Edit:function(){},M_Delete:function(e){var t=this,a=this.FormToABSList().getRowSelected(),c=[];a.forEach((function(e){c.push({SubPortfolioCd:t.getDataUser().subportfolio_cd,EntryType:"S",PaymentNo:e.PaymentNo,BatchNo:e.BatchNo,UserEdit:t.getDataUser().user_id,LastUpdateStamp:e.LastUpdateStamp,_Message_:""})}));var n={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,Data:c};this.postJSONMulti(this.getUrlDeleteMulti(),n).then((function(e){null!=e&&t.$parent.resultDelete()}))},getDataBy:function(e){var t=this,a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,SubPortfolioCd:this.getDataUser().subportfolio_cd,paymentno:e.PaymentNo};this.postJSON(this.getUrlById(),a).then((function(a){if(null!=a){var c=a.Data[0];t.M_CB_SalesPaymentReceivedH={batchno:c.batchno,source:c.source,runningcd:c.runningcd,trxtype:c.trxtype,modulecd:c.modulecd,paymentdate:c.paymentdate,descs:c.descs,debtorcd:c.debtorcd,paymentcategory:c.paymentcategory,paymentno:c.paymentno,documentcount:c.documentcount,batchtotal:c.batchtotal,batchstatus:c.batchstatus,paymentcd:c.paymentcd,bankcd:c.bankcd,currencycd:c.currencycd,currencyrate:t.isCurrency(c.currencyrate,t.decimal),taxrate:c.taxrate,originalcurrencyrate:c.originalcurrencyrate,trxamt:t.isCurrency(c.trxamt,t.decimal),netamt:t.isCurrency(c.netamt,t.decimal),withholdingamt:t.isCurrency(c.withholdingamt,t.decimal),vatamt:t.isCurrency(c.vatamt,t.decimal),totalamt:t.isCurrency(c.totalamt,t.decimal),overpaymentamt:t.isCurrency(c.overpaymentamt,t.decimal),underpaymentamt:t.isCurrency(c.underpaymentamt,t.decimal),bankchargesamt:t.isCurrency(c.bankchargesamt,t.decimal),chequereferenceno:c.chequereferenceno,chequereferencedate:c.chequereferencedate,chequeduedate:c.chequeduedate,issuedbank:c.issuedbank,remarks:c.remarks,trxtypedescs:c.trxtypedescs,paymentdescs:c.paymentdescs,paymenttype:c.paymenttype,customerbankaccountno:c.customerbankaccountno,bankname:c.bankname,runningdescs:c.runningdescs,userinput:c.userinput,useredit:c.useredit,lastupdatestamp:e.LastUpdateStamp,currentbatchtotal:c.currentbatchtotal,currentdocumentcount:c.currentdocumentcount,referenceno:c.referenceno,totalallocationamt:t.isCurrency(c.totalallocationamt,t.decimal),totalallocatedamt:t.isCurrency(c.totalallocatedamt,t.decimal),status:c.status,debtorname:c.debtorname,salesorno:c.salesorno,subportfoliocd:c.subportfoliocd,basecurrencycd:c.basecurrencycd,currencyoperator:c.currencyoperator,timeedit:c.timeedit,rowid:c.rowid,balance:t.isCurrency(c.TotalAllocationAmt-c.TotalAllocatedAmt,t.decimal,"a")},t.M_CB_SalesPaymentReceivedH.batchnoLabel=null!=t.M_CB_SalesPaymentReceivedH.batchno&&""!=t.M_CB_SalesPaymentReceivedH.batchno?c.batchno+t.separator:"",t.M_CB_SalesPaymentReceivedH.paymentcdLabel=null!=t.M_CB_SalesPaymentReceivedH.paymentcd&&""!=t.M_CB_SalesPaymentReceivedH.paymentcd?c.paymentcd+t.separator+c.paymentdescs:"",t.M_CB_SalesPaymentReceivedH.trxtypeLabel=null!=t.M_CB_SalesPaymentReceivedH.trxtype&&""!=t.M_CB_SalesPaymentReceivedH.trxtype?c.trxtype+t.separator+c.trxtypedescs:"",t.M_CB_SalesPaymentReceivedH.debtorcdLabel=null!=t.M_CB_SalesPaymentReceivedH.debtorcd&&""!=t.M_CB_SalesPaymentReceivedH.debtorcd?c.debtorcd+t.separator+c.debtorname:"",t.M_CB_SalesPaymentReceivedH.bankcdLabel=null!=t.M_CB_SalesPaymentReceivedH.bankcd&&""!=t.M_CB_SalesPaymentReceivedH.bankcd?c.bankcd+t.separator+c.bankname:"",t.IEBy.Input=c.userinput,t.IEBy.Edit=c.useredit}}))}},beforeCreate:function(){},created:function(){this.$store.commit("setFormType","List"),this.getToolbar().ProcessPS()},beforeMount:function(){},mounted:function(){this.hideSideBarMenu(),this.FormToABSList().doGetList("","eb_getList")},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},i=s,l=a("2877"),o=Object(l["a"])(i,c,n,!1,null,null,null);t["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d0cf0e1.e4cca775.js.map