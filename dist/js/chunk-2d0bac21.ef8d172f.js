(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bac21"],{3927:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("ABSListVuex",{attrs:{prop:e.propList,title:e.data.query_name},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn,checkboxChecked:e.$parent.checkboxChecked}}),i("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[i("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[i("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v(" Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),i("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),i("b-collapse",{attrs:{id:"collapse1",visible:!0}},[i("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[i("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[i("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[i("b-row",{staticStyle:{"padding-left":"10px"}},[i("b-col",{attrs:{md:"6",id:"col-left"}},[i("b-row",[i("b-col",{attrs:{md:"12"}},[i("ABSInputSelectList",{ref:"ref_fm_license_type_id",attrs:{prop:e.PI_fm_license_type_id,value:e.M_FM_StaffLicense.fm_license_type_id,label:e.M_FM_StaffLicense.fm_license_type_idLabel},on:{change:e.Onfm_license_type_idChange}})],1)],1),i("b-row",[i("b-col",{attrs:{md:"12"}},[i("ABSinputTextVuex",{ref:"ref_license_no",attrs:{prop:e.PI_license_no},model:{value:e.M_FM_StaffLicense.license_no,callback:function(t){e.$set(e.M_FM_StaffLicense,"license_no",t)},expression:"M_FM_StaffLicense.license_no"}})],1)],1),i("b-row",[i("b-col",{attrs:{md:"12"}},[i("ABSTextAreaVuex",{ref:"ref_address",attrs:{prop:e.PI_address},on:{input:e.OnaddressChange},model:{value:e.M_FM_StaffLicense.address,callback:function(t){e.$set(e.M_FM_StaffLicense,"address",t)},expression:"M_FM_StaffLicense.address"}})],1)],1),i("b-row",[i("b-col",{attrs:{md:"12"}},[i("ABSinputTextVuex",{ref:"ref_birth_city",attrs:{prop:e.PI_birth_city},model:{value:e.M_FM_StaffLicense.birth_city,callback:function(t){e.$set(e.M_FM_StaffLicense,"birth_city",t)},expression:"M_FM_StaffLicense.birth_city"}})],1)],1),i("b-row",[i("b-col",{attrs:{md:"12"}},[i("ABSinputDateVuex",{ref:"ref_birth_date",attrs:{prop:e.PI_birth_date},on:{input:e.Onbirth_dateChange},model:{value:e.M_FM_StaffLicense.birth_date,callback:function(t){e.$set(e.M_FM_StaffLicense,"birth_date",t)},expression:"M_FM_StaffLicense.birth_date"}})],1)],1),i("b-row",[i("b-col",{attrs:{md:"12"}},[i("ABSinputDateVuex",{ref:"ref_expired_date",attrs:{prop:e.PI_expired_date},on:{input:e.Onexpired_dateChange},model:{value:e.M_FM_StaffLicense.expired_date,callback:function(t){e.$set(e.M_FM_StaffLicense,"expired_date",t)},expression:"M_FM_StaffLicense.expired_date"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)},s=[],_=(i("ac6a"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{ValKey:null,FormType:"List",Module:"FM",propList:{initialWhere:"fm_license_type_id = '"+this.ValKey+"'",LineNo:this.$parent.data.page_order,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_FM_StaffLicense:{cm_staff_license_id:0,subportfolio_cd:"",fm_license_type_id:0,fm_license_type_id_cd:"",fm_license_type_id_descs:"",license_no:"",address:"",birth_city:"",birth_date:"",expired_date:"",row_id:0,lastupdatestamp:0,time_edit:"",user_input:"",user_edit:""},PI_fm_license_type_id:{dataLookUp:{LookUpCd:"GetLookupFMLicenseType",ColumnDB:"license_cd",InitialWhere:"ss_portfolio_id='"+this.getDataUser().portfolio_id+"'",ParamWhere:"",SourceField:"",DisplayLookup:"license_cd,descs"},cValidate:"",cName:"fm_license_type_id",cLabel:"License Type",cKey:!0,cLabelSize:4,cOrder:1,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"FM/FM_LicenseType",cDisplayColumn:"license_cd,descs"},PI_license_no:{cValidate:"required|max:20",cName:"license_no",cLabel:"License No",cLabelSize:4,cOrder:2,cKey:!0,cType:"text",cVisible:!0,cDefault:"",cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_address:{cValidate:"",cName:"address",cLabel:"Address",cLabelSize:4,cOrder:3,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_birth_city:{cValidate:"max:60",cName:"birth_city",cLabel:"Birth City",cLabelSize:4,cOrder:4,cKey:!1,cType:"text",cVisible:!0,cDefault:"",cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_birth_date:{cValidate:"",cName:"birth_date",cLabel:"Birth Date",cLabelSize:4,cOrder:5,cKey:!1,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_expired_date:{cValidate:"required",cName:"expired_date",cLabel:"Expired Date",cLabelSize:4,cOrder:6,cKey:!1,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage2Data},DataRowPage1:function(){return this.$store.getters.GetPage1Data},GetDataBy1:function(){return this.$store.getters.GetPage1GetDataBy}},methods:{Onfm_license_type_idChange:function(e){var t=this;this.$nextTick((function(){t.M_FM_StaffLicense.fm_license_type_id=e.id,t.M_FM_StaffLicense.fm_license_type_idLabel=e.label,t.inputStatus})),this.$forceUpdate()},OnaddressChange:function(e){var t=this;this.$nextTick((function(){t.inputStatus})),this.$forceUpdate()},Onbirth_dateChange:function(e){var t=this;this.$nextTick((function(){t.inputStatus})),this.$forceUpdate()},Onexpired_dateChange:function(e){var t=this;this.$nextTick((function(){t.inputStatus})),this.$forceUpdate()},setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){},paramFromParent:function(){this.$parent.showForm=!1;var e=this.$store.getters.GetPage1Data;this.M_FM_StaffLicense.fm_license_type_id=e.fm_license_type_id,this.propList.initialWhere=" cm_staff_id = '"+e.cm_staff_id+"' ",this.FormToABSList().doGetList("","eb_getList")},M_CheckboxChecked:function(e,t,i){},M_Insert:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,subportfolio_cd:this.getDataUser().subportfolio_cd,license_no:this.M_FM_StaffLicense.license_no,fm_license_type_id:""==this.M_FM_StaffLicense.fm_license_type_id||null==this.M_FM_StaffLicense.fm_license_type_id?"NULL":this.M_FM_StaffLicense.fm_license_type_id,address:this.M_FM_StaffLicense.address,birth_city:this.M_FM_StaffLicense.birth_city,birth_date:""==this.M_FM_StaffLicense.birth_date||null==this.M_FM_StaffLicense.birth_date?"NULL":this.M_FM_StaffLicense.birth_date,expired_date:""==this.M_FM_StaffLicense.expired_date||null==this.M_FM_StaffLicense.expired_date?"NULL":this.M_FM_StaffLicense.expired_date,user_input:this.getDataUser().user_id,cm_staff_id:this.DataRowPage1.cm_staff_id};this.postJSON(this.getUrlInsert(),t).then((function(t){null!=t&&e.$parent.resultInsert(t.Message)}))},M_Update:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,cm_staff_license_id:this.M_FM_StaffLicense.cm_staff_license_id,subportfolio_cd:this.getDataUser().subportfolio_cd,license_no:this.M_FM_StaffLicense.license_no,fm_license_type_id:""==this.M_FM_StaffLicense.fm_license_type_id||null==this.M_FM_StaffLicense.fm_license_type_id?"NULL":this.M_FM_StaffLicense.fm_license_type_id,address:this.M_FM_StaffLicense.address,birth_city:this.M_FM_StaffLicense.birth_city,birth_date:""==this.M_FM_StaffLicense.birth_date||null==this.M_FM_StaffLicense.birth_date?"NULL":this.M_FM_StaffLicense.birth_date,expired_date:""==this.M_FM_StaffLicense.expired_date||null==this.M_FM_StaffLicense.expired_date?"NULL":this.M_FM_StaffLicense.expired_date,lastupdatestamp:this.M_FM_StaffLicense.lastupdatestamp,user_edit:this.getDataUser().user_id};this.postJSON(this.getUrlUpdate(),t).then((function(t){null!=t&&e.$parent.resultUpdate(t.Message)}))},M_ClearForm:function(){this.M_FM_StaffLicense={cm_staff_license_id:0,subportfolio_cd:"",fm_license_type_id:0,fm_license_type_id_cd:"",fm_license_type_id_descs:"",license_no:"",address:"",birth_city:"",birth_date:"",expired_date:"",row_id:0,lastupdatestamp:0,time_edit:"",user_input:"",user_edit:""}},M_New:function(){var e=this.$store.getters.GetPage1Data;this.M_FM_StaffLicense.fm_license_type_id=e.fm_license_type_id},M_Edit:function(){},M_Delete:function(e){var t=this,i=this.FormToABSList().getRowSelected(),a=[];i.forEach((function(e){a.push({cm_staff_license_id:e.cm_staff_license_id,lastupdatestamp:e.lastupdatestamp,_Message_:""})}));var s={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,Data:a};this.postJSONMulti(this.getUrlDeleteMulti(),s).then((function(e){null!=e&&t.$parent.resultDelete()}))},getDataBy:function(e){var t=this,i={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,cm_staff_license_id:e.cm_staff_license_id};this.postJSON(this.getUrlById(),i).then((function(i){if(null!=i){var a=i.Data[0];t.M_FM_StaffLicense={cm_staff_license_id:a.cm_staff_license_id,subportfolio_cd:a.subportfolio_cd,fm_license_type_id:a.fm_license_type_id,fm_license_type_id_cd:a.fm_license_type_id_cd,fm_license_type_id_descs:a.fm_license_type_id_descs,license_no:a.license_no,address:a.address,birth_city:a.birth_city,birth_date:t.momentDateFormatting(a.birth_date,"YYYY-MM-DD"),expired_date:t.momentDateFormatting(a.expired_date,"YYYY-MM-DD"),row_id:a.row_id,lastupdatestamp:e.lastupdatestamp,time_edit:t.momentDateFormatting(a.time_edit,"YYYY-MM-DD"),user_input:a.user_input,user_edit:a.user_edit},t.M_FM_StaffLicense.fm_license_type_idLabel=null!=t.M_FM_StaffLicense.fm_license_type_id_cd&&""!=t.M_FM_StaffLicense.fm_license_type_id_cd?a.fm_license_type_id_cd+t.separator+a.fm_license_type_id_descs:"",t.IEBy.Input=a.user_input,t.IEBy.Edit=a.user_edit}}))}},created:function(){},beforeMount:function(){},mounted:function(){this.hideSideBarMenu()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),n=_,c=i("2877"),r=Object(c["a"])(n,a,s,!1,null,null,null);t["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d0bac21.ef8d172f.js.map