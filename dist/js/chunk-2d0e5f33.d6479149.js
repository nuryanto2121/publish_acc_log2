(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e5f33"],{9754:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ABSListVuex",{attrs:{prop:e.propList,title:e.data.query_name},on:{rowClicked:e.rowClicked,rowDblClicked:e.doDoubleClick,rowLinkClick:e.rowLink}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.isDetail,expression:"$parent.isDetail"}],staticStyle:{"margin-top":"10px"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse2",modifiers:{collapse2:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse2",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"5px"}},[a("b-col",{attrs:{md:"5",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[a("ABSinputTextVuex",{attrs:{prop:e.PI.Caption},model:{value:e.M_SS_CustomField.Caption,callback:function(t){e.$set(e.M_SS_CustomField,"Caption",t)},expression:"M_SS_CustomField.Caption"}}),a("ABSInputSelectVuex",{attrs:{prop:e.PI.DataType},on:{change:e.onChange},model:{value:e.M_SS_CustomField.DataType,callback:function(t){e.$set(e.M_SS_CustomField,"DataType",t)},expression:"M_SS_CustomField.DataType"}}),a("ABSinputTextVuex",{attrs:{prop:e.PI.Length},model:{value:e.M_SS_CustomField.Length,callback:function(t){e.$set(e.M_SS_CustomField,"Length",t)},expression:"M_SS_CustomField.Length"}}),a("ABSinputRadioButtonVuex",{attrs:{prop:e.PI.Mandatory},model:{value:e.M_SS_CustomField.Mandatory,callback:function(t){e.$set(e.M_SS_CustomField,"Mandatory",t)},expression:"M_SS_CustomField.Mandatory"}}),a("ABSinputRadioButtonVuex",{attrs:{prop:e.PI.LookupStatus},model:{value:e.M_SS_CustomField.LookupStatus,callback:function(t){e.$set(e.M_SS_CustomField,"LookupStatus",t)},expression:"M_SS_CustomField.LookupStatus"}}),a("ABSInputSelectVuex",{attrs:{prop:e.PI.LookupTable},on:{change:e.onChange},model:{value:e.M_SS_CustomField.LookupTable,callback:function(t){e.$set(e.M_SS_CustomField,"LookupTable",t)},expression:"M_SS_CustomField.LookupTable"}}),a("ABSinputTextVuex",{attrs:{prop:e.PI.LookupField},model:{value:e.M_SS_CustomField.LookupField,callback:function(t){e.$set(e.M_SS_CustomField,"LookupField",t)},expression:"M_SS_CustomField.LookupField"}}),a("ABSinputTextVuex",{attrs:{prop:e.PI.LookupCondition},model:{value:e.M_SS_CustomField.LookupCondition,callback:function(t){e.$set(e.M_SS_CustomField,"LookupCondition",t)},expression:"M_SS_CustomField.LookupCondition"}}),a("ABSinputTextVuex",{directives:[{name:"show",rawName:"v-show",value:e.DefaultDescs,expression:"DefaultDescs"}],attrs:{prop:e.PI.DefaultDescs},model:{value:e.M_SS_CustomField.DefaultDescs,callback:function(t){e.$set(e.M_SS_CustomField,"DefaultDescs",t)},expression:"M_SS_CustomField.DefaultDescs"}}),a("ABSinputTextVuex",{directives:[{name:"show",rawName:"v-show",value:e.DefaultNumeric,expression:"DefaultNumeric"}],attrs:{prop:e.PI.DefaultNumeric},model:{value:e.M_SS_CustomField.DefaultNumeric,callback:function(t){e.$set(e.M_SS_CustomField,"DefaultNumeric",t)},expression:"M_SS_CustomField.DefaultNumeric"}}),a("ABSinputTextVuex",{directives:[{name:"show",rawName:"v-show",value:e.DefaultDate,expression:"DefaultDate"}],attrs:{prop:e.PI.DefaultDate},model:{value:e.M_SS_CustomField.DefaultDate,callback:function(t){e.$set(e.M_SS_CustomField,"DefaultDate",t)},expression:"M_SS_CustomField.DefaultDate"}}),a("ABSinputTextVuex",{attrs:{prop:e.PI.Remarks},model:{value:e.M_SS_CustomField.Remarks,callback:function(t){e.$set(e.M_SS_CustomField,"Remarks",t)},expression:"M_SS_CustomField.Remarks"}})],1)],1)],1)],1)],1)],1)},s=[],o=(a("ac6a"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{ValKey:null,QuerySequenceNo:null,propList:{initialWhere:"page_master_seq = '"+this.ValKey+"'",LineNo:this.$parent.data.page_order,PageLevel:this.PageLevel,TabIndex:this.TabIndex},M_SS_CustomField_Temp:{},M_SS_CustomField:{Caption:null,DataType:null,Length:null,Mandatory:null,LookupStatus:null,LookupTable:null,LookupField:null,LookupCondition:null,DefaultDescs:null,DefaultDate:null,DefaultNumeric:null,Remarks:null},IEBy:{Input:"",Edit:""},PI:{Caption:{cValidate:"required|min:2|max:60",cName:"Caption",cLabel:"Caption",cOrder:1,cKey:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},DataType:{dataLookUp:{LookUpCd:"",ColumnDB:"",InitialWhere:"",ParamWhere:""},cValidate:"",cName:"DataType",cLabel:"Data Type",cOrder:2,cSelected:null,cType:"lookup",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!0,cOption:[{id:"D",label:"Description"},{id:"N",label:"Numeric"},{id:"A",label:"Datetime"},{id:"T",label:"Text"}]},Length:{cValidate:"min:2|max:60",cName:"Length",cLabel:"Length",cOrder:3,cKey:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},Mandatory:{cId:"rdMandatory",cName:"Mandatory",cRadioOptions:[{text:"Yes",value:"Y"},{text:"No",value:"N"}],cLabel:"Mandatory",cOrder:4,cKey:!1,cRadioDefaultOption:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},LookupStatus:{cId:"rdLookupStatus",cName:"LookupStatus",cRadioOptions:[{text:"Yes",value:"Y"},{text:"No",value:"N"}],cLabel:"Lookup Status",cOrder:5,cKey:!1,cRadioDefaultOption:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},LookupTable:{dataLookUp:{LookUpCd:"GetLookupTable",ColumnDB:"name",InitialWhere:"",ParamWhere:""},cValidate:"",cName:"LookupTable",cLabel:"Lookup Table",cOrder:6,cSelected:null,cType:"lookup",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},LookupField:{cValidate:"min:2|max:60",cName:"LookupField",cLabel:"Lookup Field",cOrder:7,cKey:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},LookupCondition:{cValidate:"min:2|max:60",cName:"LookupCondition",cLabel:"Lookup Condition",cOrder:8,cKey:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},DefaultDescs:{cValidate:"min:2|max:60",cName:"DefaultDescs",cLabel:"Default Description",cOrder:9,cKey:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},DefaultNumeric:{cValidate:"min:2|max:60",cName:"DefaultNumeric",cLabel:"Default Numeric",cOrder:10,cKey:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},DefaultDate:{cValidate:"min:2|max:60",cName:"DefaultDate",cLabel:"Default Date",cOrder:11,cKey:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},Remarks:{cValidate:"min:2|max:60",cName:"Remarks",cLabel:"Remarks",cOrder:12,cKey:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex}}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage2Data},DataRowPage1:function(){return this.$store.getters.GetPage1Data}},methods:{M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Refresh:function(){this.$parent.isDetail=!1,this.FormToABSList().doGetList("","refresh")},M_New:function(){this.$parent.state="NEW",this.$parent.isDetail=!0,this.M_SS_CustomField.Caption="",this.M_SS_CustomField.DataType=null,EventBus.$emit("ebSetValue"+this.PI.DataType.cName+"_"+this.PageLevel+"_"+this.TabIndex,{data:""}),this.M_SS_CustomField.Length="",this.M_SS_CustomField.Mandatory="",this.M_SS_CustomField.LookupStatus="",this.M_SS_CustomField.LookupField="",this.M_SS_CustomField.LookupTable=null,EventBus.$emit("ebSetValue"+this.PI.LookupTable.cName+"_"+this.PageLevel+"_"+this.TabIndex,{data:""}),this.M_SS_CustomField.LookupCondition="",this.M_SS_CustomField.DefaultDescs="",this.M_SS_CustomField.Remarks="",this.FormToMasterPage().ValidasiPage(),this.$nextTick().then((function(){document.getElementById("Caption").focus()}))},M_Edit:function(){this.$nextTick().then((function(){document.getElementById("Caption").focus()}))},M_Delete:function(){var e=this,t=this.FormToABSList().getRowSelected(),a=[];t.forEach((function(t){a.push({page_master_seq:e.DataRowPage1.page_master_seq,field_sequence_no:t.field_sequence_no,lastupdatestamp:t.lastupdatestamp,_Message_:""})}));var i={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,Data:a};this.postJSONMulti(this.getUrlDeleteMulti(),i).then((function(t){null!=t&&e.$parent.resultDelete("Deleting Data Successfully")}))},M_Save:function(){var e=this;this.M_SS_CustomField.OptionSeq=this.getOptionSeq().OptionSeq,this.M_SS_CustomField.LineNo=this.$parent.data.page_order,"NEW"!==this.$parent.state?(this.M_SS_CustomField.UserEdit=this.getDataUser().user_id,this.M_SS_CustomField.FieldSequenceNo=this.FieldSequenceNo,this.M_SS_CustomField.LastUpdateStamp=this.LastUpdateStamp,this.postJSON(this.getUrlUpdate(),this.M_SS_CustomField).then((function(t){null!=t&&(delete e.M_SS_CustomField["UserEdit"],delete e.M_SS_CustomField["FieldSequenceNo"],delete e.M_SS_CustomField["LastUpdateStamp"],e.FormToABSList().doGetList("","eb_getList"),e.alertSuccess(t.Message).then((function(){e.getToolbar().setButton(!1),e.$store.commit("setListDisable",!1),e.$store.commit("setStatus","view"),e.FormToABSList().doGetList("","eb_getList")})))}))):(this.M_SS_CustomField.UserInput=this.getDataUser().user_id,this.postJSON(this.getUrlInsert(),this.M_SS_CustomField).then((function(t){null!=t&&(e.FormToABSList().doGetList("","eb_getList"),e.$parent.isDetail=!1,e.alertSuccess(t.Message).then((function(){e.getToolbar().setButton(!1),e.$store.commit("setListDisable",!1),e.$store.commit("setStatus","view"),e.FormToABSList().doGetList("","eb_getList")})))}))),this.FormToMasterPage().ValidasiPage()},paramFromParent:function(){this.$parent.isDetail=!1;var e=this.$store.getters.GetPage1Data;this.propList.initialWhere="page_master_seq = '"+e.page_master_seq+"'",this.ValKey=e.page_master_seq,this.M_SS_CustomField.PageMasterSeq=e.page_master_seq,this.FormToABSList().doGetList("","eb_getList")},rowClicked:function(e,t){this.$parent.state="UPDATE",this.$parent.isDetail=!0,this.$store.commit("SetPage2Data",e),this.$store.commit("setEventStatus","rowClick"),this.$store.commit("setLevel",this.PageLevel),this.FieldSequenceNo=e.field_sequence_no,this.LastUpdateStamp=e.page_master_seq,this.getDataBy(e),this.FormToMasterPage().ValidasiPage()},rowLink:function(e){this.$refs.modalTest.show()},getDataBy:function(e){var t=this;console.log(e);var a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,field_sequence_no:e.field_sequence_no,page_master_seq:e.page_master_seq};this.postJSON(this.getUrlById(),a).then((function(e){if(null!=e){var a=e.Data;a.length>0&&(a=a[0],t.$nextTick((function(){t.M_SS_CustomField.PageMasterSeq=a.page_master_seq,t.M_SS_CustomField.Caption=a.caption,t.M_SS_CustomField.DataType=a.data_type,t.M_SS_CustomField.Length=a.length,t.M_SS_CustomField.Mandatory=a.mandatory,t.M_SS_CustomField.LookupStatus=a.lookup_status,t.M_SS_CustomField.LookupTable=a.lookup_table,t.M_SS_CustomField.LookupField=a.lookup_field,t.M_SS_CustomField.LookupCondition=a.lookup_condition,t.M_SS_CustomField.DefaultDescs=a.default_descs,t.M_SS_CustomField.DefaultNumeric=a.default_numeric,t.M_SS_CustomField.DefaultDate=a.default_date,t.M_SS_CustomField.Remarks=a.remarks,t.M_SS_CustomField_Temp.DefaultDescs=a.default_descs,EventBus.$emit("ebSetValue"+t.PI.DataType.cName+"_"+t.PageLevel+"_"+t.TabIndex,{data:a.data_type,action:"getByID"}),EventBus.$emit("ebSetValue"+t.PI.LookupTable.cName+"_"+t.PageLevel+"_"+t.TabIndex,{data:a.lookup_table,action:"getByID"})})),t.IEBy.Input=a.user_input,t.IEBy.Edit=a.user_edit)}}))},onChange:function(e){var t=e.from;t==this.PI.DataType.cName+"_"+this.PageLevel+"_"+this.TabIndex?e.value&&""!==e.value.id&&(this.M_SS_CustomField.DataType=e.value.id,"D"==e.value.id?(this.DefaultDescs=!0,this.DefaultNumeric=!1,this.DefaultDate=!1,this.M_SS_CustomField.DefaultDescs&&this.M_SS_CustomField.DefaultDate&&""!==this.M_SS_CustomField.DefaultNumeric?(this.M_SS_CustomField.DefaultDescs=this.M_SS_CustomField.DefaultDescs,this.M_SS_CustomField.DefaultDate=this.M_SS_CustomField.DefaultDate,this.M_SS_CustomField.DefaultNumeric=this.M_SS_CustomField.DefaultNumeric):(this.M_SS_CustomField.DefaultDate="NULL",this.M_SS_CustomField.DefaultNumeric="NULL")):"N"==e.value.id?(this.DefaultDescs=!1,this.DefaultNumeric=!0,this.DefaultDate=!1,this.M_SS_CustomField.DefaultDescs&&this.M_SS_CustomField.DefaultDate&&""!==this.M_SS_CustomField.DefaultNumeric?(this.M_SS_CustomField.DefaultDescs=this.M_SS_CustomField.DefaultDescs,this.M_SS_CustomField.DefaultDate=this.M_SS_CustomField.DefaultDate,this.M_SS_CustomField.DefaultNumeric=this.M_SS_CustomField.DefaultNumeric):(this.M_SS_CustomField.DefaultDescs="NULL",this.M_SS_CustomField.DefaultDate="NULL")):"A"==e.value.id&&(this.DefaultDescs=!1,this.DefaultNumeric=!1,this.DefaultDate=!0,this.M_SS_CustomField.DefaultDescs&&this.M_SS_CustomField.DefaultDate&&""!==this.M_SS_CustomField.DefaultNumeric?(this.M_SS_CustomField.DefaultDescs=this.M_SS_CustomField.DefaultDescs,this.M_SS_CustomField.DefaultDate=this.M_SS_CustomField.DefaultDate,this.M_SS_CustomField.DefaultNumeric=this.M_SS_CustomField.DefaultNumeric):(this.M_SS_CustomField.DefaultDescs="NULL",this.M_SS_CustomField.DefaultNumeric="NULL"))):t==this.PI.LookupTable.cName+"_"+this.PageLevel+"_"+this.TabIndex&&e.value&&""!==e.value.id&&(this.M_SS_CustomField.LookupTable=e.value.id)}},created:function(){},beforeMount:function(){},mounted:function(){this.hideSideBarMenu()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),l=o,u=a("2877"),n=Object(u["a"])(l,i,s,!1,null,null,null);t["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d0e5f33.d6479149.js.map