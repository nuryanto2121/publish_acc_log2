(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21e76a"],{d657:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{directives:[{name:"show",rawName:"v-show",value:t.$parent.isDetail,expression:"$parent.isDetail"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[i("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"}),i("b-collapse",{attrs:{id:"collapse1",visible:!0}},[i("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[i("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[i("b-row",{staticStyle:{"padding-left":"10px"}},[i("b-col",{attrs:{md:"12",id:"col-left"}},[i("b-row",[i("b-col",{attrs:{md:"4"}},[i("ABSInputSelectList",{ref:"ref_userid",attrs:{prop:t.PI_userid,value:t.userid,label:t.useridLabel},on:{change:t.OnuseridChange}})],1)],1),i("b-row",[i("b-col",{attrs:{md:"4"}})],1),i("b-row",[i("b-col",{staticStyle:{"padding-right":"15px !important"},attrs:{md:"4"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control text-field-form",staticStyle:{"margin-left":"20px !important"},attrs:{type:"text",placeholder:"Search...",tabindex:3,autocomplete:"off"},domProps:{value:t.search},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSearchEnter(e)},input:function(e){e.target.composing||(t.search=e.target.value)}}})])],1),i("b-row",{staticStyle:{"padding-top":"10px","padding-right":"10px","padding-left":"20px","padding-bottom":"10px"}},[i("b-col",{attrs:{md:"4"}},[t._v(" Available Discount "),i("ABSMultiSelect",{staticClass:"selectCustom",attrs:{options:t.leftDataOptions,size:"10"},model:{value:t.leftData,callback:function(e){t.leftData=e},expression:"leftData"}})],1),i("b-col",{staticStyle:{padding:"120px 8px"},attrs:{md:"1"}},[i("b-button",{staticStyle:{width:"50px"},attrs:{size:"sm",variant:"primary"},on:{click:t.moveAllToRight}},[t._v(" >> ")]),i("br"),i("b-button",{staticStyle:{width:"50px","margin-top":"10px"},attrs:{size:"sm",variant:"primary"},on:{click:t.moveToRight}},[t._v(" > ")]),i("br"),i("b-button",{staticStyle:{width:"50px","margin-top":"10px"},attrs:{size:"sm",variant:"primary"},on:{click:t.moveToLeft}},[t._v(" < ")]),i("br"),i("b-button",{staticStyle:{width:"50px","margin-top":"10px"},attrs:{size:"sm",variant:"primary"},on:{click:t.moveAllToLeft}},[t._v(" << ")])],1),i("b-col",{attrs:{md:"4"}},[t._v(" Assigned Discount "),i("ABSMultiSelect",{staticClass:"selectCustom",attrs:{options:t.rightDataOptions,size:"10"},model:{value:t.rightData,callback:function(e){t.rightData=e},expression:"rightData"}})],1)],1)],1)],1)],1)],1)],1)],1)])},s=[],o=(i("386d"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{FormType:"Form",Module:"SM",allDataOptions:[],leftData:[],leftDataOptions:[],rightData:[],rightDataOptions:[],search:"",userid:"",useridLabel:"",PI_userid:{dataLookUp:{LookUpCd:"GetLookupUser",ColumnDB:"UserId",InitialWhere:"",ParamWhere:""},cValidate:"required",cName:"userid",cLabel:"User Id",cKey:!1,cLabelSize:4,cOrder:1,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"UserId,UserName"}}},watch:{leftDataOptions:function(t,e){this.tempLeftFilter=t}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"}},methods:{OnuseridChange:function(t){this.userid=t.id,this.useridLabel=t.label,this.getAllColumn(""),this.getRightColumn()},OnstatusChange:function(t){var e=this;this.$nextTick((function(){e.inputStatus})),this.$forceUpdate()},onSearchEnter:function(t){13===t.keyCode&&this.getAllColumn(this.search)},getAllColumn:function(t){var e=this,i={OptionSeq:this.getOptionSeq().OptionSeq,UserId:this.getDataUser().user_id,PortfolioCd:this.getDataUser().portfolio_cd,SubPortfolioCd:this.getDataUser().subportfolio_cd,LineNo:0,InitialWhere:"DiscountCd like '%"+t+"%' OR Descs like '%"+t+"%'",SortField:"DiscountCd",ParamView:"'"+this.userid+"'"};this.postEncode(this.getUrlDataList(),i).then((function(t){if(e.$store.commit("setStatusLoader",!1),null!=t){e.allDataOptions=t.Data,e.leftDataOptions=[];for(var i=!1,a=0;a<e.allDataOptions.length;a++){i=!1;for(var s=0;s<e.rightDataOptions.length;s++)if(e.allDataOptions[a].DiscountCd==e.rightDataOptions[s].value){i=!0;break}0==i&&e.leftDataOptions.push({value:e.allDataOptions[a].DiscountCd,key:e.allDataOptions[a].DiscountCd+" - "+e.allDataOptions[a].Descs,RowId:e.allDataOptions[a].row_id})}e.$forceUpdate()}}))},getRightColumn:function(){var t=this;this.$store.commit("setStatusLoader",!0);var e={OptionSeq:this.getOptionSeq().OptionSeq,UserId:this.getDataUser().user_id,PortfolioCd:this.getDataUser().portfolio_cd,SubPortfolioCd:this.getDataUser().subportfolio_cd,LineNo:1,InitialWhere:"",SortField:"DiscountCd",ParamView:"'"+this.userid+"'"};this.postEncode(this.getUrlDataList(),e).then((function(e){if(null!=e){var i=e.Data;t.rightDataOptions=[],console.log(t.rightDataOptions.length);for(var a=0;a<i.length;a++)t.rightDataOptions.push({value:i[a].DiscountCd,key:i[a].DiscountCd+" - "+i[a].Descs,RowId:i[a].row_id});t.getAllColumn("")}}))},moveAllToRight:function(){for(var t=0;t<this.leftDataOptions.length;t++){var e=this.leftDataOptions[t];this.rightDataOptions.push({value:e.value,key:e.key,RowId:e.row_id})}this.leftDataOptions=[],this.$forceUpdate()},moveToRight:function(){for(var t=0;t<this.leftData.length;t++){for(var e,i=-1,a=0;a<this.leftDataOptions.length;a++)this.leftData[t]==this.leftDataOptions[a].value&&(e=this.leftDataOptions[a],i=a);this.rightDataOptions.push({value:e.value,key:e.key,RowId:e.row_id}),this.leftDataOptions.splice(i,1)}this.$forceUpdate()},moveToLeft:function(){for(var t=0;t<this.rightData.length;t++){for(var e,i=-1,a=0;a<this.rightDataOptions.length;a++)this.rightData[t]==this.rightDataOptions[a].value&&(e=this.rightDataOptions[a],i=a);this.leftDataOptions.push({value:e.value,key:e.key,RowId:e.row_id}),this.rightDataOptions.splice(i,1)}this.$forceUpdate()},moveAllToLeft:function(){for(var t=0;t<this.rightDataOptions.length;t++){var e=this.rightDataOptions[t];this.leftDataOptions.push({value:e.value,key:e.key,RowId:e.row_id})}this.rightDataOptions=[],this.$forceUpdate()},setToolbarButton:function(){this.getToolbar().isNew=!0,this.getToolbar().statusFunction[5].disabled=!1},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(t){},M_Post:function(){},M_Refresh:function(){},doDoubleClick:function(){},m_ClearForm:function(){},M_New:function(){this.$refs.ref_userid.focus()},M_Edit:function(){this.$refs.ref_userid.focus()},M_Delete:function(){},M_Insert:function(){},M_Update:function(){},M_Save:function(){var t=this;if(""==this.userid)return this.PI_userid.cValidate="required",void(this.$refs.ref_userid.isRequired=!0);if(this.$refs.ref_userid.isRequired=!0,this.leftDataOptions.length<=0){for(var e=[],i=0;i<this.rightDataOptions.length;i++)e.push({DiscountCd:this.rightDataOptions[i].value,UserID:this.userid,SubPortfolioCd:this.getDataUser().subportfolio_cd,UserInput:this.getDataUser().user_id});l={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:3,Data:e},this.postJSONMulti(this.getUrlInsertMulti(),l).then((function(e){null!=e&&(t.$parent.resultInsert("Success...!"),t.search="",t.userid="",t.useridLabel="",t.getRightColumn())}))}else{for(var a=[],s=[],o=[],n=0;n<this.leftDataOptions.length;n++)s.push({_Method_:"DELETE",_LineNo_:2,SubportfolioCd:this.getDataUser().subportfolio_cd,DiscountCd:this.leftDataOptions[n].value,UserID:this.userid});for(var r=0;r<this.rightDataOptions.length;r++)o.push({_Method_:"SAVE",_LineNo_:3,DiscountCd:this.rightDataOptions[r].value,SubPortfolioCd:this.getDataUser().subportfolio_cd,UserInput:this.getDataUser().user_id,UserID:this.userid});a.push({A_Looping:s,B_Looping:o.length>0?o:null});var l={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:1,Data:a};this.postJSONMulti(this.getUrlProsesDataPostMulti(),l).then((function(e){null!=e&&(t.search="",t.userid="",t.useridLabel="",t.getRightColumn())}))}},paramFromParent:function(){},M_Cancel:function(){this.getRightColumn()},rowClicked:function(t,e){},rowLink:function(t){},getDataBy:function(t){}},beforeCreate:function(){},created:function(){this.$parent.isDetail=!0,this.$store.commit("setStatus","new")},beforeMount:function(){},mounted:function(){this.$store.commit("setFormType","Form"),this.getToolbar().ProcessPS(),this.hideSideBarMenu(),this.getToolbar().doEdit(!0),this.getRightColumn()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),n=o,r=i("2877"),l=Object(r["a"])(n,a,s,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d21e76a.7cb71948.js.map