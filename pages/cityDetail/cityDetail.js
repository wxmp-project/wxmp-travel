// pages/cityDetail/cityDetail.js
const httpUtil = require('../../utils/httpUtil.js');
const configUtil = require('../../utils/configUtil.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    httpUtil.http(configUtil.cityDetailById, { id: options.id }, res => {
      this.setBarTitle(res.title);
      let detail = res;
      this.setData({
        detail: detail,
      });
    });
  },
  // 设置页面标题
  setBarTitle(title) {
    wx.setNavigationBarTitle({
      title: title,
    });
  },
});
