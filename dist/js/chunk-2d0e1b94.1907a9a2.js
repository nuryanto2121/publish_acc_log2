(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e1b94"],{"7c3e":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("ABSListVuex",{attrs:{prop:e.propList,title:e.data.query_name},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table}}),s("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[s("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[s("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),s("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),s("b-collapse",{attrs:{id:"collapse1",visible:!0}},[s("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[s("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[s("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[s("b-row",{staticStyle:{"padding-left":"10px"}},[s("b-col",{attrs:{md:"12",id:"col-left"}},[s("b-row",[s("b-col",{attrs:{md:"6"}},[s("ABSinputTextVuex",{ref:"ref_userid",attrs:{prop:e.PI_userid},on:{input:e.OnuseridChange},model:{value:e.M_SS_UserMaster.userid,callback:function(t){e.$set(e.M_SS_UserMaster,"userid",t)},expression:"M_SS_UserMaster.userid"}})],1),s("b-col",{attrs:{md:"6"}},[s("ABSinputCheckBox",{ref:"ref_isinactive",attrs:{prop:e.PI_isinactive},on:{input:e.OnisinactiveChange},model:{value:e.M_SS_UserMaster.isinactive,callback:function(t){e.$set(e.M_SS_UserMaster,"isinactive",t)},expression:"M_SS_UserMaster.isinactive"}})],1)],1),s("b-row",[s("b-col",{attrs:{md:"6"}},[s("ABSInputSelectList",{ref:"ref_usergroup",attrs:{prop:e.PI_usergroup,value:e.M_SS_UserMaster.usergroup,label:e.M_SS_UserMaster.usergroupLabel},on:{change:e.OnusergroupChange}})],1)],1),s("b-row",[s("b-col",{attrs:{md:"6"}},[s("ABSinputTextVuex",{ref:"ref_username",attrs:{prop:e.PI_username},on:{input:e.OnusernameChange},model:{value:e.M_SS_UserMaster.username,callback:function(t){e.$set(e.M_SS_UserMaster,"username",t)},expression:"M_SS_UserMaster.username"}})],1)],1),s("b-row",[s("b-col",{attrs:{md:"6"}},[s("ABSinputTextVuex",{ref:"ref_hand_phone",attrs:{prop:e.PI_hand_phone},on:{input:e.Onhand_phoneChange},model:{value:e.M_SS_UserMaster.hand_phone,callback:function(t){e.$set(e.M_SS_UserMaster,"hand_phone",t)},expression:"M_SS_UserMaster.hand_phone"}})],1)],1),s("b-row",[s("b-col",{attrs:{md:"6"}},[s("ABSinputTextVuex",{ref:"ref_email",attrs:{prop:e.PI_email},on:{input:e.OnemailChange},model:{value:e.M_SS_UserMaster.email,callback:function(t){e.$set(e.M_SS_UserMaster,"email",t)},expression:"M_SS_UserMaster.email"}})],1)],1),s("b-row",[s("b-col",{attrs:{md:"6"}},[s("ABSInputSelect2",{ref:"ref_userlevel",attrs:{prop:e.PI_userlevel,value:e.M_SS_UserMaster.userlevel},on:{change:e.OnuserlevelChange}})],1)],1),s("b-row",[s("b-col",{attrs:{md:"6"}},[s("ABSinputTextVuex",{ref:"ref_position",attrs:{prop:e.PI_position},on:{input:e.OnpositionChange},model:{value:e.M_SS_UserMaster.position,callback:function(t){e.$set(e.M_SS_UserMaster,"position",t)},expression:"M_SS_UserMaster.position"}})],1)],1),s("b-row",[s("b-col",{attrs:{md:"6"}},[s("ABSinputTextVuex",{ref:"ref_referenceno",attrs:{prop:e.PI_referenceno},on:{input:e.OnreferencenoChange},model:{value:e.M_SS_UserMaster.referenceno,callback:function(t){e.$set(e.M_SS_UserMaster,"referenceno",t)},expression:"M_SS_UserMaster.referenceno"}})],1)],1),s("b-row",[s("b-col",{attrs:{md:"6"}},[s("ABSinputDateVuex",{ref:"ref_expireddate",attrs:{prop:e.PI_expireddate},on:{input:e.OnexpireddateChange},model:{value:e.M_SS_UserMaster.expireddate,callback:function(t){e.$set(e.M_SS_UserMaster,"expireddate",t)},expression:"M_SS_UserMaster.expireddate"}})],1)],1),s("b-row",[s("b-col",{attrs:{md:"6"}},[s("ABSinputPassword",{ref:"ref_password",attrs:{prop:e.PI_password},on:{input:e.OnpasswordChange},model:{value:e.M_SS_UserMaster.password,callback:function(t){e.$set(e.M_SS_UserMaster,"password",t)},expression:"M_SS_UserMaster.password"}})],1)],1),s("b-row",[s("b-col",{attrs:{md:"6"}},[s("ABSinputPassword",{ref:"ref_confirmnewpassword",attrs:{prop:e.PI_confirmnewpassword},on:{input:e.OnconfirmnewpasswordChange},model:{value:e.M_SS_UserMaster.confirmnewpassword,callback:function(t){e.$set(e.M_SS_UserMaster,"confirmnewpassword",t)},expression:"M_SS_UserMaster.confirmnewpassword"}})],1)],1),s("b-row",[s("b-col",{directives:[{name:"show",rawName:"v-show",value:e.err1,expression:"err1"}],attrs:{md:"6"}},[s("b-row",{directives:[{name:"show",rawName:"v-show",value:e.err1,expression:"err1"}]},[s("b-col",{attrs:{offset:"4"}},[s("label",{staticClass:"lbl-value-view-form",staticStyle:{color:"red"}},[e._v(" Incorrect Password")])])],1)],1)],1),s("b-row",[s("b-col",{attrs:{md:"6"}},[s("ABSinputRadioButtonVuex",{ref:"ref_usertype",attrs:{prop:e.PI_usertype},on:{input:e.OnusertypeChange},model:{value:e.M_SS_UserMaster.usertype,callback:function(t){e.$set(e.M_SS_UserMaster,"usertype",t)},expression:"M_SS_UserMaster.usertype"}})],1)],1),s("b-row",[s("b-col",{attrs:{md:"6"}},[s("ABSinputTextVuex",{ref:"ref_failedattempts",attrs:{prop:e.PI_failedattempts},on:{input:e.OnfailedattemptsChange},model:{value:e.M_SS_UserMaster.failedattempts,callback:function(t){e.$set(e.M_SS_UserMaster,"failedattempts",t)},expression:"M_SS_UserMaster.failedattempts"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)},a=[],i=(s("ac6a"),s("ade3")),n={props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{cInsertKey:"",FormType:"List",Module:"SS",propList:{initialWhere:"",LineNo:this.$parent.data.page_order,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},TempPwd:"",M_SS_UserMaster:{userid:"",usergroup:"",usergroupLabel:"",username:"",password:"",email:"",userlevel:"M",expireddate:"",logindate:"",statuslogin:"",isinactive:"",userinput:"",useredit:this.getDataUser().user_id,timeinput:"",timeedit:"",lastupdatestamp:0,position:"",hand_phone:"",referenceno:"",controlsequenceno:0,usertype:"P",failedattempts:0,lastchangepassword:"",rowid:0,groupdescs:"",confirmnewpassword:""},PI_userid:{cValidate:"required|max:10",cName:"userid",cLabel:"User ID ",cLabelSize:4,cOrder:1,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_isinactive:{cValidate:"",cName:"isinactive",cLabel:"Mark user as INACTIVE",cLabelSize:4,cOptions:[{text:"",value:!0}],cOrder:0,cKey:!1,cVisible:!0,cProtect:!1,cDefault:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_usergroup:{dataLookUp:{LookUpCd:"GetUserGroup",ColumnDB:"user_group",InitialWhere:"",ParamWhere:""},cValidate:"",cName:"usergroup",cLabel:"Group",cKey:!1,cLabelSize:4,cOrder:2,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"SS/SS_Group",cDisplayColumn:"user_group,descs"},PI_username:{cValidate:"required|max:50",cName:"username",cLabel:"User Name ",cLabelSize:4,cOrder:3,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_hand_phone:{cValidate:"",cName:"hand_phone",cLabel:"hand_phone",cLabelSize:4,cOrder:4,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_email:{cValidate:"",cName:"email",cLabel:"Email Address",cLabelSize:4,cOrder:5,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_userlevel:{dataLookUp:null,cValidate:"",cName:"userlevel",cLabel:"User Level",cLabelSize:4,cOrder:6,cKey:!1,cTriggered:!1,cDefault:"M",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!0,cOption:[{label:"Staff",id:"S"},{label:"Supervisor",id:"P"},{label:"Manager",id:"M"}],cMasterUrl:"",cDisplayColumn:""},PI_position:{cValidate:"",cName:"position",cLabel:"Position",cLabelSize:4,cOrder:7,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_referenceno:{cValidate:"",cName:"referenceno",cLabel:"Reference No",cLabelSize:4,cOrder:8,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_expireddate:{cValidate:"",cName:"expireddate",cLabel:"Expired Date (leave blank for no expiry date)",cLabelSize:4,cOrder:9,cKey:!1,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_password:{cValidate:"",cName:"password",cLabel:"New Password",cLabelSize:4,cOrder:10,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_confirmnewpassword:{cValidate:"",cName:"confirmnewpassword",cLabel:"Confirm New Password",cLabelSize:4,cOrder:11,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_usertype:{cValidate:"",cName:"usertype",cId:"rdbusertype",cRadioOptions:[{text:"Public",value:"P"},{text:"Internal",value:"I"}],cRadioDefaultOption:"P",cLabel:"User Type",cLabelSize:4,cOrder:12,cProtect:!1,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_failedattempts:{cValidate:"",cName:"failedattempts",cLabel:"Login Failed Attempt",cLabelSize:4,cOrder:13,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage1Data}},methods:{OnuseridChange:function(e){var t=this;this.$nextTick((function(){t.inputStatus})),this.$forceUpdate()},OnisinactiveChange:function(e){var t=this;this.$nextTick((function(){t.inputStatus})),this.$forceUpdate()},OnusergroupChange:function(e){var t=this;console.log(e),this.M_SS_UserMaster.usergroup=e.id,this.M_SS_UserMaster.usergroupLabel=e.label,this.$nextTick((function(){t.inputStatus})),this.$forceUpdate()},OnusernameChange:function(e){var t=this;this.$nextTick((function(){t.inputStatus})),this.$forceUpdate()},Onhand_phoneChange:function(e){var t=this;this.$nextTick((function(){t.inputStatus})),this.$forceUpdate()},OnemailChange:function(e){var t=this;this.$nextTick((function(){t.inputStatus})),this.$forceUpdate()},OnuserlevelChange:function(e){var t=this;this.M_SS_UserMaster.userlevel=e.id,this.$nextTick((function(){t.inputStatus})),this.$forceUpdate()},OnpositionChange:function(e){var t=this;this.$nextTick((function(){t.inputStatus})),this.$forceUpdate()},OnreferencenoChange:function(e){var t=this;this.$nextTick((function(){t.inputStatus})),this.$forceUpdate()},OnexpireddateChange:function(e){var t=this;this.$nextTick((function(){t.inputStatus})),this.$forceUpdate()},OnpasswordChange:function(e){var t=this;e!=this.M_SS_UserMaster.password?(this.error=!0,this.err1=!0):(this.err1=!1,this.error=!1),this.$nextTick((function(){"VIEW"!=t.inputStatus&&(""!=e?(t.PI_confirmnewpassword.cValidate="required",t.$refs.ref_confirmnewpassword.isRequired=!0):(t.PI_confirmnewpassword.cValidate="",t.$refs.ref_confirmnewpassword.isRequired=!1))})),this.$forceUpdate()},OnconfirmnewpasswordChange:function(e){var t=this;this.$nextTick((function(){e!=t.M_SS_UserMaster.confirmnewpassword?(t.error=!0,t.err1=!0):(t.err1=!1,t.error=!1),t.inputStatus})),this.$forceUpdate()},OnusertypeChange:function(e){var t=this;this.$nextTick((function(){t.inputStatus})),this.$forceUpdate()},OnfailedattemptsChange:function(e){var t=this;this.$nextTick((function(){t.inputStatus})),this.$forceUpdate()},setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){},M_Post:function(){},M_Insert:function(){var e=this,t="";if(!0===this.M_SS_UserMaster.isinactive)t="Y";else if(""==this.M_SS_UserMaster.expireddate||null==this.M_SS_UserMaster.expireddate)t="N";else{var s=this.datediff(new Date,this.M_SS_UserMaster.expireddate);t=s<=0?"Y":"N"}if(""!=this.M_SS_UserMaster.password){if(this.M_SS_UserMaster.confirmnewpassword!=this.M_SS_UserMaster.password)return void this.alertWarning("Your Confirm New Password Should Be Same With New Password !");this.M_SS_UserMaster.password}var r={portfolio_cd:this.getDataUser().portfolio_cd,user_id:this.M_SS_UserMaster.userid,user_group:this.M_SS_UserMaster.usergroup,user_name:this.M_SS_UserMaster.username,email:this.M_SS_UserMaster.email,password:this.M_SS_UserMaster.password,user_level:this.M_SS_UserMaster.userlevel,expired_date:""==this.M_SS_UserMaster.expireddate||null==this.M_SS_UserMaster.expireddate?"NULL":this.M_SS_UserMaster.expireddate,is_inactive:t,user_input:this.getDataUser().user_id,position:this.M_SS_UserMaster.position,hand_phone:this.M_SS_UserMaster.hand_phone,reference_no:this.M_SS_UserMaster.referenceno,user_type:this.M_SS_UserMaster.usertype,failed_attempts:this.M_SS_UserMaster.failedattempts};this.postJSON(this.getUrlUserInsert(),r).then((function(t){null!=t&&e.$parent.resultInsert(t.Message)}))},M_Update:function(){var e=this,t="";if(!0===this.M_SS_UserMaster.isinactive)t="Y";else if(""==this.M_SS_UserMaster.expireddate||null==this.M_SS_UserMaster.expireddate)t="N";else{var s=this.datediff(new Date,this.M_SS_UserMaster.expireddate);t=s<=0?"Y":"N"}this.TempPwd;if(""==this.M_SS_UserMaster.password||this.M_SS_UserMaster.confirmnewpassword==this.M_SS_UserMaster.password){var r=Object(i["a"])({portfolio_cd:this.getDataUser().portfolio_cd,user_id:this.M_SS_UserMaster.userid,user_group:this.M_SS_UserMaster.usergroup,user_name:this.M_SS_UserMaster.username,email:this.M_SS_UserMaster.email,new_password:this.M_SS_UserMaster.password,user_level:this.M_SS_UserMaster.userlevel,expired_date:""==this.M_SS_UserMaster.expireddate||null==this.M_SS_UserMaster.expireddate?"NULL":this.M_SS_UserMaster.expireddate,is_inactive:t,user_edit:this.getDataUser().user_id,lastupdatestamp:this.M_SS_UserMaster.lastupdatestamp,position:this.M_SS_UserMaster.position,hand_phone:this.M_SS_UserMaster.hand_phone,reference_no:this.M_SS_UserMaster.referenceno,user_type:this.M_SS_UserMaster.usertype,failed_attempts:this.M_SS_UserMaster.failedattempts},"lastupdatestamp",this.M_SS_UserMaster.lastupdatestamp);this.postJSON(this.getUrlUserUpdate(),r).then((function(t){null!=t&&e.$parent.resultUpdate(t.Message)}))}else this.alertWarning("Your Confirm New Password Should Be Same With New Password !")},M_ClearForm:function(){this.M_SS_UserMaster={userid:"",usergroup:"",usergroupLabel:"",username:"",password:"",email:"",userlevel:"M",expireddate:"",logindate:"",statuslogin:"",isinactive:"",userinput:"",useredit:"",timeinput:"",timeedit:"",lastupdatestamp:0,position:"",hand_phone:"",referenceno:"",controlsequenceno:0,usertype:"P",failedattempts:0,lastchangepassword:"",rowid:0,groupdescs:"",confirmnewpassword:""}},M_New:function(){},M_Edit:function(){},M_Delete:function(e){var t=this,s=this.FormToABSList().getRowSelected(),r=[];s.forEach((function(e){r.push({user_id:e.user_id,user_edit:t.getDataUser().user_id,last_update_stamp:e.lastupdatestamp,_Message_:""})}));var a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,Data:r};this.postJSONMulti(this.getUrlDeleteMulti(),a).then((function(e){null!=e&&t.$parent.resultDelete("Deleting Data Successfully")}))},getDataBy:function(e){var t=this,s={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.page_order,user_id:e.user_id};this.postJSON(this.getUrlById(),s).then((function(s){if(null!=s){var r=s.Data[0];t.TempPwd=r.password,t.M_SS_UserMaster={userid:r.user_id,usergroup:r.user_group,username:r.user_name,password:"",email:r.email,userlevel:r.user_level,expireddate:r.expired_date,logindate:r.login_date,statuslogin:r.status_login,isinactive:"Y"===r.is_inactive||"",userinput:r.user_input,useredit:r.user_edit,timeinput:r.time_input,timeedit:r.time_edit,lastupdatestamp:e.lastupdatestamp,position:r.position,hand_phone:r.hand_phone,referenceno:r.reference_no,controlsequenceno:r.control_sequence_no,usertype:r.user_type,failedattempts:r.failed_attempts,lastchangepassword:r.last_change_password,rowid:r.row_id,groupdescs:r.group_descs,confirmnewpassword:r.confirm_new_password},t.M_SS_UserMaster.usergroupLabel=t.M_SS_UserMaster.usergroup&&""!=t.M_SS_UserMaster.usergroup?r.user_group+t.separator+r.group_descs:"",t.IEBy.Input=r.user_input,t.IEBy.Edit=r.user_edit}}))}},beforeCreate:function(){},created:function(){this.$store.commit("setFormType","List"),this.getToolbar().ProcessPS()},beforeMount:function(){},mounted:function(){this.hideSideBarMenu(),this.FormToABSList().doGetList("","eb_getList")},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},o=n,c=s("2877"),d=Object(c["a"])(o,r,a,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0e1b94.1907a9a2.js.map