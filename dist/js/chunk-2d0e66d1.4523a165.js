(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e66d1"],{9961:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ABSListVuex",{attrs:{prop:e.propList,title:e.data.query_name},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputCheckBox",{ref:"ref_depositallocationpostingstatus",attrs:{prop:e.PI_depositallocationpostingstatus},on:{input:e.OndepositallocationpostingstatusChange},model:{value:e.M_CB_DepositAllocationH.depositallocationpostingstatus,callback:function(t){e.$set(e.M_CB_DepositAllocationH,"depositallocationpostingstatus",t)},expression:"M_CB_DepositAllocationH.depositallocationpostingstatus"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_trxtype",attrs:{prop:e.PI_trxtype},on:{input:e.OntrxtypeChange},model:{value:e.M_CB_DepositAllocationH.trxtypeLabel,callback:function(t){e.$set(e.M_CB_DepositAllocationH,"trxtypeLabel",t)},expression:"M_CB_DepositAllocationH.trxtypeLabel"}})],1),a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_trxamt",attrs:{prop:e.PI_trxamt},model:{value:e.M_CB_DepositAllocationH.trxamt,callback:function(t){e.$set(e.M_CB_DepositAllocationH,"trxamt",t)},expression:"M_CB_DepositAllocationH.trxamt"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_paymentno",attrs:{prop:e.PI_paymentno},model:{value:e.M_CB_DepositAllocationH.paymentno,callback:function(t){e.$set(e.M_CB_DepositAllocationH,"paymentno",t)},expression:"M_CB_DepositAllocationH.paymentno"}})],1),a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_bankchargesamt",attrs:{prop:e.PI_bankchargesamt},model:{value:e.M_CB_DepositAllocationH.bankchargesamt,callback:function(t){e.$set(e.M_CB_DepositAllocationH,"bankchargesamt",t)},expression:"M_CB_DepositAllocationH.bankchargesamt"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputDateVuex",{ref:"ref_paymentdate",attrs:{prop:e.PI_paymentdate},model:{value:e.M_CB_DepositAllocationH.paymentdate,callback:function(t){e.$set(e.M_CB_DepositAllocationH,"paymentdate",t)},expression:"M_CB_DepositAllocationH.paymentdate"}})],1),a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_overpaymentamt",attrs:{prop:e.PI_overpaymentamt},model:{value:e.M_CB_DepositAllocationH.overpaymentamt,callback:function(t){e.$set(e.M_CB_DepositAllocationH,"overpaymentamt",t)},expression:"M_CB_DepositAllocationH.overpaymentamt"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputDateVuex",{ref:"ref_depositallocationdate",attrs:{prop:e.PI_depositallocationdate},on:{input:e.OndepositallocationdateChange},model:{value:e.M_CB_DepositAllocationH.depositallocationdate,callback:function(t){e.$set(e.M_CB_DepositAllocationH,"depositallocationdate",t)},expression:"M_CB_DepositAllocationH.depositallocationdate"}})],1),a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_underpaymentamt",attrs:{prop:e.PI_underpaymentamt},model:{value:e.M_CB_DepositAllocationH.underpaymentamt,callback:function(t){e.$set(e.M_CB_DepositAllocationH,"underpaymentamt",t)},expression:"M_CB_DepositAllocationH.underpaymentamt"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_referenceno",attrs:{prop:e.PI_referenceno},model:{value:e.M_CB_DepositAllocationH.referenceno,callback:function(t){e.$set(e.M_CB_DepositAllocationH,"referenceno",t)},expression:"M_CB_DepositAllocationH.referenceno"}})],1),a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_totalallocationamt",attrs:{prop:e.PI_totalallocationamt},model:{value:e.M_CB_DepositAllocationH.totalallocationamt,callback:function(t){e.$set(e.M_CB_DepositAllocationH,"totalallocationamt",t)},expression:"M_CB_DepositAllocationH.totalallocationamt"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_descs",attrs:{prop:e.PI_descs},model:{value:e.M_CB_DepositAllocationH.descs,callback:function(t){e.$set(e.M_CB_DepositAllocationH,"descs",t)},expression:"M_CB_DepositAllocationH.descs"}})],1),a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_totalallocatedamt",attrs:{prop:e.PI_totalallocatedamt},model:{value:e.M_CB_DepositAllocationH.totalallocatedamt,callback:function(t){e.$set(e.M_CB_DepositAllocationH,"totalallocatedamt",t)},expression:"M_CB_DepositAllocationH.totalallocatedamt"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_debtorcd",attrs:{prop:e.PI_debtorcd,value:e.M_CB_DepositAllocationH.debtorcd,label:e.M_CB_DepositAllocationH.debtorcdLabel},on:{change:e.OndebtorcdChange}})],1),a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_balance",attrs:{prop:e.PI_balance},model:{value:e.M_CB_DepositAllocationH.balance,callback:function(t){e.$set(e.M_CB_DepositAllocationH,"balance",t)},expression:"M_CB_DepositAllocationH.balance"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_paymentcd",attrs:{prop:e.PI_paymentcd},model:{value:e.M_CB_DepositAllocationH.paymentcdLabel,callback:function(t){e.$set(e.M_CB_DepositAllocationH,"paymentcdLabel",t)},expression:"M_CB_DepositAllocationH.paymentcdLabel"}})],1),a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_salesorno",attrs:{prop:e.PI_salesorno},model:{value:e.M_CB_DepositAllocationH.salesorno,callback:function(t){e.$set(e.M_CB_DepositAllocationH,"salesorno",t)},expression:"M_CB_DepositAllocationH.salesorno"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_bankcd",attrs:{prop:e.PI_bankcd},model:{value:e.M_CB_DepositAllocationH.bankcdLabel,callback:function(t){e.$set(e.M_CB_DepositAllocationH,"bankcdLabel",t)},expression:"M_CB_DepositAllocationH.bankcdLabel"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_currencycd",attrs:{prop:e.PI_currencycd},model:{value:e.M_CB_DepositAllocationH.currencycd,callback:function(t){e.$set(e.M_CB_DepositAllocationH,"currencycd",t)},expression:"M_CB_DepositAllocationH.currencycd"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_currencyrate",attrs:{prop:e.PI_currencyrate},model:{value:e.M_CB_DepositAllocationH.currencyrate,callback:function(t){e.$set(e.M_CB_DepositAllocationH,"currencyrate",t)},expression:"M_CB_DepositAllocationH.currencyrate"}})],1)],1),a("div",{staticClass:"div-collapse"},[a("span",{staticClass:"master-span-form"},[e._v("\n                                            Cheque / Reference No\n                                        ")])]),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_customerbankaccountno",attrs:{prop:e.PI_customerbankaccountno},model:{value:e.M_CB_DepositAllocationH.customerbankaccountno,callback:function(t){e.$set(e.M_CB_DepositAllocationH,"customerbankaccountno",t)},expression:"M_CB_DepositAllocationH.customerbankaccountno"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_chequereferenceno",attrs:{prop:e.PI_chequereferenceno},model:{value:e.M_CB_DepositAllocationH.chequereferenceno,callback:function(t){e.$set(e.M_CB_DepositAllocationH,"chequereferenceno",t)},expression:"M_CB_DepositAllocationH.chequereferenceno"}})],1),a("b-col",{attrs:{md:"6"}},[a("ABSinputDateVuex",{ref:"ref_chequereferencedate",attrs:{prop:e.PI_chequereferencedate},model:{value:e.M_CB_DepositAllocationH.chequereferencedate,callback:function(t){e.$set(e.M_CB_DepositAllocationH,"chequereferencedate",t)},expression:"M_CB_DepositAllocationH.chequereferencedate"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_issuedbank",attrs:{prop:e.PI_issuedbank},model:{value:e.M_CB_DepositAllocationH.issuedbank,callback:function(t){e.$set(e.M_CB_DepositAllocationH,"issuedbank",t)},expression:"M_CB_DepositAllocationH.issuedbank"}})],1),a("b-col",{attrs:{md:"6"}},[a("ABSinputDateVuex",{ref:"ref_chequeduedate",attrs:{prop:e.PI_chequeduedate},model:{value:e.M_CB_DepositAllocationH.chequeduedate,callback:function(t){e.$set(e.M_CB_DepositAllocationH,"chequeduedate",t)},expression:"M_CB_DepositAllocationH.chequeduedate"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:e.PI_remarks},on:{input:e.OnremarksChange},model:{value:e.M_CB_DepositAllocationH.remarks,callback:function(t){e.$set(e.M_CB_DepositAllocationH,"remarks",t)},expression:"M_CB_DepositAllocationH.remarks"}})],1)],1)],1)],1),a("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)],1)},c=[],n=(a("ac6a"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{cInsertKey:"",FormType:"ListProcess",Module:"SM",propList:{initialWhere:"SubPortfolioCd = '"+this.getDataUser().subportfolio_cd+"'",LineNo:this.$parent.data.page_order,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},RunningCd:"",M_CB_DepositAllocationH:{batchno:0,source:"",runningcd:"",trxtype:"",trxtypeLabel:"",paymentcdLabel:"",bankcdLabel:"",modulecd:"",paymentdate:"",depositallocationdate:"",descs:"",debtorcd:"",debtorcdLabel:"",debtorname:"",paymentcategory:"",paymentno:"",documentcount:0,batchtotal:0,batchstatus:"",paymentcd:"",bankcd:"",currencycd:"",currencyrate:"0",taxrate:0,originalcurrencyrate:0,trxamt:"0",netamt:0,withholdingamt:0,vatamt:0,totalamt:0,overpaymentamt:"0",underpaymentamt:"0",bankchargesamt:"0",chequereferenceno:"",chequereferencedate:"",chequeduedate:"",issuedbank:"",remarks:"",trxtypedescs:"",paymentdescs:"",paymenttype:"",customerbankaccountno:"",bankname:"",runningdescs:"",userinput:"",useredit:this.getDataUser().user_id,lastupdatestamp:0,currentbatchtotal:0,currentdocumentcount:0,referenceno:"",totalallocationamt:"0",totalallocatedamt:"0",status:"",depositallocationpostingstatus:"",salesorno:"",subportfoliocd:this.getDataUser().subportfolio_cd,timeedit:"",balance:"0"},PI_depositallocationpostingstatus:{cValidate:"",cName:"depositallocationpostingstatus",cLabel:"",cLabelSize:4,cOptions:[],cOrder:0,cKey:!0,cVisible:!0,cProtect:!1,cDefault:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_trxtype:{cValidate:"required",cName:"trxtype",cLabel:"Trans. Type",cLabelSize:4,cOrder:2,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_trxtypedescs:{cLabel:"",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!1},PI_trxamt:{cValidate:"",cName:"trxamt",cLabel:"Trans. Amount",cLabelSize:4,cOrder:10,cKey:!0,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_paymentno:{cValidate:"required",cName:"paymentno",cLabel:"Payment No",cLabelSize:4,cOrder:3,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_bankchargesamt:{cValidate:"",cName:"bankchargesamt",cLabel:"Bank Charges Amount",cLabelSize:4,cOrder:11,cKey:!0,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_paymentdate:{cValidate:"required",cName:"paymentdate",cLabel:"Payment Date ",cLabelSize:4,cOrder:4,cKey:!0,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_overpaymentamt:{cValidate:"",cName:"overpaymentamt",cLabel:"Over Payment Amount",cLabelSize:4,cOrder:12,cKey:!1,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_depositallocationdate:{cValidate:"required",cName:"depositallocationdate",cLabel:"Deposit Alloc. Date ",cLabelSize:4,cOrder:4,cKey:!1,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_underpaymentamt:{cValidate:"",cName:"underpaymentamt",cLabel:"Under Payment Amount",cLabelSize:4,cOrder:13,cKey:!1,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_referenceno:{cValidate:"",cName:"referenceno",cLabel:"Reference No",cLabelSize:4,cOrder:5,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_totalallocationamt:{cValidate:"",cName:"totalallocationamt",cLabel:"Total Allocation Amount",cLabelSize:4,cOrder:14,cKey:!0,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_descs:{cValidate:"",cName:"descs",cLabel:"Description",cLabelSize:4,cOrder:6,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_totalallocatedamt:{cValidate:"",cName:"totalallocatedamt",cLabel:"Allocated Amount",cLabelSize:4,cOrder:15,cKey:!0,cType:"decimal",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_debtorcd:{dataLookUp:{LookUpCd:"GetLookupARDebtor",ColumnDB:"DebtorCd",InitialWhere:"SUBPORTFOLIOCD='"+this.getDataUser().subportfolio_cd+"' And Status='Y' And DebtorCd Not IN (Select ISNULL(UnidentifiedDebtorCd,'') From AR_Specification Where SubportfolioCd='"+this.getDataUser().subportfolio_cd+"')",ParamWhere:""},cValidate:"required",cName:"debtorcd",cLabel:"Debtor Code",cKey:!1,cLabelSize:4,cOrder:0,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"AR/AR_Debtor",cDisplayColumn:"DebtorCd,DebtorName"},PI_balance:{cValidate:"",cName:"balance",cLabel:"Balance",cLabelSize:4,cOrder:16,cKey:!0,cType:"decimal",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_paymentcd:{cValidate:"",cName:"paymentcd",cLabel:"Payment Type ",cLabelSize:4,cOrder:8,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_paymentdescs:{cLabel:"",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!1},PI_salesorno:{cValidate:"",cName:"salesorno",cLabel:"Sales OR No",cLabelSize:4,cOrder:8,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_bankcd:{cValidate:"required",cName:"bankcd",cLabel:"Bank ",cLabelSize:4,cOrder:9,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_currencycd:{cValidate:"",cName:"currencycd",cLabel:"Currency",cLabelSize:4,cOrder:0,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_currencyrate:{cValidate:"required",cName:"currencyrate",cLabel:"Currency Rate ",cLabelSize:4,cOrder:0,cKey:!0,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_customerbankaccountno:{cValidate:"",cName:"customerbankaccountno",cLabel:"Customer Bank A/C",cLabelSize:4,cOrder:17,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_chequereferenceno:{cValidate:"",cName:"chequereferenceno",cLabel:"Cheque / Ref. No",cLabelSize:4,cOrder:18,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_chequereferencedate:{cValidate:"",cName:"chequereferencedate",cLabel:"Cheque / Ref Date",cLabelSize:4,cOrder:20,cKey:!0,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_issuedbank:{cValidate:"",cName:"issuedbank",cLabel:"Issue Bank",cLabelSize:4,cOrder:19,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_chequeduedate:{cValidate:"",cName:"chequeduedate",cLabel:"Due Date",cLabelSize:4,cOrder:21,cKey:!0,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Remarks",cLabelSize:4,cOrder:22,cKey:!0,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage1Data}},methods:{OndebtorcdChange:function(e){var t=this;this.$nextTick((function(){t.M_CB_DepositAllocationH.debtorcd=e.id,t.M_CB_DepositAllocationH.debtorcdLabel=e.label,t.inputStatus})),this.$forceUpdate()},OndepositallocationpostingstatusChange:function(e){var t=this;this.$nextTick((function(){t.inputStatus})),this.$forceUpdate()},OntrxtypeChange:function(e){var t=this;this.$nextTick((function(){"VIEW"!=t.inputStatus&&t.FnGetTrxTypeData(t.getDataUser().subportfolio_cd).then((function(e){null!=e&&(t.M_CB_DepositAllocationH.trxtypedescs=dt25.TrxTypeDescs,""!=e.RunningCd?(t.RunningCd=e.RunningCd,t.PI_paymentno.cProtect=!0,t.M_CB_DepositAllocationH.paymentno="(auto)"):(t.RunningCd="",t.PI_paymentno.cProtect=!1,t.M_CB_DepositAllocationH.paymentno=""))}))})),this.$forceUpdate()},OndepositallocationdateChange:function(e){var t=this;this.$nextTick((function(){t.inputStatus})),this.$forceUpdate()},OnremarksChange:function(e){var t=this;this.$nextTick((function(){t.inputStatus})),this.$forceUpdate()},setToolbarButton:function(){this.getToolbar().statusFunction[0].disabled=!0},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){},M_Post:function(e){var t=this,a=this.FormToABSList().getRowSelected(),o=[];a.forEach((function(e){o.push({SubPortfolioCd:t.getDataUser().subportfolio_cd,PaymentNo:e.PaymentNo,PostBy:t.getDataUser().user_id,_Message_:"Payment No = "+e.PaymentNo})}));var c={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,Data:o};this.postJSONMulti(this.getUrlPostMulti(),c).then((function(e){null!=e&&t.$parent.resultPost()}))},M_Insert:function(){},M_Update:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,SubPortfolioCd:this.getDataUser().subportfolio_cd,TrxType:this.M_CB_DepositAllocationH.trxtype,PaymentNo:this.M_CB_DepositAllocationH.paymentno,PaymentDate:""==this.M_CB_DepositAllocationH.paymentdate||null==this.M_CB_DepositAllocationH.paymentdate?"NULL":this.M_CB_DepositAllocationH.paymentdate,DepositAllocDate:""==this.M_CB_DepositAllocationH.depositallocationdate||null==this.M_CB_DepositAllocationH.depositallocationdate?"NULL":this.M_CB_DepositAllocationH.depositallocationdate,Descs:this.M_CB_DepositAllocationH.descs,DebtorCd:""==this.M_CB_DepositAllocationH.debtorcd||null==this.M_CB_DepositAllocationH.debtorcd?"NULL":this.M_CB_DepositAllocationH.debtorcd,TrxAmt:this.M_CB_DepositAllocationH.trxamt?this.replaceAllString(this.M_CB_DepositAllocationH.trxamt,",","","number"):0,BankChargesAmt:this.M_CB_DepositAllocationH.bankchargesamt?this.replaceAllString(this.M_CB_DepositAllocationH.bankchargesamt,",","","number"):0,OverPaymentAmt:this.M_CB_DepositAllocationH.overpaymentamt?this.replaceAllString(this.M_CB_DepositAllocationH.overpaymentamt,",","","number"):0,UnderPaymentAmt:this.M_CB_DepositAllocationH.underpaymentamt?this.replaceAllString(this.M_CB_DepositAllocationH.underpaymentamt,",","","number"):0,PaymentCd:""==this.M_CB_DepositAllocationH.paymentcd||null==this.M_CB_DepositAllocationH.paymentcd?"NULL":this.M_CB_DepositAllocationH.paymentcd,BankCd:""==this.M_CB_DepositAllocationH.bankcd||null==this.M_CB_DepositAllocationH.bankcd?"NULL":this.M_CB_DepositAllocationH.bankcd,CurrencyCd:""==this.M_CB_DepositAllocationH.currencycd||null==this.M_CB_DepositAllocationH.currencycd?"NULL":this.M_CB_DepositAllocationH.currencycd,CurrencyRate:this.M_CB_DepositAllocationH.currencyrate?this.replaceAllString(this.M_CB_DepositAllocationH.currencyrate,",","","number"):0,TaxCurrencyRate:0,ChequeReferenceNo:this.M_CB_DepositAllocationH.chequereferenceno,ChequeReferenceDate:""==this.M_CB_DepositAllocationH.chequereferencedate||null==this.M_CB_DepositAllocationH.chequereferencedate?"NULL":this.M_CB_DepositAllocationH.chequereferencedate,ChequeDueDate:""==this.M_CB_DepositAllocationH.chequeduedate||null==this.M_CB_DepositAllocationH.chequeduedate?"NULL":this.M_CB_DepositAllocationH.chequeduedate,IssuedBank:this.M_CB_DepositAllocationH.issuedbank,Remarks:this.M_CB_DepositAllocationH.remarks,UserEdit:this.getDataUser().user_id,EntryType:"D",ReferenceNo:this.M_CB_DepositAllocationH.referenceno,LastUpdateStamp:this.M_CB_DepositAllocationH.lastupdatestamp,CustomerBankAccountNo:this.M_CB_DepositAllocationH.customerbankaccountno};this.postJSON(this.getUrlUpdate(),t).then((function(t){null!=t&&e.$parent.resultUpdate(t.Message)}))},M_ClearForm:function(){this.M_CB_DepositAllocationH={batchno:0,source:"",runningcd:"",trxtype:"",trxtypeLabel:"",paymentcdLabel:"",bankcdLabel:"",modulecd:"",paymentdate:"",depositallocationdate:"",descs:"",debtorcd:"",debtorcdLabel:"",debtorname:"",paymentcategory:"",paymentno:"",documentcount:0,batchtotal:0,batchstatus:"",paymentcd:"",bankcd:"",currencycd:"",currencyrate:"0",taxrate:0,originalcurrencyrate:0,trxamt:"0",netamt:0,withholdingamt:0,vatamt:0,totalamt:0,overpaymentamt:"0",underpaymentamt:"0",bankchargesamt:"0",chequereferenceno:"",chequereferencedate:"",chequeduedate:"",issuedbank:"",remarks:"",trxtypedescs:"",paymentdescs:"",paymenttype:"",customerbankaccountno:"",bankname:"",runningdescs:"",userinput:"",useredit:this.getDataUser().user_id,lastupdatestamp:0,currentbatchtotal:0,currentdocumentcount:0,referenceno:"",totalallocationamt:"0",totalallocatedamt:"0",status:"",depositallocationpostingstatus:"",salesorno:"",subportfoliocd:this.getDataUser().subportfolio_cd,timeedit:"",balance:"0"}},M_New:function(){},M_Edit:function(){},M_Delete:function(e){var t=this,a=this.FormToABSList().getRowSelected(),o=[];a.forEach((function(e){o.push({SubPortfolioCd:t.getDataUser().subportfolio_cd,EntryType:"S",PaymentNo:e.BatchNo,UserEdit:t.getDataUser().user_id,LastUpdateStamp:e.LastUpdateStamp,_Message_:""})}));var c={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,Data:o};this.postJSONMulti(this.getUrlDeleteMulti(),c).then((function(e){null!=e&&t.$parent.resultDelete()}))},getDataBy:function(e){var t=this,a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,SubPortfolioCd:this.getDataUser().subportfolio_cd,paymentno:e.PaymentNo};this.postJSON(this.getUrlById(),a).then((function(a){if(null!=a){var o=a.Data[0];t.M_CB_DepositAllocationH={batchno:o.batchno,source:o.source,runningcd:o.runningcd,trxtype:o.trxtype,modulecd:o.modulecd,paymentdate:o.paymentdate,depositallocationdate:o.depositallocationdate,descs:o.descs,debtorcd:o.debtorcd,debtorname:o.debtorname,paymentcategory:o.paymentcategory,paymentno:o.paymentno,documentcount:t.isCurrency(o.documentcount,t.decimal),batchtotal:t.isCurrency(o.batchtotal,t.decimal),batchstatus:o.batchstatus,paymentcd:o.paymentcd,bankcd:o.bankcd,currencycd:o.currencycd,currencyrate:t.isCurrency(o.currencyrate,t.decimal),taxrate:t.isCurrency(o.taxrate,t.decimal),originalcurrencyrate:t.isCurrency(o.originalcurrencyrate,t.decimal),trxamt:t.isCurrency(o.trxamt,t.decimal),netamt:t.isCurrency(o.netamt,t.decimal),withholdingamt:t.isCurrency(o.withholdingamt,t.decimal),vatamt:t.isCurrency(o.vatamt,t.decimal),totalamt:t.isCurrency(o.totalamt,t.decimal),overpaymentamt:t.isCurrency(o.overpaymentamt,t.decimal),underpaymentamt:t.isCurrency(o.underpaymentamt,t.decimal),bankchargesamt:t.isCurrency(o.bankchargesamt,t.decimal),chequereferenceno:o.chequereferenceno,chequereferencedate:o.chequereferencedate,chequeduedate:o.chequeduedate,issuedbank:o.issuedbank,remarks:o.remarks,trxtypedescs:o.trxtypedescs,paymentdescs:o.paymentdescs,paymenttype:o.paymenttype,customerbankaccountno:o.customerbankaccountno,bankname:o.bankname,runningdescs:o.runningdescs,userinput:o.userinput,useredit:o.useredit,lastupdatestamp:e.LastUpdateStamp,currentbatchtotal:t.isCurrency(o.currentbatchtotal,t.decimal),currentdocumentcount:t.isCurrency(o.currentdocumentcount,t.decimal),referenceno:o.referenceno,totalallocationamt:t.isCurrency(o.totalallocationamt,t.decimal),totalallocatedamt:t.isCurrency(o.totalallocatedamt,t.decimal),status:o.status,depositallocationpostingstatus:o.depositallocationpostingstatus,salesorno:o.salesorno,subportfoliocd:o.subportfoliocd,timeedit:o.timeedit,balance:t.isCurrency(o.totalallocationamt-o.totalallocatedamt,t.decimal)},t.M_CB_DepositAllocationH.trxtypeLabel=o.trxtype&&""!=o.trxtype?o.trxtype+t.separator+o.trxtypedescs:"",t.M_CB_DepositAllocationH.debtorcdLabel=o.debtorcd&&""!=o.debtorcd?o.debtorcd+t.separator+o.debtorname:"",t.M_CB_DepositAllocationH.paymentcdLabel=o.paymentcd&&""!=o.paymentcd?o.paymentcd+t.separator+o.paymentdescs:"",t.M_CB_DepositAllocationH.bankcdLabel=o.bankcd&&""!=o.bankcd?o.bankcd+t.separator+o.bankname:"",t.IEBy.Input=o.userinput,t.IEBy.Edit=o.useredit}}))}},beforeCreate:function(){},created:function(){this.$store.commit("setFormType","ListProcess"),this.getToolbar().ProcessPS()},beforeMount:function(){},mounted:function(){this.hideSideBarMenu(),this.FormToABSList().doGetList("","eb_getList")},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),i=n,r=a("2877"),l=Object(r["a"])(i,o,c,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0e66d1.4523a165.js.map