(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-539bf5e0"],{"6f33":function(t,e,i){},"72fa":function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card"},[i("div",{staticClass:"card__title",staticStyle:{"padding-bottom":"5px !important"}},[i("b-row",[i("b-col",[i("span",[t._v("Execution Plan")])]),i("b-col",{staticClass:"col-right",staticStyle:{"max-width":"fit-content !important"}},[i("span",[i("ABSButton",{attrs:{text:"History",classButton:"button button--back2",classIcon:"icon-style-1"},on:{click:t.onHistory}})],1),i("span",[i("ABSButton",{attrs:{text:"View All",classButton:"button button--back2",classIcon:"icon-style-1"},on:{click:t.onViewAll}})],1)])],1)],1),i("div",{staticClass:"card__body"},[i("div",{staticClass:"card"},[i("div",{staticClass:"card__title",staticStyle:{"background-color":"rgb(227, 231, 238) !important","padding-bottom":"unset"}},[i("b-row",[i("div",{class:"col-md-1 isTabs"+("F"==t.FilterC?" active":""),staticStyle:{cursor:"pointer"},on:{click:function(e){return t.filterTable("C","F")}}},[i("span",{staticStyle:{"font-size":"13px",color:"white","font-weight":"bold"}},[t._v("FTL")])]),i("div",{class:"col-md-1 isTabs"+("L"==t.FilterC?" active":""),staticStyle:{cursor:"pointer"},on:{click:function(e){return t.filterTable("C","L")}}},[i("span",{staticStyle:{"font-size":"13px",color:"white","font-weight":"bold"}},[t._v("LTL")])]),i("div",{class:"col-md-1 isTabs"+("C"==t.FilterC?" active":""),staticStyle:{cursor:"pointer"},on:{click:function(e){return t.filterTable("C","C")}}},[i("span",{staticStyle:{"font-size":"13px",color:"white","font-weight":"bold"}},[t._v("Console")])]),i("div",{class:"col-md-1 isTabs"+("P"==t.FilterC?" active":""),staticStyle:{cursor:"pointer"},on:{click:function(e){return t.filterTable("C","P")}}},[i("span",{staticStyle:{"font-size":"13px",color:"white","font-weight":"bold"}},[t._v("Project")])]),i("div",{class:"col isTabs"+("R"==t.FilterC?" active":""),staticStyle:{"max-width":"fit-content !important",cursor:"pointer"},on:{click:function(e){return t.filterTable("C","R")}}},[i("span",{staticStyle:{"font-size":"13px",color:"white","font-weight":"bold"}},[t._v("Return Empty")])]),i("div",{staticClass:"col col-right",staticStyle:{cursor:"pointer"}},[i("span",[i("ABSButton",{attrs:{text:"POD",classButton:"button button--primary",styleButton:"background-color: #359a9a;",classIcon:"icon-style-1"},on:{click:t.goPOD}})],1)])])],1),i("div",{staticClass:"card__body",staticStyle:{"background-color":"rgb(227, 231, 238) !important",padding:"unset","border-radius":"0px 0px 8px 8px"}},[i("b-row",{staticStyle:{"min-width":"800px"}},[i("b-col",{staticClass:"ChartLegend__Wrap",staticStyle:{"min-width":"712px",padding:"0px !important"}},[i("b-row",{staticStyle:{"border-radius":"0px 0px 8px 8px",border:"solid 1px #ccc !important"}},[i("b-col",{staticStyle:{"border-radius":"0px 0px 0px 8px !important",cursor:"pointer","background-color":"white","border-right":"solid 1px #ccc","border-bottom":"solid 1px #ccc"},on:{click:function(e){return t.filterTable("S","")}}},[i("div",{class:"Plan-Dot-Primary",staticStyle:{"margin-top":"10px !important","border-radius":"8px !important"}},[i("span",[t._v(t._s(t.PlanExecution.All))])]),i("div",{staticClass:"Plan-Dot-Text"},[t._v("All")])]),t._l(t.Status,(function(e,r){return["POD"!==e.label?i("b-col",{key:r,staticStyle:{"margin-bottom":"10px",cursor:"pointer"},on:{click:function(i){return t.filterTable("S",e)}}},[i("div",{class:"Plan-Dot-"+e.variant,style:"margin-top: 10px !important; width: 36px !important; height: 36px !important; padding-top: 9px; !important"+(t.FilterS==e.key?"font-weight: bold;":"")},[i("span",[t._v(t._s(t.PlanExecution[e.key]))])]),i("div",{staticClass:"Plan-Dot-Text",style:t.FilterS==e.key?"font-weight: bold;":""},[t._v(t._s(e.label))])]):t._e()]}))],2)],1)],1)],1),i("br"),i("div",[i("ACCFormList",{ref:"ref_OrderList",attrs:{prop:t.propList,title:""},on:{rowClicked:t.rowClicked,onRenderData:t.onRenderData},scopedSlots:t._u([{key:"no",fn:function(e){return[i("span",{style:"E"==e.item.assign_fleet_status?"color: red;":""},[t._v(t._s(e.item.no))])]}},{key:"order_no",fn:function(e){return[i("span",{style:"E"==e.item.assign_fleet_status?"color: red;":""},[t._v(t._s(e.item.order_no))])]}},{key:"pickup_date",fn:function(e){return[i("span",{style:"E"==e.item.assign_fleet_status?"color: red;":""},[t._v(t._s(e.item.pickup_date))])]}},{key:"from_to",fn:function(e){return[i("span",{style:"E"==e.item.assign_fleet_status?"color: red;":""},[t._v(t._s(e.item.from_to))])]}},{key:"category",fn:function(e){return[i("span",{style:"E"==e.item.assign_fleet_status?"color: red;":""},[t._v(t._s(e.item.category))])]}},{key:"fleet_type",fn:function(e){return[i("span",{style:"E"==e.item.assign_fleet_status?"color: red;":""},[t._v(t._s(e.item.fleet_type))])]}},{key:"company",fn:function(e){return[i("span",{style:"E"==e.item.assign_fleet_status?"color: red;":""},[t._v(t._s(e.item.company))])]}},{key:"fleet_no",fn:function(e){return[e.item.ref_op_order_no&&""!==e.item.ref_op_order_no&&"LTL"==e.item.category?[i("font-awesome-icon",{staticClass:"icon-style-default",attrs:{icon:"truck"}}),t._v("  \n                    ")]:t._e(),i("span",{style:"E"==e.item.assign_fleet_status?"color: red;":""},[t._v(t._s(e.item.fleet_no))])]}},{key:"status",fn:function(e){return[i("b-row",[i("b-col",{staticStyle:{"text-align":"right","padding-top":"5px"},attrs:{md:"1",offset:"3"}},["Y"==e.item.ticket_status?i("font-awesome-icon",{staticClass:"icon-style-default",attrs:{icon:"ticket-alt"}}):t._e(),t._v("  \n                      ")],1),i("b-col",[i("div",{class:"Plan-Dot-"+t.Status[e.item.status].variant,style:("POD"==e.item.status?"font-size: 9px !important;":"font-size: 10px !important;")+"padding-top: 9px !important;"},[t._v(t._s(e.item.status))])])],1)]}}])})],1)])])])},s=[],a={data:function(){return{search:"",propList:{OptionUrl:"/OP/OP_Booking",LineNo:2,initialWhere:"ss_portfolio_id='"+this.getDataUser().portfolio_id+"'",OrderBy:"",SourceField:"",ParamView:"",PerPage:8},FilterC:"",FilterS:"",PlanExecution:{NW:0,AS:0,DP:0,AR:0,SL:0,FL:0,GO:0,AD:0,SU:0,FU:0,GD:0,POD:0,All:0},Status:{NW:{key:"NW",label:"New",variant:"Magenta"},AS:{key:"AS",label:"Assign",variant:"Lime"},DP:{key:"DP",label:"Dispatch",variant:"Green"},AR:{key:"AR",label:"Arrived",variant:"Purple"},SL:{key:"SL",label:"Start Loading",variant:"Blue"},FL:{key:"FL",label:"Finish Loading",variant:"Orange"},GO:{key:"GO",label:"Get Out",variant:"Red"},AD:{key:"AD",label:"Arrive Destination",variant:"Gold"},SU:{key:"SU",label:"Start Unloading",variant:"LightGreen"},FU:{key:"FU",label:"Finish Unloading",variant:"Pink"},GD:{key:"GD",label:"Get Out Destination",variant:"Red"},POD:{key:"POD",label:"POD",variant:"LightGreen2"}}}},computed:{},methods:{onHistory:function(){this.$router.push({name:"OP_PlanExecutionHistory"})},goPOD:function(){this.$router.push({name:"OP_PlanExecutionPODList"})},onViewAll:function(){this.$router.push({name:"OP_PlanExecution"})},rowClicked:function(t,e){var i=t;switch(this.$store.commit("setParamPage",i),t.status){case"NW":this.$router.push({name:"OP_PlanExecutionNew"});break;case"AS":this.$router.push({name:"OP_PlanExecutionAS"});break;case"DP":this.$router.push({name:"OP_PlanExecutionDP"});break;case"AR":this.$router.push({name:"OP_PlanExecutionAR"});break;case"SL":this.$router.push({name:"OP_PlanExecutionSL"});break;case"FL":this.$router.push({name:"OP_PlanExecutionFL"});break;case"GO":this.$router.push({name:"OP_PlanExecutionGO"});break;case"AD":this.$router.push({name:"OP_PlanExecutionAD"});break;case"SU":this.$router.push({name:"OP_PlanExecutionSU"});break;case"FU":this.$router.push({name:"OP_PlanExecutionFU"});break;case"GD":this.$router.push({name:"OP_PlanExecutionGD"});break;case"POD":this.$router.push({name:"OP_PlanExecutionPOD"});break;default:this.$router.push({name:"OP_ViewPlanExecution"})}},filterTable:function(t,e){var i="ss_portfolio_id='"+this.getDataUser().portfolio_id+"' AND ";if("C"==t){this.FilterC=e;var r=this.FilterS&&""!==this.FilterS?" AND status='"+this.FilterS+"'":"";switch(e){case"F":this.propList.initialWhere=i+"category='FTL'"+r,this.$refs.ref_OrderList.doGetList("");break;case"L":this.propList.initialWhere=i+"category='LTL'"+r,this.$refs.ref_OrderList.doGetList("");break;case"P":this.propList.initialWhere=i+"category='Project'"+r,this.$refs.ref_OrderList.doGetList("");break;case"C":this.propList.initialWhere=i+"category='Console'"+r,this.$refs.ref_OrderList.doGetList("");break;case"R":this.propList.initialWhere=i+"category='Return Empty'"+r,this.$refs.ref_OrderList.doGetList("");break;default:this.propList.initialWhere=i+"",this.$refs.ref_OrderList.doGetList("");break}}else if(""==e)this.FilterC="",this.FilterS=e,this.propList.initialWhere=i+e,this.$refs.ref_OrderList.doGetList("");else{this.FilterS=e.key;var s="";"F"==this.FilterC?s="AND category='FTL'":"L"==this.FilterC?s="AND category='LTL'":"P"==this.FilterC?s="AND category='Project'":"C"==this.FilterC&&(s="AND category='Console'"),this.propList.initialWhere=i+"status='"+e.key+"'"+s,this.$refs.ref_OrderList.doGetList("")}},RenderData:function(){this.$refs.ref_OrderList.doGetList("")},onRenderData:function(t){var e=this,i={option_function_cd:"GetOrderQty",module_cd:"OP",ss_portfolio_id:this.getDataUser().portfolio_id};this.CallFunction(i).then((function(t){if(null!=t){for(var i=t.Data,r=0,s=0;s<i.length;s++)e.PlanExecution[i[s].order_status]=parseInt(i[s].total),r+=parseInt(i[s].total);e.PlanExecution.All=r}}))}},mounted:function(){this.RenderData()}},o=a,n=(i("ac4e"),i("2877")),l=Object(n["a"])(o,r,s,!1,null,"cfab8386",null);e["default"]=l.exports},ac4e:function(t,e,i){"use strict";var r=i("6f33"),s=i.n(r);s.a}}]);
//# sourceMappingURL=chunk-539bf5e0.b71171cd.js.map