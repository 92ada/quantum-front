(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66afc16f"],{"1bef":function(e,t,a){},"2ee0":function(e,t,a){"use strict";a.d(t,"a",function(){return i}),a.d(t,"b",function(){return o});a("28a5"),a("96cf");var n=a("3b8d"),r=a("b775");function i(e){o(e)}var o=function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,a){var n,i,o,c,l;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(r["a"])({url:t,method:"get",responseType:"blob",params:a});case 2:n=e.sent,i=t.split("/").reverse()[0],o=new Blob([n]),c=window.URL.createObjectURL(o),l=document.createElement("a"),l.href=c,l.download=[i],l.click(),window.URL.revokeObjectURL(c);case 11:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}()},"333d":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[a("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},r=[];a("c5f6");Math.easeInOutQuad=function(e,t,a,n){return e/=n/2,e<1?a/2*e*e+t:(e--,-a/2*(e*(e-2)-1)+t)};var i=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function o(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function c(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function l(e,t,a){var n=c(),r=e-n,l=20,s=0;t="undefined"===typeof t?500:t;var u=function e(){s+=l;var c=Math.easeInOutQuad(s,n,r,t);o(c),s<t?i(e):a&&"function"===typeof a&&a()};u()}var s={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&l(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&l(0,800)}}},u=s,d=(a("e498"),a("2877")),p=Object(d["a"])(u,n,r,!1,null,"6af373ef",null);t["a"]=p.exports},3703:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"permission",rawName:"v-permission",value:["import_excel"],expression:"['import_excel']"}],staticClass:"upload-container"},[a("el-upload",{staticStyle:{display:"inline-block"},attrs:{multiple:!1,"show-file-list":!1,"on-success":e.handleUploadSuccess,"on-error":e.handleUploadError,action:e.postApi}},[a("el-button",{attrs:{type:"primary",plain:""}},[e._v(e._s(e.$t("common.upload")))])],1),e._v(" "),a("el-switch",{attrs:{"active-text":"覆盖模式"},model:{value:e.force,callback:function(t){e.force=t},expression:"force"}})],1)},r=[],i=(a("28a5"),a("f559"),a("2ee0")),o={name:"UploadFile",props:{url:{type:String,default:""}},data:function(){return{force:!1}},computed:{postApi:function(){return"http://172.18.14.192:8080"+this.url+"?force="+this.force}},methods:{handleUploadSuccess:function(){this.$message({type:"success",message:"上传成功! Uploaded Successfully！"})},handleUploadError:function(e){var t;try{t=JSON.parse(e.message).message}catch(a){t=e.message}this.$message({type:"error",message:"上传失败! "+t,duration:0,showClose:!0})},downloadTemplate:function(){var e=this.format(this.url);Object(i["a"])(this.url+"/".concat(e,"-template.xlsx"))},format:function(e){return e.startsWith("/api/excel/")&&(e=e.substr(11)),e.split("/").join("_")}}},c=o,l=(a("75ac"),a("2877")),s=Object(l["a"])(c,n,r,!1,null,"cb0a2772",null);t["a"]=s.exports},7456:function(e,t,a){},"75ac":function(e,t,a){"use strict";var n=a("cf41"),r=a.n(n);r.a},a46e:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return r});a("a481");function n(e){var t=e,a=e.$route;t.$store.dispatch("tagsView/delCachedView",a).then(function(){var e=a.fullPath;t.$nextTick(function(){t.$router.replace({path:"/redirect"+e})})})}function r(e){var t=document.getElementById("close-"+e);t.click()}},cf41:function(e,t,a){},d477:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"form",staticClass:"search-container",attrs:{model:e.searchObj,"label-width":"70px",inline:""}},[a("el-form-item",{attrs:{label:e.$t("common.keyword")}},[a("el-input",{model:{value:e.searchObj.word,callback:function(t){e.$set(e.searchObj,"word",t)},expression:"searchObj.word"}})],1),e._v(" "),e._l(e.paramsSource,function(t,n){return a("el-form-item",{key:n,attrs:{label:e.$t(e.i18nIndex+"."+n)}},[a("el-select",{attrs:{placeholder:e.$t("common.pleaseChoose")},model:{value:e.searchObj[n],callback:function(t){e.$set(e.searchObj,n,t)},expression:"searchObj[label]"}},e._l(t,function(e){return a("el-option",{key:e,attrs:{label:e,value:e}})}),1)],1)}),e._v(" "),e.byDateRange?a("el-form-item",{attrs:{label:e.$t("common.from")+": "}},[a("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:e.$t("common.pleaseChoose")},model:{value:e.searchObj.start,callback:function(t){e.$set(e.searchObj,"start",t)},expression:"searchObj.start"}})],1):e._e(),e._v(" "),e.byDateRange?a("el-form-item",{attrs:{label:e.$t("common.to")+": "}},[a("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:e.$t("common.pleaseChoose")},model:{value:e.searchObj.end,callback:function(t){e.$set(e.searchObj,"end",t)},expression:"searchObj.end"}})],1):e._e(),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v(e._s(e.$t("common.search")))])],1),e._v(" "),a("el-form-item",{directives:[{name:"permission",rawName:"v-permission",value:["export_excel"],expression:"['export_excel']"}]},[e.exportExcel?a("el-button",{attrs:{type:"primary",plain:""},on:{click:e.onExport}},[e._v(e._s(e.$t("common.export")))]):e._e()],1)],2)},r=[],i=(a("28a5"),a("f559"),a("db72")),o=a("a46e"),c=a("2ee0"),l={name:"QtSearch",props:{paramsSource:{type:Object,default:function(){}},i18nIndex:{type:String,default:""},searchUrl:{type:String,default:""},exportUrl:{type:String,default:""},exportQuery:{type:Object,default:function(){}},byDateRange:{type:Boolean,default:!1},exportExcel:{type:Boolean,default:!1}},data:function(){return{searchObj:{}}},created:function(){this.searchObj=Object.assign({},this.searchObj,this.$route.query)},methods:{onSubmit:function(){this.$router.push({path:this.searchUrl,query:this.searchObj}),Object(o["b"])(this)},onExport:function(){var e=Object(i["a"])({},this.searchObj,{},this.exportQuery);console.log("in qtSearch",e);var t=this.exportUrl||"/api/excel"+this.searchUrl,a=this.format(t),n=t+"/"+a+".xlsx";Object(c["b"])(n,e)},format:function(e){return e.startsWith("/api/excel/")&&(e=e.substr(11)),e.split("/").join("_")}}},s=l,u=a("2877"),d=Object(u["a"])(s,n,r,!1,null,null,null);t["a"]=d.exports},d63a:function(e,t,a){"use strict";a.d(t,"g",function(){return r}),a.d(t,"h",function(){return i}),a.d(t,"f",function(){return o}),a.d(t,"e",function(){return c}),a.d(t,"d",function(){return l}),a.d(t,"c",function(){return s}),a.d(t,"i",function(){return u}),a.d(t,"a",function(){return d}),a.d(t,"b",function(){return p});var n=a("b775");function r(e){return Object(n["a"])({url:"/api/daily/travel",method:"get",params:e})}function i(e){return Object(n["a"])({url:"/api/daily/visit",method:"get",params:e})}function o(e){return Object(n["a"])({url:"/api/daily/report",method:"get",params:e})}function c(e){return Object(n["a"])({url:"/api/daily/hosting",method:"get",params:e})}function l(e,t){return Object(n["a"])({url:"/api/daily/".concat(e,"/").concat(t,"/flights"),method:"get"})}function s(e,t,a){return Object(n["a"])({url:"/api/daily/".concat(e,"/").concat(t,"/flights/").concat(a),method:"delete"})}function u(e,t,a,r){return Object(n["a"])({url:"/api/daily/".concat(e,"/").concat(t,"/flights/").concat(a),method:"put",data:JSON.stringify(r)})}function d(e,t,a){return Object(n["a"])({url:"/api/daily/".concat(e,"/").concat(t,"/flights"),method:"post",data:JSON.stringify(a)})}function p(e,t){return Object(n["a"])({url:"/api/daily/".concat(e,"/").concat(t),method:"delete"})}},e498:function(e,t,a){"use strict";var n=a("7456"),r=a.n(n);r.a},e4dd:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("upload-file",{directives:[{name:"permission",rawName:"v-permission",value:["edit_daily, edit_daily_report"],expression:"['edit_daily, edit_daily_report']"}],staticStyle:{float:"right"},attrs:{url:"/api/excel/daily/report"}}),e._v(" "),a("qt-search",{attrs:{"params-source":{},"i18n-index":"daily.report","search-url":"/daily/report",export:""}}),e._v(" "),a("el-link",{directives:[{name:"permission",rawName:"v-permission",value:["edit_daily_report","edit_daily"],expression:"['edit_daily_report', 'edit_daily']"}],staticClass:"create-btn",attrs:{icon:"el-icon-edit"},on:{click:e.goToCreate}},[e._v(e._s(e.$t("common.new")))]),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":""},on:{"row-click":e.goToDetail}},[a("el-table-column",{attrs:{type:"index",align:"center",width:"80",sortable:"",prop:"id"}}),e._v(" "),a("el-table-column",{attrs:{"min-width":"420",align:"center",label:e.$t("daily.report.title")},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.title))])]}}])}),e._v(" "),a("el-table-column",{attrs:{"min-width":"180",align:"center",label:e.$t("daily.report.invitee_name")},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.invitee_name))])]}}])}),e._v(" "),a("el-table-column",{attrs:{"min-width":"180",align:"center",label:e.$t("daily.report.time"),sortable:"",prop:"time"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.time))])]}}])}),e._v(" "),a("el-table-column",{attrs:{"min-width":"180",align:"center",label:e.$t("daily.report.location")},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.location))])]}}])})],1),e._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.page,limit:e.listQuery.limit},on:{"update:page":function(t){return e.$set(e.listQuery,"page",t)},"update:limit":function(t){return e.$set(e.listQuery,"limit",t)},pagination:e.getList}})],1)},r=[],i=a("db72"),o=a("d63a"),c=a("333d"),l=a("d477"),s=a("3703"),u={name:"ReportList",components:{UploadFile:s["a"],QtSearch:l["a"],Pagination:c["a"]},filters:{statusFilter:function(e){var t={"已批准":"success","审批中":"info","未提交":"danger"};return t[e]}},data:function(){return{list:null,total:0,listLoading:!0,listQuery:{page:1,limit:20}}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.listLoading=!0,Object(o["f"])(Object(i["a"])({},this.listQuery,{},this.$route.query)).then(function(t){e.list=t.content,e.total=t.totalElements,e.listLoading=!1})},goToDetail:function(e,t,a){var n="/daily/report/".concat(e.id);this.$router.push(n)},goToCreate:function(){this.$router.push("/daily/report/create")}}},d=u,p=(a("f270"),a("2877")),f=Object(p["a"])(d,n,r,!1,null,"2cd1cd02",null);t["default"]=f.exports},f270:function(e,t,a){"use strict";var n=a("1bef"),r=a.n(n);r.a}}]);