(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40146a6c"],{"5d68":function(t,e,a){"use strict";var i=a("8aa2"),l=a.n(i);l.a},"69a1":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},["edit"===t.type?a("el-link",{attrs:{icon:"el-icon-edit"},on:{click:t.closeThisView}},[t._v(t._s(t.$t("common.cancel_edit")))]):t._e(),t._v(" "),"edit"===t.type?a("el-link",{directives:[{name:"permission",rawName:"v-permission",value:["delete_daily_"+t.dailyType,"delete_daily"],expression:"['delete_daily_'+dailyType, 'delete_daily']"}],staticStyle:{"margin-left":"20px"},attrs:{icon:"el-icon-edit"},on:{click:t.onDelete}},[t._v(t._s(t.$t("common.delete")))]):t._e(),t._v(" "),"show"===t.type?a("el-link",{directives:[{name:"permission",rawName:"v-permission",value:["edit_daily_"+t.dailyType,"edit_daily"],expression:"['edit_daily_'+dailyType, 'edit_daily']"}],attrs:{icon:"el-icon-edit"},on:{click:t.goToEdit}},[t._v(t._s(t.$t("common.edit")))]):t._e(),t._v(" "),"create"!==t.type?a("qt-form",{attrs:{type:t.type,"data-source-url":[t.requestUrl+"/"+t.dailyType+"/"+t.dailyId+"/structure"]}}):a("qt-form",{attrs:{type:"create","data-source-url":[t.requestUrl+"/"+t.dailyType+"/structure"]}}),t._v(" "),"visit"!==t.dailyType&&"travel"!==t.dailyType||"create"===t.type?t._e():a("flight-info-table",{attrs:{type:t.type,"daily-type":t.dailyType,"daily-id":t.dailyId}}),t._v(" "),"travel"!==t.dailyType&&"create"!==t.type?a("attachments",{attrs:{type:t.type,"data-source-url":"/api/attachment/"+t.dailyType+"/"+t.dailyId}}):t._e()],1)},l=[],o=a("d694"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"padding-top":"20px"}},[a("h3",{staticClass:"daily-funds-title"},[t._v("航班信息")]),t._v(" "),"show"!==t.type?a("flight-info-dialog",{attrs:{type:"create","data-source":{dailyType:t.dailyType,dailyId:t.dailyId,data:{}}}}):t._e(),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:t.$t("daily.flight_info.id"),width:"80",sortable:"",prop:"id"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.id))])]}}])}),t._v(" "),a("el-table-column",{attrs:{"min-width":"100",align:"center",label:t.$t("daily.flight_info.departure_site"),sortable:"",prop:"name"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.departure_site))])]}}])}),t._v(" "),a("el-table-column",{attrs:{"min-width":"100",align:"center",label:t.$t("daily.flight_info.arrival_site"),sortable:"",prop:"name"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.arrival_site))])]}}])}),t._v(" "),a("el-table-column",{attrs:{"min-width":"100",align:"center",label:t.$t("daily.flight_info.flight_no")},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.flight_no))])]}}])}),t._v(" "),a("el-table-column",{attrs:{"min-width":"180",align:"center",label:t.$t("daily.flight_info.departure_time")},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.departure_time))])]}}])}),t._v(" "),a("el-table-column",{attrs:{"min-width":"180",align:"center",label:t.$t("daily.flight_info.arrival_time")},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.arrival_time))])]}}])}),t._v(" "),a("el-table-column",{attrs:{type:"expand",width:"80",label:t.$t("daily.flight_info.more")},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-form",{attrs:{"label-position":"left"}},[a("el-form-item",{attrs:{label:t.$t("daily.flight_info.price")}},[a("span",[t._v(t._s(e.row.price))])]),t._v(" "),a("el-form-item",{attrs:{label:t.$t("daily.flight_info.remark")}},[a("span",[t._v(t._s(e.row.remark))])])],1)]}}])}),t._v(" "),"show"!==t.type?a("el-table-column",{attrs:{"min-width":"180",align:"center",label:t.$t("daily.flight_info.operation")},scopedSlots:t._u([{key:"default",fn:function(e){return[a("flight-info-dialog",{attrs:{"data-source":{dailyType:t.dailyType,dailyId:t.dailyId,data:e.row},type:"edit"}}),t._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.onDelete(e.row.id)}}},[t._v(t._s(t.$t("common.delete")))])]}}],null,!1,2514636251)}):t._e()],1)],1)},r=[],s=a("d63a"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{display:"inline"}},["create"===t.type?a("el-link",{staticClass:"create-btn",attrs:{icon:"el-icon-edit"},on:{click:function(e){t.dialogFormVisible=!0}}},[t._v("新增航班记录")]):t._e(),t._v(" "),"edit"===t.type?a("el-button",{attrs:{type:"text"},on:{click:function(e){t.dialogFormVisible=!0}}},[t._v(t._s(t.$t("common.edit")))]):t._e(),t._v(" "),a("el-dialog",{staticClass:"dialog",attrs:{title:t.$t("daily.flight_info.TITLE"),visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{attrs:{model:t.postForm,"label-width":"80px","label-position":"right"}},[a("el-form-item",{staticClass:"flight-form-item",attrs:{label:t.$t("daily.flight_info.departure_site")}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.postForm.departure_site,callback:function(e){t.$set(t.postForm,"departure_site",e)},expression:"postForm.departure_site"}})],1),t._v(" "),a("el-form-item",{staticClass:"flight-form-item",attrs:{label:t.$t("daily.flight_info.arrival_site")}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.postForm.arrival_site,callback:function(e){t.$set(t.postForm,"arrival_site",e)},expression:"postForm.arrival_site"}})],1),t._v(" "),a("el-form-item",{staticClass:"flight-form-item",attrs:{label:t.$t("daily.flight_info.flight_no")}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.postForm.flight_no,callback:function(e){t.$set(t.postForm,"flight_no",e)},expression:"postForm.flight_no"}})],1),t._v(" "),a("el-form-item",{staticClass:"flight-form-item",attrs:{label:t.$t("daily.flight_info.price")}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.postForm.price,callback:function(e){t.$set(t.postForm,"price",e)},expression:"postForm.price"}})],1),t._v(" "),a("el-form-item",{staticClass:"flight-form-item",attrs:{label:t.$t("daily.flight_info.departure_time")}},[a("el-date-picker",{staticClass:"form-date",attrs:{type:"datetime",placeholder:t.$t("common.pleaseChoose")},model:{value:t.postForm.departure_time,callback:function(e){t.$set(t.postForm,"departure_time",e)},expression:"postForm.departure_time"}})],1),t._v(" "),a("el-form-item",{staticClass:"flight-form-item",attrs:{label:t.$t("daily.flight_info.arrival_time")}},[a("el-date-picker",{staticClass:"form-date",attrs:{type:"datetime",placeholder:t.$t("common.pleaseChoose")},model:{value:t.postForm.arrival_time,callback:function(e){t.$set(t.postForm,"arrival_time",e)},expression:"postForm.arrival_time"}})],1),t._v(" "),a("el-form-item",{staticClass:"flight-form-item",attrs:{label:t.$t("daily.flight_info.remark")}},[a("el-input",{attrs:{type:"textarea",rows:5,autocomplete:"off"},model:{value:t.postForm.remark,callback:function(e){t.$set(t.postForm,"remark",e)},expression:"postForm.remark"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("确 定")])],1)],1)],1)},d=[],u=a("a46e"),p={name:"FlightInfoDialog",props:["dataSource","type"],data:function(){return{postForm:{},dialogFormVisible:!1,loading:!1}},created:function(){this.postForm=Object.assign({},this.dataSource.data,this.postForm)},methods:{handleSubmit:function(){var t=this.postForm;switch(this.type){case"edit":return void this.updateData(t);case"create":return void this.postData(t)}},postData:function(t){var e=this,a=this.dataSource.dailyType,i=this.dataSource.dailyId;this.loading||(this.loading=!0,Object(s["a"])(a,i,t).then((function(t){e.$message({message:"创建成功! Created Successfully!",type:"success"}),e.dialogFormVisible=!1,Object(u["b"])(e)})).catch((function(t){e.$message.error("创建失败! Creation Failed!"),e.loading=!1})))},updateData:function(t){var e=this,a=this.dataSource.dailyType,i=this.dataSource.dailyId,l=this.dataSource.data.id;this.loading||Object(s["i"])(a,i,l,t).then((function(t){e.$message({message:"更新成功! Updated Successfully!",type:"success"}),e.dialogFormVisible=!1,Object(u["b"])(e)})).catch((function(t){e.$message.error("更新失败! Update Failed!"),e.loading=!1}))}}},f=p,m=(a("816a"),a("4e82")),h=Object(m["a"])(f,c,d,!1,null,"793583c0",null),y=h.exports,_={name:"FlightInfoTable",components:{FlightInfoDialog:y},props:["type","dailyType","dailyId"],data:function(){return{list:null,listLoading:!1}},created:function(){this.getList()},methods:{handleDialogOpen:function(t){this.dialogOpen=t},getList:function(){var t=this;this.listLoading=!0,Object(s["d"])(this.dailyType,this.dailyId).then((function(e){t.list=e,t.listLoading=!1}))},onDelete:function(t){var e=this;this.$confirm("此操作将永久删除该记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(a){var i=e.dailyType,l=e.dailyId,o=t;Object(s["c"])(i,l,o),Object(u["b"])(e)})).then((function(t){e.$message({type:"success",message:"删除成功!"})})).catch((function(t){e.$message({type:"info",message:"已取消删除"})}))}}},g=_,v=(a("cd78"),Object(m["a"])(g,n,r,!1,null,"7c9b7c7f",null)),b=v.exports,$=a("7c9d"),w=a("e0fe"),k={name:"DailyDetail",components:{FlightInfoTable:b,QtForm:o["a"],Attachments:$["a"]},data:function(){return{tempRoute:{},type:"",requestUrl:"/api/daily",dailyType:"",dailyId:-1}},created:function(){this.tempRoute=Object.assign({},this.$route);var t=this.$store.getters.language,e=this.$route.params.id,a=this.$route.params.type,i=this.$route.params.action_type||"show",l="create"===i?this.$route.params.type:e;this.type=i,this.dailyId=e,this.dailyType=a,this.setTagsViewTitle(t,l),this.setPageTitle(t,l)},methods:{getTitle:function(t,e){var a;if("show"===this.type)switch(t){case"zh":a=this.$t("route."+this.dailyType)+"详情";break;case"en":a=this.$t("route."+this.dailyType)+" Info";break}return"edit"===this.type&&(a="zh"===t?"编辑":"Edit"),"create"===this.type&&(a="zh"===t?"创建":"Create"),"".concat(a,"-").concat(e)},setTagsViewTitle:function(t,e){var a=Object.assign({},this.tempRoute,{title:this.getTitle(t,e)});this.$store.dispatch("tagsView/updateVisitedView",a)},setPageTitle:function(t,e){document.title=this.getTitle(t,e)},goToEdit:function(){var t=this.$route.params.id,e="/daily/".concat(this.dailyType,"/").concat(t,"/edit");this.$router.push(e)},onDelete:function(){var t=this;Object(w["a"])(this,(function(e){Object(s["b"])(t.dailyType,t.dailyId)}))},closeThisView:function(){Object(u["a"])(this.$route.path)}}},T=k,F=(a("5d68"),Object(m["a"])(T,i,l,!1,null,"d3c514e6",null));e["default"]=F.exports},"7c9d":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"attachments-container"},[a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:10}},[a("h3",[t._v("附件列表")])]),t._v(" "),a("el-col",{attrs:{span:14}},[a("el-row",{staticClass:"row-bg uploader",attrs:{type:"flex",justify:"end"}},[a("el-upload",{staticClass:"upload-demo",attrs:{action:t.uploadApi,multiple:!1,limit:1,"on-success":t.handleUploadSuccess,"on-error":t.handleUploadError,"file-list":t.fileList}},["show"!==t.type?a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("上传附件")]):t._e()],1)],1)],1)],1),t._v(" "),a("el-table",{attrs:{data:t.dataSource,border:""}},[a("el-table-column",{attrs:{label:t.$t("attachment.type"),width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{"text-transform":"uppercase"}},[t._v(t._s(e.row.type))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("attachment.name"),width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.name))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("attachment.url")},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.url))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("attachment.createdAt"),width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.createdAt))])]}}])}),t._v(" "),a("el-table-column",{attrs:{fixed:"right",label:t.$t("common.operation"),width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("a",{staticClass:"el-button el-button--text el-button--small",attrs:{href:e.row.url,target:"_blank"}},[t._v("下载")]),t._v(" "),"edit"===t.type?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.handleClickDelete(e.row)}}},[t._v("删除")]):t._e()]}}])})],1)],1)},l=[],o=(a("e6d1"),a("b775")),n=a("e0fe"),r=a("a46e"),s={name:"Attachments",props:{dataSourceUrl:{type:String,default:""},type:{type:String,default:""}},data:function(){return{dataSource:[],fileList:[],uploadApi:"http://quantum.forktea.com/api/upload"}},created:function(){var t=this;Object(o["a"])({url:this.dataSourceUrl,method:"get"}).then((function(e){t.dataSource=Object.assign([],t.dataSource,e)}))},methods:{handleAttachmentCreate:function(t,e){var a=this,i=t.split(".").reverse()[0],l="http://quantum.forktea.com"+e;Object(o["a"])({url:this.dataSourceUrl,method:"post",data:{type:i,name:t,url:l}}).then((function(t){a.$message({message:"上传成功! Uploaded Successfully!",type:"success"}),Object(r["b"])(a)})).catch((function(t){a.$message.error("拉取附件失败! Fetch Attachments Failed!"),a.loading=!1}))},handleClickDelete:function(t){Object(n["a"])(this,Object(o["a"])({url:"".concat(this.dataSourceUrl,"/").concat(t.recordId),method:"delete"}))},handleUploadSuccess:function(t,e,a){var i=t.fileOriginName,l=t.fileUrl;this.handleAttachmentCreate(i,l)},handleUploadError:function(t,e,a){console.error(t),this.$message.error("上传失败! Upload Failed!")}}},c=s,d=(a("89a4"),a("4e82")),u=Object(d["a"])(c,i,l,!1,null,"7863d871",null);e["a"]=u.exports},"816a":function(t,e,a){"use strict";var i=a("fa3d"),l=a.n(i);l.a},"89a4":function(t,e,a){"use strict";var i=a("8e97"),l=a.n(i);l.a},"8aa2":function(t,e,a){},"8e97":function(t,e,a){},cd78:function(t,e,a){"use strict";var i=a("fed1"),l=a.n(i);l.a},d63a:function(t,e,a){"use strict";a.d(e,"g",(function(){return l})),a.d(e,"h",(function(){return o})),a.d(e,"f",(function(){return n})),a.d(e,"e",(function(){return r})),a.d(e,"d",(function(){return s})),a.d(e,"c",(function(){return c})),a.d(e,"i",(function(){return d})),a.d(e,"a",(function(){return u})),a.d(e,"b",(function(){return p}));var i=a("b775");function l(t){return Object(i["a"])({url:"/api/daily/travel",method:"get",params:t})}function o(t){return Object(i["a"])({url:"/api/daily/visit",method:"get",params:t})}function n(t){return Object(i["a"])({url:"/api/daily/report",method:"get",params:t})}function r(t){return Object(i["a"])({url:"/api/daily/hosting",method:"get",params:t})}function s(t,e){return Object(i["a"])({url:"/api/daily/".concat(t,"/").concat(e,"/flights"),method:"get"})}function c(t,e,a){return Object(i["a"])({url:"/api/daily/".concat(t,"/").concat(e,"/flights/").concat(a),method:"delete"})}function d(t,e,a,l){return Object(i["a"])({url:"/api/daily/".concat(t,"/").concat(e,"/flights/").concat(a),method:"put",data:JSON.stringify(l)})}function u(t,e,a){return Object(i["a"])({url:"/api/daily/".concat(t,"/").concat(e,"/flights"),method:"post",data:JSON.stringify(a)})}function p(t,e){return Object(i["a"])({url:"/api/daily/".concat(t,"/").concat(e),method:"delete"})}},fa3d:function(t,e,a){},fed1:function(t,e,a){}}]);