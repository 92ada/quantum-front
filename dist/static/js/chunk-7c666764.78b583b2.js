(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c666764"],{"2ed7":function(e,t,i){},"4d3c":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},["edit"===e.type?i("el-link",{attrs:{icon:"el-icon-edit"},on:{click:e.closeThisView}},[e._v(e._s(e.$t("common.cancel_edit")))]):e._e(),e._v(" "),"edit"===e.type?i("el-link",{directives:[{name:"permission",rawName:"v-permission",value:["delete_people"],expression:"['delete_people']"}],staticStyle:{"margin-left":"20px"},attrs:{icon:"el-icon-edit"},on:{click:e.onDelete}},[e._v(e._s(e.$t("common.delete")))]):e._e(),e._v(" "),"show"===e.type?i("el-link",{directives:[{name:"permission",rawName:"v-permission",value:["edit_people"],expression:"['edit_people']"}],attrs:{icon:"el-icon-edit"},on:{click:e.goToEdit}},[e._v(e._s(e.$t("common.edit")))]):e._e(),e._v(" "),"create"!==e.type?i("qt-form",{attrs:{type:e.type,"data-source-url":[e.requestUrl+"/"+e.peopleId+"/base/structure",e.requestUrl+"/"+e.peopleId+"/extra/structure"]}}):i("qt-form",{attrs:{type:"create","data-source-url":[e.requestUrl+"/base/structure",e.requestUrl+"/"+e.idOrType+"/structure"]}})],1)},o=[],r=i("d694"),n=i("e0fe"),a=i("a46e"),c=i("996f"),p={name:"PeopleDetail",components:{QtForm:r["a"]},data:function(){return{tempRoute:{},type:"",requestUrl:"/api/people",peopleId:-1,idOrType:""}},created:function(){this.tempRoute=Object.assign({},this.$route);var e=this.$store.getters.language,t=this.$route.params.id,i=this.$route.params.action_type||"show",s="create"===i?this.$route.params.type:t;this.type=i,this.peopleId=t,this.idOrType=s,this.setTagsViewTitle(e,s),this.setPageTitle(e,s)},methods:{getTitle:function(e,t){var i;return"show"===this.type&&(i="zh"===e?"人员详情":"Personal Info"),"edit"===this.type&&(i="zh"===e?"编辑":"Edit"),"create"===this.type&&(i="zh"===e?"创建":"Create"),"".concat(i,"-").concat(t)},setTagsViewTitle:function(e,t){var i=Object.assign({},this.tempRoute,{title:this.getTitle(e,t)});this.$store.dispatch("tagsView/updateVisitedView",i)},setPageTitle:function(e,t){document.title=this.getTitle(e,t)},goToEdit:function(){var e=this.$route.params.id,t="/people/".concat(e,"/edit");this.$router.push(t)},onDelete:function(){var e=this;Object(n["a"])(this,function(t){Object(c["a"])(e.peopleId)})},closeThisView:function(){Object(a["a"])(this.$route.path)}}},u=p,l=(i("6d2b"),i("2877")),d=Object(l["a"])(u,s,o,!1,null,"f016c87a",null);t["default"]=d.exports},"6d2b":function(e,t,i){"use strict";var s=i("2ed7"),o=i.n(s);o.a},"996f":function(e,t,i){"use strict";i.d(t,"b",function(){return o}),i.d(t,"a",function(){return r});var s=i("b775");function o(e){return Object(s["a"])({url:"/api/people",method:"get",params:e})}function r(e){return Object(s["a"])({url:"/api/people/".concat(e),method:"DELETE"})}}}]);