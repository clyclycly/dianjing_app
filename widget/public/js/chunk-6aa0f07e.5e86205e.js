(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6aa0f07e"],{1733:function(t,e,n){"use strict";n("c5f6"),Number,Number,Number,Number;var a={data:function(){return{activeZan:this.iszan,overlayShow:!1,UIChatBox:null,popupShow:!1,zanNum:this.zan}},computed:{forwardC:function(){return 0===this.forward?"":this.forward},commentC:function(){return 0===this.comment?"":this.comment},zanNumC:function(){return 0===this.zanNum?"":this.zanNum}},props:{id:{default:function(){return""},required:!0},forward:{type:Number,default:function(){return-1},required:!1},comment:{type:Number,default:function(){return-1},required:!1},zan:{type:Number,default:function(){return-1},required:!1},iszan:{default:function(){return 0},required:!1},size:{type:Number,default:function(){return 16},required:!1}},methods:{zanFn:function(){var t=this;this.activeZan=!this.activeZan,this.$SERVER.agree({sourceId:this.id,userId:this.$store.state.userInfo.userid}).then(function(e){t.zanNum=e.count,t.$emit("zanFn",e.count)}).catch(function(e){t.activeZan=!t.activeZan})},commentFn:function(){var t=this;t.$emit("commentFn")}}},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"operation"},[-1!=t.forward?n("div",{staticClass:"operation-item"},[n("van-icon",{staticClass:"icon",attrs:{"class-prefix":"icon",name:"zhuanfa",size:t.size,color:"rgba(153,153,153,1)"}}),t._v(" "),n("span",{style:"font-size:"+(t.size-4)+"px"},[t._v(t._s(t.forwardC))])],1):t._e(),t._v(" "),-1!=t.comment?n("div",{staticClass:"operation-item",on:{click:function(e){return e.stopPropagation(),t.commentFn(e)}}},[n("van-icon",{staticClass:"icon",attrs:{"class-prefix":"icon",name:"pinglun",size:t.size,color:"rgba(153,153,153,1)"}}),t._v(" "),n("span",{style:"font-size:"+(t.size-4)+"px"},[t._v(t._s(t.commentC))])],1):t._e(),t._v(" "),-1!=t.zan?n("div",{staticClass:"operation-item",on:{click:function(e){return e.stopPropagation(),t.zanFn(e)}}},[t.activeZan?n("van-icon",{attrs:{name:"like",color:t.$store.state.color,size:t.size}}):n("van-icon",{attrs:{name:"like-o",color:"rgba(153,153,153,1)",size:t.size}}),t._v(" "),n("span",{style:"font-size:"+(t.size-4)+"px"},[t._v(t._s(t.zanNumC))])],1):t._e()])},o=[],r=n("2455");function s(t){n("bdb2")}var c=!1,l=s,d="data-v-9379c02e",f=null,u=Object(r["a"])(a,i,o,c,l,d,f);e["a"]=u.exports},"1de2":function(t,e,n){var a=n("db54");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("499e").default;i("d09dad0c",a,!0,{})},"20fd":function(t,e,n){"use strict";var a=n("d9f6"),i=n("aebd");t.exports=function(t,e,n){e in t?a.f(t,e,i(0,n)):t[e]=n}},4114:function(t,e,n){var a=n("eb75");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("499e").default;i("1485aae2",a,!0,{})},4161:function(t,e,n){var a=n("57b8");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("499e").default;i("0f1a6bd0",a,!0,{})},"549b":function(t,e,n){"use strict";var a=n("d864"),i=n("63b6"),o=n("241e"),r=n("b0dc"),s=n("3702"),c=n("b447"),l=n("20fd"),d=n("7cd6");i(i.S+i.F*!n("4ee1")(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,i,f,u=o(t),v="function"==typeof this?this:Array,p=arguments.length,m=p>1?arguments[1]:void 0,b=void 0!==m,h=0,g=d(u);if(b&&(m=a(m,p>2?arguments[2]:void 0,2)),void 0==g||v==Array&&s(g))for(e=c(u.length),n=new v(e);e>h;h++)l(n,h,b?m(u[h],h):u[h]);else for(f=g.call(u),n=new v;!(i=f.next()).done;h++)l(n,h,b?r(f,m,[i.value,h],!0):i.value);return n.length=h,n}})},"54a1":function(t,e,n){n("6c1c"),n("1654"),t.exports=n("95d5")},"57b8":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"\n.gander[data-v-17cd7a44] {\n  display: inline-block;\n  font-size: 0.18rem;\n  font-weight: 500;\n  color: #ffffff;\n  margin-left: 0.1rem;\n  background: #ffd948;\n  border-radius: 0.4rem;\n  padding: 0.04rem 0.1rem;\n}\n.gander .icon[data-v-17cd7a44] {\n  font-size: 0.18rem;\n}\n",""])},"5bf2":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"\n.operation[data-v-9379c02e] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 0.1rem 0;\n}\n.operation .operation-item[data-v-9379c02e] {\n  font-size: 0.24rem;\n  font-weight: 400;\n  color: #999999;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-content: center;\n      -ms-flex-line-pack: center;\n          align-content: center;\n}\n.operation .operation-item span[data-v-9379c02e] {\n  margin-left: 0.1rem;\n}\n",""])},"5d96":function(t,e,n){"use strict";n.r(e);var a=n("75fc"),i=n("cebc"),o=(n("c5f6"),n("7f7f"),n("ff6f")),r=n("7ad2"),s=n("1733"),c=(o["a"],r["a"],s["a"],{name:"videos",components:{navBar:o["a"],gander:r["a"],operation:s["a"]},data:function(){return{activeType:1,refreshLoading:!1,finished:!1,listLoading:!1,pageNum:1,pageSize:20,hasNextPage:!0,videoList:[],container:null}},watch:{$route:function(){"videos"==this.$route.name&&this.getList(!0)}},created:function(){this.$route.params.type&&(this.activeType=Number(this.$route.params.type))},mounted:function(){this.container=this.$refs.main},methods:{getList:function(t){var e=this;if((3==this.activeType||4==this.activeType)&&!this.$METHOD.getStore("token"))return this.$toast.fail("请先登录！"),void this.$router.push("/login");t&&(e.pageNum=1,e.hasNextPage=!0),e.$SERVER.getVideoList(Object(i["a"])({pageNum:e.pageNum,pageSize:e.pageSize,type:e.activeType},e.$store.state.position,{userId:e.$store.state.userInfo.userid||null})).then(function(n){e.pageNum=n.data.nextPage,e.hasNextPage=n.data.hasNextPage,e.finished=!n.data.hasNextPage,t?(e.videoList=n.data.list,e.refreshLoading=!1):(e.videoList=[].concat(Object(a["a"])(e.videoList),Object(a["a"])(n.data.list)),e.listLoading=!1)})}}}),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",attrs:{id:"videos"}},[n("navBar",{attrs:{goback:!1,search:!0}}),t._v(" "),n("van-tabs",{staticClass:"title-tabs",attrs:{color:t.$store.state.color,"title-active-color":t.$store.state.color,animated:""},on:{click:function(e){t.getList(!0)}},model:{value:t.activeType,callback:function(e){t.activeType=e},expression:"activeType"}},[n("van-tab",{attrs:{title:"推荐",name:1}}),t._v(" "),n("van-tab",{attrs:{title:"附近",name:2}}),t._v(" "),n("van-tab",{attrs:{title:"关注",name:3}}),t._v(" "),n("van-tab",{attrs:{title:"我的",name:4}})],1),t._v(" "),n("div",{ref:"main",staticClass:"main"},[n("van-pull-refresh",{on:{refresh:function(e){t.getList(!0)}},model:{value:t.refreshLoading,callback:function(e){t.refreshLoading=e},expression:"refreshLoading"}},[n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.getList},model:{value:t.listLoading,callback:function(e){t.listLoading=e},expression:"listLoading"}},[n("div",{staticClass:"video-list"},t._l(t.videoList,function(e,a){return n("div",{key:a,staticClass:"video-item",on:{click:function(n){t.$router.push("/videoDetail/"+e.videoid)}}},[n("van-image",{staticClass:"video-img",attrs:{fit:"cover",src:e.frontcover}}),t._v(" "),n("div",{staticClass:"info"},[n("h3",[t._v(t._s(e.comment))]),t._v(" "),n("div",{staticClass:"user"},[n("van-image",{staticClass:"avatar",attrs:{fit:"cover",src:e.frontcover},on:{click:function(n){n.stopPropagation(),t.$router.push("/accompanyDetail/"+e.userid)}}}),t._v(" "),n("div",{staticClass:"user-info"},[n("div",{staticClass:"username"},[t._v("\n                    "+t._s(e.nickname)+"\n                    "),n("gander",{attrs:{gander:e.sex,age:e.age}})],1),t._v(" "),n("div",{staticClass:"distance"},[t._v("距离我"+t._s(e.distance)+"KM")])])],1),t._v(" "),n("operation",{staticClass:"operation",attrs:{id:e.videoid,comment:e.replyCount,zan:e.likeCount,iszan:e.likeStatue}})],1)],1)}),0)])],1)],1)],1)},d=[],f=n("2455");function u(t){n("1de2")}var v=!1,p=u,m="data-v-5e44287f",b=null,h=Object(f["a"])(c,l,d,v,p,m,b);e["default"]=h.exports},"75fc":function(t,e,n){"use strict";var a=n("a745"),i=n.n(a);function o(t){if(i()(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var r=n("774e"),s=n.n(r),c=n("c8bb"),l=n.n(c);function d(t){if(l()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return s()(t)}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function u(t){return o(t)||d(t)||f()}n.d(e,"a",function(){return u})},"774e":function(t,e,n){t.exports=n("d2d5")},"7ad2":function(t,e,n){"use strict";n("c5f6"),Number,Number;var a={props:{gander:{type:Number,default:function(){return 0},required:!0},age:{type:Number,default:function(){return 0},required:!0}}},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gander"},[n("van-icon",{attrs:{"class-prefix":"icon",name:1===t.gander?"man":"woman"}}),t._v(t._s(t.age)+"\n")],1)},o=[],r=n("2455");function s(t){n("4161")}var c=!1,l=s,d="data-v-17cd7a44",f=null,u=Object(r["a"])(a,i,o,c,l,d,f);e["a"]=u.exports},"95d5":function(t,e,n){var a=n("40c3"),i=n("5168")("iterator"),o=n("481b");t.exports=n("584a").isIterable=function(t){var e=Object(t);return void 0!==e[i]||"@@iterator"in e||o.hasOwnProperty(a(e))}},b00e:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"\n.nobg .van-hairline--bottom::after {\n  border-bottom-width: 0;\n}\n",""])},bdb2:function(t,e,n){var a=n("5bf2");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("499e").default;i("5b188c7f",a,!0,{})},c8bb:function(t,e,n){t.exports=n("54a1")},d2d5:function(t,e,n){n("1654"),n("549b"),t.exports=n("584a").Array.from},db54:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"\n.video-list[data-v-5e44287f] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  padding: 0.18rem;\n}\n.video-list .video-item[data-v-5e44287f] {\n  width: 3.5rem;\n  background: #ffffff;\n  border-radius: 0.14rem 0.14rem 0 0;\n  overflow: hidden;\n  margin-bottom: 0.14rem;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.video-list .video-item .video-img[data-v-5e44287f] {\n  width: 3.5rem;\n  height: 3.4rem;\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n.video-list .video-item .info[data-v-5e44287f] {\n  padding: 0 0.2rem 0.2rem;\n}\n.video-list .video-item .info h3[data-v-5e44287f] {\n  font-size: 0.26rem;\n  font-weight: 500;\n  color: #333333;\n  padding: 0.26rem 0;\n}\n.video-list .video-item .info .user[data-v-5e44287f] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.video-list .video-item .info .user .avatar[data-v-5e44287f] {\n  width: 0.7rem;\n  height: 0.7rem;\n  border-radius: 50%;\n  overflow: hidden;\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n}\n.video-list .video-item .info .user .user-info[data-v-5e44287f] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  padding-left: 0.14rem;\n}\n.video-list .video-item .info .user .user-info .username[data-v-5e44287f] {\n  font-size: 0.26rem;\n  font-weight: 500;\n  color: #999999;\n}\n.video-list .video-item .info .user .user-info .distance[data-v-5e44287f] {\n  font-size: 0.2rem;\n  font-weight: 400;\n  color: #999999;\n}\n.video-list .video-item .info .operation[data-v-5e44287f] {\n  margin-top: 0.2rem;\n  padding: 0.2rem 0.2rem 0;\n  border-top: 0.02rem solid #f2f2f2;\n}\n",""])},eb75:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"\n.navbar[data-v-7aa0d3c6] {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: 999;\n  background: #fff;\n}\n.navbar .title span[data-v-7aa0d3c6] {\n  font-weight: bold;\n}\n.navbar .left[data-v-7aa0d3c6],\n.navbar .right[data-v-7aa0d3c6] {\n  font-size: 0.4rem;\n}\n.navbar-empty[data-v-7aa0d3c6] {\n  height: 0.92rem;\n}\n/* 风格 */\n.nobg[data-v-7aa0d3c6] {\n  background: none;\n}\n.nobg .title[data-v-7aa0d3c6] {\n  color: #fff;\n}\n.nobg .left[data-v-7aa0d3c6] {\n  color: #fff !important;\n}\n",""])},f2d0:function(t,e,n){var a=n("b00e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("499e").default;i("0274895e",a,!0,{})},ff6f:function(t,e,n){"use strict";n("386d"),String,Boolean,Boolean,Boolean,String;var a={name:"navbar",data:function(){return{top:"",searchShow:!1,value:"",searchEmptyShow:!1}},props:{title:{type:String,default:function(){return this.$route.meta.title},required:!1},goback:{type:Boolean,default:function(){return!0},required:!1},search:{type:Boolean,default:function(){return!1},required:!1},filter:{type:Boolean,default:function(){return!1},required:!1},stl:{type:String,default:function(){},required:!1}},components:{},mounted:function(){var t=this.$store.state.systemType;"android"==t&&(this.top=25),"ios"==t&&(this.top=40,this.searchEmptyShow=!0)},methods:{onClickLeft:function(){this.goback&&this.$router.go(-1)},openSearchFn:function(){this.search&&(this.searchShow=!0)},searchFn:function(){console.log("搜索")}}},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{position:"relative"}},[n("div",{staticClass:"navbar",class:t.stl?t.stl:"",attrs:{id:"navbar"}},[n("div",{staticClass:"top",style:"padding-top:"+t.top+"px"}),t._v(" "),n("van-nav-bar",{staticStyle:{background:"none"},attrs:{"z-index":999},on:{"click-left":function(e){t.onClickLeft()},"click-right":function(e){t.openSearchFn()}}},[n("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[n("span",[t._v(t._s(t.title))]),t._v(" "),t._t("title")],2),t._v(" "),t.goback?n("van-icon",{staticClass:"left",attrs:{slot:"left",name:"arrow-left"},slot:"left"}):t._e(),t._v(" "),t.search?n("svg-icon",{staticClass:"right",attrs:{slot:"right","icon-class":"search"},slot:"right"}):t._t("right",null,{slot:"right"})],2)],1),t._v(" "),t.stl?t._e():n("div",{staticClass:"navbar-empty",style:"padding-top:"+t.top+"px"}),t._v(" "),n("van-popup",{attrs:{position:"top","get-container":"body"},model:{value:t.searchShow,callback:function(e){t.searchShow=e},expression:"searchShow"}},[t.searchEmptyShow&&!t.stl?n("div",{staticClass:"navbar-empty"}):t._e(),t._v(" "),n("van-search",{attrs:{placeholder:"请输入搜索关键词"},on:{blur:t.searchFn},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)],1)},o=[],r=n("2455");function s(t){n("f2d0"),n("4114")}var c=!1,l=s,d="data-v-7aa0d3c6",f=null,u=Object(r["a"])(a,i,o,c,l,d,f);e["a"]=u.exports}}]);