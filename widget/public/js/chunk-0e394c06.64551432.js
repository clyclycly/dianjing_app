(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e394c06"],{"240f":function(e,n,t){var i=t("635f");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=t("499e").default;a("00228e6a",i,!0,{})},"635f":function(e,n,t){n=e.exports=t("2350")(!1),n.push([e.i,"\n.main[data-v-17e8ebc1] {\n  height: 100%;\n  background: #fff;\n}\n.header[data-v-17e8ebc1] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 999;\n  background: rgba(255, 255, 255, 0.3);\n}\n.header.deep[data-v-17e8ebc1] {\n  background: #ffffff;\n}\n.header .head[data-v-17e8ebc1] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 0.96rem;\n  padding: 0 0.3rem;\n}\n.header .head .head-left[data-v-17e8ebc1] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 50%;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.header .head .head-right[data-v-17e8ebc1] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 50%;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n  -webkit-flex-direction: row-reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n}\n.header .head .head-right .avatar[data-v-17e8ebc1] {\n  width: 0.7rem;\n  height: 0.7rem;\n  border-radius: 50%;\n}\n.video[data-v-17e8ebc1] {\n  position: relative;\n  width: 100%;\n  height: 80%;\n  background: #000;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.video .iconPlayShow[data-v-17e8ebc1] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: 1001;\n  width: 1rem;\n  height: 1rem;\n  line-height: 1rem;\n  margin-left: -0.5rem;\n  margin-top: -0.5rem;\n  text-align: center;\n}\n.video .video_box[data-v-17e8ebc1] {\n  max-width: 100%;\n  max-height: 100%;\n  overflow: hidden;\n}\n.video video[data-v-17e8ebc1] {\n  -o-object-position: 0 0;\n     object-position: 0 0;\n}\n.info[data-v-17e8ebc1] {\n  padding: 0.2rem;\n}\n.info .info-top[data-v-17e8ebc1] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 0.22rem;\n  font-weight: 500;\n  color: #999999;\n  line-height: 0.6rem;\n}\n.info .userinfo[data-v-17e8ebc1] {\n  font-size: 0.26rem;\n  color: #999;\n  line-height: 0.38rem;\n}\n.info .userinfo span[data-v-17e8ebc1] {\n  font-weight: bold;\n  color: #122d6a;\n}\n.info .data[data-v-17e8ebc1] {\n  font-size: 0.26rem;\n  font-weight: 500;\n  color: #333333;\n  padding: 0.1rem 0;\n  line-height: 0.4rem;\n}\n.info .data .item[data-v-17e8ebc1] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.info .data .ico[data-v-17e8ebc1] {\n  margin-right: 0.1rem;\n}\n.bottom[data-v-17e8ebc1] {\n  height: 0.6rem;\n}\n",""])},"739c":function(e,n,t){var i=t("c1e2");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=t("499e").default;a("baff81a6",i,!0,{})},"84a0":function(e,n,t){"use strict";t.r(n);t("4917");var i=t("ff6f"),a=t("1733"),o=t("3c57"),s=t("d816"),r={data:function(){return{showShare:!1,bottom:0}},created:function(){window.navigator.userAgent.match(/APICloud/i)&&(this.bottom=api.safeArea.bottom)},methods:{open:function(){this.showShare=!0}}},c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("van-action-sheet",{attrs:{title:"分享到"},model:{value:e.showShare,callback:function(n){e.showShare=n},expression:"showShare"}},[t("van-grid",{attrs:{square:""}},[t("van-grid-item",{attrs:{text:"微信"}},[t("template",{slot:"icon"},[t("van-icon",{attrs:{"class-prefix":"icon",name:"weixin"}})],1)],2),e._v(" "),t("van-grid-item",{attrs:{text:"朋友圈"}},[t("template",{slot:"icon"},[t("van-icon",{attrs:{"class-prefix":"icon",name:"pengyouquan"}})],1)],2)],1),e._v(" "),t("div",{staticClass:"footer-empty",style:"padding-top:"+e.bottom+"px"})],1)},l=[],d=t("2455");function f(e){t("739c")}var h=!1,p=f,u="data-v-192fab7d",v=null,m=Object(d["a"])(r,c,l,h,p,u,v),b=m.exports,g=(i["a"],a["a"],o["a"],s["a"],{name:"videoDetail",components:{navBar:i["a"],operation:a["a"],comment:o["a"],follow:s["a"],share:b},data:function(){return{top:0,show:!1,playOrPause:!0,iconPlayShow:!1,background:"",color:"#fff",info:{video:""},UIChatBox:null}},mounted:function(){window.addEventListener("scroll",this.handleScroll,!0);var e=this.$store.state.systemType;"android"==e&&(this.top=25),"ios"==e&&(this.top=40)},created:function(){var e=this;window.navigator.userAgent.match(/APICloud/i)&&(this.UIChatBox=api.require("UIChatBox")),this.$SERVER.getVideoInfo({videoid:this.$route.params.id,userId:this.$store.state.userInfo.userid}).then(function(n){e.info=n.data,e.$refs.comment.onLoad(n.data.videoid,1),e.show=!0})},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll,!0),window.navigator.userAgent.match(/APICloud/i)&&this.UIChatBox.close()},methods:{zanFn:function(){var e=this;this.info.likeStatue=!this.info.likeStatue,this.$SERVER.agree({sourceId:this.info.videoid,userId:this.$store.state.userInfo.userid}).then(function(n){e.info.likeCount=n.count}).catch(function(n){e.info.likeStatue=!e.info.likeStatue})},playvideo:function(e){var n=this.$refs.video;this.iconPlayShow=!1,this.playOrPause=!0,n.play()},pauseVideo:function(){var e=this.$refs.video;this.playOrPause?(e.pause(),this.iconPlayShow=!0):(e.play(),this.iconPlayShow=!1),this.playOrPause=!this.playOrPause},handleScroll:function(e){var n=this;e.target.scrollTop>=n.$refs.video_box.offsetHeight?(this.background="deep",this.color="#999"):(this.background="",this.color="#fff"),window.navigator.userAgent.match(/APICloud/i)&&n.UIChatBox.open({placeholder:"说点什么",autoFocus:!1,emotionPath:"widget://res/image/emotion",texts:{sendBtn:{title:"发送"}},styles:{inputBar:{borderColor:"rgba(255,255,255,1)",bgColor:"rgba(255,255,255,1)"},inputBox:{borderColor:"rgba(245,245,245,1)",bgColor:"rgba(245,245,245,1)",textColor:"rgba(153,153,153,1)",borderCorner:15},indicator:{target:"both",color:"#c4c4c4",activeColor:"#9e9e9e"},emotionBtn:{normalImg:"widget://res/image/face1.png"},sendBtn:{bg:"#4cc518",titleColor:"#ffffff",activeBg:"#46a91e",titleSize:13}}},function(e,t){"send"==e.eventType&&(null==e.msg||""==e.msg?n.$toast.fail("评论内容不能为空！"):(n.$SERVER.addEvaluate({pid:n.$route.params.id,type:1,message:e.msg,fromUserId:n.$store.state.userInfo.userid}).then(function(t){n.$toast.success("评论成功！"),n.info.replyCount++,n.$refs.comment.addCommentView(e.msg)}),n.UIChatBox.close()))})}}}),w=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"container"},[t("div",{staticClass:"header",class:e.background},[t("div",{style:"height:"+e.top+"px"}),e._v(" "),t("div",{staticClass:"head"},[t("div",{staticClass:"head-left"},[t("van-icon",{attrs:{name:"arrow-left",color:e.color,size:"25"},on:{click:function(n){e.$router.go(-1)}}}),e._v(" "),e.info.likeStatue?t("van-icon",{attrs:{name:"like",color:"#ffd948",size:"25"},on:{click:e.zanFn}}):t("van-icon",{attrs:{name:"like",color:e.color,size:"25"},on:{click:e.zanFn}}),e._v(" "),t("van-icon",{attrs:{"class-prefix":"icon",name:"zhuanfa-o",color:e.color,size:"25"},on:{click:function(n){e.$refs.share.open()}}}),e._v(" "),t("van-icon",{attrs:{name:"warning",color:e.color,size:"25"}})],1),e._v(" "),t("div",{staticClass:"head-right"},[t("img",{staticClass:"avatar",attrs:{src:e.info.image},on:{click:function(n){e.$router.push("/accompanyDetail/"+e.info.userid)}}}),e._v(" "),t("follow",{attrs:{toUserid:e.info.userid}})],1)])]),e._v(" "),t("div",{staticClass:"main"},[t("div",{ref:"video_box",staticClass:"video",on:{click:e.pauseVideo}},[e.show?t("video",{ref:"video",staticClass:"video_box",attrs:{"webkit-playsinline":"true","x5-playsinline":"","x5-video-player-type":"h5","x5-video-player-fullscreen":"",playsinline:"",preload:"auto",poster:e.info.frontcover,"x-webkit-airplay":"allow","x5-video-orientation":"portrait",loop:"loop",autoplay:""},on:{click:e.pauseVideo}},[t("source",{attrs:{src:e.info.video,type:"video/mp4"}})]):e._e(),e._v(" "),t("van-icon",{directives:[{name:"show",rawName:"v-show",value:e.iconPlayShow,expression:"iconPlayShow"}],staticClass:"iconPlayShow",attrs:{name:"play-circle",color:"#fff",size:"50"},on:{click:e.playvideo}})],1),e._v(" "),t("div",{ref:"info",staticClass:"info"},[t("div",{staticClass:"info-top"},[t("span",[e._v(e._s(e.info.readcount)+" 播放")]),e._v(" "),t("span",[e._v(e._s(e.$METHOD.timeSwitchString(e.info.createtime)))])]),e._v(" "),t("div",{staticClass:"userinfo"},[t("span",{on:{click:function(n){e.$router.push("/accompanyDetail/"+e.info.userid)}}},[e._v(e._s(e.info.nickname)+"：")]),e._v("\n        "+e._s(e.info.comment)+"\n        "),e._l(e.info.friendsList,function(n,i){return e.info.friendsList?t("span",{on:{click:function(t){e.$router.push("/accompanyDetail/"+n.userId)}}},[e._v("@"+e._s(n.nickName))]):e._e()})],2),e._v(" "),t("div",{staticClass:"data"},[t("div",{staticClass:"item"},[t("van-icon",{staticClass:"ico",attrs:{name:"like",color:"#999",size:"15"}}),e._v("\n          "+e._s(e.info.likeCount)+" 喜欢\n        ")],1),e._v(" "),t("div",{staticClass:"item"},[t("van-icon",{staticClass:"ico",attrs:{name:"comment",color:"#999",size:"15"}}),e._v("\n          "+e._s(e.info.replyCount)+" 评论\n        ")],1)])]),e._v(" "),t("comment",{ref:"comment",attrs:{pid:e.info.videoid,type:1}}),e._v(" "),t("div",{staticClass:"bottom",style:"padding-top:"+e.top+"px"})],1),e._v(" "),t("share",{ref:"share"})],1)},x=[];function y(e){t("240f")}var k=!1,C=y,_="data-v-17e8ebc1",S=null,$=Object(d["a"])(g,w,x,k,C,_,S);n["default"]=$.exports},c1e2:function(e,n,t){n=e.exports=t("2350")(!1),n.push([e.i,"",""])}}]);