(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ac42b"],{"197d":function(t,e,a){"use strict";a.r(e);var _=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ABSListVuex",{attrs:{prop:t.propList,title:t.data.query_name},on:{rowClicked:t.$parent.rowClicked,rowDblClicked:t.$parent.doDoubleClick,rowLinkClick:t.$parent.rowLink,pageSize:t.$parent.M_PageSize,pagination:t.$parent.M_Pagination,filter:t.$parent.M_Advance_Filter,headTable:t.$parent.M_Head_Table,refreshColumn:t.$parent.refreshColumn,checkboxChecked:t.$parent.checkboxChecked}}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.IEBy.Input&&t.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[t._v("\n                    Input By : "+t._s(t.IEBy.Input)+" | Edit By : "+t._s(t.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+t.PageLevel+"_"+t.TabIndex,"data-vv-value-path":"FormScope_"+t.PageLevel+"_"+t.TabIndex}},[a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{md:"6",id:"col-left"}},[a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputTextVuex",{ref:"ref_staff_no",attrs:{prop:t.PI_staff_no},model:{value:t.M_FM_Staff.staff_no,callback:function(e){t.$set(t.M_FM_Staff,"staff_no",e)},expression:"M_FM_Staff.staff_no"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSInputSelectList",{ref:"ref_cm_staff_type_id",attrs:{prop:t.PI_cm_staff_type_id,value:t.M_FM_Staff.cm_staff_type_id,label:t.M_FM_Staff.cm_staff_type_idLabel},on:{change:t.Oncm_staff_type_idChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputTextVuex",{ref:"ref_name",attrs:{prop:t.PI_name},model:{value:t.M_FM_Staff.name,callback:function(e){t.$set(t.M_FM_Staff,"name",e)},expression:"M_FM_Staff.name"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputTextVuex",{ref:"ref_nik",attrs:{prop:t.PI_nik},model:{value:t.M_FM_Staff.nik,callback:function(e){t.$set(t.M_FM_Staff,"nik",e)},expression:"M_FM_Staff.nik"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputDateVuex",{ref:"ref_terminate_date",attrs:{prop:t.PI_terminate_date},on:{input:t.Onterminate_dateChange},model:{value:t.M_FM_Staff.terminate_date,callback:function(e){t.$set(t.M_FM_Staff,"terminate_date",e)},expression:"M_FM_Staff.terminate_date"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputDateVuex",{ref:"ref_join_date",attrs:{prop:t.PI_join_date},on:{input:t.Onjoin_dateChange},model:{value:t.M_FM_Staff.join_date,callback:function(e){t.$set(t.M_FM_Staff,"join_date",e)},expression:"M_FM_Staff.join_date"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputTextVuex",{ref:"ref_weight",attrs:{prop:t.PI_weight},model:{value:t.M_FM_Staff.weight,callback:function(e){t.$set(t.M_FM_Staff,"weight",e)},expression:"M_FM_Staff.weight"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSTextAreaVuex",{ref:"ref_address",attrs:{prop:t.PI_address},on:{input:t.OnaddressChange},model:{value:t.M_FM_Staff.address,callback:function(e){t.$set(t.M_FM_Staff,"address",e)},expression:"M_FM_Staff.address"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSInputSelectList",{ref:"ref_cm_city_id",attrs:{prop:t.PI_cm_city_id,value:t.M_FM_Staff.cm_city_id,label:t.M_FM_Staff.cm_city_idLabel},on:{change:t.Oncm_city_idChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputRadioButtonVuex",{ref:"ref_gender",attrs:{prop:t.PI_gender},on:{input:t.OngenderChange},model:{value:t.M_FM_Staff.gender,callback:function(e){t.$set(t.M_FM_Staff,"gender",e)},expression:"M_FM_Staff.gender"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSInputSelectList",{ref:"ref_cm_staff_master_id",attrs:{prop:t.PI_cm_staff_master_id,value:t.M_FM_Staff.cm_staff_master_id,label:t.M_FM_Staff.cm_staff_master_idLabel},on:{change:t.Oncm_staff_master_idChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSInputSelectList",{ref:"ref_ss_user_id",attrs:{prop:t.PI_ss_user_id,value:t.M_FM_Staff.ss_user_id,label:t.M_FM_Staff.ss_user_idLabel},on:{change:t.Onss_user_idChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:t.PI_remarks},on:{input:t.OnremarksChange},model:{value:t.M_FM_Staff.remarks,callback:function(e){t.$set(t.M_FM_Staff,"remarks",e)},expression:"M_FM_Staff.remarks"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputTextVuex",{ref:"ref_email",attrs:{prop:t.PI_email},model:{value:t.M_FM_Staff.email,callback:function(e){t.$set(t.M_FM_Staff,"email",e)},expression:"M_FM_Staff.email"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputRadioButtonVuex",{ref:"ref_status",attrs:{prop:t.PI_status},on:{input:t.OnstatusChange},model:{value:t.M_FM_Staff.status,callback:function(e){t.$set(t.M_FM_Staff,"status",e)},expression:"M_FM_Staff.status"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputTextVuex",{ref:"ref_handphone",attrs:{prop:t.PI_handphone},model:{value:t.M_FM_Staff.handphone,callback:function(e){t.$set(t.M_FM_Staff,"handphone",e)},expression:"M_FM_Staff.handphone"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputTextVuex",{ref:"ref_total_distense_driven",attrs:{prop:t.PI_total_distense_driven},model:{value:t.M_FM_Staff.total_distense_driven,callback:function(e){t.$set(t.M_FM_Staff,"total_distense_driven",e)},expression:"M_FM_Staff.total_distense_driven"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputTextVuex",{ref:"ref_total_fuel_use",attrs:{prop:t.PI_total_fuel_use},model:{value:t.M_FM_Staff.total_fuel_use,callback:function(e){t.$set(t.M_FM_Staff,"total_fuel_use",e)},expression:"M_FM_Staff.total_fuel_use"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)},i=[],s=(a("ac6a"),a("7f7f"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{cInsertKey:"",FormType:"List",Module:"FM",propList:{initialWhere:"",LineNo:this.$parent.data.page_order,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},running_staff_no:null,IEBy:{Input:"",Edit:""},M_FM_Staff:{subportfolio_cd:"",cm_staff_id:0,staff_no:"",cm_staff_type_id:0,cm_staff_type_id_cd:"",cm_staff_type_id_descs:"",name:"",nik:"",terminate_date:"",join_date:"",weight:0,address:"",cm_city_id:0,cm_city_id_cd:"",cm_city_id_descs:"",gender:"",cm_staff_master_id:0,cm_staff_master_id_cd:"",cm_staff_master_id_descs:"",ss_user_id:0,ss_user_id_cd:"",ss_user_id_descs:"",remarks:"",email:"",status:"",handphone:"",total_distense_driven:0,total_fuel_use:0,row_id:0,lastupdatestamp:0,time_edit:"",user_input:"",user_edit:""},PI_staff_no:{cValidate:"required|max:20",cName:"staff_no",cLabel:"Staff No",cLabelSize:4,cOrder:1,cKey:!0,cType:"text",cVisible:!0,cDefault:"",cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_cm_staff_type_id:{dataLookUp:{LookUpCd:"GetLookupFMStaffType",ColumnDB:"staff_type",InitialWhere:"ss_portfolio_id='"+this.getDataUser().portfolio_id+"'",ParamWhere:"",SourceField:"",DisplayLookup:"staff_type,descs"},cValidate:"required",cName:"cm_staff_type_id",cLabel:"Staff Type",cKey:!1,cLabelSize:4,cOrder:2,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"FM/FM_StaffType",cDisplayColumn:"staff_type,descs"},PI_name:{cValidate:"required|max:60",cName:"name",cLabel:"Name",cLabelSize:4,cOrder:3,cKey:!1,cType:"text",cVisible:!0,cDefault:"",cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_nik:{cValidate:"max:20",cName:"nik",cLabel:"NIK",cLabelSize:4,cOrder:4,cKey:!1,cType:"text",cVisible:!0,cDefault:"",cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_terminate_date:{cValidate:"",cName:"terminate_date",cLabel:"Terminate Date",cLabelSize:4,cOrder:5,cKey:!1,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_join_date:{cValidate:"",cName:"join_date",cLabel:"Join Date",cLabelSize:4,cOrder:6,cKey:!1,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_weight:{cValidate:"",cName:"weight",cLabel:"Weight",cLabelSize:4,cOrder:7,cKey:!1,cType:"decimal",cDecimal:2,cVisible:!0,cDefault:"",cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_address:{cValidate:"",cName:"address",cLabel:"Address",cLabelSize:4,cOrder:8,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_cm_city_id:{dataLookUp:{LookUpCd:"GetLookupCMCity",ColumnDB:"city_cd",InitialWhere:"ss_portfolio_id='"+this.getDataUser().portfolio_id+"'",ParamWhere:"",SourceField:"",DisplayLookup:"city_cd,descs"},cValidate:"",cName:"cm_city_id",cLabel:"City",cKey:!1,cLabelSize:4,cOrder:9,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"city_cd,descs"},PI_gender:{cValidate:"",cName:"gender",cId:"rdbgender",cRadioOptions:[{text:"Male",value:"M"},{text:"Female",value:"F"}],cRadioDefaultOption:"",cLabel:"Gender",cLabelSize:4,cDefault:"",cOrder:10,cProtect:!1,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_cm_staff_master_id:{dataLookUp:{LookUpCd:"GetLookupFMStaffMaster",ColumnDB:"staff_no",InitialWhere:"ss_portfolio_id='"+this.getDataUser().portfolio_id+"'",ParamWhere:"",SourceField:"",DisplayLookup:"staff_no,name"},cValidate:"",cName:"cm_staff_master_id",cLabel:"Recruiter Staff",cKey:!1,cLabelSize:4,cOrder:11,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"staff_no,name"},PI_ss_user_id:{dataLookUp:{LookUpCd:"GetLookupSSUser",ColumnDB:"user_id",InitialWhere:"ss_portfolio_id='"+this.getDataUser().portfolio_id+"'",ParamWhere:"",SourceField:"",DisplayLookup:""},cValidate:"",cName:"ss_user_id",cLabel:"User Id",cKey:!1,cLabelSize:4,cOrder:12,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:""},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Remarks",cLabelSize:4,cOrder:13,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_email:{cValidate:"max:20",cName:"email",cLabel:"Email",cLabelSize:4,cOrder:14,cKey:!1,cType:"text",cVisible:!0,cDefault:"",cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_status:{cValidate:"",cName:"status",cId:"rdbstatus",cRadioOptions:[{text:"Active",value:"A"},{text:"Non Active",value:"N"}],cRadioDefaultOption:"",cLabel:"Status",cLabelSize:4,cDefault:"",cOrder:15,cProtect:!1,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_handphone:{cValidate:"max:20",cName:"handphone",cLabel:"Hand Phone",cLabelSize:4,cOrder:16,cKey:!1,cType:"text",cVisible:!0,cDefault:"",cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_total_distense_driven:{cValidate:"",cName:"total_distense_driven",cLabel:"Total Distance Driven",cLabelSize:4,cOrder:17,cKey:!1,cType:"decimal",cDecimal:2,cVisible:!0,cDefault:"",cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_total_fuel_use:{cValidate:"",cName:"total_fuel_use",cLabel:"Total Fue Use",cLabelSize:4,cOrder:18,cKey:!1,cType:"decimal",cDecimal:2,cVisible:!0,cDefault:"",cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage1Data},GetDataBy1:function(){return this.$store.getters.GetPage1GetDataBy}},methods:{GetFMSpecification:function(){var t=this,e={subportfolio_cd:this.getDataUser().subportfolio_cd,module_cd:this.Module};this.FnDynamicSpec(e).then((function(e){if(null==e)t.PI_staff_no.cProtect=!1,t.M_FM_Staff.staff_no="",t.$refs.ref_staff_no.focus();else{var a=e.Data[0];t.running_staff_no=a.running_staff_no,t.running_staff_no&&""!==t.running_staff_no&&t.running_staff_no>0&&(t.PI_staff_no.cProtect=!0,t.M_FM_Staff.staff_no="(auto)")}}))},Oncm_staff_type_idChange:function(t){var e=this;this.$nextTick((function(){e.M_FM_Staff.cm_staff_type_id=t.id,e.M_FM_Staff.cm_staff_type_idLabel=t.label,e.inputStatus})),this.$forceUpdate()},Onterminate_dateChange:function(t){var e=this;this.$nextTick((function(){e.inputStatus})),this.$forceUpdate()},Onjoin_dateChange:function(t){var e=this;this.$nextTick((function(){e.inputStatus})),this.$forceUpdate()},OnaddressChange:function(t){var e=this;this.$nextTick((function(){e.inputStatus})),this.$forceUpdate()},Oncm_city_idChange:function(t){var e=this;this.$nextTick((function(){e.M_FM_Staff.cm_city_id=t.id,e.M_FM_Staff.cm_city_idLabel=t.label,e.inputStatus})),this.$forceUpdate()},OngenderChange:function(t){var e=this;this.$nextTick((function(){e.inputStatus})),this.$forceUpdate()},Oncm_staff_master_idChange:function(t){var e=this;this.$nextTick((function(){e.M_FM_Staff.cm_staff_master_id=t.id,e.M_FM_Staff.cm_staff_master_idLabel=t.label,e.inputStatus})),this.$forceUpdate()},Onss_user_idChange:function(t){var e=this;this.$nextTick((function(){e.M_FM_Staff.ss_user_id=t.id,e.M_FM_Staff.ss_user_idLabel=t.label,e.inputStatus})),this.$forceUpdate()},OnremarksChange:function(t){var e=this;this.$nextTick((function(){e.inputStatus})),this.$forceUpdate()},OnstatusChange:function(t){var e=this;this.$nextTick((function(){e.inputStatus})),this.$forceUpdate()},setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(t){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(t,e){},rowLink:function(t){},paramFromParent:function(){},M_CheckboxChecked:function(t,e,a){},M_Post:function(t){},M_Insert:function(){var t=this;if(this.running_staff_no&&""!=this.running_staff_no&&this.running_staff_no>0){var e={OptionFunctionCd:"GenerateRunningCodeById",ModuleCd:"CM",subportfolio_cd:this.getDataUser().subportfolio_cd,running_id:this.running_staff_no,user_input:this.getDataUser().user_id,date:this.getToday()};this.FnDynamicFunction(e).then((function(e){if(null!=e){var a=e.Data[0];t.M_FM_Staff.staff_no=a._generate_running_code_id;var _={OptionSeq:t.getOptionSeq().OptionSeq,LineNo:t.$parent.data.page_order,subportfolio_cd:t.getDataUser().subportfolio_cd,staff_no:t.M_FM_Staff.staff_no,cm_staff_type_id:""==t.M_FM_Staff.cm_staff_type_id||null==t.M_FM_Staff.cm_staff_type_id?"NULL":t.M_FM_Staff.cm_staff_type_id,name:t.M_FM_Staff.name,nik:t.M_FM_Staff.nik,terminate_date:""==t.M_FM_Staff.terminate_date||null==t.M_FM_Staff.terminate_date?"NULL":t.M_FM_Staff.terminate_date,join_date:""==t.M_FM_Staff.join_date||null==t.M_FM_Staff.join_date?"NULL":t.M_FM_Staff.join_date,weight:parseFloat(t.M_FM_Staff.weight?t.replaceAllString(t.M_FM_Staff.weight,",","","number"):0),address:t.M_FM_Staff.address,cm_city_id:""==t.M_FM_Staff.cm_city_id||null==t.M_FM_Staff.cm_city_id?"NULL":t.M_FM_Staff.cm_city_id,gender:t.M_FM_Staff.gender,cm_staff_master_id:""==t.M_FM_Staff.cm_staff_master_id||null==t.M_FM_Staff.cm_staff_master_id?"NULL":t.M_FM_Staff.cm_staff_master_id,ss_user_id:""==t.M_FM_Staff.ss_user_id||null==t.M_FM_Staff.ss_user_id?"NULL":t.M_FM_Staff.ss_user_id,remarks:t.M_FM_Staff.remarks,email:t.M_FM_Staff.email,status:t.M_FM_Staff.status,handphone:t.M_FM_Staff.handphone,total_distense_driven:parseFloat(t.M_FM_Staff.total_distense_driven?t.replaceAllString(t.M_FM_Staff.total_distense_driven,",","","number"):0),total_fuel_use:parseFloat(t.M_FM_Staff.total_fuel_use?t.replaceAllString(t.M_FM_Staff.total_fuel_use,",","","number"):0),user_input:t.getDataUser().user_id};t.postJSON(t.getUrlInsert(),_).then((function(e){null!=e&&t.$parent.resultInsert(e.Message)}))}}))}else{e={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,subportfolio_cd:this.getDataUser().subportfolio_cd,staff_no:this.M_FM_Staff.staff_no,cm_staff_type_id:""==this.M_FM_Staff.cm_staff_type_id||null==this.M_FM_Staff.cm_staff_type_id?"NULL":this.M_FM_Staff.cm_staff_type_id,name:this.M_FM_Staff.name,nik:this.M_FM_Staff.nik,terminate_date:""==this.M_FM_Staff.terminate_date||null==this.M_FM_Staff.terminate_date?"NULL":this.M_FM_Staff.terminate_date,join_date:""==this.M_FM_Staff.join_date||null==this.M_FM_Staff.join_date?"NULL":this.M_FM_Staff.join_date,weight:parseFloat(this.M_FM_Staff.weight?this.replaceAllString(this.M_FM_Staff.weight,",","","number"):0),address:this.M_FM_Staff.address,cm_city_id:""==this.M_FM_Staff.cm_city_id||null==this.M_FM_Staff.cm_city_id?"NULL":this.M_FM_Staff.cm_city_id,gender:this.M_FM_Staff.gender,cm_staff_master_id:""==this.M_FM_Staff.cm_staff_master_id||null==this.M_FM_Staff.cm_staff_master_id?"NULL":this.M_FM_Staff.cm_staff_master_id,ss_user_id:""==this.M_FM_Staff.ss_user_id||null==this.M_FM_Staff.ss_user_id?"NULL":this.M_FM_Staff.ss_user_id,remarks:this.M_FM_Staff.remarks,email:this.M_FM_Staff.email,status:this.M_FM_Staff.status,handphone:this.M_FM_Staff.handphone,total_distense_driven:parseFloat(this.M_FM_Staff.total_distense_driven?this.replaceAllString(this.M_FM_Staff.total_distense_driven,",","","number"):0),total_fuel_use:parseFloat(this.M_FM_Staff.total_fuel_use?this.replaceAllString(this.M_FM_Staff.total_fuel_use,",","","number"):0),user_input:this.getDataUser().user_id};this.postJSON(this.getUrlInsert(),e).then((function(e){null!=e&&t.$parent.resultInsert(e.Message)}))}},M_Update:function(){var t=this,e={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,cm_staff_id:this.M_FM_Staff.cm_staff_id,subportfolio_cd:this.getDataUser().subportfolio_cd,staff_no:this.M_FM_Staff.staff_no,cm_staff_type_id:""==this.M_FM_Staff.cm_staff_type_id||null==this.M_FM_Staff.cm_staff_type_id?"NULL":this.M_FM_Staff.cm_staff_type_id,name:this.M_FM_Staff.name,nik:this.M_FM_Staff.nik,terminate_date:""==this.M_FM_Staff.terminate_date||null==this.M_FM_Staff.terminate_date?"NULL":this.M_FM_Staff.terminate_date,join_date:""==this.M_FM_Staff.join_date||null==this.M_FM_Staff.join_date?"NULL":this.M_FM_Staff.join_date,weight:parseFloat(this.M_FM_Staff.weight?this.replaceAllString(this.M_FM_Staff.weight,",","","number"):0),address:this.M_FM_Staff.address,cm_city_id:""==this.M_FM_Staff.cm_city_id||null==this.M_FM_Staff.cm_city_id?"NULL":this.M_FM_Staff.cm_city_id,gender:this.M_FM_Staff.gender,cm_staff_master_id:""==this.M_FM_Staff.cm_staff_master_id||null==this.M_FM_Staff.cm_staff_master_id?"NULL":this.M_FM_Staff.cm_staff_master_id,ss_user_id:""==this.M_FM_Staff.ss_user_id||null==this.M_FM_Staff.ss_user_id?"NULL":this.M_FM_Staff.ss_user_id,remarks:this.M_FM_Staff.remarks,email:this.M_FM_Staff.email,status:this.M_FM_Staff.status,handphone:this.M_FM_Staff.handphone,total_distense_driven:parseFloat(this.M_FM_Staff.total_distense_driven?this.replaceAllString(this.M_FM_Staff.total_distense_driven,",","","number"):0),total_fuel_use:parseFloat(this.M_FM_Staff.total_fuel_use?this.replaceAllString(this.M_FM_Staff.total_fuel_use,",","","number"):0),lastupdatestamp:this.M_FM_Staff.lastupdatestamp,user_edit:this.getDataUser().user_id};this.postJSON(this.getUrlUpdate(),e).then((function(e){null!=e&&t.$parent.resultUpdate(e.Message)}))},M_ClearForm:function(){this.M_FM_Staff={subportfolio_cd:"",cm_staff_id:0,staff_no:"",cm_staff_type_id:0,cm_staff_type_id_cd:"",cm_staff_type_id_descs:"",name:"",nik:"",terminate_date:"",join_date:"",weight:0,address:"",cm_city_id:0,cm_city_id_cd:"",cm_city_id_descs:"",gender:"",cm_staff_master_id:0,cm_staff_master_id_cd:"",cm_staff_master_id_descs:"",ss_user_id:0,ss_user_id_cd:"",ss_user_id_descs:"",remarks:"",email:"",status:"",handphone:"",total_distense_driven:0,total_fuel_use:0,row_id:0,lastupdatestamp:0,time_edit:"",user_input:"",user_edit:""}},M_New:function(){this.GetFMSpecification()},M_Edit:function(){},M_Delete:function(t){var e=this,a=this.FormToABSList().getRowSelected(),_=[];a.forEach((function(t){_.push({cm_staff_id:t.cm_staff_id,lastupdatestamp:t.lastupdatestamp,_Message_:""})}));var i={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,Data:_};this.postJSONMulti(this.getUrlDeleteMulti(),i).then((function(t){null!=t&&e.$parent.resultDelete()}))},getDataBy:function(t){var e=this,a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,cm_staff_id:t.cm_staff_id};this.postJSON(this.getUrlById(),a).then((function(a){if(null!=a){var _=a.Data[0];e.M_FM_Staff={subportfolio_cd:_.subportfolio_cd,cm_staff_id:_.cm_staff_id,staff_no:_.staff_no,cm_staff_type_id:_.cm_staff_type_id,cm_staff_type_id_cd:_.cm_staff_type_id_cd,cm_staff_type_id_descs:_.cm_staff_type_id_descs,name:_.name,nik:_.nik,terminate_date:_.terminate_date,join_date:_.join_date,weight:e.isCurrency(_.weight,e.decimal),address:_.address,cm_city_id:_.cm_city_id,cm_city_id_cd:_.cm_city_id_cd,cm_city_id_descs:_.cm_city_id_descs,gender:_.gender,cm_staff_master_id:_.cm_staff_master_id,cm_staff_master_id_cd:_.cm_staff_master_id_cd,cm_staff_master_id_descs:_.cm_staff_master_id_descs,ss_user_id:_.ss_user_id,ss_user_id_cd:_.ss_user_id_cd,ss_user_id_descs:_.ss_user_id_descs,remarks:_.remarks,email:_.email,status:_.status,handphone:_.handphone,total_distense_driven:e.isCurrency(_.total_distense_driven,e.decimal),total_fuel_use:e.isCurrency(_.total_fuel_use,e.decimal),row_id:_.row_id,lastupdatestamp:t.lastupdatestamp,time_edit:e.momentDateFormatting(_.time_edit,"YYYY-MM-DD"),user_input:_.user_input,user_edit:_.user_edit},e.M_FM_Staff.cm_staff_type_idLabel=null!=e.M_FM_Staff.cm_staff_type_id_cd&&""!=e.M_FM_Staff.cm_staff_type_id_cd?_.cm_staff_type_id_cd+e.separator+_.cm_staff_type_id_descs:"",e.M_FM_Staff.cm_city_idLabel=null!=e.M_FM_Staff.cm_city_id_cd&&""!=e.M_FM_Staff.cm_city_id_cd?_.cm_city_id_cd+e.separator+_.cm_city_id_descs:"",e.M_FM_Staff.cm_staff_master_idLabel=null!=e.M_FM_Staff.cm_staff_master_id_cd&&""!=e.M_FM_Staff.cm_staff_master_id_cd?_.cm_staff_master_id_cd+e.separator+_.cm_staff_master_id_descs:"",e.M_FM_Staff.ss_user_idLabel=null!=e.M_FM_Staff.ss_user_id_cd&&""!=e.M_FM_Staff.ss_user_id_cd?_.ss_user_id_cd+e.separator+_.ss_user_id_descs:"",e.IEBy.Input=_.user_input,e.IEBy.Edit=_.user_edit}}))}},beforeCreate:function(){},created:function(){this.$store.commit("setFormType","List"),this.getToolbar().ProcessPS()},beforeMount:function(){},mounted:function(){this.hideSideBarMenu(),this.FormToABSList().doGetList("","eb_getList")},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),f=s,n=a("2877"),c=Object(n["a"])(f,_,i,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0ac42b.0d8d4c06.js.map