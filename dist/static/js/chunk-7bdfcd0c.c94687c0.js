(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7bdfcd0c"],{"3c78":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"roleManage-container"},[t._l(t.roles,function(e,a){return n("div",{key:a},[n("h3",[t._v(t._s(e.name))]),t._v(" "),n("el-checkbox",{attrs:{indeterminate:t.isIndeterminates[a]},on:{change:function(e){return t.handleCheckAllChange(a,e)}},model:{value:t.checkAlls[a],callback:function(e){t.$set(t.checkAlls,a,e)},expression:"checkAlls[index]"}},[t._v("全选")]),t._v(" "),n("div",{staticStyle:{margin:"15px 0"}}),t._v(" "),n("el-checkbox-group",{model:{value:t.postDataSource[a],callback:function(e){t.$set(t.postDataSource,a,e)},expression:"postDataSource[index]"}},t._l(e.auths,function(e){return n("el-checkbox",{key:e.id,attrs:{label:e.key}},[t._v(t._s(e.name))])}),1)],1)}),t._v(" "),n("div",{staticStyle:{"margin-top":"40px"}},[n("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v(t._s(t.$t("common.update")))]),t._v(" "),n("el-button",{on:{click:t.onCancel}},[t._v(t._s(t.$t("common.cancel")))])],1)],2)},c=[],o=n("b775");function s(t){return Object(o["a"])({url:"/api/auths/people/".concat(t),method:"get"})}function r(t,e){return Object(o["a"])({url:"/api/auths/people/".concat(t),method:"post",data:e})}var u={data:function(){return{roles:[],postDataSource:[]}},computed:{checkAlls:function(){var t=this;return this.postDataSource.map(function(e,n){return e.length===t.roles[n].auths.length})},isIndeterminates:function(){var t=this;return this.postDataSource.map(function(e,n){return e.length<t.roles[n].auths.length&&e.length>0})}},created:function(){var t=this,e=this.$route.params.id;s(e).then(function(e){t.roles=Object.assign([],t.roles,e);for(var n=0;n<t.roles.length;n++){var a=t.roles[n].auths.filter(function(t){return t.hasAuth}).map(function(t){return t.key});t.postDataSource.push(a)}})},methods:{onSubmit:function(){var t=this,e={roles:this.postDataSource.reduce(function(t,e){return t.concat(e)},[])},n=this.$route.params.id;r(n,e).then(function(e){t.$message({message:"更新成功! Updated Successfully!",type:"success"})}).catch(function(e){t.$message.error("更新失败! Update failed!")})},onCancel:function(){var t=document.getElementById("close-"+this.$route.path);t.click()},handleCheckAllChange:function(t,e){var n=this.roles[t].auths.map(function(t){return t.key}),a=e?n:[];this.$set(this.postDataSource,t,a)}}},i=u,l=(n("90a7"),n("2877")),h=Object(l["a"])(i,a,c,!1,null,null,null);e["default"]=h.exports},"8fde":function(t,e,n){},"90a7":function(t,e,n){"use strict";var a=n("8fde"),c=n.n(a);c.a}}]);