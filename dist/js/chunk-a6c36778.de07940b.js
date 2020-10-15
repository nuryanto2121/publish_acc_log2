(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a6c36778"],{"5d9c":function(t,e,i){"use strict";var s=i("9a41"),o=i.n(s);o.a},"7f79":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{"padding-left":"15px","padding-right":"15px"}},[s("b-modal",{ref:"modalColumn",staticClass:"modalCustomABS",attrs:{id:"modalColumn",title:"Edit Column",size:"lg"}},[s("b-row",[s("b-col",{attrs:{sm:"5"}},[s("div",[s("div",{staticClass:"divCustom"},[s("b",[t._v("Available Columns")]),s("br"),s("span",[t._v("Select column below to display in your grid")])]),s("br"),t.availableColumn.length>0?s("div",[s("ABSMultiSelect",{staticClass:"selectCustom",attrs:{options:t.availableColumn,size:"10"},model:{value:t.availableColumnSelected,callback:function(e){t.availableColumnSelected=e},expression:"availableColumnSelected"}})],1):s("div",[s("b",[t._v(" No Additional Properties ")])])])]),s("div",{staticClass:"arrow-move"},[s("b-button",{attrs:{size:"sm",variant:"primary"},on:{click:t.M_moveRight}},[s("font-awesome-icon",{staticClass:"icon-style-5",attrs:{icon:"angle-double-right"}})],1)],1),s("b-col",{attrs:{sm:"5"}},[s("div",[s("div",{staticClass:"divCustom"},[s("b",[t._v("Selected Column")]),s("br"),s("span",[t._v("Drag the column names below to reorder how they will appear above your grid")])]),s("br"),t.selectedColumn.length>0?s("draggable",{staticClass:"drag-area",on:{start:function(e){t.drag=!0},end:function(e){t.drag=!1}},model:{value:t.selectedColumn,callback:function(e){t.selectedColumn=e},expression:"selectedColumn"}},t._l(t.selectedColumn,(function(e){return s("div",{key:e.value,staticClass:"draggable"},[t._v("\n                  "+t._s(e.key)+"\n                  "),s("span",[s("span",{staticClass:"btn-remove",staticStyle:{"margin-top":"0px",float:"right"},on:{click:function(i){return t.M_moveLeft(e.value)}}},[s("font-awesome-icon",{attrs:{icon:"trash"}}),t._v(" Delete\n                    ")],1)])])})),0):s("div",[s("b",[t._v(" No Column Selected ")])])],1)])],1),s("div",{staticClass:"w-100",attrs:{slot:"modal-footer"},slot:"modal-footer"},[s("div",{staticStyle:{"padding-right":"20px"}},[s("b-btn",{staticClass:"float-right btnModal__btnCancel",attrs:{size:"sm"},on:{click:function(e){return t.$refs.modalColumn.hide()}}},[t._v("\n            Cancel\n          ")]),s("b-btn",{staticClass:"float-right btnModal__btnOK",attrs:{size:"sm",variant:"primary"},on:{click:t.modalColumnHandleOk}},[t._v("\n            OK\n          ")])],1)])],1),s("b-modal",{ref:"modalFilter",staticClass:"modalCustomABS",attrs:{id:"modalFilter",title:"Filter Builder",size:"lg"}},[s("b-button",{attrs:{size:"sm",variant:"primary"},on:{click:function(e){return t.doAddFilter()}}},[t._v(" Add ")]),s("div",{staticStyle:{"padding-top":"20px"}},t._l(t.filteredColumn,(function(e,i){return s("b-row",{key:i},[s("b-col",{staticStyle:{"padding-bottom":"10px","padding-right":"0px !important","padding-left":"20px !important","max-width":"50px !important"},attrs:{"align-h":"left"}},[s("b-button",{staticClass:"btnModal__btnDelete",attrs:{size:"sm"},on:{click:function(e){return t.M_RemoveFilter(i)}}},[s("font-awesome-icon",{staticClass:"icon-style-5",attrs:{icon:"times"}})],1)],1),s("b-col",{attrs:{sm:"4"}},[s("b-form-select",{staticClass:"sm-3 font-lbl",staticStyle:{height:"30px"},attrs:{options:t.selectedColumn,size:"sm"},model:{value:e.columnName,callback:function(i){t.$set(e,"columnName",i)},expression:"data.columnName"}})],1),s("b-col",{attrs:{sm:"3"}},[s("b-form-select",{staticClass:"sm-3 font-lbl",staticStyle:{height:"30px"},attrs:{options:t.signFilter,size:"sm"},model:{value:e.signFilter,callback:function(i){t.$set(e,"signFilter",i)},expression:"data.signFilter"}})],1),s("b-col",{attrs:{sm:"4"}},["text"==t.signFilter[t.signFilter.map((function(t){return t.value})).indexOf(e.signFilter)].type?s("b-form-input",{staticClass:"sm-3 font-lbl",staticStyle:{height:"30px"},attrs:{type:"text",placeholder:"Enter a value",size:"sm"},model:{value:e.value,callback:function(i){t.$set(e,"value",i)},expression:"data.value"}}):t._e()],1)],1)})),1),s("div",{staticClass:"w-100",attrs:{slot:"modal-footer"},slot:"modal-footer"},[s("div",{staticStyle:{"padding-right":"20px"}},[s("b-btn",{staticClass:"float-right btnModal__btnCancel",attrs:{size:"sm"},on:{click:function(e){return t.$refs.modalFilter.hide()}}},[t._v("\n            Cancel\n          ")]),s("b-btn",{staticClass:"float-right btnModal__btnOK",attrs:{size:"sm",variant:"primary"},on:{click:t.modalFilterHandleOk}},[t._v("\n            OK\n          ")])],1)])],1),s("b-modal",{ref:"modalExport",staticClass:"modalCustomABS",attrs:{id:"modalExport","hide-footer":!0,"hide-header-close":!0,size:"md"}},[s("div",{staticClass:"w-100",attrs:{slot:"modal-header"},slot:"modal-header"},[s("div",{staticStyle:{"font-size":"20px !important",color:"#28a745 !important","text-align":"center !important"}},[s("b",[t._v("Export "+t._s(t.title)+" to Excel")])])]),s("b-row",[s("b-col",{staticStyle:{"padding-top":"20px","padding-bottom":"10px !important","font-size":"14px !important","text-align":"center !important"},attrs:{sm:"12"}},[t._v("\n          Select data that will be exported\n        ")])],1),s("b-row",{staticStyle:{"padding-top":"20px"}},[s("b-col",{staticStyle:{"padding-bottom":"7px"},attrs:{sm:"5","align-h":"center"}},[s("b-btn",{staticClass:"float-center",staticStyle:{width:"100% !important"},attrs:{size:"sm",variant:"primary"},on:{click:function(e){return t.doExportXLS("S")}}},[t._v("\n            Export Selected Data\n          ")])],1),s("b-col",{staticStyle:{"padding-bottom":"7px"},attrs:{sm:"5","align-h":"center"}},[s("b-btn",{staticClass:"float-center",staticStyle:{width:"100% !important"},attrs:{size:"sm",variant:"success"},on:{click:function(e){return t.doExportXLS("A")}}},[t._v("\n            Export All\n          ")])],1),s("b-col",{staticStyle:{"padding-bottom":"7px"},attrs:{sm:"2","align-h":"right"}},[s("b-btn",{staticClass:"float-center btnModal__btnCancel",staticStyle:{margin:"0px !important"},attrs:{size:"sm",variant:"primary"},on:{click:function(e){return t.$refs.modalExport.hide()}}},[t._v("\n            Cancel\n          ")])],1)],1)],1),s("b-row",{staticClass:"header-list__1",attrs:{"align-h":"right"}},[s("b-col",{staticStyle:{"padding-left":"15px !important","padding-top":"3px !important"},attrs:{"align-h":"left",sm:"5"}},[s("b-form",{staticStyle:{float:"left",color:"white"},attrs:{inline:""}},[s("label",{staticClass:"font-lbl"},[t._v("Page Size")]),s("b-form-select",{staticClass:"sm-3 mgn-left-10 font-lbl",staticStyle:{height:"28px"},attrs:{id:"cmbPerPage",options:t.pagingData,disabled:t.isDisableTable},on:{input:function(e){return t.doGetList("","pageSize")}},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}}),t._v("\n             of "+t._s(this.totalRows)+" Records\n            ")],1)],1),s("b-col",{staticStyle:{"padding-top":"3px !important"},attrs:{sm:"6","align-h":"center"}},[s("b-pagination",{staticStyle:{"margin-bottom":"0px"},attrs:{align:"right","total-rows":t.totalRows,"per-page":t.perPage,limit:t.limit,disabled:t.isDisableTable},on:{input:function(e){return t.doGetList("","pagination")}},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1),s("b-col",[s("div",{staticClass:"dropdown",staticStyle:{float:"right"}},[s("button",{staticClass:"dropbtn"},[s("img",{staticStyle:{width:"20px","padding-top":"6px","padding-bottom":"6px"},attrs:{src:i("4a40"),alt:""}})]),s("div",{staticClass:"dropdown-content"},[s("a",{attrs:{href:"#"},on:{click:t.openModalExport}},[s("font-awesome-icon",{staticClass:"icon-style-3",attrs:{icon:"file-export"}}),t._v(" Export")],1),s("a",{attrs:{href:"#"},on:{click:t.openModalColumn}},[s("font-awesome-icon",{staticClass:"icon-style-1",attrs:{icon:"columns"}}),t._v(" Column")],1),s("a",{attrs:{href:"#"},on:{click:t.openModalFilter}},[s("font-awesome-icon",{staticClass:"icon-style-1",attrs:{icon:"columns"}}),t._v(" Advance Filter")],1)])])])],1),s("div",{staticStyle:{"overflow-x":"auto"}},[s("b-table",{staticClass:"table-sm table-style-1",attrs:{striped:!1,bordered:!1,outlined:!1,small:!1,hover:!0,dark:!1,fixed:!1,"foot-clone":!1,fields:t.fields,items:t.items,rules:"row"},on:{"head-clicked":t.headClicked,"row-clicked":t.rowClicked,"row-dblclicked":t.rowDblClicked},scopedSlots:t._u([{key:"HEAD_chkBoxAction",fn:function(e){return[s("b-form-checkbox",{attrs:{disabled:t.isDisableTable},on:{change:t.headChkBoxAction},nativeOn:{click:function(t){t.stopPropagation()}},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})]}},{key:"chkBoxAction",fn:function(e){return[s("b-form-checkbox",{staticStyle:{"min-height":"15px !important","padding-top":"0px !important"},attrs:{value:e.index,disabled:t.isDisableTable},on:{change:function(i){return t.chkBoxAction(e.index)}},nativeOn:{dblclick:function(t){t.stopPropagation()},click:function(t){t.stopPropagation()}},model:{value:t.rowSelected,callback:function(e){t.rowSelected=e},expression:"rowSelected"}})]}}])})],1)],1)},o=[],l=(i("55dd"),i("bd86")),a=(i("28a5"),i("ac6a"),i("c5f6"),i("56d7")),n=i("5118"),r={props:{prop:{initialWhere:String,LineNo:Number,PageLevel:String,TabIndex:String},title:String},data:function(){return{isDisableTable:!1,selected:!1,rowSelected:[],dataSelected:[],rowSel:-1,search:"",fields:[],items:[],sort:"TimeEdit DESC",sortBy:"",sortDesc:!1,totalRows:0,currentPage:1,lastPage:1,perPage:5,limit:2,pagingData:[{value:5,text:"5"},{value:10,text:"10"},{value:15,text:"15"},{value:20,text:"20"},{value:40,text:"40"},{value:60,text:"60"},{value:80,text:"80"},{value:100,text:"100"}],fileName:"TestExport",ExportToken:"",availableColumn:[],availableColumnTemp:[],availableColumnSelected:[],selectedColumn:[],selectedColumnTemp:[],selectedColumnSelected:[],sortedField:[],filteredColumnTemp:[],filteredColumn:[],signFilter:[{value:"=",text:"Equals",type:"text"},{value:"<>",text:"Does Not Equal",type:"text"},{value:"<",text:"Is Less Than",type:"text"},{value:">",text:"Is Greater Than",type:"text"},{value:"<=",text:"Is Less Than Or Equal To",type:"text"},{value:">=",text:"Is Greater Than Or Equal To",type:"text"},{value:"null",text:"Is Empty",type:"none"},{value:"notnull",text:"Is Not Empty",type:"none"},{value:"like",text:"Contains Of",type:"text"},{value:"in",text:"Is Any Of",type:"text"},{value:"notin",text:"Is None Of",type:"text"}],dataState:{TabIndex:"1"},tempAdvanceFilter:""}},methods:{doNew:function(){this.$emit("doNew")},doEdit:function(){this.$emit("doEdit")},doSave:function(){this.$emit("doSave")},doCancel:function(){this.$emit("doCancel")},doRefresh:function(){this.prop.initialWhere="",this.doGetList("","refresh"),this.resetSelected(),this.$emit("doRefresh")},onSearchEnter:function(t){this.doGetList("","onSearchEnter")},getRowSelected:function(t,e){var i=this,s=[];this.rowSelected.length>0?(this.rowSelected.forEach((function(t){s.push(i.items[t])})),this.$emit(e,s)):this.alertWarning("No Data Selected")},doPost:function(){var t=this,e=[];this.rowSelected.length>0?(this.rowSelected.forEach((function(i){e.push(t.items[i])})),a["EventBus"].$emit("ebGetPostList_"+this.prop.PageLevel+"_"+this.prop.TabIndex,e)):this.alertWarning("No Data Selected To Post")},doDelete:function(){var t=this,e=[];this.rowSelected.length>0?(this.rowSelected.forEach((function(i){e.push(t.items[i])})),a["EventBus"].$emit("ebGetDeleteList_"+this.prop.PageLevel+"_"+this.prop.TabIndex,e)):this.alertWarning("No Data Selected To Delete")},M_Delete:function(t){var e=this,i={OptionSeq:this.getOptionSeq().OptionSeq,SubPortfolioCd:this.getDataUser().subportfolio_cd,PortfolioCd:this.getDataUser().portfolio_cd,LineNo:this.prop.LineNo,Data:t};this.postJSON(this.getUrlDeleteMulti(),i).then((function(t){null!=t&&(e.responses=t,e.alertSuccess("Deleting Data Successfully"),e.doGetList("","refresh_delete"),e.resetSelected())}))},doExportXLS:function(t){var e=this;if("A"==t){var i=this.getFileExcel(this.fileName,this.ExportToken);window.location.href=i,this.$refs.modalExport.hide()}else if(this.rowSelected.length>0){var s="";this.rowSelected.forEach((function(t){s+=e.items[t].row_id+","})),s=s.slice(0,-1),this.M_ExportXLS(s)}else this.alertWarning("No Data Selected To Export")},M_ExportXLS:function(t){var e=this,i={Token:this.ExportToken,Data:t};this.postJSON(this.getUrlGetTokenExport(),i).then((function(t){if(null!=t){var i=e.getFileExcel(e.fileName,t.Data.Token);window.location.href=i,e.$refs.modalExport.hide()}}))},M_PostData:function(t){var e=this,i={OptionSeq:this.getOptionSeq().OptionSeq,SubPortfolioCd:this.getDataUser().subportfolio_cd,PortfolioCd:this.getDataUser().portfolio_cd,LineNo:this.prop.LineNo,Data:t};console.table(i),this.postEncode(this.getUrlPostMulti(),i).then((function(t){console.log("post"),console.table(t),null!=t&&(e.alertSuccess("Posting Data Successfully"),e.doGetList("","refresh_post"),e.resetSelected())}))},openModalExport:function(){this.$refs.modalExport.show()},openModalColumn:function(){this.$refs.modalColumn.show()},openModalFilter:function(){this.$refs.modalFilter.show()},doCursorSearch:function(){document.getElementById(txtSearch).focus(),document.getElementById(frmObj.id).select(),alert("cursor")},doAddFilter:function(){var t=this.selectedColumn;this.filteredColumn.push({columnName:t[0].value,signFilter:"=",value:""})},M_RemoveFilter:function(t){this.filteredColumn.splice(t,1),this.$forceUpdate()},modalFilterHandleOk:function(){var t=this,e=this.selectedColumn,i="";this.filteredColumn.forEach((function(s,o){var l=e.map((function(t){return t.value})).indexOf(s.columnName);console.log(l),console.log(s.columnName);var a="",n=s.signFilter;if(console.log(n),"in"==n||"notin"==n){var r=s.value.split(","),c="";r.forEach((function(t){c+="'"+t+"',"})),c=c.substr(0,c.length-1),a="in"==n?"in ("+c+")":"not in ("+c+")"}else a+="like"==n?"like '%"+s.value+"%'":"null"==n?" is null ":"notnull"==n?" is not null ":s.signFilter+" '"+s.value+"'";i+=t.selectedColumn[l].key+" "+a+" AND "})),i=i.substr(0,i.length-4),this.tempAdvanceFilter=i,this.doGetList("","refresh_filter"),this.$refs.modalFilter.hide()},modalColumnHandleOk:function(){var t=this,e="";this.selectedColumn.forEach((function(i,s){e+=i.key+",",s==t.selectedColumn.length-1&&(e=e.substr(0,e.length-1))}));var i={OptionSeq:this.getOptionSeq().OptionSeq,UserId:this.getDataUser().user_id,SubPortfolioCd:this.getDataUser().subportfolio_cd,ColumnField:e,UserInput:this.getDataUser().user_id,LineNo:this.prop.LineNo};this.postEncode(this.getUrlDefineColumn(),i).then((function(e){null!=e&&(t.responses=e,t.fields=[],t.fields.push({value:0,key:"chkBoxAction"}),t.selectedColumn.forEach((function(e){t.fields.push(Object(l["a"])({value:e.value,key:e.key,thClass:"ABSthClassList",tdClass:"ABStdClassList"},"value",e.key))})),t.doGetList("","refresh_column"),t.$refs.modalColumn.hide())}))},M_moveRight:function(){var t=this;if(this.availableColumnSelected&&this.availableColumnSelected.length>0){var e=this.availableColumn,i=0;this.availableColumnTemp.forEach((function(s,o){s.value==t.availableColumnSelected[i]&&(e=e.filter((function(t,e){return t.value!=s.value})),t.selectedColumn.push({value:s.value,key:s.key,text:s.key}),i+=1),i==t.availableColumnSelected.length&&(t.availableColumn=e,t.selectedColumnTemp=t.selectedColumn,t.availableColumnTemp=t.availableColumn)}))}},M_moveLeft:function(t){var e=this;this.selectedColumnSelected=[t];var i=this.selectedColumn,s=0;this.selectedColumnTemp.forEach((function(t,o){t.value==e.selectedColumnSelected[s]&&(i=i.filter((function(e,i){return e.value!=t.value})),e.availableColumn.push({value:t.value,key:t.key,text:t.key}),s+=1),s==e.selectedColumnSelected.length&&(e.selectedColumn=i)}))},headClicked:function(t,e){var i=this;if("NO"!=t.toUpperCase()&&!this.isDisableTable){var s=this.sortedField;this.sort="";var o=s.map((function(t){return t.field})).indexOf(t);o>-1?"ASC"==this.sortedField[o].sort?(this.sortedField[o].sort="DESC",this.fields.map((function(e,s){e.key===t&&(i.fields[e.value].thClass="ABSthClassList set--desc")}))):(this.sortedField[o].sort="ASC",this.fields.map((function(e,s){e.key===t&&(i.fields[e.value].thClass="ABSthClassList set--asc")}))):this.sortedField.push({field:t,sort:"ASC"}),this.sortedField.forEach((function(t){i.sort+=t.field+" "+t.sort+","})),this.sort=this.sort.substr(0,this.sort.length-1),Object(n["setTimeout"])((function(){i.doGetList("","headTable")}),2e3),this.resetSelected(),this.$emit("headClicked")}},headChkBoxAction:function(){var t=this;this.rowSelected=[],this.selected?this.items.forEach((function(t,e){})):this.items.forEach((function(e,i){t.rowSelected.push(i)})),this.$emit("allCheckBoxAction",this.items)},chkBoxAction:function(t){var e=this.rowSelected.indexOf(t);e>-1?this.selected=!1:this.rowSelected.length==this.items.length&&(this.selected=!0)},rowClicked:function(t,e){this.isDisableTable||(-1!=this.rowSel&&(this.items[this.rowSel]["_rowVariant"]=""),this.rowSel=e,this.items[e]["_rowVariant"]="primary",this.$forceUpdate(),this.$emit("rowClicked",t,e))},unselectRowClicked:function(){this.items[this.rowSel]["_rowVariant"]="",this.$forceUpdate()},rowDblClicked:function(t,e){this.isDisableTable||this.$emit("rowDblClicked",t,e)},rowLinkClick:function(t){this.$emit("rowLinkClick",t)},resetSelected:function(){this.rowSelected=[0],this.selected=!1,this.items[0]["_rowVariant"]="primary",this.rowSel=0},doGetList:function(t,e){var i=this,s={Event:e,PageLevel:this.prop.PageLevel,TabIndex:this.dataState.TabIndex};"pageSize"!==e&&"pagination"!==e&&"headTable"!==e||("headTable"===e&&a["EventBus"].$emit("ebActiveForm",s.PageLevel),a["EventBus"].$emit(e+"_"+s.PageLevel+"_"+s.TabIndex,s));var o=""==this.tempAdvanceFilter?this.prop.initialWhere:this.prop.initialWhere+" AND "+this.tempAdvanceFilter,l={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.prop.LineNo,UserId:this.getDataUser().user_id,PortfolioCd:this.getDataUser().portfolio_cd,SubPortfolioCd:this.getDataUser().subportfolio_cd,CurrentPage:this.currentPage,PerPage:this.perPage,ParamWhere:t,InitialWhere:o,SortField:this.sort};this.postEncode(this.getUrlList(),l).then((function(t){if(null!=t){i.selected=!1,i.rowSelected=[],i.rowSel=0,i.responses=t,i.ExportToken=i.responses.ExportToken,i.responses.Data.length,i.items=[],i.fields=[],i.items=i.responses.Data;var e=i.responses.DefineColumn.split(","),s=i.responses.AllColumn.split(","),o=[],l=[],a=[];i.fields.push({value:0,key:"chkBoxAction"}),s.forEach((function(t,e){o.push({value:e+1,key:t,thClass:"ABSthClassList",tdClass:"ABStdClassList",text:t}),l.push({value:e+1,key:t,thClass:"ABSthClassList",tdClass:"ABStdClassList"})}));for(var n=0;n<e.length;n++)l=l.filter((function(t){return t.key==e[n]&&a.push({value:t.value,key:t.key,thClass:"ABSthClassList",tdClass:"ABStdClassList",text:t.key}),t.key!=e[n]})),i.fields.push({value:n+1,key:e[n],thClass:"ABSthClassList",tdClass:"ABStdClassList",text:e[n]});i.availableColumn=l,i.selectedColumn=a,i.availableColumnTemp=l,i.selectedColumnTemp=a,i.totalRows=i.responses.Total,i.lastPage=i.responses.Last_Page}}))}},beforeCreate:function(){},created:function(){var t=this;a["EventBus"].$on("eb_post"+this.prop.PageLevel,(function(e){t.doPost()})),a["EventBus"].$on("ebGetList_"+this.prop.PageLevel+"_"+this.prop.TabIndex,(function(e){return t.doGetList(e,"eb_getList")})),a["EventBus"].$on("ebDoDeleteList_"+this.prop.PageLevel+"_"+this.prop.TabIndex,(function(){t.doDelete()})),a["EventBus"].$on("ToOpen",(function(e){"new"==e.Event||"edit"==e.Event?t.isDisableTable=!0:t.isDisableTable=!1})),a["EventBus"].$on("ebActiveTab",(function(e){t.dataState.TabIndex=e.TabIndex}))},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){a["EventBus"].$off("eb_post"+this.prop.PageLevel),a["EventBus"].$off("ebGetList_"+this.prop.PageLevel+"_"+this.prop.TabIndex),a["EventBus"].$off("ebDoDeleteList_"+this.prop.PageLevel+"_"+this.prop.TabIndex)},destroyed:function(){}},c=r,d=(i("5d9c"),i("2877")),u=Object(d["a"])(c,s,o,!1,null,"5b55e3dc",null);e["default"]=u.exports},"9a41":function(t,e,i){}}]);
//# sourceMappingURL=chunk-a6c36778.de07940b.js.map