# WeiXinProject
微信小程序实现--列表的上拉刷新和上拉加载

微信小程序可谓是9月21号之后最火的一个名词了，一经出现真是轰炸了整个开发人员，当然很多App开发人员有了一个担心，微信小程序的到来会不会让移动端App颠覆，让移动端的程序员失业，身为一个Android开发者我是不相信的，即使有，那也是需要个一两年的过度和打磨才能实现的吧。 

不管微信小程序是否能颠覆当今的移动开发格局，我们都要积极向上的心态去接收，去学习。不排斥新技术，所以，心动不如行动，赶紧先搭建一个微信小程序开发工具。那么接下来就让我们来开始学习列表的上拉加载和下拉刷新的实现吧（通过聚合数据平台获取微信新闻）。

##1.介绍几个组件

###1.1 scroll-view 组件 

![这里写图片描述](http://img.blog.csdn.net/20161004103844128)

  注意：使用竖向滚动时，需要给<scroll-view/>一个固定高度，通过 WXSS 设置 height。
###1.2 image组件

![这里写图片描述](http://img.blog.csdn.net/20161004110941566)


注意：mode有12种模式，其中3种是缩放模式，9种是裁剪模式。
###1.3 Icon组件
![这里写图片描述](http://img.blog.csdn.net/20161004111410072)

iconType: [
      'success', 'info', 'warn', 'waiting', 'safe_success', 'safe_warn',
      'success_circle', 'success_no_circle', 'waiting_circle', 'circle', 'download',
      'info_circle', 'cancel', 'search', 'clear'
    ]
## 2.列表的上拉加载和下拉刷新的实现

##2.1先来张效果图
![这里写图片描述](http://img.blog.csdn.net/20161004115244341 )
##2.2逻辑很简单，直接上代码
###2.2.1  detail.wxml 布局文件
```
<loading hidden="{{hidden}}" bindchange="loadingChange">
    加载中...
  </loading>  
 <scroll-view scroll-y="true" style="height: 100%;" bindscrolltolower="loadMore" bindscrolltoupper="refesh">
      <view wx:if="{{hasRefesh}}" style="display: flex;flex-direction: row;align-items: center;align-self: center;justify-content: center;">
      <icon type="waiting" size="45"/><text>刷新中...</text></view>
      <view wx:else  style="display:none" ><text></text></view>
  <view class="lll"  wx:for="{{list}}" wx:for-item="item" bindtap="bindViewTap" 
         data-title="{{item.title}}" >
      <image style=" width: 50px;height: 50px;margin: 20rpx;" src="{{item.firstImg}}"   ></image>
      <view  class="eee" > 
       <view style="margin:5px;font-size:8px"> 标题:{{item.title}}</view>
       <view style="margin:5px;color:red;font-size:6px"> 来源:{{item.source}}</view>
       </view>
</view>
<view class="tips1">
      <view wx:if="{{hasMore}}" style="display: flex;flex-direction: row;align-items: center;align-self: center;justify-content: center;">
      <icon type="waiting" size="45"/><text>玩命的加载中...</text></view>
      <view wx:else><text>没有更多内容了</text></view>
    </view>
 </scroll-view>

```
###2.2.1  detail.js逻辑代码文件

```

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
   //点击事件处理
  bindViewTap: function(e) {
    console.log(e.currentTarget.dataset.title);
  },
  //加载更多
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
//刷新处理
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
```

最后的效果：
![这里写图片描述](http://img.blog.csdn.net/20161004121453294)


关于新闻的详情实现，后面在实现，由于还不知道怎么加载h5页面。谢谢你学习，有问题直接QQ（1561281670）交流。



