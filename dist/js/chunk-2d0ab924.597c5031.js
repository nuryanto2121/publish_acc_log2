(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ab924"],{"169b":function(t,i,e){"use strict";e.r(i);var _=function(){var t=this,i=t.$createElement,_=t._self._c||i;return _("div",{staticClass:"dashboard-page-chart"},[_("div",{staticClass:"dashboard-page-chart__body"},[_("b-row",{staticClass:"dashboardBody"},[_("b-col",{attrs:{md:"12"}},[_("div",{staticClass:"card",staticStyle:{"font-size":"12px !important"}},[_("div",{staticClass:"card__title"},[_("b-row",[_("b-col",{staticStyle:{"max-width":"fit-content !important"}},[_("span",[t._v(t._s(t.title)+" Customer Standard Costing LTL")])]),_("b-col",{staticStyle:{"text-align":"right"}},[_("ABSButton",{attrs:{text:"Back",classButton:"button button--back",classIcon:"icon-style-1"},on:{click:t.doBack}})],1)],1)],1),_("div",{staticClass:"card__body"},[_("b-form",{attrs:{"data-vv-scope":"OP_FormOpPricingCosting","data-vv-value-path":"OP_FormOpPricingCosting"}},[_("b-row",[_("b-col",{attrs:{md:"2"}},[_("div",[_("img",{staticStyle:{width:"70px"},attrs:{src:e("c079"),alt:""}})])]),_("b-col",{attrs:{md:"10"}},[_("b-row",[_("b-col",{attrs:{md:"3"}},[_("span",[_("label",[t._v("From Zone")])]),_("ACCDropDown",{ref:"ref_fr_cm_zone_id",attrs:{prop:t.PI_fr_cm_zone_id,label:t.M_OpPricingCosting.fr_zone_cdLabel},on:{change:t.Onfr_cm_zone_idChange},model:{value:t.M_OpPricingCosting.fr_cm_zone_id,callback:function(i){t.$set(t.M_OpPricingCosting,"fr_cm_zone_id",i)},expression:"M_OpPricingCosting.fr_cm_zone_id"}})],1),_("b-col",{attrs:{md:"3"}},[_("span",[_("label",[t._v("To Zone")])]),_("ACCDropDown",{ref:"ref_to_cm_zone_id",attrs:{prop:t.PI_to_cm_zone_id,label:t.M_OpPricingCosting.to_zone_cdLabel},on:{change:t.Onto_cm_zone_idChange},model:{value:t.M_OpPricingCosting.to_cm_zone_id,callback:function(i){t.$set(t.M_OpPricingCosting,"to_cm_zone_id",i)},expression:"M_OpPricingCosting.to_cm_zone_id"}})],1)],1),_("b-row",[_("b-col",{attrs:{md:"6"}},[_("span",[_("label",[t._v("Vehicle Type")])]),_("ACCDropDown",{ref:"ref_fm_fleet_type_id",attrs:{prop:t.PI_fm_fleet_type_id,label:t.M_OpPricingCosting.fleet_cdLabel},on:{change:t.Onfm_fleet_type_idChange},model:{value:t.M_OpPricingCosting.fm_fleet_type_id,callback:function(i){t.$set(t.M_OpPricingCosting,"fm_fleet_type_id",i)},expression:"M_OpPricingCosting.fm_fleet_type_id"}})],1)],1),_("b-row",[_("b-col",{attrs:{md:"6"}},[_("span",[_("label",[t._v("Selling Price")])]),_("ACCTextBox",{ref:"ref_selling_price",attrs:{prop:t.PI_selling_price},model:{value:t.M_OpPricingCosting.selling_price,callback:function(i){t.$set(t.M_OpPricingCosting,"selling_price",i)},expression:"M_OpPricingCosting.selling_price"}})],1)],1),_("b-row",[_("b-col",{attrs:{md:"3"}},[_("span",[_("label",[t._v("Valid From")])]),_("ACCDateTime",{ref:"ref_start_date",attrs:{prop:t.PI_start_date},model:{value:t.M_OpPricingCosting.start_date,callback:function(i){t.$set(t.M_OpPricingCosting,"start_date",i)},expression:"M_OpPricingCosting.start_date"}})],1),_("b-col",{attrs:{md:"3"}},[_("span",[_("label",[t._v("Valid Until")])]),_("ACCDateTime",{ref:"ref_expired_date",attrs:{prop:t.PI_expired_date},model:{value:t.M_OpPricingCosting.expired_date,callback:function(i){t.$set(t.M_OpPricingCosting,"expired_date",i)},expression:"M_OpPricingCosting.expired_date"}})],1)],1),_("b-row",[_("b-col",{attrs:{md:"6"}},[_("span",[_("label",[t._v("Remarks")])]),_("ACCTextArea",{ref:"ref_remarks",attrs:{prop:t.PI_remarks},model:{value:t.M_OpPricingCosting.remarks,callback:function(i){t.$set(t.M_OpPricingCosting,"remarks",i)},expression:"M_OpPricingCosting.remarks"}})],1)],1),_("b-row",{staticStyle:{"margin-top":"10px"}},[_("b-col",{attrs:{md:"6"}},[_("ABSButton",{attrs:{text:"Save",classButton:"btn btn--default",classIcon:"icon-style-default",styleButton:"height: 40px;width: 100%;"},on:{click:t.doSave}})],1)],1)],1)],1)],1)],1)])])],1)],1)])},o=[],n=(e("a481"),{data:function(){return{title:"",M_OpPricingCosting:{op_pricing_costing_id:0,ss_portfolio_id:0,category:"",fr_cm_zone_id:0,fr_zone_cdLabel:"",to_cm_zone_id:0,to_zone_cdLabel:"",fm_fleet_type_id:0,fleet_cdLabel:"",cm_commodity_id:0,commodity_cdLabel:"",selling_price:0,cbm_selling_price:0,kgs_selling_price:0,total_cost_value:0,start_date:new Date,expired_date:new Date,remarks:"",user_input:"",user_edit:"",time_input:"",time_edit:"",row_id:0,lastupdatestamp:0},PI_fr_cm_zone_id:{dataLookUp:{LookUpCd:"GetCostingZone",ColumnDB:"cm_zone_id",InitialWhere:"",ParamWhere:"",OrderBy:"",ParamView:"",SourceField:"",DisplayLookUp:""},cValidate:"",cName:"fr_cm_zone_id",cOrder:1,cKey:!1,cStatic:!1,cProtect:!1,cParentForm:"OP_FormOpPricingCosting",cOption:[],cDisplayColumn:"cm_zone_id,zone_code",cInputStatus:this.inputStatus},PI_to_cm_zone_id:{dataLookUp:{LookUpCd:"GetCostingZone",ColumnDB:"cm_zone_id",InitialWhere:"",ParamWhere:"",OrderBy:"",ParamView:"",SourceField:"",DisplayLookUp:""},cValidate:"",cName:"to_cm_zone_id",cOrder:2,cKey:!1,cStatic:!1,cProtect:!1,cParentForm:"OP_FormOpPricingCosting",cOption:[],cDisplayColumn:"cm_zone_id,zone_code",cInputStatus:this.inputStatus},PI_fm_fleet_type_id:{dataLookUp:{LookUpCd:"GetFleetType",ColumnDB:"fleet_type_id",InitialWhere:"",ParamWhere:"",OrderBy:"",ParamView:"",SourceField:"",DisplayLookUp:"descs,time_edit"},cValidate:"",cName:"fm_fleet_type_id",cOrder:3,cKey:!1,cStatic:!1,cProtect:!1,cParentForm:"OP_FormOpPricingCosting",cOption:[],cDisplayColumn:"descs,time_edit",cInputStatus:this.inputStatus},PI_selling_price:{cValidate:"",cName:"selling_price",cOrder:4,cKey:!1,cType:"decimal",cProtect:!1,cParentForm:"OP_FormOpPricingCosting",cDecimal:2,cInputStatus:this.inputStatus},PI_start_date:{cValidate:"",cName:"start_date",cOrder:5,cKey:!1,cProtect:!1,cWithTime:!1,cFormat:"dd/MM/yyyy",cParentForm:"OP_FormOpPricingCosting"},PI_expired_date:{cValidate:"required",cName:"expired_date",cOrder:6,cKey:!1,cProtect:!1,cWithTime:!1,cFormat:"dd/MM/yyyy",cParentForm:"OP_FormOpPricingCosting"},PI_remarks:{cValidate:"",cName:"remarks",cOrder:7,cKey:!1,cProtect:!1,cResize:!1,cReadonly:!1,cRows:3,cMaxRows:3,cSize:"md",cParentForm:"OP_FormOpPricingCosting",cInputStatus:this.inputStatus}}},computed:{paramFromList:function(){var t=this.$store.getters.getParamPage;return t},inputStatus:function(){var t=this.$store.getters.getParamPage;return t.isEdit&&!0===t.isEdit?"edit":"new"}},methods:{doBack:function(){this.$router.go(-1)},Onfr_cm_zone_idChange:function(t){var i=this;this.$nextTick((function(){i.M_OpPricingCosting.fr_cm_zone_id=t.id,i.M_OpPricingCosting.fr_zone_cdLabel=t.label}))},Onto_cm_zone_idChange:function(t){var i=this;this.$nextTick((function(){i.M_OpPricingCosting.to_cm_zone_id=t.id,i.M_OpPricingCosting.to_zone_cdLabel=t.label}))},Onfm_fleet_type_idChange:function(t){var i=this;this.$nextTick((function(){i.M_OpPricingCosting.fm_fleet_type_id=t.id,i.M_OpPricingCosting.fleet_cdLabel=t.descs}))},M_ClearForm:function(){this.M_OpPricingCosting={op_pricing_costing_id:0,ss_portfolio_id:0,category:"",fr_cm_zone_id:0,fr_zone_cdLabel:"",to_cm_zone_id:0,to_zone_cdLabel:"",fm_fleet_type_id:0,fleet_cdLabel:"",cm_commodity_id:0,commodity_cdLabel:"",selling_price:0,cbm_selling_price:0,kgs_selling_price:0,total_cost_value:0,start_date:new Date,expired_date:new Date,remarks:"",user_input:"",user_edit:"",time_input:"",time_edit:"",row_id:0,lastupdatestamp:0}},doSave:function(){var t=this;this.$validator._base.validateAll("OP_FormOpPricingCosting").then((function(i){i&&t.alertConfirmation("Are You Sure Want To Save This Data ?").then((function(i){i.value&&(t.$validator.errors.clear("OP_FormOpPricingCosting"),"edit"==t.inputStatus?t.M_Update():t.M_Save())}))}))},M_Save:function(){var t=this,i={option_url:"/OP/OP_PricingCosting",line_no:0,ss_portfolio_id:this.getDataUser().portfolio_id,category:"F",fr_cm_zone_id:this.M_OpPricingCosting.fr_cm_zone_id,to_cm_zone_id:this.M_OpPricingCosting.to_cm_zone_id,fm_fleet_type_id:this.M_OpPricingCosting.fm_fleet_type_id,cm_commodity_id:"NULL",selling_price:this.M_OpPricingCosting.selling_price,cbm_selling_price:0,kgs_selling_price:0,total_cost_value:this.M_OpPricingCosting.total_cost_value,total_cost_cbm:0,total_cost_kgs:0,start_date:this.M_OpPricingCosting.start_date,expired_date:this.M_OpPricingCosting.expired_date,remarks:this.M_OpPricingCosting.remarks,user_input:this.getDataUser().user_id};this.postJSON(this.getUrlCRUD(),i).then((function(i){null!=i&&t.alertSuccess(i.Message).then((function(){t.doBack()}))}))},M_Update:function(){var t=this,i={option_url:"/OP/OP_PricingCosting",line_no:0,op_pricing_costing_id:this.M_OpPricingCosting.op_pricing_costing_id,ss_portfolio_id:this.getDataUser().portfolio_id,category:this.M_OpPricingCosting.category,fr_cm_zone_id:this.M_OpPricingCosting.fr_cm_zone_id,to_cm_zone_id:this.M_OpPricingCosting.to_cm_zone_id,fm_fleet_type_id:this.M_OpPricingCosting.fm_fleet_type_id,cm_commodity_id:"NULL",selling_price:this.M_OpPricingCosting.selling_price,cbm_selling_price:0,kgs_selling_price:0,total_cost_value:this.M_OpPricingCosting.total_cost_value,total_cost_cbm:0,total_cost_kgs:0,start_date:this.M_OpPricingCosting.start_date,expired_date:this.M_OpPricingCosting.expired_date,remarks:this.M_OpPricingCosting.remarks,lastupdatestamp:this.paramFromList.lastupdatestamp,user_edit:this.getDataUser().user_id};this.putJSON(this.getUrlCRUD(),i).then((function(i){null!=i&&t.alertSuccess(i.Message).then((function(){"new"==t.inputStatus?t.doBack():t.$router.replace({name:"OP_PricingCosting"})}))}))},doDelete:function(){var t=this;this.alertConfirmation("Are You Sure Want To Delete This Data ?").then((function(i){i.value&&t.M_Delete()}))},M_Delete:function(){var t=this,i={option_url:"/OP/OP_PricingCosting",line_no:{LineNo:LineNo},id:this.paramFromList.row_id,lastupdatestamp:this.paramFromList.lastupdatestamp};this.deleteJSON(this.getUrlCRUD(),i).then((function(i){null!=i&&t.alertSuccess("Data Has Been Deleted").then((function(){t.doBack()}))}))},GetDataBy:function(){var t=this,i={option_url:"/OP/OP_PricingCosting",line_no:0,id:this.paramFromList.row_id,lastupdatestamp:this.paramFromList.lastupdatestamp};this.getJSON(this.getUrlCRUD(),i).then((function(i){if(null!=i){var e=i.Data[0];t.M_OpPricingCosting={op_pricing_costing_id:e.op_pricing_costing_id,ss_portfolio_id:e.ss_portfolio_id,category:e.category,fr_cm_zone_id:e.fr_cm_zone_id__lo_1,fr_zone_cdLabel:e.fr_zone_cd__lbl__lo_1,to_cm_zone_id:e.to_cm_zone_id__lo_2,to_zone_cdLabel:e.to_zone_cd__lbl__lo_2,fm_fleet_type_id:e.fm_fleet_type_id__lo_3,fleet_cdLabel:e.fleet_cd__lbl__lo_3,cm_commodity_id:e.cm_commodity_id__lo_4,commodity_cdLabel:e.commodity_cd__lbl__lo_4,selling_price:e.selling_price__tb_5,cbm_selling_price:e.cbm_selling_price__tb_6,kgs_selling_price:e.kgs_selling_price__tb_7,total_cost_value:e.total_cost_value,start_date:e.start_date,expired_date:e.expired_date,remarks:e.remarks__tb_8,user_input:e.user_input,user_edit:e.user_edit,time_input:e.time_input,time_edit:e.time_edit,row_id:e.row_id,lastupdatestamp:e.lastupdatestamp}}}))}},mounted:function(){this.M_ClearForm(),"edit"==this.inputStatus?(this.title="Edit",this.GetDataBy()):this.title="Add"}}),r=n,a=e("2877"),c=Object(a["a"])(r,_,o,!1,null,null,null);i["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0ab924.597c5031.js.map