(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-214b2096"],{"14eb":function(e,t,n){"use strict";var i=n("c435"),c=n.n(i);c.a},"68e6":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},["edit"===e.type?n("el-link",{attrs:{icon:"el-icon-edit"},on:{click:e.closeThisView}},[e._v(e._s(e.$t("common.cancel_edit")))]):e._e(),e._v(" "),"edit"===e.type?n("el-link",{directives:[{name:"permission",rawName:"v-permission",value:["delete_finance_"+e.financeType,"delete_finance"],expression:"['delete_finance_'+financeType, 'delete_finance']"}],staticStyle:{"margin-left":"20px"},attrs:{icon:"el-icon-edit"},on:{click:e.onDelete}},[e._v(e._s(e.$t("common.delete")))]):e._e(),e._v(" "),"show"===e.type?n("el-link",{directives:[{name:"permission",rawName:"v-permission",value:["edit_finance_"+e.financeType,"edit_finance"],expression:"['edit_finance_'+financeType, 'edit_finance']"}],attrs:{icon:"el-icon-edit"},on:{click:e.goToEdit}},[e._v(e._s(e.$t("common.edit")))]):e._e(),e._v(" "),n("qt-form",{attrs:{type:e.type,"data-source-url":e.getFormUrls()}})],1)},c=[],a=n("d694"),s=n("e0fe"),r=n("a46e"),o=n("cd05"),u={name:"FinanceDetail",components:{QtForm:a["a"]},data:function(){return{tempRoute:{},type:"",financeType:"",financeId:-1}},created:function(){this.tempRoute=Object.assign({},this.$route);var e=this.$store.getters.language,t=this.$route.params.id,n=this.$route.params.type,i=this.$route.params.action_type||"show";console.log("action type",i,t,n,i);var c="create"===i?this.$route.params.type:t;this.type=i,this.financeId=t,this.financeType=n,this.setTagsViewTitle(e,c),this.setPageTitle(e,c)},methods:{getFormUrls:function(){var e=this.$route.params.exp_type,t=this.financeId;if("create"===this.type)switch(this.financeType){case"expenditure":return["/api/finance/exps/base/structure","/api/finance/exps/".concat(e,"/structure")];case"social_insurance":return["/api/finance/social_insurances/structure"];case"social_funds":return["/api/finance/social_funds/structure"]}else switch(this.financeType){case"expenditure":return["/api/finance/exps/".concat(t,"/base/structure"),"/api/finance/exps/".concat(t,"/extra/structure")];case"social_insurance":return["/api/finance/social_insurances/".concat(t,"/structure")];case"social_funds":return["/api/finance/social_funds/".concat(t,"/structure")]}},getTitle:function(e,t){var n;if("show"===this.type)switch(e){case"zh":n=this.$t("route."+this.financeType)+"详情";break;case"en":n=this.$t("route."+this.financeType)+" Info";break}return"edit"===this.type&&(n="zh"===e?"编辑":"Edit"),"create"===this.type&&(n="zh"===e?"创建":"Create"),"".concat(n,"-").concat(t)},setTagsViewTitle:function(e,t){var n=Object.assign({},this.tempRoute,{title:this.getTitle(e,t)});this.$store.dispatch("tagsView/updateVisitedView",n)},setPageTitle:function(e,t){document.title=this.getTitle(e,t)},goToEdit:function(){var e=this.$route.params.id,t="/finance/".concat(this.financeType,"/").concat(e,"/edit");this.$router.push(t)},onDelete:function(){var e=this;Object(s["a"])(this,(function(t){Object(o["b"])(e.financeType,e.financeId)}))},closeThisView:function(){Object(r["a"])(this.$route.path)}}},f=u,p=(n("14eb"),n("4e82")),l=Object(p["a"])(f,i,c,!1,null,"55f24db1",null);t["default"]=l.exports},c435:function(e,t,n){},cd05:function(e,t,n){"use strict";n.d(t,"f",(function(){return c})),n.d(t,"e",(function(){return a})),n.d(t,"d",(function(){return s})),n.d(t,"g",(function(){return r})),n.d(t,"h",(function(){return o})),n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return p}));var i=n("b775");function c(e){return Object(i["a"])({url:"/api/finance/social_insurances",method:"get",params:e})}function a(e){return Object(i["a"])({url:"/api/finance/social_funds",method:"get",params:e})}function s(e){return Object(i["a"])({url:"/api/finance/exps",method:"get",params:e})}function r(e){return Object(i["a"])({url:"api/finance/social_insurances/".concat(e),method:"get"})}function o(e,t){return Object(i["a"])({url:"api/finance/social_insurances/".concat(e),method:"put",data:JSON.stringify(t)})}function u(e){return Object(i["a"])({url:"api/finance/social_insurances",method:"post",data:JSON.stringify(e)})}function f(e){return Object(i["a"])({url:"api/finance/social_insurances/".concat(e),method:"delete"})}function p(e,t){return"expenditure"===e&&(e="exps"),Object(i["a"])({url:"/api/finance/".concat(e,"/").concat(t),method:"delete"})}}}]);