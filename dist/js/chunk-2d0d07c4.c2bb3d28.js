(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d07c4"],{"67d1":function(o,t,e){"use strict";e.r(t);var a=function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("div",[e("ABSListVuex",{attrs:{prop:o.propList,title:o.data.query_name},on:{rowClicked:o.$parent.rowClicked,rowDblClicked:o.$parent.doDoubleClick,rowLinkClick:o.$parent.rowLink,pageSize:o.$parent.M_PageSize,pagination:o.$parent.M_Pagination,filter:o.$parent.M_Advance_Filter,headTable:o.$parent.M_Head_Table,refreshColumn:o.$parent.refreshColumn}}),e("div",{directives:[{name:"show",rawName:"v-show",value:o.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[e("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[e("span",{directives:[{name:"show",rawName:"v-show",value:o.IEBy.Input&&o.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[o._v("\n                    Input By : "+o._s(o.IEBy.Input)+" | Edit By : "+o._s(o.IEBy.Edit)+" "),e("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),e("b-collapse",{attrs:{id:"collapse1",visible:!0}},[e("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[e("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[e("b-form",{attrs:{"data-vv-scope":"FormScope_"+o.PageLevel+"_"+o.TabIndex,"data-vv-value-path":"FormScope_"+o.PageLevel+"_"+o.TabIndex}},[e("b-row",{staticStyle:{"padding-left":"10px"}},[e("b-col",{attrs:{md:"12",id:"col-left"}},[e("b-row",[e("b-col",{attrs:{md:"6"}},[e("ABSinputTextVuex",{ref:"ref_logbookno",attrs:{prop:o.PI_logbookno},model:{value:o.M_MK_LogBookH.logbookno,callback:function(t){o.$set(o.M_MK_LogBookH,"logbookno",t)},expression:"M_MK_LogBookH.logbookno"}})],1)],1),e("b-row",[e("b-col",{attrs:{md:"6"}},[e("ABSinputDateVuex",{ref:"ref_logbookdate",attrs:{prop:o.PI_logbookdate},on:{input:o.OnlogbookdateChange},model:{value:o.M_MK_LogBookH.logbookdate,callback:function(t){o.$set(o.M_MK_LogBookH,"logbookdate",t)},expression:"M_MK_LogBookH.logbookdate"}})],1)],1),e("b-row",[e("b-col",{attrs:{md:"6"}},[e("ABSInputSelectList",{ref:"ref_followuptype",attrs:{prop:o.PI_followuptype,value:o.M_MK_LogBookH.followuptype,label:o.M_MK_LogBookH.followuptypeLabel},on:{change:o.OnfollowuptypeChange}})],1)],1),e("b-row",[e("b-col",{attrs:{md:"6"}},[e("ABSInputSelectList",{ref:"ref_contactid",attrs:{prop:o.PI_contactid,value:o.M_MK_LogBookH.contactid,label:o.M_MK_LogBookH.contactidLabel},on:{change:o.OncontactidChange}})],1)],1),e("b-row",[e("b-col",{attrs:{md:"6"}},[e("ABSInputSelectList",{ref:"ref_contactstatus",attrs:{prop:o.PI_contactstatus,value:o.M_MK_LogBookH.contactstatus,label:o.M_MK_LogBookH.contactstatusLabel},on:{change:o.OncontactstatusChange}})],1)],1),e("b-row",[e("b-col",{attrs:{md:"6"}},[e("ABSinputTextVuex",{attrs:{prop:o.PI_reason},model:{value:o.M_MK_LogBookH.reason,callback:function(t){o.$set(o.M_MK_LogBookH,"reason",t)},expression:"M_MK_LogBookH.reason"}})],1)],1),e("b-row",[e("b-col",{attrs:{md:"6"}},[e("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:o.PI_remarks},on:{input:o.OnremarksChange},model:{value:o.M_MK_LogBookH.remarks,callback:function(t){o.$set(o.M_MK_LogBookH,"remarks",t)},expression:"M_MK_LogBookH.remarks"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)},n=[],i=(e("ac6a"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{FormType:"List",Module:"MK",propList:{initialWhere:"",LineNo:this.$parent.data.page_order,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:""},IEBy:{Input:"",Edit:""},RunningCdLogBook:"",M_MK_LogBookH:{logbookno:"",logbookdate:"",followuptype:"",contactid:"",contactstatus:"",reason:"",remarks:"",lastupdatestamp:"",mk_log_book_h_id:"",user_edit:"",user_input:""},PI_logbookno:{cValidate:"required",cName:"logbookno",cLabel:"Log Book No.",cOrder:1,cKey:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cType:"text"},PI_logbookdate:{cValidate:"",cName:"logbookdate",cLabel:"Log Book Date",cLabelSize:4,cOrder:2,cKey:!1,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_followuptype:{dataLookUp:{LookUpCd:"GetFollowUpType",ColumnDB:"follow_up_type_cd",InitialWhere:"",ParamWhere:""},cValidate:"required",cName:"followuptype",cLabel:"Follow Up Type",cKey:!1,cLabelSize:4,cOrder:1,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"MK/MK_FollowUpType",cDisplayColumn:"follow_up_type_cd,descs"},PI_contactid:{dataLookUp:{LookUpCd:"GetLookupCMContact",ColumnDB:"contact_id",InitialWhere:"",ParamWhere:""},cValidate:"required",cName:"contactid",cLabel:"Customer",cKey:!1,cLabelSize:4,cOrder:1,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"contact_id,name"},PI_contactstatus:{dataLookUp:{LookUpCd:"GetContactStatusH",ColumnDB:"contact_status_cd",InitialWhere:"",ParamWhere:""},cValidate:"required",cName:"contactstatus",cLabel:"Customer Status",cKey:!1,cLabelSize:4,cOrder:1,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"contact_status_cd,descs"},PI_reason:{cValidate:"",cName:"reason",cLabel:"Reason",cOrder:1,cKey:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cType:"text"},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Remarks",cLabelSize:4,cOrder:14,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"}},methods:{GetLogBookRunningCd:function(){var o=this,t={OptionFunctionCd:"GetMkSpecification",ModuleCd:this.Module};this.FnDynamicFunction(t).then((function(t){console.log(t);var e=t.Data[0];console.log(e),null!=t?(o.RunningCdLogBook=e.cm_running_code_h_id_log_book,""!=o.RunningCdLogBook&&(o.PI_logbookno.cProtect=!0,o.M_MK_LogBookH.logbookno="(auto)",o.$refs.ref_logbookno.focus())):(o.PI_logbookno.cProtect=!1,o.M_MK_LogBookH.logbookno="",o.$refs.ref_logbookno.focus())}))},OnfollowuptypeChange:function(o){var t=this;this.$nextTick((function(){t.M_MK_LogBookH.followuptype=o.mk_follow_up_type_id,t.M_MK_LogBookH.followuptypeLabel=o.label,t.inputStatus})),this.$forceUpdate()},OncontactidChange:function(o){var t=this;this.$nextTick((function(){t.M_MK_LogBookH.contactid=o.cm_contact_id,t.M_MK_LogBookH.contactidLabel=o.label,t.inputStatus})),this.$forceUpdate()},OncontactstatusChange:function(o){var t=this;this.$nextTick((function(){t.M_MK_LogBookH.contactstatus=o.mk_contact_status_h_id,t.M_MK_LogBookH.contactstatusLabel=o.label,t.inputStatus})),this.$forceUpdate()},setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(o){},M_Post:function(){},M_Refresh:function(){},M_ClearForm:function(){this.M_MK_LogBookH={contactstatush:"",description:""}},M_New:function(){this.GetLogBookRunningCd()},M_Edit:function(){},M_Delete:function(o){var t=this,e=this.FormToABSList().getRowSelected(),a=[];e.forEach((function(o){a.push({mk_log_book_h_id:o.row_id,lastupdatestamp:o.lastupdatestamp,_Message_:""})}));var n={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,Data:a};this.postJSONMulti(this.getUrlDeleteMulti(),n).then((function(o){null!=o&&t.$parent.resultDelete()}))},M_Insert:function(){var o=this;if(""!=this.RunningCdLogBook){var t={OptionFunctionCd:"GenerateRunningCodeById",ModuleCd:"CM",subportfolio_cd:this.getDataUser().subportfolio_cd,running_id:this.RunningCdLogBook,user_input:this.getDataUser().user_id,date:this.getToday()};this.FnDynamicFunction(t).then((function(t){var e=t.Data[0];if(console.log(e),null!=t){o.M_MK_LogBookH.logbookno=e._generate_running_code_id;var a={OptionSeq:o.getOptionSeq().OptionSeq,LineNo:o.$parent.data.page_order,subportfolio_cd:o.getDataUser().subportfolio_cd,log_book_no:o.M_MK_LogBookH.logbookno,log_book_date:o.M_MK_LogBookH.logbookdate,mk_follow_up_type_id:o.M_MK_LogBookH.followuptype,cm_contact_id:o.M_MK_LogBookH.contactid,mk_contact_status_h_id:o.M_MK_LogBookH.contactstatus,reason:o.M_MK_LogBookH.reason,remark:o.M_MK_LogBookH.remarks,user_input:o.getDataUser().user_id};o.postJSON(o.getUrlInsert(),a).then((function(t){null!=t&&o.$parent.resultInsert(t.Message)}))}else{a={OptionSeq:o.getOptionSeq().OptionSeq,LineNo:o.$parent.data.page_order,subportfolio_cd:o.getDataUser().subportfolio_cd,log_book_no:o.M_MK_LogBookH.logbookno,log_book_date:o.M_MK_LogBookH.logbookdate,mk_follow_up_type_id:o.M_MK_LogBookH.followuptype,cm_contact_id:o.M_MK_LogBookH.contactid,mk_contact_status_h_id:o.M_MK_LogBookH.contactstatus,reason:o.M_MK_LogBookH.reason,remark:o.M_MK_LogBookH.remarks,user_input:o.getDataUser().user_id};o.postJSON(o.getUrlInsert(),a).then((function(t){null!=t&&o.$parent.resultInsert(t.Message)}))}}))}},M_Update:function(){var o=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,subportfolio_cd:this.getDataUser().subportfolio_cd,log_book_no:this.M_MK_LogBookH.logbookno,log_book_date:this.M_MK_LogBookH.logbookdate,mk_follow_up_type_id:this.M_MK_LogBookH.followuptype,cm_contact_id:this.M_MK_LogBookH.contactid,mk_contact_status_h_id:this.M_MK_LogBookH.contactstatus,reason:this.M_MK_LogBookH.reason,remark:this.M_MK_LogBookH.remarks,user_edit:this.getDataUser().user_id,mk_log_book_h_id:this.M_MK_LogBookH.mk_log_book_h_id,lastupdatestamp:this.M_MK_LogBookH.lastupdatestamp};this.postJSON(this.getUrlUpdate(),t).then((function(t){null!=t&&o.$parent.resultUpdate(t.Message)}))},M_Cancel:function(){},paramFromParent:function(){},rowClicked:function(o,t){},doDoubleClick:function(){},rowLink:function(o){},getDataBy:function(o){var t=this;console.log(o);var e={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,mk_log_book_id:o.row_id};this.postJSON(this.getUrlById(),e).then((function(e){if(null!=e){var a=e.Data[0];console.log(a),t.M_MK_LogBookH={logbookno:a.log_book_no,logbookdate:a.log_book_date,followuptype:a.mk_follow_up_type_id,contactid:a.cm_contact_id,contactstatus:a.mk_contact_status_h_id,reason:a.reason,remarks:a.remark,subportfolio_cd:a.subportfolio_cd,lastupdatestamp:o.lastupdatestamp,mk_contact_status_h_id:o.row_id,user_edit:a.user_edit,mk_log_book_h_id:o.row_id},t.M_MK_LogBookH.followuptypeLabel=null!=t.M_MK_LogBookH.followuptype?a.follow_up_type_cd+t.separator+a.follow_up_descs:"",t.M_MK_LogBookH.contactidLabel=null!=t.M_MK_LogBookH.contactid?a.contact_id+t.separator+a.customer_name:"",t.M_MK_LogBookH.contactstatusLabel=null!=t.M_MK_LogBookH.contactstatus?a.contact_status_cd+t.separator+a.contact_status_descs:"",t.IEBy.Input=a.user_input,t.IEBy.Edit=a.user_edit}}))}},beforeCreate:function(){},created:function(){this.$store.commit("setFormType","List"),this.getToolbar().ProcessPS()},beforeMount:function(){},mounted:function(){this.hideSideBarMenu(),this.FormToABSList().doGetList("","eb_getList")},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),s=i,c=e("2877"),r=Object(c["a"])(s,a,n,!1,null,null,null);t["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d0d07c4.c2bb3d28.js.map