(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e450de4"],{"2ee0":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o}));n("e6d1"),n("63ff");var r=n("953a"),a=n("b775");function i(e){o(e)}var o=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){var r,i,o,s,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])({url:t,method:"get",responseType:"blob",params:n});case 2:r=e.sent,i=t.split("/").reverse()[0],o=new Blob([r]),s=window.URL.createObjectURL(o),c=document.createElement("a"),c.href=s,c.download=[i],c.click(),window.URL.revokeObjectURL(s);case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},"333d":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[n("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},a=[];n("8f42");Math.easeInOutQuad=function(e,t,n,r){return e/=r/2,e<1?n/2*e*e+t:(e--,-n/2*(e*(e-2)-1)+t)};var i=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function o(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function s(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function c(e,t,n){var r=s(),a=e-r,c=20,l=0;t="undefined"===typeof t?500:t;var u=function e(){l+=c;var s=Math.easeInOutQuad(l,r,a,t);o(s),l<t?i(e):n&&"function"===typeof n&&n()};u()}var l={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&c(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&c(0,800)}}},u=l,p=(n("e498"),n("4e82")),d=Object(p["a"])(u,r,a,!1,null,"6af373ef",null);t["a"]=d.exports},3703:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"permission",rawName:"v-permission",value:["import_excel"],expression:"['import_excel']"}],staticClass:"upload-container"},[n("el-button",{attrs:{type:"primary",plain:""},on:{click:e.downloadTemplate}},[e._v(e._s(e.$t("common.download_template")))]),e._v(" "),n("el-upload",{staticStyle:{display:"inline-block"},attrs:{multiple:!1,"show-file-list":!1,"on-success":e.handleUploadSuccess,"on-error":e.handleUploadError,action:e.postApi}},[n("el-button",{attrs:{type:"primary",plain:""}},[e._v(e._s(e.$t("common.upload")))])],1)],1)},a=[],i=(n("e6d1"),n("02b0"),n("2ee0")),o={name:"UploadFile",props:{url:{type:String,default:""}},computed:{postApi:function(){return"http://quantum.forktea.com"+this.url}},methods:{handleUploadSuccess:function(){this.$message({type:"success",message:"上传成功! Uploaded Successfully！"})},handleUploadError:function(e){var t=JSON.parse(e.message);this.$message({type:"error",message:"上传失败!"+t.message,duration:0,showClose:!0})},downloadTemplate:function(){var e=this.format(this.url);Object(i["a"])(this.url+"/".concat(e,"-template.xlsx"))},format:function(e){return e.startsWith("/api/excel/")&&(e=e.substr(11)),e.split("/").join("_")}}},s=o,c=(n("8a99"),n("4e82")),l=Object(c["a"])(s,r,a,!1,null,"0356ba64",null);t["a"]=l.exports},"584f":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("upload-file",{directives:[{name:"permission",rawName:"v-permission",value:["edit_daily, edit_daily_hosting"],expression:"['edit_daily, edit_daily_hosting']"}],staticStyle:{float:"right"},attrs:{url:"/api/excel/daily/hosting"}}),e._v(" "),n("qt-search",{attrs:{"params-source":{},"i18n-index":"daily.hosting","search-url":"/daily/hosting","export-excel":""}}),e._v(" "),n("el-link",{directives:[{name:"permission",rawName:"v-permission",value:["edit_daily_hosting","edit_daily"],expression:"['edit_daily_hosting', 'edit_daily']"}],staticClass:"create-btn",attrs:{icon:"el-icon-edit"},on:{click:e.goToCreate}},[e._v(e._s(e.$t("common.new")))]),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":""},on:{"row-click":e.goToDetail}},[n("el-table-column",{attrs:{type:"index",align:"center",width:"80",sortable:"",prop:"id"}}),e._v(" "),n("el-table-column",{attrs:{"min-width":"420",align:"center",label:e.$t("daily.hosting.title")},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.title))])]}}])}),e._v(" "),n("el-table-column",{attrs:{"min-width":"180",align:"center",label:e.$t("daily.hosting.time"),sortable:"",prop:"name"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.time))])]}}])}),e._v(" "),n("el-table-column",{attrs:{"min-width":"180",align:"center",label:e.$t("daily.hosting.site")},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.site))])]}}])}),e._v(" "),n("el-table-column",{attrs:{"min-width":"180",align:"center",label:e.$t("daily.hosting.is_reimbursement")},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[r.is_reimbursement?n("el-tag",{attrs:{type:e._f("statusFilter")(r.is_reimbursement)}},[e._v("\n          "+e._s(r.is_reimbursement.toString().toUpperCase())+"\n        ")]):e._e()]}}])})],1),e._v(" "),n("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.page,limit:e.listQuery.limit},on:{"update:page":function(t){return e.$set(e.listQuery,"page",t)},"update:limit":function(t){return e.$set(e.listQuery,"limit",t)},pagination:e.getList}})],1)},a=[],i=(n("efce"),n("4634"),n("ed8b"),n("e4e2")),o=n("d63a"),s=n("333d"),c=n("d477"),l=n("3703");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(n,!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d={name:"HostingList",components:{QtSearch:c["a"],Pagination:s["a"],UploadFile:l["a"]},filters:{statusFilter:function(e){var t={true:"success",false:"info"};return t[e]}},data:function(){return{list:null,total:0,listLoading:!0,listQuery:{page:1,limit:20}}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.listLoading=!0,Object(o["e"])(p({},this.listQuery,{},this.$route.query)).then((function(t){e.list=t.content,e.total=t.totalPages,e.listLoading=!1}))},goToDetail:function(e,t,n){var r="/daily/hosting/".concat(e.id);this.$router.push(r)},goToCreate:function(){this.$router.push("/daily/hosting/create")}}},f=d,m=(n("ab72"),n("4e82")),h=Object(m["a"])(f,r,a,!1,null,"5975ca2c",null);t["default"]=h.exports},"8a99":function(e,t,n){"use strict";var r=n("ed80"),a=n.n(r);a.a},a46e:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));n("c041");function r(e){var t=e,n=e.$route;t.$store.dispatch("tagsView/delCachedView",n).then((function(){var e=n.fullPath;t.$nextTick((function(){t.$router.replace({path:"/redirect"+e})}))}))}function a(e){var t=document.getElementById("close-"+e);t.click()}},ab72:function(e,t,n){"use strict";var r=n("c4f7"),a=n.n(r);a.a},c4f7:function(e,t,n){},d477:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{ref:"form",staticClass:"search-container",attrs:{model:e.searchObj,"label-width":"70px",inline:""}},[n("el-form-item",{attrs:{label:e.$t("common.keyword")}},[n("el-input",{model:{value:e.searchObj.word,callback:function(t){e.$set(e.searchObj,"word",t)},expression:"searchObj.word"}})],1),e._v(" "),e._l(e.paramsSource,(function(t,r){return n("el-form-item",{key:r,attrs:{label:e.$t(e.i18nIndex+"."+r)}},[n("el-select",{attrs:{placeholder:e.$t("common.pleaseChoose")},model:{value:e.searchObj[r],callback:function(t){e.$set(e.searchObj,r,t)},expression:"searchObj[label]"}},e._l(t,(function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1)})),e._v(" "),e.byDateRange?n("el-form-item",{attrs:{label:e.$t("common.from")+": "}},[n("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:e.$t("common.pleaseChoose")},model:{value:e.searchObj.start,callback:function(t){e.$set(e.searchObj,"start",t)},expression:"searchObj.start"}})],1):e._e(),e._v(" "),e.byDateRange?n("el-form-item",{attrs:{label:e.$t("common.to")+": "}},[n("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:e.$t("common.pleaseChoose")},model:{value:e.searchObj.end,callback:function(t){e.$set(e.searchObj,"end",t)},expression:"searchObj.end"}})],1):e._e(),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v(e._s(e.$t("common.search")))])],1),e._v(" "),n("el-form-item",{directives:[{name:"permission",rawName:"v-permission",value:["export_excel"],expression:"['export_excel']"}]},[e.exportExcel?n("el-button",{attrs:{type:"primary",plain:""},on:{click:e.onExport}},[e._v(e._s(e.$t("common.export")))]):e._e()],1)],2)},a=[],i=(n("efce"),n("4634"),n("ed8b"),n("e6d1"),n("02b0"),n("e4e2")),o=n("a46e"),s=n("2ee0");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u={name:"QtSearch",props:{paramsSource:{type:Object,default:function(){}},i18nIndex:{type:String,default:""},searchUrl:{type:String,default:""},exportUrl:{type:String,default:""},exportQuery:{type:Object,default:function(){}},byDateRange:{type:Boolean,default:!1},exportExcel:{type:Boolean,default:!1}},data:function(){return{searchObj:{}}},created:function(){this.searchObj=Object.assign({},this.searchObj,this.$route.query)},methods:{onSubmit:function(){this.$router.push({path:this.searchUrl,query:this.searchObj}),Object(o["b"])(this)},onExport:function(){var e=l({},this.searchObj,{},this.exportQuery);console.log("in qtSearch",e);var t=this.exportUrl||"/api/excel"+this.searchUrl,n=this.format(t),r=t+"/"+n+".xlsx";Object(s["b"])(r,e)},format:function(e){return e.startsWith("/api/excel/")&&(e=e.substr(11)),e.split("/").join("_")}}},p=u,d=n("4e82"),f=Object(d["a"])(p,r,a,!1,null,null,null);t["a"]=f.exports},d63a:function(e,t,n){"use strict";n.d(t,"g",(function(){return a})),n.d(t,"h",(function(){return i})),n.d(t,"f",(function(){return o})),n.d(t,"e",(function(){return s})),n.d(t,"d",(function(){return c})),n.d(t,"c",(function(){return l})),n.d(t,"i",(function(){return u})),n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n("b775");function a(e){return Object(r["a"])({url:"/api/daily/travel",method:"get",params:e})}function i(e){return Object(r["a"])({url:"/api/daily/visit",method:"get",params:e})}function o(e){return Object(r["a"])({url:"/api/daily/report",method:"get",params:e})}function s(e){return Object(r["a"])({url:"/api/daily/hosting",method:"get",params:e})}function c(e,t){return Object(r["a"])({url:"/api/daily/".concat(e,"/").concat(t,"/flights"),method:"get"})}function l(e,t,n){return Object(r["a"])({url:"/api/daily/".concat(e,"/").concat(t,"/flights/").concat(n),method:"delete"})}function u(e,t,n,a){return Object(r["a"])({url:"/api/daily/".concat(e,"/").concat(t,"/flights/").concat(n),method:"put",data:JSON.stringify(a)})}function p(e,t,n){return Object(r["a"])({url:"/api/daily/".concat(e,"/").concat(t,"/flights"),method:"post",data:JSON.stringify(n)})}function d(e,t){return Object(r["a"])({url:"/api/daily/".concat(e,"/").concat(t),method:"delete"})}},e498:function(e,t,n){"use strict";var r=n("f916"),a=n.n(r);a.a},ed80:function(e,t,n){},f916:function(e,t,n){}}]);