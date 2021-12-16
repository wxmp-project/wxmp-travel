// pages/home/home.js
const httpUtil = require('../../utils/httpUtil.js');
const configUtil = require('../../utils/configUtil.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    travel: {},
    city: {},
    activityList: [], // 活动
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initData();
    this.getActivityList();
  },
  /**
   * 初始化页面信息
   */
  initData() {
    const that = this;
    httpUtil.http(configUtil.homeList, {}, res => {
      that.setData({
        travel: res['travel'],
        city: res['city'],
      });
    });
  },
  // 获取活动列表
  getActivityList() {
    const that = this;
    httpUtil.http(configUtil.activityList, {}, res => {
      that.setData({
        activityList: res.list,
      });
    });
  },
  // 跳转游记详情
  gotoTravel(e) {
    let id = e.currentTarget.dataset.id;
    wx.redirectTo({
      url: '../travelDetail/travelDetail?id=' + id,
    });
  },
  // 跳转城市详情
  gotoCity(e) {
    let id = e.currentTarget.dataset.id;
    wx.redirectTo({
      url: '../cityDetail/cityDetail?id=' + id,
    });
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
