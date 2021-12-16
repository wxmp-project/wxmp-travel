// pages/travelList/travelList.js
const httpUtil = require('../../utils/httpUtil.js');
const configUtil = require('../../utils/configUtil.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [], // 页面展示数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setBarTitle(options.type);
    this.getTravelLists();
  },
  // 获取游记数据
  getTravelLists() {
    const that = this;
    let userInfo = wx.getStorageSync('userInfo') || {};
    userInfo.skipIdFlag = true;
    httpUtil.http(configUtil.mineTravelList, userInfo, res => {
      const list = res.list;
      that.setData({
        list: list,
      });
    });
  },
  // 设置页面标题
  setBarTitle(type) {
    const title = {
      hot: '热门游记',
      self: '我的游记',
    };
    wx.setNavigationBarTitle({
      title: title[type],
    });
  },
  // 跳转游记详情
  goto(e) {
    let id = e.currentTarget.dataset.id;
    wx.redirectTo({
      url: '../travelDetail/travelDetail?id=' + id,
    });
  },
});
