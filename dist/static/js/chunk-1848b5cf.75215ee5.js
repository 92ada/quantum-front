(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1848b5cf"],{"2ee0":function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o});n("28a5"),n("96cf");var a=n("3b8d"),i=n("b775");function r(t){o(t)}var o=function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(e,n){var a,r,o,s,c;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["a"])({url:e,method:"get",responseType:"blob",params:n});case 2:a=t.sent,r=e.split("/").reverse()[0],o=new Blob([a]),s=window.URL.createObjectURL(o),c=document.createElement("a"),c.href=s,c.download=[r],c.click(),window.URL.revokeObjectURL(s);case 11:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()},"333d":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[n("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},i=[];n("c5f6");Math.easeInOutQuad=function(t,e,n,a){return t/=a/2,t<1?n/2*t*t+e:(t--,-n/2*(t*(t-2)-1)+e)};var r=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function o(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function s(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function c(t,e,n){var a=s(),i=t-a,c=20,l=0;e="undefined"===typeof e?500:e;var u=function t(){l+=c;var s=Math.easeInOutQuad(l,a,i,e);o(s),l<e?r(t):n&&"function"===typeof n&&n()};u()}var l={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&c(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&c(0,800)}}},u=l,d=(n("e498"),n("2877")),p=Object(d["a"])(u,a,i,!1,null,"6af373ef",null);e["a"]=p.exports},3703:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"permission",rawName:"v-permission",value:["import_excel"],expression:"['import_excel']"}],staticClass:"upload-container"},[n("el-upload",{staticStyle:{display:"inline-block"},attrs:{multiple:!1,"show-file-list":!1,"on-success":t.handleUploadSuccess,"on-error":t.handleUploadError,action:t.postApi}},[n("el-button",{attrs:{type:"primary",plain:""}},[t._v(t._s(t.$t("common.upload")))])],1),t._v(" "),n("el-switch",{attrs:{"active-text":"覆盖模式"},model:{value:t.force,callback:function(e){t.force=e},expression:"force"}})],1)},i=[],r=(n("28a5"),n("f559"),n("2ee0")),o={name:"UploadFile",props:{url:{type:String,default:""}},data:function(){return{force:!1}},computed:{postApi:function(){return"http://172.18.14.192:8080"+this.url+"?force="+this.force}},methods:{handleUploadSuccess:function(){this.$message({type:"success",message:"上传成功! Uploaded Successfully！"})},handleUploadError:function(t){var e;try{e=JSON.parse(t.message).message}catch(n){e=t.message}this.$message({type:"error",message:"上传失败! "+e,duration:0,showClose:!0})},downloadTemplate:function(){var t=this.format(this.url);Object(r["a"])(this.url+"/".concat(t,"-template.xlsx"))},format:function(t){return t.startsWith("/api/excel/")&&(t=t.substr(11)),t.split("/").join("_")}}},s=o,c=(n("75ac"),n("2877")),l=Object(c["a"])(s,a,i,!1,null,"cb0a2772",null);e["a"]=l.exports},"584f":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("upload-file",{directives:[{name:"permission",rawName:"v-permission",value:["edit_daily, edit_daily_hosting"],expression:"['edit_daily, edit_daily_hosting']"}],staticStyle:{float:"right"},attrs:{url:"/api/excel/daily/hosting"}}),t._v(" "),n("qt-search",{attrs:{"params-source":{},"i18n-index":"daily.hosting","search-url":"/daily/hosting","export-excel":""}}),t._v(" "),n("el-link",{directives:[{name:"permission",rawName:"v-permission",value:["edit_daily_hosting","edit_daily"],expression:"['edit_daily_hosting', 'edit_daily']"}],staticClass:"create-btn",attrs:{icon:"el-icon-edit"},on:{click:t.goToCreate}},[t._v(t._s(t.$t("common.new")))]),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""},on:{"row-click":t.goToDetail}},[n("el-table-column",{attrs:{type:"index",align:"center",width:"80",sortable:"",prop:"id"}}),t._v(" "),n("el-table-column",{attrs:{"min-width":"420",align:"center",label:t.$t("daily.hosting.title")},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.title))])]}}])}),t._v(" "),n("el-table-column",{attrs:{"min-width":"180",align:"center",label:t.$t("daily.hosting.time"),sortable:"",prop:"name"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.time))])]}}])}),t._v(" "),n("el-table-column",{attrs:{"min-width":"180",align:"center",label:t.$t("daily.hosting.site")},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.site))])]}}])}),t._v(" "),n("el-table-column",{attrs:{"min-width":"180",align:"center",label:t.$t("daily.hosting.is_reimbursement")},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[a.is_reimbursement?n("el-tag",{attrs:{type:t._f("statusFilter")(a.is_reimbursement)}},[t._v("\n          "+t._s(a.is_reimbursement.toString().toUpperCase())+"\n        ")]):t._e()]}}])})],1),t._v(" "),n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getList}})],1)},i=[],r=n("db72"),o=n("d63a"),s=n("333d"),c=n("d477"),l=n("3703"),u={name:"HostingList",components:{QtSearch:c["a"],Pagination:s["a"],UploadFile:l["a"]},filters:{statusFilter:function(t){var e={true:"success",false:"info"};return e[t]}},data:function(){return{list:null,total:0,listLoading:!0,listQuery:{page:1,limit:20}}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,Object(o["e"])(Object(r["a"])({},this.listQuery,{},this.$route.query)).then(function(e){t.list=e.content,t.total=e.totalElements,t.listLoading=!1})},goToDetail:function(t,e,n){var a="/daily/hosting/".concat(t.id);this.$router.push(a)},goToCreate:function(){this.$router.push("/daily/hosting/create")}}},d=u,p=(n("b8c8"),n("2877")),f=Object(p["a"])(d,a,i,!1,null,"4e1157d6",null);e["default"]=f.exports},7456:function(t,e,n){},"75ac":function(t,e,n){"use strict";var a=n("cf41"),i=n.n(a);i.a},"7bd7":function(t,e,n){},a46e:function(t,e,n){"use strict";n.d(e,"b",function(){return a}),n.d(e,"a",function(){return i});n("a481");function a(t){var e=t,n=t.$route;e.$store.dispatch("tagsView/delCachedView",n).then(function(){var t=n.fullPath;e.$nextTick(function(){e.$router.replace({path:"/redirect"+t})})})}function i(t){var e=document.getElementById("close-"+t);e.click()}},b8c8:function(t,e,n){"use strict";var a=n("7bd7"),i=n.n(a);i.a},cf41:function(t,e,n){},d477:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-form",{ref:"form",staticClass:"search-container",attrs:{model:t.searchObj,"label-width":"70px",inline:""}},[n("el-form-item",{attrs:{label:t.$t("common.keyword")}},[n("el-input",{model:{value:t.searchObj.word,callback:function(e){t.$set(t.searchObj,"word",e)},expression:"searchObj.word"}})],1),t._v(" "),t._l(t.paramsSource,function(e,a){return n("el-form-item",{key:a,attrs:{label:t.$t(t.i18nIndex+"."+a)}},[n("el-select",{attrs:{placeholder:t.$t("common.pleaseChoose")},model:{value:t.searchObj[a],callback:function(e){t.$set(t.searchObj,a,e)},expression:"searchObj[label]"}},t._l(e,function(t){return n("el-option",{key:t,attrs:{label:t,value:t}})}),1)],1)}),t._v(" "),t.byDateRange?n("el-form-item",{attrs:{label:t.$t("common.from")+": "}},[n("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:t.$t("common.pleaseChoose")},model:{value:t.searchObj.start,callback:function(e){t.$set(t.searchObj,"start",e)},expression:"searchObj.start"}})],1):t._e(),t._v(" "),t.byDateRange?n("el-form-item",{attrs:{label:t.$t("common.to")+": "}},[n("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:t.$t("common.pleaseChoose")},model:{value:t.searchObj.end,callback:function(e){t.$set(t.searchObj,"end",e)},expression:"searchObj.end"}})],1):t._e(),t._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v(t._s(t.$t("common.search")))])],1),t._v(" "),n("el-form-item",{directives:[{name:"permission",rawName:"v-permission",value:["export_excel"],expression:"['export_excel']"}]},[t.exportExcel?n("el-button",{attrs:{type:"primary",plain:""},on:{click:t.onExport}},[t._v(t._s(t.$t("common.export")))]):t._e()],1)],2)},i=[],r=(n("28a5"),n("f559"),n("db72")),o=n("a46e"),s=n("2ee0"),c={name:"QtSearch",props:{paramsSource:{type:Object,default:function(){}},i18nIndex:{type:String,default:""},searchUrl:{type:String,default:""},exportUrl:{type:String,default:""},exportQuery:{type:Object,default:function(){}},byDateRange:{type:Boolean,default:!1},exportExcel:{type:Boolean,default:!1}},data:function(){return{searchObj:{}}},created:function(){this.searchObj=Object.assign({},this.searchObj,this.$route.query)},methods:{onSubmit:function(){this.$router.push({path:this.searchUrl,query:this.searchObj}),Object(o["b"])(this)},onExport:function(){var t=Object(r["a"])({},this.searchObj,{},this.exportQuery);console.log("in qtSearch",t);var e=this.exportUrl||"/api/excel"+this.searchUrl,n=this.format(e),a=e+"/"+n+".xlsx";Object(s["b"])(a,t)},format:function(t){return t.startsWith("/api/excel/")&&(t=t.substr(11)),t.split("/").join("_")}}},l=c,u=n("2877"),d=Object(u["a"])(l,a,i,!1,null,null,null);e["a"]=d.exports},d63a:function(t,e,n){"use strict";n.d(e,"g",function(){return i}),n.d(e,"h",function(){return r}),n.d(e,"f",function(){return o}),n.d(e,"e",function(){return s}),n.d(e,"d",function(){return c}),n.d(e,"c",function(){return l}),n.d(e,"i",function(){return u}),n.d(e,"a",function(){return d}),n.d(e,"b",function(){return p});var a=n("b775");function i(t){return Object(a["a"])({url:"/api/daily/travel",method:"get",params:t})}function r(t){return Object(a["a"])({url:"/api/daily/visit",method:"get",params:t})}function o(t){return Object(a["a"])({url:"/api/daily/report",method:"get",params:t})}function s(t){return Object(a["a"])({url:"/api/daily/hosting",method:"get",params:t})}function c(t,e){return Object(a["a"])({url:"/api/daily/".concat(t,"/").concat(e,"/flights"),method:"get"})}function l(t,e,n){return Object(a["a"])({url:"/api/daily/".concat(t,"/").concat(e,"/flights/").concat(n),method:"delete"})}function u(t,e,n,i){return Object(a["a"])({url:"/api/daily/".concat(t,"/").concat(e,"/flights/").concat(n),method:"put",data:JSON.stringify(i)})}function d(t,e,n){return Object(a["a"])({url:"/api/daily/".concat(t,"/").concat(e,"/flights"),method:"post",data:JSON.stringify(n)})}function p(t,e){return Object(a["a"])({url:"/api/daily/".concat(t,"/").concat(e),method:"delete"})}},e498:function(t,e,n){"use strict";var a=n("7456"),i=n.n(a);i.a}}]);