(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68c1381c"],{"2ee0":function(t,e,a){"use strict";a.d(e,"a",function(){return r}),a.d(e,"b",function(){return o});a("28a5"),a("96cf");var n=a("3b8d"),i=a("b775");function r(t){o(t)}var o=function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(e,a){var n,r,o,s,c;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["a"])({url:e,method:"get",responseType:"blob",params:a});case 2:n=t.sent,r=e.split("/").reverse()[0],o=new Blob([n]),s=window.URL.createObjectURL(o),c=document.createElement("a"),c.href=s,c.download=[r],c.click(),window.URL.revokeObjectURL(s);case 11:case"end":return t.stop()}},t)}));return function(e,a){return t.apply(this,arguments)}}()},"333d":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[a("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},i=[];a("c5f6");Math.easeInOutQuad=function(t,e,a,n){return t/=n/2,t<1?a/2*t*t+e:(t--,-a/2*(t*(t-2)-1)+e)};var r=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function o(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function s(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function c(t,e,a){var n=s(),i=t-n,c=20,l=0;e="undefined"===typeof e?500:e;var u=function t(){l+=c;var s=Math.easeInOutQuad(l,n,i,e);o(s),l<e?r(t):a&&"function"===typeof a&&a()};u()}var l={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&c(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&c(0,800)}}},u=l,d=(a("e498"),a("2877")),p=Object(d["a"])(u,n,i,!1,null,"6af373ef",null);e["a"]=p.exports},3703:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"permission",rawName:"v-permission",value:["import_excel"],expression:"['import_excel']"}],staticClass:"upload-container"},[a("el-upload",{staticStyle:{display:"inline-block"},attrs:{multiple:!1,"show-file-list":!1,"on-success":t.handleUploadSuccess,"on-error":t.handleUploadError,action:t.postApi}},[a("el-button",{attrs:{type:"primary",plain:""}},[t._v(t._s(t.$t("common.upload")))])],1),t._v(" "),a("el-switch",{attrs:{"active-text":"强制导入"},model:{value:t.force,callback:function(e){t.force=e},expression:"force"}})],1)},i=[],r=(a("28a5"),a("f559"),a("2ee0")),o={name:"UploadFile",props:{url:{type:String,default:""}},data:function(){return{force:!1}},computed:{postApi:function(){return"http://quantum.forktea.com"+this.url+"?force="+this.force}},methods:{handleUploadSuccess:function(){this.$message({type:"success",message:"上传成功! Uploaded Successfully！"})},handleUploadError:function(t){var e;try{e=JSON.parse(t.message).message}catch(a){e=t.message}this.$message({type:"error",message:"上传失败! "+e,duration:0,showClose:!0})},downloadTemplate:function(){var t=this.format(this.url);Object(r["a"])(this.url+"/".concat(t,"-template.xlsx"))},format:function(t){return t.startsWith("/api/excel/")&&(t=t.substr(11)),t.split("/").join("_")}}},s=o,c=(a("c495"),a("2877")),l=Object(c["a"])(s,n,i,!1,null,"67b3ede4",null);e["a"]=l.exports},"6ff9":function(t,e,a){"use strict";var n=a("a7a5"),i=a.n(n);i.a},7456:function(t,e,a){},"7ce8":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("upload-file",{directives:[{name:"permission",rawName:"v-permission",value:["edit_daily, edit_daily_visit"],expression:"['edit_daily, edit_daily_visit']"}],staticStyle:{float:"right"},attrs:{url:"/api/excel/daily/visit"}}),t._v(" "),a("qt-search",{attrs:{"params-source":{},"i18n-index":"daily.visit","search-url":"/daily/visit",export:""}}),t._v(" "),a("el-link",{directives:[{name:"permission",rawName:"v-permission",value:["edit_daily_visit","edit_daily"],expression:"['edit_daily_visit', 'edit_daily']"}],staticClass:"create-btn",attrs:{icon:"el-icon-edit"},on:{click:t.goToCreate}},[t._v(t._s(t.$t("common.new")))]),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""},on:{"row-click":t.goToDetail}},[a("el-table-column",{attrs:{type:"index",align:"center",width:"80",sortable:"",prop:"id"}}),t._v(" "),a("el-table-column",{attrs:{"min-width":"420",align:"center",label:t.$t("daily.visit.name"),sortable:"",prop:"name"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.name))])]}}])}),t._v(" "),a("el-table-column",{attrs:{"min-width":"180",align:"center",label:t.$t("daily.visit.receptionist")},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t.format(e.row.receptionistJson)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{"min-width":"180",align:"center",label:t.$t("daily.visit.approval_status")},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("el-tag",{attrs:{type:t._f("statusFilter")(n.approval_status)}},[t._v("\n          "+t._s(n.approval_status)+"\n        ")])]}}])})],1),t._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getList}})],1)},i=[],r=a("db72"),o=a("d63a"),s=a("333d"),c=a("3703"),l=a("d477"),u={name:"VisitList",components:{Pagination:s["a"],UploadFile:c["a"],QtSearch:l["a"]},filters:{statusFilter:function(t){var e={"已批准":"success","审批中":"info","未提交":"danger"};return e[t]}},data:function(){return{list:null,total:0,listLoading:!0,listQuery:{page:1,limit:20}}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,Object(o["h"])(Object(r["a"])({},this.listQuery,{},this.$route.query)).then(function(e){t.list=e.content,t.total=e.totalElements,t.listLoading=!1})},goToDetail:function(t,e,a){var n="/daily/visit/".concat(t.id);this.$router.push(n)},goToCreate:function(){this.$router.push("/daily/visit/create")},format:function(t){return t.join(" ")}}},d=u,p=(a("6ff9"),a("2877")),f=Object(p["a"])(d,n,i,!1,null,"e295acd4",null);e["default"]=f.exports},a46e:function(t,e,a){"use strict";a.d(e,"b",function(){return n}),a.d(e,"a",function(){return i});a("a481");function n(t){var e=t,a=t.$route;e.$store.dispatch("tagsView/delCachedView",a).then(function(){var t=a.fullPath;e.$nextTick(function(){e.$router.replace({path:"/redirect"+t})})})}function i(t){var e=document.getElementById("close-"+t);e.click()}},a7a5:function(t,e,a){},c495:function(t,e,a){"use strict";var n=a("e38d"),i=a.n(n);i.a},d477:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form",{ref:"form",staticClass:"search-container",attrs:{model:t.searchObj,"label-width":"70px",inline:""}},[a("el-form-item",{attrs:{label:t.$t("common.keyword")}},[a("el-input",{model:{value:t.searchObj.word,callback:function(e){t.$set(t.searchObj,"word",e)},expression:"searchObj.word"}})],1),t._v(" "),t._l(t.paramsSource,function(e,n){return a("el-form-item",{key:n,attrs:{label:t.$t(t.i18nIndex+"."+n)}},[a("el-select",{attrs:{placeholder:t.$t("common.pleaseChoose")},model:{value:t.searchObj[n],callback:function(e){t.$set(t.searchObj,n,e)},expression:"searchObj[label]"}},t._l(e,function(t){return a("el-option",{key:t,attrs:{label:t,value:t}})}),1)],1)}),t._v(" "),t.byDateRange?a("el-form-item",{attrs:{label:t.$t("common.from")+": "}},[a("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:t.$t("common.pleaseChoose")},model:{value:t.searchObj.start,callback:function(e){t.$set(t.searchObj,"start",e)},expression:"searchObj.start"}})],1):t._e(),t._v(" "),t.byDateRange?a("el-form-item",{attrs:{label:t.$t("common.to")+": "}},[a("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:t.$t("common.pleaseChoose")},model:{value:t.searchObj.end,callback:function(e){t.$set(t.searchObj,"end",e)},expression:"searchObj.end"}})],1):t._e(),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v(t._s(t.$t("common.search")))])],1),t._v(" "),a("el-form-item",{directives:[{name:"permission",rawName:"v-permission",value:["export_excel"],expression:"['export_excel']"}]},[t.exportExcel?a("el-button",{attrs:{type:"primary",plain:""},on:{click:t.onExport}},[t._v(t._s(t.$t("common.export")))]):t._e()],1)],2)},i=[],r=(a("28a5"),a("f559"),a("db72")),o=a("a46e"),s=a("2ee0"),c={name:"QtSearch",props:{paramsSource:{type:Object,default:function(){}},i18nIndex:{type:String,default:""},searchUrl:{type:String,default:""},exportUrl:{type:String,default:""},exportQuery:{type:Object,default:function(){}},byDateRange:{type:Boolean,default:!1},exportExcel:{type:Boolean,default:!1}},data:function(){return{searchObj:{}}},created:function(){this.searchObj=Object.assign({},this.searchObj,this.$route.query)},methods:{onSubmit:function(){this.$router.push({path:this.searchUrl,query:this.searchObj}),Object(o["b"])(this)},onExport:function(){var t=Object(r["a"])({},this.searchObj,{},this.exportQuery);console.log("in qtSearch",t);var e=this.exportUrl||"/api/excel"+this.searchUrl,a=this.format(e),n=e+"/"+a+".xlsx";Object(s["b"])(n,t)},format:function(t){return t.startsWith("/api/excel/")&&(t=t.substr(11)),t.split("/").join("_")}}},l=c,u=a("2877"),d=Object(u["a"])(l,n,i,!1,null,null,null);e["a"]=d.exports},d63a:function(t,e,a){"use strict";a.d(e,"g",function(){return i}),a.d(e,"h",function(){return r}),a.d(e,"f",function(){return o}),a.d(e,"e",function(){return s}),a.d(e,"d",function(){return c}),a.d(e,"c",function(){return l}),a.d(e,"i",function(){return u}),a.d(e,"a",function(){return d}),a.d(e,"b",function(){return p});var n=a("b775");function i(t){return Object(n["a"])({url:"/api/daily/travel",method:"get",params:t})}function r(t){return Object(n["a"])({url:"/api/daily/visit",method:"get",params:t})}function o(t){return Object(n["a"])({url:"/api/daily/report",method:"get",params:t})}function s(t){return Object(n["a"])({url:"/api/daily/hosting",method:"get",params:t})}function c(t,e){return Object(n["a"])({url:"/api/daily/".concat(t,"/").concat(e,"/flights"),method:"get"})}function l(t,e,a){return Object(n["a"])({url:"/api/daily/".concat(t,"/").concat(e,"/flights/").concat(a),method:"delete"})}function u(t,e,a,i){return Object(n["a"])({url:"/api/daily/".concat(t,"/").concat(e,"/flights/").concat(a),method:"put",data:JSON.stringify(i)})}function d(t,e,a){return Object(n["a"])({url:"/api/daily/".concat(t,"/").concat(e,"/flights"),method:"post",data:JSON.stringify(a)})}function p(t,e){return Object(n["a"])({url:"/api/daily/".concat(t,"/").concat(e),method:"delete"})}},e38d:function(t,e,a){},e498:function(t,e,a){"use strict";var n=a("7456"),i=a.n(n);i.a}}]);