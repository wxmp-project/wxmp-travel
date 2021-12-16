// pages/travelDetail/travelDetail.js
const httpUtil = require('../../utils/httpUtil.js');
const configUtil = require('../../utils/configUtil.js');
const util = require('../../utils/util.js');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    detail: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    httpUtil.http(configUtil.travelDetailById, { id: options.id }, res => {
      this.setBarTitle(res.title);
      let detail = res;
      detail.announceTime = util.dateFormatter(res.announceTime || 0, 'yyyy-MM-dd');
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
