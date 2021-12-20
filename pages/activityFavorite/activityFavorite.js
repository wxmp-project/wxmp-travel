// pages/activityFavorite/activityFavorite.js
const util = require('../../utils/util.js');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    cityList: [], // 选择的城市列表
    head: {
      tips: '',
      cityText: '',
    }, // 顶部提示
    submitFlag: false, // 是否已提交布尔值 默认-false
    cityInfo: {}, // 缓存的城市信息
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setCityList();
  },
  // 回显选择的城市
  setCityList() {
    let cityInfo = wx.getStorageSync('cityInfo') || {};
    let cityList = cityInfo.cityList ? cityInfo.cityList : [];
    let obj = {
      no: {
        tips: '您还没有选择喜爱的城市',
        cityText: '选择城市',
      },
      has: {
        tips: '您选择的喜爱的城市列表如下',
        cityText: '更换城市',
      },
    };
    let type = cityList.length != 0 ? 'has' : 'no';
    let head = obj[type];
    let canSubmitFlag = false;
    if (cityList.length != 0) {
      cityList.map(item => {
        item.stars = item.stars ? item.stars : 0;
      });
      canSubmitFlag = cityList.every(item => item.stars != 0);
    }

    this.setData({
      cityList: cityList,
      head: head,
      cityInfo: cityInfo,
      submitFlag: !canSubmitFlag,
    });
  },
  // 事件监听
  setStartCount: function (e) {
    let detail = e.detail; // 子组件通信传的值
    let cityList = [].concat(this.data.cityList);
    cityList[detail.index].stars = detail.starCount;
    this.setData({
      cityList: cityList,
    });
  },
  // 提交
  submit() {
    let canSubmitFlag = this.data.cityList.every(item => item.stars != 0);
    if (!canSubmitFlag) {
      wx.showModal({
        title: '温馨提示',
        content: '您还没对城市评价，请先评价',
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定');
          } else if (res.cancel) {
            console.log('用户点击取消');
          }
        },
      });
    } else {
      let cityInfo = {
        ...this.data.cityInfo,
        cityList: this.data.cityList,
      };
      wx.setStorageSync('cityInfo', cityInfo);
      util.commonRedirectToNext('pages/home/home');
    }
  },
  /**
   * 跳转省份列表
   */
  goto() {
    wx.navigateTo({
      url: '../provinceList/provinceList?next=pages/activityFavorite/activityFavorite',
    });
  },
});
