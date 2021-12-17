// pages/travelList/travelList.js
const httpUtil = require('../../utils/httpUtil.js');
const configUtil = require('../../utils/configUtil.js');
const util = require('../../utils/util.js');

const date = new Date();
var year = date.getFullYear();
var month = date.getMonth();
var minValue = new Date().getTime() - 2 * 365 * 24 * 60 * 60 * 1000;
var maxValue = new Date().getTime();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [], // 页面展示数据
    searchTimeText: `${year}年${month + 1}月`, // 页面展示日期
    createStartTime: util.dateFormatter(minValue, 'yyyy-MM'), // 可选的最早日期
    createEndTime: util.dateFormatter(maxValue, 'yyyy-MM'), // 可选的最晚日期
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
    type = type ? type : 'hot';
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
  // 选择日期
  getDateTime: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    let value = e.detail.value;
    let list = value.split('-');
    let syear = list[0];
    let smonth = list[1];
    // 重新请求列表数据并设置年份回显
    this.setData({
      searchTimeText: `${syear}年${smonth}月`,
    });
  },
});
