//index.js
//获取应用实例
var app = getApp()
Page({
  formSubmit: function(e) {
    if(e.detail.value.wage>e.detail.value.social){
      var url='/pages/tax/tax?beginMoney='+e.detail.value.beginMoney+'&wage='+e.detail.value.wage+'&social='+e.detail.value.social;
      wx.navigateTo({
        url: url
      })
    }else{
      this.openAlert();
    }


    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  formReset: function() {
    console.log('form发生了reset事件')
  },
  openAlert: function () {
    wx.showModal({
      content: '税前工资必须大于社保公积金(个人部分',
      showCancel: false
    });
  }
})
