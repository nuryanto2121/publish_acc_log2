(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e1dde"],{"7beb":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ABSListVuex",{attrs:{prop:e.propList,title:e.data.query_name},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_moduleseq",attrs:{prop:e.PI_moduleseq,value:e.M_SS_FormParameter.moduleseq,label:e.M_SS_FormParameter.moduleseqLabel},on:{change:e.OnmoduleseqChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_eventseq",attrs:{prop:e.PI_eventseq,value:e.M_SS_FormParameter.eventseq,label:e.M_SS_FormParameter.eventseqLabel},on:{change:e.OneventseqChange}})],1),a("b-col",{directives:[{name:"show",rawName:"v-show",value:"VIEW"==e.inputStatus,expression:"inputStatus=='VIEW'"}],attrs:{md:"1"}},[a("b-button",{staticStyle:{"font-size":"10px","padding-top":"3px","padding-bottom":"3px"},on:{click:e.doDownload}},[a("font-awesome-icon",{staticClass:"icon-style-1",attrs:{icon:"list"}}),e._v(" Download Script")],1)],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_url",attrs:{prop:e.PI_url},model:{value:e.M_SS_FormParameter.url,callback:function(t){e.$set(e.M_SS_FormParameter,"url",t)},expression:"M_SS_FormParameter.url"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_filename",attrs:{prop:e.PI_filename},on:{input:e.OnfilenameChange},model:{value:e.M_SS_FormParameter.filename,callback:function(t){e.$set(e.M_SS_FormParameter,"filename",t)},expression:"M_SS_FormParameter.filename"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_optionurl",attrs:{prop:e.PI_optionurl},model:{value:e.M_SS_FormParameter.optionurl,callback:function(t){e.$set(e.M_SS_FormParameter,"optionurl",t)},expression:"M_SS_FormParameter.optionurl"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputRadioButtonVuex",{ref:"ref_formtype",attrs:{prop:e.PI_formtype},on:{input:e.OnformtypeChange},model:{value:e.M_SS_FormParameter.formtype,callback:function(t){e.$set(e.M_SS_FormParameter,"formtype",t)},expression:"M_SS_FormParameter.formtype"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_title",attrs:{prop:e.PI_title},model:{value:e.M_SS_FormParameter.title,callback:function(t){e.$set(e.M_SS_FormParameter,"title",t)},expression:"M_SS_FormParameter.title"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_lineno",attrs:{prop:e.PI_lineno},on:{input:e.OnlinenoChange},model:{value:e.M_SS_FormParameter.lineno,callback:function(t){e.$set(e.M_SS_FormParameter,"lineno",t)},expression:"M_SS_FormParameter.lineno"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_level",attrs:{prop:e.PI_level},on:{input:e.OnlevelChange},model:{value:e.M_SS_FormParameter.level,callback:function(t){e.$set(e.M_SS_FormParameter,"level",t)},expression:"M_SS_FormParameter.level"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_parentseqno",attrs:{prop:e.PI_parentseqno,value:e.M_SS_FormParameter.parentseqno,label:e.M_SS_FormParameter.parentseqnoLabel},on:{change:e.OnparentseqnoChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_tablename",attrs:{prop:e.PI_tablename,value:e.M_SS_FormParameter.tablename,label:e.M_SS_FormParameter.tablenameLabel},on:{change:e.OntablenameChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_relationparam",attrs:{prop:e.PI_relationparam,value:e.M_SS_FormParameter.relationparam,label:e.M_SS_FormParameter.relationparamLabel},on:{change:e.OnrelationparamChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_viewgetlist",attrs:{prop:e.PI_viewgetlist},model:{value:e.M_SS_FormParameter.viewgetlist,callback:function(t){e.$set(e.M_SS_FormParameter,"viewgetlist",t)},expression:"M_SS_FormParameter.viewgetlist"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_sp_i",attrs:{prop:e.PI_sp_i},model:{value:e.M_SS_FormParameter.sp_i,callback:function(t){e.$set(e.M_SS_FormParameter,"sp_i",t)},expression:"M_SS_FormParameter.sp_i"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_sp_u",attrs:{prop:e.PI_sp_u},model:{value:e.M_SS_FormParameter.sp_u,callback:function(t){e.$set(e.M_SS_FormParameter,"sp_u",t)},expression:"M_SS_FormParameter.sp_u"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_sp_d",attrs:{prop:e.PI_sp_d},model:{value:e.M_SS_FormParameter.sp_d,callback:function(t){e.$set(e.M_SS_FormParameter,"sp_d",t)},expression:"M_SS_FormParameter.sp_d"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_sp_s",attrs:{prop:e.PI_sp_s},model:{value:e.M_SS_FormParameter.sp_s,callback:function(t){e.$set(e.M_SS_FormParameter,"sp_s",t)},expression:"M_SS_FormParameter.sp_s"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_sp_process",attrs:{prop:e.PI_sp_process},model:{value:e.M_SS_FormParameter.sp_process,callback:function(t){e.$set(e.M_SS_FormParameter,"sp_process",t)},expression:"M_SS_FormParameter.sp_process"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)},i=[],o=(a("ac6a"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{cInsertKey:"",FormType:"List",Module:"SS",propList:{initialWhere:"",LineNo:this.$parent.data.page_order,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},urlFileScript:"",M_SS_FormParameter:{headerid:0,url:"",title:"",lineno:"",level:"",sp_i:"",sp_u:"",sp_s:"",sp_d:"",sp_process:"",tablename:"",formtype:"List",moduleseq:"",moduledescs:"",eventseq:"",eventdescs:"",optionseq:"",optionurl:"",relationparam:"",pagemasterseq:"",userinput:"",useredit:this.getDataUser().user_id,timeinput:"",timeedit:"",filename:"",viewgetlist:"",parentseqno:0,relationtype:""},PI_moduleseq:{dataLookUp:{LookUpCd:"GetLookupSSModuleAccess",ColumnDB:"ModuleSeq",InitialWhere:"",ParamWhere:""},cValidate:"required",cName:"moduleseq",cLabel:"Module",cKey:!1,cLabelSize:4,cOrder:1,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"short_name,menu_name"},PI_eventseq:{dataLookUp:{LookUpCd:"GetLookupSSEventAccess",ColumnDB:"EventSeq",InitialWhere:"module_seq=''",ParamWhere:""},cValidate:"required",cName:"eventseq",cLabel:"Event",cKey:!1,cLabelSize:4,cOrder:2,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"text_menu"},PI_url:{cValidate:"required|max:255",cName:"url",cLabel:"Url",cLabelSize:4,cOrder:3,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_filename:{cValidate:"required|max:255",cName:"filename",cLabel:"File Name",cLabelSize:4,cOrder:4,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_optionurl:{cValidate:"required|max:255",cName:"optionurl",cLabel:"Option Url",cLabelSize:4,cOrder:5,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_formtype:{cValidate:"required",cName:"formtype",cLabel:"Form Type",cId:"rdbformtype",cRadioOptions:[{text:"List",value:"List"},{text:"Form",value:"Form"}],cLabelSize:4,cOrder:6,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_title:{cValidate:"required|max:60",cName:"title",cLabel:"Title",cLabelSize:4,cOrder:7,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_lineno:{cValidate:"required",cName:"lineno",cLabel:"Line No",cLabelSize:4,cOrder:8,cKey:!1,cType:"numeric",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_level:{cValidate:"required",cName:"level",cLabel:"Level",cLabelSize:4,cOrder:9,cKey:!1,cType:"numeric",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_parentseqno:{dataLookUp:{LookUpCd:"GetLookupSSParentSeqNo",ColumnDB:"page_master_seq",InitialWhere:"",ParamWhere:""},cValidate:"",cName:"parentseqno",cLabel:"Parent Seq No",cKey:!1,cLabelSize:4,cOrder:10,cTriggered:!1,cDefault:"",cProtect:!0,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"page_master_seq,query_sequence_no"},PI_tablename:{dataLookUp:{LookUpCd:"GetLookupSSAllTable",ColumnDB:"table_name",InitialWhere:"",ParamWhere:""},cValidate:"",cName:"tablename",cLabel:"Table Name",cKey:!1,cLabelSize:4,cOrder:11,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"table_name"},PI_relationparam:{dataLookUp:{LookUpCd:"GetLookupSSAllColumn",ColumnDB:"column_name",InitialWhere:"",ParamWhere:""},cValidate:"",cName:"relationparam",cLabel:"Relation Parameter",cKey:!1,cLabelSize:4,cOrder:12,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"column_name"},PI_viewgetlist:{cValidate:"",cName:"viewgetlist",cLabel:"View Name",cLabelSize:4,cOrder:13,cKey:!1,cType:"text",cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_sp_i:{cValidate:"",cName:"sp_i",cLabel:"SP Insert",cLabelSize:4,cOrder:14,cKey:!1,cType:"text",cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_sp_u:{cValidate:"",cName:"sp_u",cLabel:"SP Update",cLabelSize:4,cOrder:15,cKey:!1,cType:"text",cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_sp_d:{cValidate:"",cName:"sp_d",cLabel:"SP Delete",cLabelSize:4,cOrder:16,cKey:!1,cType:"text",cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_sp_s:{cValidate:"",cName:"sp_s",cLabel:"SP GetById",cLabelSize:4,cOrder:17,cKey:!1,cType:"text",cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_sp_process:{cValidate:"",cName:"sp_process",cLabel:"SP Process",cLabelSize:4,cOrder:18,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage1Data}},methods:{setToolbarButton:function(){this.getToolbar().statusFunction[2].disabled=!0},OnmoduleseqChange:function(e){var t=this;this.M_SS_FormParameter.moduleseq=e.id,this.M_SS_FormParameter.moduleseqLabel=e.label,this.$nextTick((function(){"VIEW"!=t.inputStatus&&(t.PI_eventseq.dataLookUp.InitialWhere="module_seq='"+e.module_seq+"'")})),this.$forceUpdate()},OneventseqChange:function(e){var t=this;this.M_SS_FormParameter.eventseq=e.id,this.M_SS_FormParameter.eventseqLabel=e.label,this.$nextTick((function(){t.inputStatus})),this.$forceUpdate()},OnfilenameChange:function(e){var t=this;this.$nextTick((function(){"VIEW"!=t.inputStatus&&""!=e&&(t.M_SS_FormParameter.optionurl=e)})),this.$forceUpdate()},OnformtypeChange:function(e){var t=this;this.$nextTick((function(){"VIEW"!=t.inputStatus&&("List"==e?(t.PI_viewgetlist.cValidate="required",t.PI_relationparam.cValidate="",t.$refs.ref_viewgetlist.isRequired=!0,t.$refs.ref_relationparam.isRequired=!1):(t.PI_viewgetlist.cValidate="",t.PI_relationparam.cValidate="required",t.$refs.ref_viewgetlist.isRequired=!1,t.$refs.ref_relationparam.isRequired=!0))})),this.$forceUpdate()},OnlinenoChange:function(e){var t=this;this.$nextTick((function(){"VIEW"!=t.inputStatus&&(0==t.M_SS_FormParameter.lineno?(t.PI_level.cValidate="min_value:1|max_value:1",t.PI_parentseqno.cProtect=!0,t.PI_parentseqno.cValidate="",t.$refs.ref_parentseqno.isRequired=!1):t.M_SS_FormParameter.lineno>=1&&(t.PI_level.cValidate="min_value:2",t.PI_parentseqno.cProtect=!1,t.PI_parentseqno.cValidate="required",t.$refs.ref_parentseqno.isRequired=!0))})),this.$forceUpdate()},OnlevelChange:function(e){var t=this;this.$nextTick((function(){"VIEW"!=t.inputStatus&&(t.M_SS_FormParameter.level>1?(t.PI_relationparam.cValidate="required",t.$refs.ref_relationparam.isRequired=!0):1==t.M_SS_FormParameter.level&&(t.PI_relationparam.cValidate="",t.$refs.ref_relationparam.isRequired=!1))})),this.$forceUpdate()},OnparentseqnoChange:function(e){var t=this;this.M_SS_FormParameter.parentseqno=e.query_sequence_no,this.M_SS_FormParameter.parentseqnoLabel=e.label,this.$nextTick((function(){t.inputStatus})),this.$forceUpdate()},OntablenameChange:function(e){var t=this;this.M_SS_FormParameter.tablename=e.id,this.M_SS_FormParameter.tablenameLabel=e.label,this.$nextTick((function(){"VIEW"!=t.inputStatus&&(t.PI_relationparam.dataLookUp.InitialWhere="table_name='"+e.table_name+"'",t.M_SS_FormParameter.viewgetlist="v"+e.table_name,t.M_SS_FormParameter.sp_i="f"+e.table_name+"_i",t.M_SS_FormParameter.sp_u="f"+e.table_name+"_u",t.M_SS_FormParameter.sp_d="f"+e.table_name+"_d",t.M_SS_FormParameter.sp_s="f"+e.table_name+"_s")})),this.$forceUpdate()},OnrelationparamChange:function(e){var t=this;this.M_SS_FormParameter.relationparam=e.column_name,this.M_SS_FormParameter.relationparamLabel=e.label,this.$nextTick((function(){"VIEW"!=t.inputStatus&&(t.M_SS_FormParameter.relationtype=e.data_type)})),this.$forceUpdate()},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){},M_Post:function(e){},M_Insert:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNoV2:this.$parent.data.page_order,url:this.M_SS_FormParameter.url,title:this.M_SS_FormParameter.title,line_no:this.M_SS_FormParameter.lineno,level:this.M_SS_FormParameter.level,sp_i:this.M_SS_FormParameter.sp_i,sp_u:this.M_SS_FormParameter.sp_u,sp_s:this.M_SS_FormParameter.sp_s,sp_d:this.M_SS_FormParameter.sp_d,sp_process:this.M_SS_FormParameter.sp_process,table_name:this.M_SS_FormParameter.tablename,form_type:this.M_SS_FormParameter.formtype,module_seq:this.M_SS_FormParameter.moduleseq,event_seq:this.M_SS_FormParameter.eventseq,option_seq:0,option_url:this.M_SS_FormParameter.optionurl,relation_param:this.M_SS_FormParameter.relationparam,page_master_seq:0,user_input:this.getDataUser().user_id,file_name:this.M_SS_FormParameter.filename,view_name:this.M_SS_FormParameter.viewgetlist,parent_seq_no:""==this.M_SS_FormParameter.parentseqno||null==this.M_SS_FormParameter.parentseqno?0:this.M_SS_FormParameter.parentseqno,relation_type:this.M_SS_FormParameter.relationtype};this.postJSON(this.getUrlInsert(),t).then((function(t){null!=t&&e.$parent.resultInsert(t.Message)}))},M_Update:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNoV2:this.$parent.data.page_order,header_id:this.M_SS_FormParameter.headerid,url:this.M_SS_FormParameter.url,title:this.M_SS_FormParameter.title,line_no:this.M_SS_FormParameter.lineno,level:this.M_SS_FormParameter.level,sp_i:this.M_SS_FormParameter.sp_i,sp_u:this.M_SS_FormParameter.sp_u,sp_s:this.M_SS_FormParameter.sp_s,sp_d:this.M_SS_FormParameter.sp_d,sp_process:this.M_SS_FormParameter.sp_process,table_name:this.M_SS_FormParameter.tablename,form_type:this.M_SS_FormParameter.formtype,module_seq:this.M_SS_FormParameter.moduleseq,event_seq:this.M_SS_FormParameter.eventseq,option_seq:this.M_SS_FormParameter.optionseq,option_url:this.M_SS_FormParameter.optionurl,relation_param:this.M_SS_FormParameter.relationparam,page_master_seq:this.M_SS_FormParameter.pagemasterseq,user_edit:this.getDataUser().user_id,file_name:this.M_SS_FormParameter.filename,view_name:this.M_SS_FormParameter.viewgetlist,parent_seq_no:""==this.M_SS_FormParameter.parentseqno||null==this.M_SS_FormParameter.parentseqno?0:this.M_SS_FormParameter.parentseqno,relation_type:this.M_SS_FormParameter.relationtype};this.postJSON(this.getUrlUpdate(),t).then((function(t){null!=t&&e.$parent.resultUpdate(t.Message)}))},M_ClearForm:function(){this.M_SS_FormParameter={headerid:0,url:"",title:"",lineno:"",level:"",sp_i:"",sp_u:"",sp_s:"",sp_d:"",sp_process:"",tablename:"",formtype:"List",moduleseq:"",moduledescs:"",eventseq:"",eventdescs:"",optionseq:"",optionurl:"",relationparam:"",pagemasterseq:"",userinput:"",useredit:this.getDataUser().user_id,timeinput:"",timeedit:"",filename:"",viewgetlist:"",parentseqno:0,relationtype:""}},M_New:function(){this.$refs.ref_moduleseq.focus()},M_Edit:function(){this.$refs.ref_moduleseq.focus(),this.PI_eventseq.dataLookUp.InitialWhere="module_seq='"+this.M_SS_FormParameter.moduleseq+"'",this.PI_relationparam.dataLookUp.InitialWhere="table_name='"+this.M_SS_FormParameter.tablename+"'"},M_Delete:function(e){var t=this,a=this.FormToABSList().getRowSelected(),r=[];a.forEach((function(e){r.push({header_id:e.header_id,_Message_:""})}));var i={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,Data:r};this.postJSONMulti(this.getUrlDeleteMulti(),i).then((function(e){null!=e&&t.$parent.resultDelete()}))},getDataBy:function(e){var t=this;this.urlFileScript=this.getFileScript(e.header_id);var a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,header_id:e.header_id};this.postJSON(this.getUrlById(),a).then((function(a){if(null!=a){var r=a.Data[0];t.M_SS_FormParameter={headerid:e.header_id,url:r.url,title:r.title,lineno:r.line_no,level:r.level,sp_i:r.sp_i,sp_u:r.sp_u,sp_s:r.sp_s,sp_d:r.sp_d,sp_process:r.sp_process,tablename:r.table_name,formtype:r.form_type,moduleseq:r.module_seq,moduledescs:r.module_descs,eventseq:r.event_seq,eventdescs:r.event_descs,optionseq:r.option_seq,optionurl:r.option_url,relationparam:r.relation_param,pagemasterseq:r.page_master_seq,userinput:r.user_input,useredit:r.user_edit,timeinput:r.time_input,timeedit:r.time_edit,filename:r.file_name,viewgetlist:r.view_name,parentseqno:r.parent_seq_no,relationtype:r.relation_type},0==r.line_no?(t.PI_level.cValidate="min_value:1|max_value:1",t.PI_parentseqno.cProtect=!0,t.PI_parentseqno.cValidate="",t.$refs.ref_parentseqno.isRequired=!1):r.line_no>=1&&(t.PI_level.cValidate="min_value:2",t.PI_parentseqno.cProtect=!1,t.PI_parentseqno.cValidate="required",t.$refs.ref_parentseqno.isRequired=!0),"List"==r.form_type?(t.PI_viewgetlist.cValidate="required",t.$refs.ref_viewgetlist.isRequired=!0):(t.PI_viewgetlist.cValidate="",t.$refs.ref_viewgetlist.isRequired=!1),"List"==r.form_type?(t.PI_viewgetlist.cValidate="required",t.PI_relationparam.cValidate="",t.$refs.ref_viewgetlist.isRequired=!0,t.$refs.ref_relationparam.isRequired=!1):(t.PI_viewgetlist.cValidate="",t.PI_relationparam.cValidate="required",t.$refs.ref_viewgetlist.isRequired=!1,t.$refs.ref_relationparam.isRequired=!0),r.level>1?(t.PI_relationparam.cValidate="required",t.$refs.ref_relationparam.isRequired=!0):1==r.level&&(t.PI_relationparam.cValidate="",t.$refs.ref_relationparam.isRequired=!1),t.M_SS_FormParameter.moduleseqLabel=null!=t.M_SS_FormParameter.moduleseq?r.module_descs+t.separator+r.module_cd:"",t.M_SS_FormParameter.eventseqLabel=null!=t.M_SS_FormParameter.eventseq?r.event_descs:"",t.M_SS_FormParameter.tablenameLabel=null!=t.M_SS_FormParameter.tablename?r.table_name:"",t.M_SS_FormParameter.relationparamLabel=null!=t.M_SS_FormParameter.relationparam?r.relation_param:"",t.M_SS_FormParameter.parentseqnoLabel=null!=t.M_SS_FormParameter.parentseqno?r.parent_seq_no:"",t.IEBy.Input=r.user_input,t.IEBy.Edit=r.user_edit}}))},doDownload:function(){window.open(this.urlFileScript,"_blank")}},beforeCreate:function(){},created:function(){this.$store.commit("setFormType","List"),this.getToolbar().ProcessPS()},beforeMount:function(){},mounted:function(){this.hideSideBarMenu(),this.FormToABSList().doGetList("","eb_getList")},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),s=o,n=a("2877"),l=Object(n["a"])(s,r,i,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0e1dde.be835865.js.map