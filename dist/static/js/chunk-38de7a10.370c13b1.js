(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38de7a10"],{"382d":function(t,e,a){},"4d3c":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},["edit"===t.type?a("el-link",{attrs:{icon:"el-icon-edit"},on:{click:t.closeThisView}},[t._v(t._s(t.$t("common.cancel_edit")))]):t._e(),t._v(" "),"edit"===t.type?a("el-link",{directives:[{name:"permission",rawName:"v-permission",value:["delete_people"],expression:"['delete_people']"}],staticStyle:{"margin-left":"20px"},attrs:{icon:"el-icon-edit"},on:{click:t.onDelete}},[t._v(t._s(t.$t("common.delete")))]):t._e(),t._v(" "),"show"===t.type?a("el-link",{directives:[{name:"permission",rawName:"v-permission",value:["edit_people"],expression:"['edit_people']"}],attrs:{icon:"el-icon-edit"},on:{click:t.goToEdit}},[t._v(t._s(t.$t("common.edit")))]):t._e(),t._v(" "),"create"!==t.type?a("qt-form",{attrs:{type:t.type,"data-source-url":[t.requestUrl+"/"+t.peopleId+"/base/structure",t.requestUrl+"/"+t.peopleId+"/extra/structure"]}}):a("qt-form",{attrs:{type:"create","data-source-url":[t.requestUrl+"/base/structure",t.requestUrl+"/"+t.idOrType+"/structure"]}}),t._v(" "),"create"!==t.type?a("attachments",{attrs:{type:t.type,"data-source-url":"/api/attachment/people/"+t.peopleId}}):t._e()],1)},s=[],n=a("7c9d"),o=a("d694"),i=a("e0fe"),l=a("a46e"),c=a("996f"),u={name:"PeopleDetail",components:{QtForm:o["a"],Attachments:n["a"]},data:function(){return{tempRoute:{},type:"",requestUrl:"/api/people",peopleId:-1,idOrType:""}},created:function(){this.tempRoute=Object.assign({},this.$route);var t=this.$store.getters.language,e=this.$route.params.id,a=this.$route.params.action_type||"show",r="create"===a?this.$route.params.type:e;this.type=a,this.peopleId=e,this.idOrType=r,this.setTagsViewTitle(t,r),this.setPageTitle(t,r)},methods:{getTitle:function(t,e){var a;return"show"===this.type&&(a="zh"===t?"人员详情":"Personal Info"),"edit"===this.type&&(a="zh"===t?"编辑":"Edit"),"create"===this.type&&(a="zh"===t?"创建":"Create"),"".concat(a,"-").concat(e)},setTagsViewTitle:function(t,e){var a=Object.assign({},this.tempRoute,{title:this.getTitle(t,e)});this.$store.dispatch("tagsView/updateVisitedView",a)},setPageTitle:function(t,e){document.title=this.getTitle(t,e)},goToEdit:function(){var t=this.$route.params.id,e="/people/".concat(t,"/edit");this.$router.push(e)},onDelete:function(){var t=this;Object(i["a"])(this,function(e){Object(c["a"])(t.peopleId)})},closeThisView:function(){Object(l["a"])(this.$route.path)}}},p=u,d=(a("9299"),a("2877")),h=Object(d["a"])(p,r,s,!1,null,"40a73d3b",null);e["default"]=h.exports},"7c9d":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"attachments-container"},[a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:10}},[a("h3",[t._v("附件列表")])]),t._v(" "),a("el-col",{attrs:{span:14}},[a("el-row",{staticClass:"row-bg uploader",attrs:{type:"flex",justify:"end"}},[a("el-upload",{staticClass:"upload-demo",attrs:{action:t.uploadApi,multiple:!1,limit:1,"on-success":t.handleUploadSuccess,"on-error":t.handleUploadError,"file-list":t.fileList}},["show"!==t.type?a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("上传附件")]):t._e()],1)],1)],1)],1),t._v(" "),a("el-table",{attrs:{data:t.dataSource,border:""}},[a("el-table-column",{attrs:{label:t.$t("attachment.type"),width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{"text-transform":"uppercase"}},[t._v(t._s(e.row.type))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("attachment.name"),width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.name))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("attachment.url")},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.url))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("attachment.createdAt"),width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.createdAt))])]}}])}),t._v(" "),a("el-table-column",{attrs:{fixed:"right",label:t.$t("common.operation"),width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("a",{staticClass:"el-button el-button--text el-button--small",attrs:{href:e.row.url,target:"_blank"}},[t._v("下载")]),t._v(" "),"edit"===t.type?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.handleClickDelete(e.row)}}},[t._v("删除")]):t._e()]}}])})],1)],1)},s=[],n=(a("28a5"),a("b775")),o=a("e0fe"),i=a("a46e"),l={name:"Attachments",props:{dataSourceUrl:{type:String,default:""},type:{type:String,default:""}},data:function(){return{dataSource:[],fileList:[],uploadApi:"http://quantum.forktea.com/api/upload"}},created:function(){var t=this;Object(n["a"])({url:this.dataSourceUrl,method:"get"}).then(function(e){t.dataSource=Object.assign([],t.dataSource,e)})},methods:{handleAttachmentCreate:function(t,e){var a=this,r=t.split(".").reverse()[0],s="http://quantum.forktea.com"+e;Object(n["a"])({url:this.dataSourceUrl,method:"post",data:{type:r,name:t,url:s}}).then(function(t){a.$message({message:"上传成功! Uploaded Successfully!",type:"success"}),Object(i["b"])(a)}).catch(function(t){a.$message.error("拉取附件失败! Fetch Attachments Failed!"),a.loading=!1})},handleClickDelete:function(t){Object(o["a"])(this,Object(n["a"])({url:"".concat(this.dataSourceUrl,"/").concat(t.recordId),method:"delete"}))},handleUploadSuccess:function(t,e,a){var r=t.fileOriginName,s=t.fileUrl;this.handleAttachmentCreate(r,s)},handleUploadError:function(t,e,a){console.error(t),this.$message.error("上传失败! Upload Failed!")}}},c=l,u=(a("89a4"),a("2877")),p=Object(u["a"])(c,r,s,!1,null,"7863d871",null);e["a"]=p.exports},"89a4":function(t,e,a){"use strict";var r=a("382d"),s=a.n(r);s.a},"89b2":function(t,e,a){},9299:function(t,e,a){"use strict";var r=a("89b2"),s=a.n(r);s.a},"996f":function(t,e,a){"use strict";a.d(e,"b",function(){return s}),a.d(e,"a",function(){return n});var r=a("b775");function s(t){return Object(r["a"])({url:"/api/people",method:"get",params:t})}function n(t){return Object(r["a"])({url:"/api/people/".concat(t),method:"DELETE"})}}}]);