
Page({
  data:{
    // text:"这是一个页面"
     list:[{img:'../../img/my_health_community_on.png',title:'健康指标'},
     {img:'../../img/my_health_community_un.png',title:'健康监测'},
     {img:'../../img/my_health_on.png',title:'计步器'},
     {img:'../../img/my_health_on.png',title:'心理报告'},
     {img:'../../img/my_health_on.png',title:'中医辨识报告'},
      {img:'../../img/my_health_on.png',title:'中医辨识报告'},
       {img:'../../img/my_health_on.png',title:'中医辨识报告'}
     ],
     index:1,
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
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
  var d =   e.currentTarget.dataset;
    console.log(e.currentTarget.dataset.title);
    switch(d.title){
       case '健康指标':
         wx.navigateTo({
          url: '../detail/detail'
       });
        var that = this
    setTimeout(function () {
      that.setData({
        hidden: true
      })
    }, 1500);
       break;
       case '健康监测':
       break;
       case '计步器':
       break;
    }
  },


})