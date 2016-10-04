
var network_util = require('../../utils/network_util.js');
var json_util = require('../../utils/json_util.js');
Page({
  data:{
    // text:"这是一个页面"
    list:[],
     dd:'',
     hidden:false,
     page: 1,
     size: 20,
     hasMore:true,
     hasRefesh:false
  },
  onLoad:function(options){
    var that = this;
    var url = 'http://v.juhe.cn/weixin/query?key=f16af393a63364b729fd81ed9fdd4b7d&pno=1&ps=10';
    network_util._get(url,
    function(res){
    that.setData({
       list:res.data.result.list,
       hidden: true,
    });
    },function(res){
     console.log(res);
 });
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
   //事件处理函数
  bindViewTap: function(e) {
    console.log(e.currentTarget.dataset.title);
  },

  loadMore: function(e) {
     var that = this;
    that.setData({
    hasRefesh:true,});
    if (!this.data.hasMore) return
    var url = 'http://v.juhe.cn/weixin/query?key=f16af393a63364b729fd81ed9fdd4b7d&pno='+(++that.data.page)+'&ps=10';
    network_util._get(url,
    function(res){
    that.setData({
       list: that.data.list.concat(res.data.result.list),
       hidden: true,
       hasRefesh:false,
    });
    },function(res){
     console.log(res);
  })
},

refesh: function(e) {
 var that = this;
 that.setData({
    hasRefesh:true,
 });
    var url = 'http://v.juhe.cn/weixin/query?key=f16af393a63364b729fd81ed9fdd4b7d&pno=1&ps=10';
    network_util._get(url,
    function(res){
    that.setData({
      list:res.data.result.list,
       hidden: true,
       page:1,
       hasRefesh:false,
    });
    },function(res){
     console.log(res);
 })
},
})