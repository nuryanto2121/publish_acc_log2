(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b95a9"],{"331d":function(o,e,t){"use strict";t.r(e);var r=function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("div",[t("div",{staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[t("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse2",modifiers:{collapse2:!0}}],staticClass:"div-collapse"},[t("span",{directives:[{name:"show",rawName:"v-show",value:o.IEBy.Input&&o.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[o._v("\n                Input By : "+o._s(o.IEBy.Input)+" | Edit By : "+o._s(o.IEBy.Edit)+" "),t("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),t("b-collapse",{attrs:{id:"collapse2",visible:!0}},[t("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[t("b-col",{staticClass:"bColMasterForm",attrs:{md:"5",id:"col-left"}},[t("b-form",{attrs:{"data-vv-scope":"FormScope_"+o.PageLevel+"_"+o.TabIndex,"data-vv-value-path":"FormScope_"+o.PageLevel+"_"+o.TabIndex}},[t("ABSProcessInputSelectList",{attrs:{prop:o.PI.FromGroupCd,value:o.M_PermissionCopy.FromGroupCd,label:o.M_PermissionCopy.FromGroupCdLabel},on:{change:o.onFromGroupCdChange}}),t("ABSProcessInputSelectList",{attrs:{prop:o.PI.FromSubPortfolioCd,value:o.M_PermissionCopy.FromSubPortfolioCd,label:o.M_PermissionCopy.FromSubPortfolioCdLabel},on:{change:o.onFromSubPortfolioCdChange}}),t("span",{staticStyle:{"margin-left":"165px"}},[o._v("(blank SubPortfolio = all SubPortfolio)")]),t("br"),t("br"),t("ABSProcessInputSelectList",{attrs:{prop:o.PI.ToGroupCd,value:o.M_PermissionCopy.ToGroupCd,label:o.M_PermissionCopy.ToGroupCdLabel},on:{change:o.onToGroupCdChange}}),t("ABSProcessInputSelectList",{attrs:{prop:o.PI.ToSubPortfolioCd,value:o.M_PermissionCopy.ToSubPortfolioCd,label:o.M_PermissionCopy.ToSubPortfolioCdLabel},on:{change:o.onToSubPortfolioCdChange}}),t("span",{staticStyle:{"margin-left":"165px"}},[o._v("(blank SubPortfolio = all SubPortfolio)")])],1)],1)],1)],1)],1)])},i=[],s={props:{PageLevel:"",TabIndex:""},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"}},data:function(){return{ModuleCd:"",FormType:"Process",propList:{initialWhere:"",LineNo:1,PageLevel:this.PageLevel,TabIndex:this.TabIndex},M_PermissionCopy:{UserGroup:"",FromGroupCd:"",FromGroupCdLabel:"",FromSubPortfolioCd:"",FromSubPortfolioCdLabel:"",ToGroupCd:"",ToGroupCdLabel:"",ToSubPortfolioCd:"",ToSubPortfolioCdLabel:""},IEBy:{Input:"",Edit:""},DataFromParent:null,PI:{FromGroupCd:{dataLookUp:{LookUpCd:"GetUserGroup",ColumnDB:"UserGroup",InitialWhere:"",ParamWhere:""},cValidate:"required",cName:"FromGroupCd",cLabel:"From Group",cOrder:1,cSelected:null,cType:"lookup",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cDisplayColumn:"user_group,descs"},FromSubPortfolioCd:{dataLookUp:{LookUpCd:"GetSubPortfolioCd",ColumnDB:"SubPortfolioCd",InitialWhere:"",ParamWhere:""},cValidate:"",cName:"FromSubPortfolioCd",cLabel:"SubPortfolio",cOrder:2,cSelected:null,cType:"lookup",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cDisplayColumn:"subportfolio_cd,name"},ToGroupCd:{dataLookUp:{LookUpCd:"GetUserGroup",ColumnDB:"UserGroup",InitialWhere:"",ParamWhere:""},cValidate:"required",cName:"ToGroupCd",cLabel:"To Group",cOrder:3,cSelected:null,cType:"lookup",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cDisplayColumn:"user_group,descs"},ToSubPortfolioCd:{dataLookUp:{LookUpCd:"GetSubPortfolioCd",ColumnDB:"SubPortfolioCd",InitialWhere:"",ParamWhere:""},cValidate:"",cName:"ToSubPortfolioCd",cLabel:"SubPortfolio",cOrder:4,cSelected:null,cType:"lookup",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cDisplayColumn:"subportfolio_cd,name"}}}},methods:{M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(o){},M_Post:function(o){var e=this,t={user_group:this.DataFromParent.user_group,from_group_cd:this.M_PermissionCopy.FromGroupCd,from_subportfolio_cd:this.M_PermissionCopy.FromSubPortfolioCd,to_group_cd:this.M_PermissionCopy.ToGroupCd,to_subportfolio_cd:this.M_PermissionCopy.ToSubPortfolioCd,user_input:this.getDataUser().user_id,OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order};this.postJSON(this.getUrlInsert(),t).then((function(o){null!=o&&e.alertSuccess(o.Message).then((function(){e.M_ClearForm()}))}))},M_Refresh:function(){},M_Delete:function(){},M_Insert:function(){},M_Update:function(){},M_New:function(){},M_Cancel:function(){},paramFromParent:function(){this.M_ClearForm();var o=this.$store.getters.GetPage1Data;this.DataFromParent=o,this.M_PermissionCopy.UserGroup=o.user_group},onFromGroupCdChange:function(o){this.M_PermissionCopy.FromGroupCd=o.id,this.M_PermissionCopy.FromGroupCdLabel=o.label},onFromSubPortfolioCdChange:function(o){this.M_PermissionCopy.FromSubPortfolioCd=o.id,this.M_PermissionCopy.FromSubPortfolioCdLabel=o.label},onToGroupCdChange:function(o){this.M_PermissionCopy.ToGroupCd=o.id,this.M_PermissionCopy.ToGroupCdLabel=o.label},onToSubPortfolioCdChange:function(o){this.M_PermissionCopy.ToSubPortfolioCd=o.id,this.M_PermissionCopy.ToSubPortfolioCdLabel=o.label},M_ClearForm:function(){this.M_PermissionCopy.UserGroup="",this.M_PermissionCopy.FromGroupCd="",this.M_PermissionCopy.FromGroupCdLabel="",this.M_PermissionCopy.FromSubPortfolioCd="",this.M_PermissionCopy.FromSubPortfolioCdLabel="",this.M_PermissionCopy.ToGroupCd="",this.M_PermissionCopy.ToGroupCdLabel="",this.M_PermissionCopy.ToSubPortfolioCd="",this.M_PermissionCopy.ToSubPortfolioCdLabel=""},setToolbarButton:function(){}},beforeCreate:function(){},created:function(){},beforeMount:function(){},mounted:function(){this.hideSideBarMenu()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},a=s,n=t("2877"),l=Object(n["a"])(a,r,i,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0b95a9.70b011ba.js.map