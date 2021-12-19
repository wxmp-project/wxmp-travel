// pages/provinceList/provinceList.js
const httpUtil = require('../../utils/httpUtil.js');
const configUtil = require('../../utils/configUtil.js');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [], // 城市列表
    next: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList();
    this.setData({
      next: options.next,
    });
  },
  /**
   * 获取省份列表
   */
  getList() {
    const that = this;
    httpUtil.http(configUtil.getProvinceList, {}, res => {
      that.setData({
        list: res,
      });
    });
  },
  // 跳转
  goto(e) {
    let province = e.currentTarget.dataset.province;
    wx.navigateTo({
      url: '../cityList/cityList?provinceName=' + province.provinceName + '&provinceId=' + province.provinceId + '&next=' + this.data.next,
    });
  },
});
