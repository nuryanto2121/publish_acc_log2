(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ac43d"],{1998:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ABSListVuex",{attrs:{prop:e.propList,title:e.data.query_name},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn,checkboxChecked:e.$parent.checkboxChecked}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v(" Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_vehicleno",attrs:{prop:e.PI_vehicleno},model:{value:e.M_SM_LotVehicleRegistration.vehicleno,callback:function(t){e.$set(e.M_SM_LotVehicleRegistration,"vehicleno",t)},expression:"M_SM_LotVehicleRegistration.vehicleno"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_carparkno",attrs:{prop:e.PI_carparkno,value:e.M_SM_LotVehicleRegistration.carparkno,label:e.M_SM_LotVehicleRegistration.carparknoLabel},on:{change:e.OncarparknoChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:e.PI_remarks},on:{input:e.OnremarksChange},model:{value:e.M_SM_LotVehicleRegistration.remarks,callback:function(t){e.$set(e.M_SM_LotVehicleRegistration,"remarks",t)},expression:"M_SM_LotVehicleRegistration.remarks"}})],1)],1)],1)],1),a("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)],1)},o=[],r=(a("ac6a"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{ValKey:null,FormType:"List",Module:"SM",propList:{initialWhere:"LotNo = '"+this.ValKey+"'",LineNo:this.$parent.data.page_order,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_SM_LotVehicleRegistration:{subportfoliocd:this.getDataUser().subportfolio_cd,lotno:"",vehicleno:"",carparkno:"",remarks:"",userinput:"",useredit:this.getDataUser().user_id,timeinput:"",timeedit:"",lastupdatestamp:0,rowid:0},PI_vehicleno:{cValidate:"required|max:10",cName:"vehicleno",cLabel:"Vehicle No",cLabelSize:4,cOrder:51,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_carparkno:{dataLookUp:{LookUpCd:"GetLookupTNCarpark",ColumnDB:"CarparkNo",InitialWhere:"SubPortfolioCd='"+this.getDataUser().subportfolio_cd+"' AND CarParkNo not in (select CarParkNo from VW_TN_CarPark_Used) ",ParamWhere:"",SourceField:"",DisplayLookup:"CarparkNo,CarparkType"},cValidate:"required",cName:"carparkno",cLabel:"Carpark No",cKey:!1,cLabelSize:4,cOrder:52,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"SM/SM_Subportfolio",cDisplayColumn:"CarparkNo,CarparkType"},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Remarks",cLabelSize:4,cOrder:53,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder,cProtect:!1}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage2Data},DataRowPage1:function(){return this.$store.getters.GetPage1Data},GetDataBy1:function(){return this.$store.getters.GetPage1GetDataBy}},methods:{OncarparknoChange:function(e){var t=this;this.$nextTick((function(){t.M_SM_LotVehicleRegistration.carparkno=e.id,t.M_SM_LotVehicleRegistration.carparknoLabel=e.label,t.inputStatus})),this.$forceUpdate()},OnremarksChange:function(e){var t=this;this.$nextTick((function(){t.inputStatus})),this.$forceUpdate()},setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){this.$parent.showForm=!1;var e=this.$store.getters.GetPage1Data;this.M_SM_LotVehicleRegistration.lotno=e.LotNo,this.propList.initialWhere="SubPortfolioCd='"+this.getDataUser().subportfolio_cd+"' AND LotNo = '"+e.LotNo+"' ",this.FormToABSList().doGetList("","eb_getList")},M_CheckboxChecked:function(e,t,a){},M_Insert:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,SubPortfolioCD:this.getDataUser().subportfolio_cd,LotNo:this.M_SM_LotVehicleRegistration.lotno,VehicleNo:this.M_SM_LotVehicleRegistration.vehicleno,CarparkNo:""==this.M_SM_LotVehicleRegistration.carparkno||null==this.M_SM_LotVehicleRegistration.carparkno?"NULL":this.M_SM_LotVehicleRegistration.carparkno,Remarks:this.M_SM_LotVehicleRegistration.remarks,UserInput:this.getDataUser().user_id,UserEdit:this.getDataUser().user_id};this.postJSON(this.getUrlInsert(),t).then((function(t){null!=t&&e.$parent.resultInsert(t.Message)}))},M_Update:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,SubPortfolioCD:this.getDataUser().subportfolio_cd,LotNo:this.M_SM_LotVehicleRegistration.lotno,VehicleNo:this.M_SM_LotVehicleRegistration.vehicleno,CarparkNo:""==this.M_SM_LotVehicleRegistration.carparkno||null==this.M_SM_LotVehicleRegistration.carparkno?"NULL":this.M_SM_LotVehicleRegistration.carparkno,Remarks:this.M_SM_LotVehicleRegistration.remarks,UserEdit:this.getDataUser().user_id,LastUpdateStamp:this.M_SM_LotVehicleRegistration.lastupdatestamp};this.postJSON(this.getUrlUpdate(),t).then((function(t){null!=t&&e.$parent.resultUpdate(t.Message)}))},M_ClearForm:function(){this.M_SM_LotVehicleRegistration={subportfoliocd:this.getDataUser().subportfolio_cd,lotno:"",vehicleno:"",carparkno:"",remarks:"",userinput:"",useredit:this.getDataUser().user_id,timeinput:"",timeedit:"",lastupdatestamp:0,rowid:0}},M_New:function(){var e=this.$store.getters.GetPage1Data;this.M_SM_LotVehicleRegistration.lotno=e.LotNo,this.$refs.ref_vehicleno.focus()},M_Edit:function(){this.$refs.ref_carparkno.focus()},M_Delete:function(e){var t=this,a=this.FormToABSList().getRowSelected(),i=[];a.forEach((function(e){i.push({_Message_:"",SubPortfolioCD:t.getDataUser().subportfolio_cd,LotNo:e.LotNo,VehicleNo:e.VehicleNo,LastUpdateStamp:e.LastUpdateStamp})}));var o={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,Data:i};this.postJSONMulti(this.getUrlDeleteMulti(),o).then((function(e){null!=e&&t.$parent.resultDelete()}))},getDataBy:function(e){var t=this,a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,SubPortfolioCD:this.getDataUser().subportfolio_cd,lotno:e.LotNo,vehicleno:e.VehicleNo};this.postJSON(this.getUrlById(),a).then((function(a){if(null!=a){var i=a.Data[0];t.M_SM_LotVehicleRegistration={subportfoliocd:i.subportfoliocd,lotno:i.lotno,vehicleno:i.vehicleno,carparkno:i.carparkno,remarks:i.remarks,userinput:i.userinput,useredit:i.useredit,timeinput:i.timeinput,timeedit:i.timeedit,lastupdatestamp:e.LastUpdateStamp,rowid:i.rowid},t.M_SM_LotVehicleRegistration.carparknoLabel=null!=t.M_SM_LotVehicleRegistration.carparkno&&""!=t.M_SM_LotVehicleRegistration.carparkno?i.carparkno:"",t.IEBy.Input=i.userinput,t.IEBy.Edit=i.useredit}}))}},created:function(){},beforeMount:function(){},mounted:function(){this.hideSideBarMenu()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),s=r,n=a("2877"),c=Object(n["a"])(s,i,o,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0ac43d.aaa30a0d.js.map