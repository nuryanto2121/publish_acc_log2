(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d042a"],{"66e9":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ABSListVuex",{attrs:{prop:e.propList,title:e.data.query_name},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn,checkboxChecked:e.$parent.checkboxChecked}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputDateVuex",{ref:"ref_notesdate",attrs:{prop:e.PI_notesdate},on:{input:e.OnnotesdateChange},model:{value:e.M_SM_SalesNotesAddendum.notesdate,callback:function(t){e.$set(e.M_SM_SalesNotesAddendum,"notesdate",t)},expression:"M_SM_SalesNotesAddendum.notesdate"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_subject",attrs:{prop:e.PI_subject},model:{value:e.M_SM_SalesNotesAddendum.subject,callback:function(t){e.$set(e.M_SM_SalesNotesAddendum,"subject",t)},expression:"M_SM_SalesNotesAddendum.subject"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:e.PI_remarks},on:{input:e.OnremarksChange},model:{value:e.M_SM_SalesNotesAddendum.remarks,callback:function(t){e.$set(e.M_SM_SalesNotesAddendum,"remarks",t)},expression:"M_SM_SalesNotesAddendum.remarks"}})],1)],1)],1)],1),a("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)],1)},o=[],n=(a("ac6a"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{ValKey:null,FormType:"List",Module:"SM",propList:{initialWhere:"LotNo = '"+this.ValKey+"'",LineNo:this.$parent.data.page_order,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_SM_SalesNotesAddendum:{notesdate:"",subject:"",remarks:"",addendumsequenceno:0},PI_notesdate:{cValidate:"required",cName:"notesdate",cLabel:"Date",cLabelSize:4,cOrder:0,cKey:!0,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_subject:{cValidate:"required|max:150",cName:"subject",cLabel:"Subject",cLabelSize:4,cOrder:0,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Notes",cLabelSize:4,cOrder:0,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder,cProtect:!1}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage2Data},DataRowPage1:function(){return this.$store.getters.GetPage1Data},GetDataBy1:function(){return this.$store.getters.GetPage1GetDataBy}},methods:{OnnotesdateChange:function(e){var t=this;this.$nextTick((function(){t.inputStatus})),this.$forceUpdate()},OnremarksChange:function(e){var t=this;this.$nextTick((function(){t.inputStatus})),this.$forceUpdate()},setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){this.$parent.showForm=!1;var e=this.$store.getters.GetPage1Data;this.M_SM_SalesNotesAddendum.lotno=e.LotNo,this.propList.initialWhere=" SubPortfolioCd='"+this.getDataUser().subportfolio_cd+"' AND OrderNo ='"+e.OrderNo+"'",this.FormToABSList().doGetList("","eb_getList")},M_CheckboxChecked:function(e,t,a){},M_Insert:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,OrderNo:this.DataRowPage1.OrderNo,SubPortfolioCd:this.getDataUser().subportfolio_cd,NotesDate:""==this.M_SM_SalesNotesAddendum.notesdate||null==this.M_SM_SalesNotesAddendum.notesdate?"NULL":this.M_SM_SalesNotesAddendum.notesdate,Subject:this.M_SM_SalesNotesAddendum.subject,Remarks:this.M_SM_SalesNotesAddendum.remarks,UserInput:this.getDataUser().user_id,LotNo:this.DataRowPage1.LotNo};this.postJSON(this.getUrlInsert(),t).then((function(t){null!=t&&e.$parent.resultInsert(t.Message)}))},M_Update:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,OrderNo:this.DataRowPage1.OrderNo,SubPortfolioCd:this.getDataUser().subportfolio_cd,SequenceNo:this.M_SM_SalesNotesAddendum.sequenceno,NotesDate:""==this.M_SM_SalesNotesAddendum.notesdate||null==this.M_SM_SalesNotesAddendum.notesdate?"NULL":this.M_SM_SalesNotesAddendum.notesdate,Subject:this.M_SM_SalesNotesAddendum.subject,Remarks:this.M_SM_SalesNotesAddendum.remarks,UserEdit:this.getDataUser().user_id,LastUpdateStamp:this.M_SM_SalesNotesAddendum.lastupdatestamp,LotNo:this.DataRowPage1.LotNo};this.postJSON(this.getUrlUpdate(),t).then((function(t){null!=t&&e.$parent.resultUpdate(t.Message)}))},M_ClearForm:function(){this.M_SM_SalesNotesAddendum={notesdate:"",subject:"",remarks:"",addendumsequenceno:0}},M_New:function(){var e=this.$store.getters.GetPage1Data;this.M_SM_SalesNotesAddendum.lotno=e.LotNo},M_Edit:function(){},M_Delete:function(e){var t=this,a=this.FormToABSList().getRowSelected(),s=[];a.forEach((function(e){s.push({_Message_:"",OrderNo:t.DataRowPage1.OrderNo,SubPortfolioCd:t.getDataUser().subportfolio_cd,SequenceNo:e.SequenceNo,LastUpdateStamp:e.LastUpdateStamp,LotNo:t.DataRowPage1.LotNo})}));var o={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,Data:s};this.postJSONMulti(this.getUrlDeleteMulti(),o).then((function(e){null!=e&&t.$parent.resultDelete()}))},getDataBy:function(e){var t=this,a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,orderno:e.OrderNo,SubPortfolioCd:this.getDataUser().subportfolio_cd,sequenceno:e.SequenceNo,lotno:e.LotNo,addendumsequenceno:e.AddendumSequenceNo};this.postJSON(this.getUrlById(),a).then((function(a){if(null!=a){var s=a.Data[0];t.M_SM_SalesNotesAddendum={notesdate:s.notesdate,subject:s.subject,remarks:s.remarks,sequenceno:e.SequenceNo,lastupdatestamp:e.LastUpdateStamp},t.IEBy.Input=s.userinput,t.IEBy.Edit=s.useredit}}))}},created:function(){},beforeMount:function(){},mounted:function(){this.hideSideBarMenu()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),i=n,r=a("2877"),d=Object(r["a"])(i,s,o,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0d042a.2e502223.js.map