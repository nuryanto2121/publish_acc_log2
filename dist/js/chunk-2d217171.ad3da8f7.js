(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d217171"],{c4f0:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ABSListVuex",{attrs:{prop:e.propList,title:e.data.query_name},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn,checkboxChecked:e.$parent.checkboxChecked}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v(" Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_contactid",attrs:{prop:e.PI_contactid,value:e.M_SM_MarketingAgent.contactid,label:e.M_SM_MarketingAgent.contactidLabel},on:{change:e.OncontactidChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_referenceno",attrs:{prop:e.PI_referenceno},model:{value:e.M_SM_MarketingAgent.referenceno,callback:function(t){e.$set(e.M_SM_MarketingAgent,"referenceno",t)},expression:"M_SM_MarketingAgent.referenceno"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_referralcontactid",attrs:{prop:e.PI_referralcontactid,value:e.M_SM_MarketingAgent.referralcontactid,label:e.M_SM_MarketingAgent.referralcontactidLabel},on:{change:e.OnreferralcontactidChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputDateVuex",{ref:"ref_startdate",attrs:{prop:e.PI_startdate},on:{input:e.OnstartdateChange},model:{value:e.M_SM_MarketingAgent.startdate,callback:function(t){e.$set(e.M_SM_MarketingAgent,"startdate",t)},expression:"M_SM_MarketingAgent.startdate"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputDateVuex",{ref:"ref_lastcommissiondate",attrs:{prop:e.PI_lastcommissiondate},on:{input:e.OnlastcommissiondateChange},model:{value:e.M_SM_MarketingAgent.lastcommissiondate,callback:function(t){e.$set(e.M_SM_MarketingAgent,"lastcommissiondate",t)},expression:"M_SM_MarketingAgent.lastcommissiondate"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputRadioButtonVuex",{ref:"ref_commissionpaidto",attrs:{prop:e.PI_commissionpaidto},on:{input:e.OncommissionpaidtoChange},model:{value:e.M_SM_MarketingAgent.commissionpaidto,callback:function(t){e.$set(e.M_SM_MarketingAgent,"commissionpaidto",t)},expression:"M_SM_MarketingAgent.commissionpaidto"}})],1)],1),a("b-row",{staticStyle:{height:"20px !important"}},[a("b-col",{attrs:{md:"2"}},[a("ABSLabelOnly",{attrs:{prop:{cLabel:"",cLabelSize:4,cValue:"",cPageLevel:e.PageLevel,cTabIndex:e.TabIndex,cVisible:!0,cClass:"lbl-col-align"}}})],1),a("b-col",{staticStyle:{"text-align":"center !important"},attrs:{md:"1"}},[e._v("Commission")]),a("b-col",{staticStyle:{"text-align":"center !important"},attrs:{md:"1"}},[e._v("Tax Code ")]),a("b-col",{staticStyle:{"text-align":"center !important"},attrs:{md:"1"}},[e._v("Trans. Code")])],1),a("b-row",[a("b-col",{attrs:{md:"2"}},[a("ABSLabelOnly",{attrs:{prop:{cLabel:"Sales Commission Agent / Marketing",cLabelSize:4,cValue:"",cPageLevel:e.PageLevel,cTabIndex:e.TabIndex,cVisible:!0,cClass:"lbl-col-align"}}})],1),a("b-col",{attrs:{md:"1"}},[a("ABSTextBoxOnly",{ref:"ref_salescommissionpercentage",attrs:{prop:e.PI_salescommissionpercentage},model:{value:e.M_SM_MarketingAgent.salescommissionpercentage,callback:function(t){e.$set(e.M_SM_MarketingAgent,"salescommissionpercentage",t)},expression:"M_SM_MarketingAgent.salescommissionpercentage"}})],1),a("b-col",{attrs:{md:"1"}},[a("ABSInputSelectListOnly",{ref:"ref_mkttaxcd",attrs:{prop:e.PI_mkttaxcd,value:e.M_SM_MarketingAgent.mkttaxcd,label:e.M_SM_MarketingAgent.mkttaxcdLabel},on:{change:e.OnmkttaxcdChange}})],1),a("b-col",{attrs:{md:"2"}},[a("ABSInputSelectListOnly",{ref:"ref_mkttrxtype",attrs:{prop:e.PI_mkttrxtype,value:e.M_SM_MarketingAgent.mkttrxtype,label:e.M_SM_MarketingAgent.mkttrxtypeLabel},on:{change:e.OnmkttrxtypeChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"2"}},[a("ABSLabelOnly",{attrs:{prop:{cLabel:"Sales Commission Referral",cLabelSize:4,cValue:"",cPageLevel:e.PageLevel,cTabIndex:e.TabIndex,cVisible:!0,cClass:"lbl-col-align"}}})],1),a("b-col",{attrs:{md:"1"}},[a("ABSTextBoxOnly",{ref:"ref_salesreferralpercentage",attrs:{prop:e.PI_salesreferralpercentage},model:{value:e.M_SM_MarketingAgent.salesreferralpercentage,callback:function(t){e.$set(e.M_SM_MarketingAgent,"salesreferralpercentage",t)},expression:"M_SM_MarketingAgent.salesreferralpercentage"}})],1),a("b-col",{attrs:{md:"1"}},[a("ABSInputSelectListOnly",{ref:"ref_referraltaxcd",attrs:{prop:e.PI_referraltaxcd,value:e.M_SM_MarketingAgent.referraltaxcd,label:e.M_SM_MarketingAgent.referraltaxcdLabel},on:{change:e.OnreferraltaxcdChange}})],1),a("b-col",{attrs:{md:"2"}},[a("ABSInputSelectListOnly",{ref:"ref_referraltrxtype",attrs:{prop:e.PI_referraltrxtype,value:e.M_SM_MarketingAgent.referraltrxtype,label:e.M_SM_MarketingAgent.referraltrxtypeLabel},on:{change:e.OnreferraltrxtypeChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_creditorcd",attrs:{prop:e.PI_creditorcd,value:e.M_SM_MarketingAgent.creditorcd,label:e.M_SM_MarketingAgent.creditorcdLabel},on:{change:e.OncreditorcdChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_categorycd",attrs:{prop:e.PI_categorycd,value:e.M_SM_MarketingAgent.categorycd,label:e.M_SM_MarketingAgent.categorycdLabel},on:{change:e.OncategorycdChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputRadioButtonVuex",{ref:"ref_status",attrs:{prop:e.PI_status},on:{input:e.OnstatusChange},model:{value:e.M_SM_MarketingAgent.status,callback:function(t){e.$set(e.M_SM_MarketingAgent,"status",t)},expression:"M_SM_MarketingAgent.status"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_reasoncd",attrs:{prop:e.PI_reasoncd,value:e.M_SM_MarketingAgent.reasoncd,label:e.M_SM_MarketingAgent.reasoncdLabel},on:{change:e.OnreasoncdChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_reasondescs",attrs:{prop:e.PI_reasondescs},model:{value:e.M_SM_MarketingAgent.reasondescs,callback:function(t){e.$set(e.M_SM_MarketingAgent,"reasondescs",t)},expression:"M_SM_MarketingAgent.reasondescs"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:e.PI_remarks},on:{input:e.OnremarksChange},model:{value:e.M_SM_MarketingAgent.remarks,callback:function(t){e.$set(e.M_SM_MarketingAgent,"remarks",t)},expression:"M_SM_MarketingAgent.remarks"}})],1)],1)],1)],1),a("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)],1)},n=[],i=(a("ac6a"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{cInsertKey:"",FormType:"List",Module:"SM",propList:{initialWhere:"AgentType = 'M' AND SubPortfolioCd='"+this.getDataUser().subportfolio_cd+"'",LineNo:this.$parent.data.page_order,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_SM_MarketingAgent:{contactid:"",referenceno:"",referralcontactid:"",startdate:"",lastcommissiondate:"",commissionpaidto:"A",salescommissionpercentage:"",mkttaxcd:"",mkttrxtype:"",salesreferralpercentage:"",referraltaxcd:"",referraltrxtype:"",creditorcd:"",categorycd:"",status:"A",reasoncd:"",reasondescs:"",remarks:"",lastupdatestamp:""},PI_contactid:{dataLookUp:{LookUpCd:"GetLookupCMContact",ColumnDB:"ContactId",InitialWhere:"",ParamWhere:"",SourceField:"",DisplayLookup:"ContactId,Name"},cValidate:"required",cName:"contactid",cLabel:"Agent ID",cKey:!0,cLabelSize:4,cOrder:0,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"CM/CM_Contact",cDisplayColumn:"ContactId,Name"},PI_referenceno:{cValidate:"",cName:"referenceno",cLabel:"Reference No",cLabelSize:4,cOrder:0,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_referralcontactid:{dataLookUp:{LookUpCd:"GetLookupCMContact",ColumnDB:"ContactId",InitialWhere:"",ParamWhere:"",SourceField:"",DisplayLookup:"ContactId,Name"},cValidate:"",cName:"referralcontactid",cLabel:"Referral Contact ID",cKey:!1,cLabelSize:4,cOrder:0,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"CM/CM_Contact",cDisplayColumn:"ContactId,Name"},PI_startdate:{cValidate:"",cName:"startdate",cLabel:"Start Date",cLabelSize:4,cOrder:0,cKey:!1,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_lastcommissiondate:{cValidate:"",cName:"lastcommissiondate",cLabel:"Last Commission Date",cLabelSize:4,cOrder:0,cKey:!1,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_commissionpaidto:{cValidate:"",cName:"commissionpaidto",cId:"rdbcommissionpaidto",cRadioOptions:[{text:"Agent",value:"A"},{text:"Marketing",value:"M"}],cRadioDefaultOption:"A",cLabel:"Commission paid to",cLabelSize:4,cDefault:"",cOrder:0,cProtect:!1,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_salescommissionpercentage:{cValidate:"",cName:"salescommissionpercentage",cLabel:"Sales Commission Agent / Marketing",cLabelSize:4,cOrder:0,cKey:!1,cType:"numeric",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cLastLabelShow:!0,cLastLabel:"%"},PI_mkttaxcd:{dataLookUp:{LookUpCd:"GetLookupCMTaxCode",ColumnDB:"TaxCd",InitialWhere:"",ParamWhere:"",SourceField:"",DisplayLookup:"TaxCd"},cValidate:"",cName:"mkttaxcd",cLabel:"",cKey:!1,cLabelSize:4,cOrder:0,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"TaxCd"},PI_mkttrxtype:{dataLookUp:{LookUpCd:"GetLookupCMTransTypeBySubPortfolio",ColumnDB:"TrxType",InitialWhere:"SubPortfolioCd='"+this.getDataUser().subportfolio_cd+"' AND ModuleCd = 'AP' AND TrxClass= 'I'",ParamWhere:"",SourceField:"",DisplayLookup:"TransactionType,Descs"},cValidate:"",cName:"mkttrxtype",cLabel:"",cKey:!1,cLabelSize:4,cOrder:0,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"TransactionType,Descs"},PI_salesreferralpercentage:{cValidate:"",cName:"salesreferralpercentage",cLabel:"Sales Commission Referral",cLabelSize:4,cOrder:0,cKey:!1,cType:"numeric",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_referraltaxcd:{dataLookUp:{LookUpCd:"GetLookupCMTaxCode",ColumnDB:"TaxCd",InitialWhere:"",ParamWhere:"",SourceField:"",DisplayLookup:"TaxCd"},cValidate:"",cName:"referraltaxcd",cLabel:"",cKey:!1,cLabelSize:4,cOrder:0,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"TaxCd"},PI_referraltrxtype:{dataLookUp:{LookUpCd:"GetLookupCMTransTypeBySubPortfolio",ColumnDB:"TrxType",InitialWhere:"SubPortfolioCd='"+this.getDataUser().subportfolio_cd+"' AND ModuleCd = 'AP' AND TrxClass= 'I'",ParamWhere:"",SourceField:"",DisplayLookup:"TransactionType,Descs"},cValidate:"",cName:"referraltrxtype",cLabel:"",cKey:!1,cLabelSize:4,cOrder:0,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"TransactionType,Descs"},PI_creditorcd:{dataLookUp:{LookUpCd:"GetLookupAPCreditor",ColumnDB:"CreditorCd",InitialWhere:"SubPortfolioCd='"+this.getDataUser().subportfolio_cd+"' AND STATUS = 'A'",ParamWhere:"",SourceField:"",DisplayLookup:"CreditorCd,Name"},cValidate:"required",cName:"creditorcd",cLabel:"Creditor Code ( Agent )",cKey:!1,cLabelSize:4,cOrder:3,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"AP/AP_Creditor",cDisplayColumn:"CreditorCd,Name"},PI_categorycd:{dataLookUp:{LookUpCd:"GetLookupGroup",ColumnDB:"CategoryCd",InitialWhere:"",ParamWhere:"",SourceField:"",DisplayLookup:"CategoryCd,Descs"},cValidate:"",cName:"categorycd",cLabel:"Unit Sales Group",cKey:!1,cLabelSize:4,cOrder:0,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"CategoryCd,Descs"},PI_status:{cValidate:"",cName:"status",cId:"rdbstatus",cRadioOptions:[{text:"Active",value:"A"},{text:"Non Active",value:"N"}],cRadioDefaultOption:"A",cLabel:"Status",cLabelSize:4,cDefault:"",cOrder:0,cProtect:!1,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_reasoncd:{dataLookUp:{LookUpCd:"GetLookupCMReason",ColumnDB:"ReasonCd",InitialWhere:"ModuleCd = 'TN'",ParamWhere:"",SourceField:"",DisplayLookup:"ReasonCd,Descs"},cValidate:"",cName:"reasoncd",cLabel:"Reason",cKey:!1,cLabelSize:4,cOrder:0,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"CM/CM_Reason",cDisplayColumn:"ReasonCd,Descs"},PI_reasondescs:{cValidate:"max:150",cName:"reasondescs",cLabel:"Reason Description",cLabelSize:4,cOrder:0,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Remarks",cLabelSize:4,cOrder:0,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder,cProtect:!1}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage1Data},GetDataBy1:function(){return this.$store.getters.GetPage1GetDataBy}},methods:{DisableReasonCd:function(){"A"==this.M_SM_MarketingAgent.status?(this.PI_reasoncd.cProtect=!0,this.PI_reasondescs.cProtect=!0):(this.PI_reasoncd.cProtect=!1,this.PI_reasondescs.cProtect=!1,this.PI_reasoncd.cValidate="required",this.PI_reasondescs.cValidate="required|max:150")},OncontactidChange:function(e){var t=this;this.$nextTick((function(){t.M_SM_MarketingAgent.contactid=e.id,t.M_SM_MarketingAgent.contactidLabel=e.label,t.inputStatus})),this.$forceUpdate()},OnreferralcontactidChange:function(e){var t=this;this.$nextTick((function(){t.M_SM_MarketingAgent.referralcontactid=e.id,t.M_SM_MarketingAgent.referralcontactidLabel=e.label,t.inputStatus})),this.$forceUpdate()},OnstartdateChange:function(e){var t=this;this.$nextTick((function(){t.inputStatus})),this.$forceUpdate()},OnlastcommissiondateChange:function(e){var t=this;this.$nextTick((function(){t.inputStatus})),this.$forceUpdate()},OncommissionpaidtoChange:function(e){var t=this;this.$nextTick((function(){t.inputStatus})),this.$forceUpdate()},OnmkttaxcdChange:function(e){var t=this;this.$nextTick((function(){t.M_SM_MarketingAgent.mkttaxcd=e.id,t.M_SM_MarketingAgent.mkttaxcdLabel=e.label,t.inputStatus})),this.$forceUpdate()},OnmkttrxtypeChange:function(e){var t=this;this.$nextTick((function(){t.M_SM_MarketingAgent.mkttrxtype=e.id,t.M_SM_MarketingAgent.mkttrxtypeLabel=e.label,t.inputStatus})),this.$forceUpdate()},OnreferraltaxcdChange:function(e){var t=this;this.$nextTick((function(){t.M_SM_MarketingAgent.referraltaxcd=e.id,t.M_SM_MarketingAgent.referraltaxcdLabel=e.label,t.inputStatus})),this.$forceUpdate()},OnreferraltrxtypeChange:function(e){var t=this;this.$nextTick((function(){t.M_SM_MarketingAgent.referraltrxtype=e.id,t.M_SM_MarketingAgent.referraltrxtypeLabel=e.label,t.inputStatus})),this.$forceUpdate()},OncreditorcdChange:function(e){var t=this;this.$nextTick((function(){t.M_SM_MarketingAgent.creditorcd=e.id,t.M_SM_MarketingAgent.creditorcdLabel=e.label,t.inputStatus})),this.$forceUpdate()},OncategorycdChange:function(e){var t=this;this.$nextTick((function(){t.M_SM_MarketingAgent.categorycd=e.id,t.M_SM_MarketingAgent.categorycdLabel=e.label,t.inputStatus})),this.$forceUpdate()},OnstatusChange:function(e){var t=this;this.$nextTick((function(){"VIEW"!=t.inputStatus&&("A"==e?(t.PI_reasoncd.cProtect=!0,t.PI_reasondescs.cProtect=!0,t.M_SM_MarketingAgent.reasoncd="",t.M_SM_MarketingAgent.reasondescs="",t.PI_reasoncd.cValidate="",t.PI_reasondescs.cValidate="max:150"):(t.PI_reasoncd.cProtect=!1,t.PI_reasondescs.cProtect=!1,t.PI_reasoncd.cValidate="required",t.PI_reasondescs.cValidate="required|max:150"))})),this.$forceUpdate()},OnreasoncdChange:function(e){var t=this;this.$nextTick((function(){t.M_SM_MarketingAgent.reasoncd=e.id,t.M_SM_MarketingAgent.reasoncdLabel=e.label,t.M_SM_MarketingAgent.reasondescs=e.Descs,t.inputStatus})),this.$forceUpdate()},OnremarksChange:function(e){var t=this;this.$nextTick((function(){t.inputStatus})),this.$forceUpdate()},setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){},M_CheckboxChecked:function(e,t,a){},M_Post:function(e){},M_Insert:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,ContactId:""==this.M_SM_MarketingAgent.contactid||null==this.M_SM_MarketingAgent.contactid?"NULL":this.M_SM_MarketingAgent.contactid,SubPortfolioCd:this.getDataUser().subportfolio_cd,ReferenceNo:this.M_SM_MarketingAgent.referenceno,StartDate:""==this.M_SM_MarketingAgent.startdate||null==this.M_SM_MarketingAgent.startdate?"NULL":this.M_SM_MarketingAgent.startdate,CommissionType:"P",CommissionValue:0,Status:this.M_SM_MarketingAgent.status,ReasonCd:""==this.M_SM_MarketingAgent.reasoncd||null==this.M_SM_MarketingAgent.reasoncd?"NULL":this.M_SM_MarketingAgent.reasoncd,ReasonDescs:this.M_SM_MarketingAgent.reasondescs,Remarks:this.M_SM_MarketingAgent.remarks,UserInput:this.getDataUser().user_id,LastCommissionDate:""==this.M_SM_MarketingAgent.lastcommissiondate||null==this.M_SM_MarketingAgent.lastcommissiondate?"NULL":this.M_SM_MarketingAgent.lastcommissiondate,CategoryCd:""==this.M_SM_MarketingAgent.categorycd||null==this.M_SM_MarketingAgent.categorycd?"NULL":this.M_SM_MarketingAgent.categorycd,AgentType:"M",ReferralContactID:""==this.M_SM_MarketingAgent.referralcontactid||null==this.M_SM_MarketingAgent.referralcontactid?"NULL":this.M_SM_MarketingAgent.referralcontactid,CommissionPaidTo:this.M_SM_MarketingAgent.commissionpaidto,SalesCommissionPercentage:this.M_SM_MarketingAgent.salescommissionpercentage,SalesReferralPercentage:this.M_SM_MarketingAgent.salesreferralpercentage,CreditorCd:""==this.M_SM_MarketingAgent.creditorcd||null==this.M_SM_MarketingAgent.creditorcd?"NULL":this.M_SM_MarketingAgent.creditorcd,MktTaxCd:""==this.M_SM_MarketingAgent.mkttaxcd||null==this.M_SM_MarketingAgent.mkttaxcd?"NULL":this.M_SM_MarketingAgent.mkttaxcd,MktTrxType:""==this.M_SM_MarketingAgent.mkttrxtype||null==this.M_SM_MarketingAgent.mkttrxtype?"NULL":this.M_SM_MarketingAgent.mkttrxtype,ReferralTaxCd:""==this.M_SM_MarketingAgent.referraltaxcd||null==this.M_SM_MarketingAgent.referraltaxcd?"NULL":this.M_SM_MarketingAgent.referraltaxcd,ReferralTrxType:""==this.M_SM_MarketingAgent.referraltrxtype||null==this.M_SM_MarketingAgent.referraltrxtype?"NULL":this.M_SM_MarketingAgent.referraltrxtype};this.postJSON(this.getUrlInsert(),t).then((function(t){null!=t&&e.$parent.resultInsert(t.Message)}))},M_Update:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,ContactId:""==this.M_SM_MarketingAgent.contactid||null==this.M_SM_MarketingAgent.contactid?"NULL":this.M_SM_MarketingAgent.contactid,SubPortfolioCd:this.getDataUser().subportfolio_cd,ReferenceNo:this.M_SM_MarketingAgent.referenceno,StartDate:""==this.M_SM_MarketingAgent.startdate||null==this.M_SM_MarketingAgent.startdate?"NULL":this.M_SM_MarketingAgent.startdate,CommissionType:"P",CommissionValue:0,Status:this.M_SM_MarketingAgent.status,ReasonCd:""==this.M_SM_MarketingAgent.reasoncd||null==this.M_SM_MarketingAgent.reasoncd?"NULL":this.M_SM_MarketingAgent.reasoncd,ReasonDescs:this.M_SM_MarketingAgent.reasondescs,Remarks:this.M_SM_MarketingAgent.remarks,UserEdit:this.getDataUser().user_id,LastUpdateStamp:this.M_SM_MarketingAgent.lastupdatestamp,LastCommissionDate:""==this.M_SM_MarketingAgent.lastcommissiondate||null==this.M_SM_MarketingAgent.lastcommissiondate?"NULL":this.M_SM_MarketingAgent.lastcommissiondate,CategoryCd:""==this.M_SM_MarketingAgent.categorycd||null==this.M_SM_MarketingAgent.categorycd?"NULL":this.M_SM_MarketingAgent.categorycd,AgentType:"M",ReferralContactID:""==this.M_SM_MarketingAgent.referralcontactid||null==this.M_SM_MarketingAgent.referralcontactid?"NULL":this.M_SM_MarketingAgent.referralcontactid,CommissionPaidTo:this.M_SM_MarketingAgent.commissionpaidto,SalesCommissionPercentage:this.M_SM_MarketingAgent.salescommissionpercentage,SalesReferralPercentage:this.M_SM_MarketingAgent.salesreferralpercentage,CreditorCd:""==this.M_SM_MarketingAgent.creditorcd||null==this.M_SM_MarketingAgent.creditorcd?"NULL":this.M_SM_MarketingAgent.creditorcd,MktTaxCd:""==this.M_SM_MarketingAgent.mkttaxcd||null==this.M_SM_MarketingAgent.mkttaxcd?"NULL":this.M_SM_MarketingAgent.mkttaxcd,MktTrxType:""==this.M_SM_MarketingAgent.mkttrxtype||null==this.M_SM_MarketingAgent.mkttrxtype?"NULL":this.M_SM_MarketingAgent.mkttrxtype,ReferralTaxCd:""==this.M_SM_MarketingAgent.referraltaxcd||null==this.M_SM_MarketingAgent.referraltaxcd?"NULL":this.M_SM_MarketingAgent.referraltaxcd,ReferralTrxType:""==this.M_SM_MarketingAgent.referraltrxtype||null==this.M_SM_MarketingAgent.referraltrxtype?"NULL":this.M_SM_MarketingAgent.referraltrxtype};this.postJSON(this.getUrlUpdate(),t).then((function(t){null!=t&&e.$parent.resultUpdate(t.Message)}))},M_ClearForm:function(){this.M_SM_MarketingAgent={contactid:"",referenceno:"",referralcontactid:"",startdate:"",lastcommissiondate:"",commissionpaidto:"A",salescommissionpercentage:"",mkttaxcd:"",mkttrxtype:"",salesreferralpercentage:"",referraltaxcd:"",referraltrxtype:"",creditorcd:"",categorycd:"",status:"A",reasoncd:"",reasondescs:"",remarks:"",lastupdatestamp:""}},M_New:function(){this.DisableReasonCd()},M_Edit:function(){},M_Delete:function(e){var t=this,a=this.FormToABSList().getRowSelected(),r=[];a.forEach((function(e){r.push({_Message_:"",ContactId:""==e.ContactID||null==e.ContactID?"NULL":e.ContactID,SubPortfolioCd:t.getDataUser().subportfolio_cd,LastUpdateStamp:e.LastUpdateStamp})}));var n={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,Data:r};this.postJSONMulti(this.getUrlDeleteMulti(),n).then((function(e){null!=e&&t.$parent.resultDelete()}))},getDataBy:function(e){var t=this,a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,contactid:e.ContactID,SubPortfolioCd:this.getDataUser().subportfolio_cd};this.postJSON(this.getUrlById(),a).then((function(a){if(null!=a){var r=a.Data[0];t.M_SM_MarketingAgent={contactid:r.contactid,referenceno:r.referenceno,referralcontactid:r.referralcontactid,startdate:r.startdate,lastcommissiondate:r.lastcommissiondate,commissionpaidto:r.commissionpaidto,salescommissionpercentage:t.isCurrency(r.salescommissionpercentage,t.decimal),mkttaxcd:r.mkttaxcd,mkttrxtype:r.mkttrxtype,salesreferralpercentage:t.isCurrency(r.salesreferralpercentage,t.decimal),referraltaxcd:r.referraltaxcd,referraltrxtype:r.referraltrxtype,creditorcd:r.creditorcd,categorycd:r.categorycd,status:r.status,reasoncd:r.reasoncd,reasondescs:r.reasondescs,remarks:r.remarks,lastupdatestamp:e.LastUpdateStamp},t.M_SM_MarketingAgent.contactidLabel=null!=t.M_SM_MarketingAgent.contactid&&""!=t.M_SM_MarketingAgent.contactid?r.contactid+t.separator+r.contactname:"",t.M_SM_MarketingAgent.referralcontactidLabel=null!=t.M_SM_MarketingAgent.referralcontactid&&""!=t.M_SM_MarketingAgent.referralcontactid?r.referralcontactid+t.separator+r.referralcontactidname:"",t.M_SM_MarketingAgent.mkttaxcdLabel=null!=t.M_SM_MarketingAgent.mkttaxcd&&""!=t.M_SM_MarketingAgent.mkttaxcd?r.mkttaxcd:"",t.M_SM_MarketingAgent.mkttrxtypeLabel=null!=t.M_SM_MarketingAgent.mkttrxtype&&""!=t.M_SM_MarketingAgent.mkttrxtype?r.mkttrxtype+t.separator+r.mkttrxtypedescs:"",t.M_SM_MarketingAgent.referraltaxcdLabel=null!=t.M_SM_MarketingAgent.referraltaxcd&&""!=t.M_SM_MarketingAgent.referraltaxcd?r.referraltaxcd:"",t.M_SM_MarketingAgent.referraltrxtypeLabel=null!=t.M_SM_MarketingAgent.referraltrxtype&&""!=t.M_SM_MarketingAgent.referraltrxtype?r.referraltrxtype+t.separator+r.referraltrxtypedescs:"",t.M_SM_MarketingAgent.creditorcdLabel=null!=t.M_SM_MarketingAgent.creditorcd&&""!=t.M_SM_MarketingAgent.creditorcd?r.creditorcd+t.separator+r.creditorname:"",t.M_SM_MarketingAgent.categorycdLabel=null!=t.M_SM_MarketingAgent.categorycd&&""!=t.M_SM_MarketingAgent.categorycd?r.categorycd+t.separator+r.categorydescs:"",t.M_SM_MarketingAgent.reasoncdLabel=null!=t.M_SM_MarketingAgent.reasoncd&&""!=t.M_SM_MarketingAgent.reasoncd?r.reasoncd+t.separator+r.reasondescs:"",t.IEBy.Input=r.userinput,t.IEBy.Edit=r.useredit}}))}},beforeCreate:function(){},created:function(){this.DisableReasonCd(),this.$store.commit("setFormType","List"),this.getToolbar().ProcessPS()},beforeMount:function(){},mounted:function(){this.hideSideBarMenu(),this.FormToABSList().doGetList("","eb_getList")},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),c=i,s=a("2877"),o=Object(s["a"])(c,r,n,!1,null,null,null);t["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d217171.ad3da8f7.js.map