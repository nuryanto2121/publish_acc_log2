(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d23055c"],{ec9a:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ABSListVuex",{attrs:{prop:e.propList,title:e.data.query_name},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn,checkboxChecked:e.$parent.checkboxChecked}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_tablecd",attrs:{prop:e.PI_tablecd},model:{value:e.M_SM_TableMaster.tablecd,callback:function(t){e.$set(e.M_SM_TableMaster,"tablecd",t)},expression:"M_SM_TableMaster.tablecd"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_tablename",attrs:{prop:e.PI_tablename},model:{value:e.M_SM_TableMaster.tablename,callback:function(t){e.$set(e.M_SM_TableMaster,"tablename",t)},expression:"M_SM_TableMaster.tablename"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_assignuser",attrs:{prop:e.PI_assignuser,value:e.M_SM_TableMaster.assignuser,label:e.M_SM_TableMaster.assignuserLabel},on:{change:e.OnassignuserChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:e.PI_remarks},on:{input:e.OnremarksChange},model:{value:e.M_SM_TableMaster.remarks,callback:function(t){e.$set(e.M_SM_TableMaster,"remarks",t)},expression:"M_SM_TableMaster.remarks"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_defaultuser",attrs:{prop:e.PI_defaultuser,value:e.M_SM_TableMaster.defaultuser,label:e.M_SM_TableMaster.defaultuserLabel},on:{change:e.OndefaultuserChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputRadioButtonVuex",{ref:"ref_tablestatus",attrs:{prop:e.PI_tablestatus},on:{input:e.OntablestatusChange},model:{value:e.M_SM_TableMaster.tablestatus,callback:function(t){e.$set(e.M_SM_TableMaster,"tablestatus",t)},expression:"M_SM_TableMaster.tablestatus"}})],1)],1)],1)],1),a("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)],1)},r=[],i=(a("ac6a"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{cInsertKey:"",FormType:"List",Module:"SM",propList:{initialWhere:"",LineNo:this.$parent.data.page_order,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_SM_TableMaster:{tablecd:"",tablename:"",assignuser:"",remarks:"",defaultuser:"",tablestatus:"",userinput:"",useredit:this.getDataUser().user_id,timeinput:"",timeeditt:"",lastupdatestamp:0,rowid:0},PI_tablecd:{cValidate:"required|max:5",cName:"tablecd",cLabel:"Kode Meja",cLabelSize:4,cOrder:1,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_tablename:{cValidate:"required|max:50",cName:"tablename",cLabel:"Nama Meja",cLabelSize:4,cOrder:2,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_assignuser:{dataLookUp:{LookUpCd:"GetLookupUser",ColumnDB:"UserId",InitialWhere:"",ParamWhere:"",SourceField:"",DisplayLookup:"UserId,UserName"},cValidate:"required",cName:"assignuser",cLabel:"Assign User",cKey:!1,cLabelSize:4,cOrder:3,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"UserId,UserName"},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Keterangan",cLabelSize:4,cOrder:4,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_defaultuser:{dataLookUp:{LookUpCd:"GetLookupUser",ColumnDB:"UserId",InitialWhere:"",ParamWhere:"",SourceField:"",DisplayLookup:"UserId,UserName"},cValidate:"required",cName:"defaultuser",cLabel:"Default User",cKey:!1,cLabelSize:4,cOrder:5,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"UserId,UserName"},PI_tablestatus:{cValidate:"",cName:"tablestatus",cId:"rdbtablestatus",cRadioOptions:[{text:"Ya",value:"Y"},{text:"Tidak",value:"N"}],cRadioDefaultOption:"Y",cLabel:"Status Meja",cLabelSize:4,cDefault:"",cOrder:6,cProtect:!1,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder,cProtect:!1}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage1Data},GetDataBy1:function(){return this.$store.getters.GetPage1GetDataBy}},methods:{OnassignuserChange:function(e){var t=this;this.$nextTick((function(){t.M_SM_TableMaster.assignuser=e.id,t.M_SM_TableMaster.assignuserLabel=e.label,t.inputStatus})),this.$forceUpdate()},OnremarksChange:function(e){var t=this;this.$nextTick((function(){t.inputStatus})),this.$forceUpdate()},OndefaultuserChange:function(e){var t=this;this.$nextTick((function(){t.M_SM_TableMaster.defaultuser=e.id,t.M_SM_TableMaster.defaultuserLabel=e.label,t.inputStatus})),this.$forceUpdate()},OntablestatusChange:function(e){var t=this;this.$nextTick((function(){t.inputStatus})),this.$forceUpdate()},setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){},M_CheckboxChecked:function(e,t,a){},M_Post:function(e){},M_Insert:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,SubPortfolioCd:this.getDataUser().subportfolio_cd,TableCd:this.M_SM_TableMaster.tablecd,TableName:this.M_SM_TableMaster.tablename,AssignUser:""==this.M_SM_TableMaster.assignuser||null==this.M_SM_TableMaster.assignuser?"NULL":this.M_SM_TableMaster.assignuser,Remarks:this.M_SM_TableMaster.remarks,DefaultUser:""==this.M_SM_TableMaster.defaultuser||null==this.M_SM_TableMaster.defaultuser?"NULL":this.M_SM_TableMaster.defaultuser,TableStatus:this.M_SM_TableMaster.tablestatus,UserInput:this.getDataUser().user_id};this.postJSON(this.getUrlInsert(),t).then((function(t){null!=t&&e.$parent.resultInsert(t.Message)}))},M_Update:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,SubPortfolioCd:this.getDataUser().subportfolio_cd,TableCd:this.M_SM_TableMaster.tablecd,TableName:this.M_SM_TableMaster.tablename,AssignUser:""==this.M_SM_TableMaster.assignuser||null==this.M_SM_TableMaster.assignuser?"NULL":this.M_SM_TableMaster.assignuser,Remarks:this.M_SM_TableMaster.remarks,DefaultUser:""==this.M_SM_TableMaster.defaultuser||null==this.M_SM_TableMaster.defaultuser?"NULL":this.M_SM_TableMaster.defaultuser,TableStatus:this.M_SM_TableMaster.tablestatus,UserEdit:this.getDataUser().user_id,LastUpdateStamp:this.M_SM_TableMaster.lastupdatestamp};this.postJSON(this.getUrlUpdate(),t).then((function(t){null!=t&&e.$parent.resultUpdate(t.Message)}))},M_ClearForm:function(){this.M_SM_TableMaster={tablecd:"",tablename:"",assignuser:"",remarks:"",defaultuser:"",tablestatus:"Y",userinput:"",useredit:this.getDataUser().user_id,timeinput:"",timeeditt:"",lastupdatestamp:0,rowid:0}},M_New:function(){this.$refs.ref_tablecd.focus()},M_Edit:function(){this.$refs.ref_tablename.focus()},M_Delete:function(e){var t=this,a=this.FormToABSList().getRowSelected(),s=[];a.forEach((function(e){s.push({_Message_:"",SubPortfolioCd:t.getDataUser().subportfolio_cd,TableCd:e.ableCd,LastUpdateStamp:e.LastUpdateStamp})}));var r={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,Data:s};this.postJSONMulti(this.getUrlDeleteMulti(),r).then((function(e){null!=e&&t.$parent.resultDelete()}))},getDataBy:function(e){var t=this,a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,SubPortfolioCd:this.getDataUser().subportfolio_cd,tablecd:e.TableCd};this.postJSON(this.getUrlById(),a).then((function(a){if(null!=a){var s=a.Data[0];t.M_SM_TableMaster={tablecd:s.tablecd,tablename:s.tablename,assignuser:s.assignuser,remarks:s.remarks,defaultuser:s.defaultuser,tablestatus:s.tablestatus,userinput:s.userinput,useredit:s.useredit,timeinput:s.timeinput,timeedit:s.timeedit,lastupdatestamp:e.LastUpdateStamp,rowid:e.row_id},t.M_SM_TableMaster.assignuserLabel=null!=t.M_SM_TableMaster.assignuser&&""!=t.M_SM_TableMaster.assignuser?s.assignuser+t.separator+s.assignusername:"",t.M_SM_TableMaster.defaultuserLabel=null!=t.M_SM_TableMaster.defaultuser&&""!=t.M_SM_TableMaster.defaultuser?s.defaultuser+t.separator+s.defaultusername:"",t.IEBy.Input=s.userinput,t.IEBy.Edit=s.useredit}}))}},beforeCreate:function(){},created:function(){this.$store.commit("setFormType","List"),this.getToolbar().ProcessPS()},beforeMount:function(){},mounted:function(){this.hideSideBarMenu(),this.FormToABSList().doGetList("","eb_getList")},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),l=i,n=a("2877"),o=Object(n["a"])(l,s,r,!1,null,null,null);t["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d23055c.8eb335f9.js.map