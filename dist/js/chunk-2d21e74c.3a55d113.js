(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21e74c"],{d648:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("ABSListVuex",{attrs:{prop:e.propList,title:e.data.query_name},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn}}),r("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[r("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[r("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),r("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),r("b-collapse",{attrs:{id:"collapse1",visible:!0}},[r("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[r("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[r("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[r("b-row",{staticStyle:{"padding-left":"10px"}},[r("b-col",{attrs:{md:"12",id:"col-left"}},[r("b-row",[r("b-col",{attrs:{md:"6"}},[r("ABSinputTextVuex",{ref:"ref_reportname",attrs:{prop:e.PI_reportname},model:{value:e.M_SS_ReportParameter.reportname,callback:function(t){e.$set(e.M_SS_ReportParameter,"reportname",t)},expression:"M_SS_ReportParameter.reportname"}})],1)],1),r("b-row",[r("b-col",{attrs:{md:"6"}},[r("ABSinputTextVuex",{ref:"ref_pathreport",attrs:{prop:e.PI_pathreport},model:{value:e.M_SS_ReportParameter.pathreport,callback:function(t){e.$set(e.M_SS_ReportParameter,"pathreport",t)},expression:"M_SS_ReportParameter.pathreport"}})],1)],1),r("b-row",[r("b-col",{attrs:{md:"6"}},[r("ABSinputTextVuex",{ref:"ref_optionseq",attrs:{prop:e.PI_optionseq},model:{value:e.M_SS_ReportParameter.optionseq,callback:function(t){e.$set(e.M_SS_ReportParameter,"optionseq",t)},expression:"M_SS_ReportParameter.optionseq"}})],1)],1)],1)],1),r("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)],1)},o=[],i=(r("ac6a"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{cInsertKey:"",FormType:"List",Module:"SS",propList:{initialWhere:"",LineNo:this.$parent.data.page_order,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_SS_ReportParameter:{optionseq:"",pathreport:"",reportname:"",userinput:"",useredit:this.getDataUser().user_id,timeinput:"",timeedit:"",rowid:0},PI_reportname:{cValidate:"",cName:"reportname",cLabel:"Report Name",cLabelSize:4,cOrder:1,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_pathreport:{cValidate:"",cName:"pathreport",cLabel:"Path Report",cLabelSize:4,cOrder:2,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_optionseq:{cValidate:"required",cName:"optionseq",cLabel:"Option Seq",cLabelSize:4,cOrder:3,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage1Data}},methods:{setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){},M_Post:function(e){},M_Insert:function(){var e=this,t={OptionSeqV2:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,OptionSeq:this.M_SS_ReportParameter.optionseq,PathReport:this.M_SS_ReportParameter.pathreport,ReportName:this.M_SS_ReportParameter.reportname,UserInput:this.getDataUser().user_id,UserEdit:this.getDataUser().user_id};this.postJSON(this.getUrlInsert(),t).then((function(t){null!=t&&e.$parent.resultInsert(t.Message)}))},M_Update:function(){var e=this,t={OptionSeqV2:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,OptionSeq:this.M_SS_ReportParameter.optionseq,PathReport:this.M_SS_ReportParameter.pathreport,ReportName:this.M_SS_ReportParameter.reportname,UserInput:this.getDataUser().user_id,UserEdit:this.getDataUser().user_id};this.postJSON(this.getUrlUpdate(),t).then((function(t){null!=t&&e.$parent.resultUpdate(t.Message)}))},M_ClearForm:function(){this.M_SS_ReportParameter={optionseq:"",pathreport:"",reportname:"",userinput:"",useredit:this.getDataUser().user_id,timeinput:"",timeedit:"",rowid:0}},M_New:function(){this.$refs.ref_reportname.focus()},M_Edit:function(){this.$refs.ref_reportname.focus()},M_Delete:function(e){var t=this,r=this.FormToABSList().getRowSelected(),a=[];r.forEach((function(e){a.push({SS_OptionRptHeader_ID:e.row_id,_Message_:""})}));var o={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,Data:a};this.postJSONMulti(this.getUrlDeleteMulti(),o).then((function(e){null!=e&&t.$parent.resultDelete()}))},getDataBy:function(e){var t=this,r={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,optionseq:e.OptionSeq};this.postJSON(this.getUrlById(),r).then((function(e){if(null!=e){var r=e.Data[0];t.M_SS_ReportParameter={optionseq:r.optionseq,pathreport:r.pathreport,reportname:r.reportname,userinput:r.user_input,useredit:r.useredit,timeinput:r.timeinput,timeedit:r.timeedit,rowid:r.row_id},t.IEBy.Input=r.user_input,t.IEBy.Edit=r.useredit}}))}},beforeCreate:function(){},created:function(){this.$store.commit("setFormType","List"),this.getToolbar().ProcessPS()},beforeMount:function(){},mounted:function(){this.hideSideBarMenu(),this.FormToABSList().doGetList("","eb_getList")},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),n=i,s=r("2877"),p=Object(s["a"])(n,a,o,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d21e74c.3a55d113.js.map