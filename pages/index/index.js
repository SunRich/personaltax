//index.js
//获取应用实例
var app = getApp()
Page({
  formSubmit: function(e) {
    var url='/pages/tax/tax?beginMoney='+e.detail.value.beginMoney+'&wage='+e.detail.value.wage;
    wx.navigateTo({
      url: url
    })
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  formReset: function() {
    console.log('form发生了reset事件')
  }
})
