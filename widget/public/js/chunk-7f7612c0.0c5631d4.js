(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f7612c0"],{7916:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,"",""])},8435:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,"\n.duan-cell[data-v-311cb167] {\n  -webkit-box-flex: inherit;\n  -webkit-flex: inherit;\n      -ms-flex: inherit;\n          flex: inherit;\n}\n.fade-enter-active[data-v-311cb167],\n.fade-leave-active[data-v-311cb167] {\n  -webkit-transition: opacity 0.5s;\n  -o-transition: opacity 0.5s;\n  transition: opacity 0.5s;\n}\n.fade-enter[data-v-311cb167],\n.fade-leave-to[data-v-311cb167] {\n  opacity: 0;\n}\n.cell-group[data-v-311cb167] {\n  background: none;\n}\n.cell-group .submit-cell[data-v-311cb167] {\n  background: none;\n  padding: 0.4rem;\n}\n.cell-group .cell[data-v-311cb167] {\n  margin-top: 0.1rem;\n}\n.cell-group .tag-cell[data-v-311cb167] {\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n}\n.cell-group .submit[data-v-311cb167] {\n  background: #ffd948;\n}\n.cell-group .friends-list[data-v-311cb167] {\n  color: #ffd948;\n  margin-right: 0.2rem;\n}\n",""])},"92a2":function(e,t,i){var o=i("8435");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var a=i("499e").default;a("23e67ad9",o,!0,{})},d40b:function(e,t,i){"use strict";i.r(t);var o=i("cebc"),a=(i("7f7f"),i("f499")),s=i.n(a),n=(i("3b2b"),i("8237")),l=i.n(n),r=i("ff6f"),c=(i("4917"),i("c5f6"),Number,{props:{size:{type:Number,default:function(){return 15},required:!1}},methods:{openLoadPopup:function(){var e=this,t=this.$store.state.systemType;if(window.navigator.userAgent.match(/APICloud/i)){var i=api.require("UIMediaScanner");i.open({type:"video",classify:!0,max:1,sort:{key:"time",order:"desc"},texts:{stateText:"已选择*项",cancelText:"取消",finishText:"完成"},styles:{bg:"#fff",mark:{icon:"",position:"bottom_left",size:20},nav:{bg:"#eee",stateColor:"#000",stateSize:18,cancelBg:"rgba(0,0,0,0)",cancelColor:"#000",cancelSize:18,finishBg:"rgba(0,0,0,0)",finishColor:"#000",finishSize:18}},scrollToBottom:{intervalTime:-1},exchange:!0,rotation:!0},function(o){if(o&&"confirm"==o.eventType){if(o.list[0].duration>e.size)return e.$toast.fail("视频超过"+e.size+"秒"),!1;"ios"==t?i.transPath({path:o.list[0].path},function(t){t&&e.$emit("selectVideo",{path:t.path,thumbPath:o.list[0].thumbPath})}):e.$emit("selectVideo",{path:o.list[0].path,thumbPath:o.list[0].thumbPath})}})}}}}),p=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div")},u=[],f=i("2455");function d(e){i("e17d")}var v=!1,m=d,h="data-v-3f533e6e",g=null,b=Object(f["a"])(c,p,u,v,m,h,g),w=b.exports,k=i("4a6d"),_=i("4669"),x=(r["a"],k["a"],_["a"],{name:"release-video",components:{navBar:r["a"],uploadVideo:w,userList:k["a"],positionStr:_["a"]},data:function(){return{imageShow:!1,pickerPopupShow:!1,userListPopupShow:!1,positionListPopupShow:!1,columns:[{id:0,text:"公开"},{id:1,text:"好友可见"},{id:2,text:"私密"}],owner:"公开",video:{},tagsList:"",form:{frontcover:"",video:"",comment:"",tagsList:[],friendsList:[],isfree:0,price:"",position:"",owner:0,onceonly:0}}},methods:{pickerOnConfirm:function(e){this.pickerPopupShow=!1,this.owner=e.text,this.form.owner=e.id},openVideo:function(){this.$refs.upload.openLoadPopup()},selectVideo:function(e){this.imageShow=!0,this.video=e},tagsInput:function(e){var t,i=this,o=e,a=new RegExp("#([^#]{1,40})#","g"),s=[];while(null!=(t=a.exec(o)))s.push(t[1]);i.form.tagsList=s},selectUser:function(e){this.userListPopupShow=!1,"{}"!=s()(e)&&this.form.friendsList.push({userid:e.userId,nickname:e.nickName})},selectPosition:function(e){this.positionListPopupShow=!1,"{}"!=s()(e)&&(this.form.position=e.name)},delFriends:function(e){0==e?this.form.friendsList=[]:this.form.friendsList.splice(e,e)},releaseFn:function(){var e=this;if(0!=e.form.video.path)if(0!=e.form.comment.length){e.$toast.loading({duration:0,mask:!0,message:"正在上传视频..."});var t=api.require("qiniuUpfile");t.upfile({file:e.video.thumbPath,name:l()(e.video.thumbPath)+".jpg"},function(i,a){i.status&&"complete"==i.oper&&(e.form.frontcover=e.$store.state.qiniuaddr+i.info.key,t.upfile({file:e.video.path,name:l()(e.video.path)+".mp4"},function(t,i){t.status&&"complete"==t.oper&&(e.form.video=e.$store.state.qiniuaddr+t.info.key,e.$SERVER.postVideo(Object(o["a"])({userid:e.$store.state.userInfo.userid},e.form)).then(function(t){e.$toast.clear(),e.$toast.success("上传成功！"),e.$router.push("/video/"+t.data.videoid)}))}))})}else e.$toast.fail("请填写描述");else e.$toast.fail("请上传视频")}}}),P=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container"},[i("navBar"),e._v(" "),i("div",{staticClass:"main"},[i("van-cell-group",{staticClass:"cell-group"},[i("van-cell",{staticClass:"cell",attrs:{"value-class":"duan-cell",size:"large"}},[i("template",{slot:"title"},[i("van-field",{attrs:{type:"textarea",placeholder:"添加有趣的描述，能让更多人看到你~",rows:"3"},model:{value:e.form.comment,callback:function(t){e.$set(e.form,"comment",t)},expression:"form.comment"}})],1),e._v(" "),i("div",{staticClass:"video-box",on:{click:e.openVideo}},[i("div",{staticClass:"van-uploader"},[i("div",{staticClass:"van-uploader__wrapper"},[e.imageShow?i("div",{staticClass:"van-uploader__preview"},[i("div",{staticClass:"van-image van-uploader__preview-image"},[i("van-image",{attrs:{fit:"cover",src:e.video.thumbPath,width:"100%",height:"100%"}})],1)]):e._e(),e._v(" "),e.imageShow?e._e():i("div",{staticClass:"van-uploader__upload"},[i("i",{staticClass:"van-icon van-icon-plus van-uploader__upload-icon"})])])])])],2),e._v(" "),i("van-field",{staticClass:"cell",attrs:{type:"textarea",placeholder:"#添加话题#",rows:"1",autosize:"",size:"large"},on:{input:e.tagsInput},model:{value:e.tagsList,callback:function(t){e.tagsList=t},expression:"tagsList"}}),e._v(" "),0!=e.form.tagsList.length?i("van-cell",{attrs:{"title-class":"duan-cell",size:"large"}},[i("template",{slot:"title"},e._l(e.form.tagsList,function(t,o){return i("van-tag",{key:o,staticStyle:{"margin-right":"5px"},attrs:{type:"primary",size:"large"}},[e._v(e._s(t))])}),1)],2):e._e(),e._v(" "),i("van-cell",{staticClass:"cell",attrs:{title:"@好友",size:"large"},on:{click:function(t){e.userListPopupShow=!0}}}),e._v(" "),0!=e.form.friendsList.length?i("van-cell",{attrs:{"title-class":"duan-cell",size:"large"}},[i("template",{slot:"title"},e._l(e.form.friendsList,function(t,o){return i("span",{key:o,staticClass:"friends-list",on:{click:function(t){e.delFriends(o)}}},[e._v("@"+e._s(t.nickname))])}),0)],2):e._e(),e._v(" "),i("van-field",{staticClass:"cell",attrs:{type:"input",placeholder:"添加位置","left-icon":"location-o",readonly:"",size:"large"},on:{click:function(t){e.positionListPopupShow=!0}},model:{value:e.form.position,callback:function(t){e.$set(e.form,"position",t)},expression:"form.position"}}),e._v(" "),i("van-switch-cell",{staticClass:"cell",attrs:{title:"是否收费"},model:{value:e.form.isfree,callback:function(t){e.$set(e.form,"isfree",t)},expression:"form.isfree"}}),e._v(" "),i("transition",{attrs:{name:"fade"}},[e.form.isfree?i("van-field",{attrs:{title:"价格",placeholder:"金币",size:"large"},model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",t)},expression:"form.price"}}):e._e()],1),e._v(" "),i("van-switch-cell",{staticClass:"cell",attrs:{title:"是否阅后即焚",size:"large"},model:{value:e.form.onceonly,callback:function(t){e.$set(e.form,"onceonly",t)},expression:"form.onceonly"}}),e._v(" "),i("van-cell",{staticClass:"cell",attrs:{title:"分享范围",value:e.owner,"is-link":"",size:"large"},on:{click:function(t){e.pickerPopupShow=!0}}}),e._v(" "),i("van-cell",{staticClass:"submit-cell",attrs:{size:"large"}},[i("van-button",{staticClass:"submit",attrs:{size:"large",hairline:!1},on:{click:e.releaseFn}},[e._v("发布")])],1)],1)],1),e._v(" "),i("van-popup",{attrs:{position:"bottom"},model:{value:e.pickerPopupShow,callback:function(t){e.pickerPopupShow=t},expression:"pickerPopupShow"}},[i("van-picker",{attrs:{"show-toolbar":"",columns:e.columns},on:{cancel:function(t){e.pickerPopupShow=!1},confirm:e.pickerOnConfirm}})],1),e._v(" "),i("van-popup",{staticStyle:{height:"100%"},attrs:{position:"bottom"},model:{value:e.userListPopupShow,callback:function(t){e.userListPopupShow=t},expression:"userListPopupShow"}},[i("userList",{on:{selectUser:e.selectUser}})],1),e._v(" "),i("van-popup",{staticStyle:{height:"100%"},attrs:{position:"bottom"},model:{value:e.positionListPopupShow,callback:function(t){e.positionListPopupShow=t},expression:"positionListPopupShow"}},[i("positionStr",{on:{selectPosition:e.selectPosition}})],1),e._v(" "),i("uploadVideo",{ref:"upload",on:{selectVideo:e.selectVideo}})],1)},S=[];function y(e){i("92a2")}var L=!1,C=y,$="data-v-311cb167",z=null,V=Object(f["a"])(x,P,S,L,C,$,z);t["default"]=V.exports},e17d:function(e,t,i){var o=i("7916");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var a=i("499e").default;a("4a5d974e",o,!0,{})}}]);