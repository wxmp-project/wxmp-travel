// pages/authorize/authorize.js
const util = require('../../utils/util.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    next: '', // 跳转链接
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let next = options.next;
    this.setData({
      next: next,
    });
  },
  // 获取用户的授权信息
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: res => {
        console.log(res, 'getUserProfile');
        const userInfo = res.userInfo;
        wx.setStorageSync('userInfo', userInfo);
        util.commonRedirectToNext(this.data.next);
      },
    });
  },
});
