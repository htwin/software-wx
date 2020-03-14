//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   
    classifySofts: []
  },
  
  onLoad: function () {
    var _this = this;
    wx.request({
      url: 'http://localhost:9001/soft/classifySoft',
      success(res) {
        _this.setData({
          classifySofts:res.data.data
        })
      }
    })
  },
  
})
