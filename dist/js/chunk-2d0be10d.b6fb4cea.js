(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0be10d"],{"2f58":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("ABSListVuex",{attrs:{prop:e.propList,title:e.data.query_name},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn}}),i("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[i("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[i("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),i("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),i("b-collapse",{attrs:{id:"collapse1",visible:!0}},[i("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[i("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[i("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[i("b-row",{staticStyle:{"padding-left":"10px"}},[i("b-col",{attrs:{md:"12",id:"col-left"}},[i("b-row",[i("b-col",{attrs:{md:"6"}},[i("ABSinputTextVuex",{ref:"ref_regioncd",attrs:{prop:e.PI_regioncd},model:{value:e.M_CO_RegionMaster.regioncd,callback:function(t){e.$set(e.M_CO_RegionMaster,"regioncd",t)},expression:"M_CO_RegionMaster.regioncd"}})],1)],1),i("b-row",[i("b-col",{attrs:{md:"6"}},[i("ABSinputTextVuex",{ref:"ref_regionname",attrs:{prop:e.PI_regionname},model:{value:e.M_CO_RegionMaster.regionname,callback:function(t){e.$set(e.M_CO_RegionMaster,"regionname",t)},expression:"M_CO_RegionMaster.regionname"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)},a=[],o=(i("ac6a"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{cInsertKey:"",FormType:"List",Module:"CO",propList:{initialWhere:"",LineNo:this.$parent.data.page_order,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_CO_RegionMaster:{regioncd:"",regionname:"",timeinput:"",timeedit:"",userinput:"",useredit:this.getDataUser().user_id,lastupdatestamp:0,rowid:0},PI_regioncd:{cValidate:"required|max:3",cName:"regioncd",cLabel:"Region Code",cLabelSize:4,cOrder:1,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_regionname:{cValidate:"required|max:50",cName:"regionname",cLabel:"Region Name",cLabelSize:4,cOrder:2,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage1Data}},methods:{setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){},M_Post:function(){},M_Insert:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,region_cd:this.M_CO_RegionMaster.regioncd,region_name:this.M_CO_RegionMaster.regionname,user_input:this.getDataUser().user_id};this.postJSON(this.getUrlInsert(),t).then((function(t){null!=t&&e.$parent.resultInsert(t.Message)}))},M_Update:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,region_cd:this.M_CO_RegionMaster.regioncd,region_name:this.M_CO_RegionMaster.regionname,user_edit:this.getDataUser().user_id,lastupdatestamp:this.M_CO_RegionMaster.lastupdatestamp};this.postJSON(this.getUrlUpdate(),t).then((function(t){null!=t&&e.$parent.resultUpdate(t.Message)}))},M_ClearForm:function(){this.M_CO_RegionMaster={regioncd:"",regionname:"",timeinput:"",timeedit:"",userinput:"",useredit:this.getDataUser().user_id,lastupdatestamp:0,rowid:0}},M_New:function(){this.$refs.ref_regioncd.focus()},M_Edit:function(){this.$refs.ref_regionname.focus()},M_Delete:function(e){var t=this,i=this.FormToABSList().getRowSelected(),n=[];i.forEach((function(e){n.push({region_cd:e.region_cd,lastupdatestamp:e.lastupdatestamp,_Message_:""})}));var a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,Data:n};this.postJSONMulti(this.getUrlDeleteMulti(),a).then((function(e){null!=e&&t.$parent.resultDelete()}))},getDataBy:function(e){var t=this,i={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,region_cd:e.region_cd,lastupdatestamp:e.lastupdatestamp};this.postJSON(this.getUrlById(),i).then((function(i){if(null!=i){var n=i.Data[0];t.M_CO_RegionMaster={regioncd:n.region_cd,regionname:n.region_name,timeinput:n.time_input,timeedit:n.time_edit,userinput:n.user_input,useredit:n.user_edit,lastupdatestamp:e.lastupdatestamp,rowid:n.row_id},t.IEBy.Input=n.user_input,t.IEBy.Edit=n.user_edit}}))}},beforeCreate:function(){},created:function(){this.$store.commit("setFormType","List"),this.getToolbar().ProcessPS()},beforeMount:function(){},mounted:function(){this.hideSideBarMenu(),this.FormToABSList().doGetList("","eb_getList")},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),r=o,s=i("2877"),c=Object(s["a"])(r,n,a,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0be10d.b6fb4cea.js.map