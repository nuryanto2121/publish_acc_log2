(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bdb7b"],{"2cd8":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"dashboard-page-chart"},[s("div",{staticClass:"dashboard-page-chart__body"},[s("b-row",{staticClass:"dashboardBody"},[s("b-col",{attrs:{md:"12"}},[s("div",{staticClass:"card"},[s("div",{staticClass:"card__title"},[s("b-row",[s("b-col",{staticStyle:{"max-width":"fit-content !important"}},[s("span",[t._v("View VendorGps")])]),s("b-col",{staticStyle:{"text-align":"right"}},[s("ABSButton",{attrs:{text:"Back",classButton:"button button--back",classIcon:"icon-style-1"},on:{click:t.doBack}})],1)],1)],1),s("div",{staticClass:"card__body"},[s("b-form",{attrs:{"data-vv-scope":"parent","data-vv-value-path":"parent"}},[s("b-row",[s("b-col",{attrs:{md:"2"}},[s("div",[s("img",{staticStyle:{width:"70px"},attrs:{src:e("c079"),alt:""}})])]),s("b-col",{attrs:{md:"10"}},[s("b-row",{staticClass:"row-view"},[s("b-col",[s("span",[s("label",[t._v("Vendor Name")])]),s("br"),s("span",[s("label",[t._v(t._s(t.M_OpVendorGps.vendor_name))])])]),s("b-col",{staticStyle:{"text-align":"right"}},[s("span",[s("ABSButton",{attrs:{text:"Edit",classButton:"btn btn--default",classIcon:"icon-style-1"},on:{click:t.doEdit}})],1)])],1),s("b-row",{staticClass:"row-view"},[s("b-col",[s("span",[s("label",[t._v("Pic")])]),s("br"),s("span",[s("label",[t._v(t._s(t.M_OpVendorGps.pic))])])])],1),s("b-row",{staticClass:"row-view"},[s("b-col",[s("span",[s("label",[t._v("Phone No")])]),s("br"),s("span",[s("label",[t._v(t._s(t.M_OpVendorGps.phone_no))])])])],1),s("b-row",{staticClass:"row-view"},[s("b-col",[s("span",[s("label",[t._v("Descs")])]),s("br"),s("span",[s("label",[t._v(t._s(t.M_OpVendorGps.descs))])])])],1)],1)],1)],1)],1)])])],1)],1)])},i=[],o=(e("ac6a"),e("456d"),{data:function(){return{M_OpVendorGps:{op_vendor_gps_id:0,vendor_name:"",pic:"",phone_no:"",descs:"",user_input:"",user_edit:"",time_input:"",time_edit:"",row_id:0,lastupdatestamp:0}}},computed:{paramFromList:function(){var t=this.$store.getters.getParamPage;if(null==t||void 0==t)this.doBack();else{if(!(Object.keys(t).length<1))return t;this.doBack()}}},methods:{doBack:function(){this.$router.go(-1)},doEdit:function(){var t=this.paramFromList;t.isView=!1,t.isEdit=!0,this.$store.commit("setParamPage",t),this.$router.push({name:"OP_VendorGpsForm",params:t})},doDelete:function(){var t=this;this.alertConfirmation("Are You Sure Want To Delete This Data ?").then((function(a){a.value&&t.M_Delete()}))},M_Delete:function(){var t=this,a={option_url:"/OP/OP_VendorGps",line_no:0,id:this.paramFromList.row_id,lastupdatestamp:this.paramFromList.lastupdatestamp};this.deleteJSON(this.getUrlCRUD(),a).then((function(a){null!=a&&t.alertSuccess("Data Has Been Deleted").then((function(){t.doBack()}))}))},GetDataBy:function(){var t=this,a={option_url:"/OP/OP_VendorGps",line_no:0,id:this.paramFromList.row_id,lastupdatestamp:this.paramFromList.lastupdatestamp};this.getJSON(this.getUrlCRUD(),a).then((function(a){if(null!=a){var e=a.Data[0];t.M_OpVendorGps={op_vendor_gps_id:e.op_vendor_gps_id,vendor_name:e.vendor_name__tb_1,pic:e.pic__tb_2,phone_no:e.phone_no__tb_3,descs:e.descs__tb_4,user_input:e.user_input,user_edit:e.user_edit,time_input:e.time_input,time_edit:e.time_edit,row_id:e.row_id,lastupdatestamp:e.lastupdatestamp}}}))}},mounted:function(){this.GetDataBy()},beforeMount:function(){}}),n=o,r=e("2877"),d=Object(r["a"])(n,s,i,!1,null,null,null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0bdb7b.06d893f1.js.map