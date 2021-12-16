// pages/mine/mine.js
const constant = require('../../utils/constant.js');
const httpUtil = require('../../utils/httpUtil.js');
const configUtil = require('../../utils/configUtil.js');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    travelList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserInfo();
    this.getTravelLists();
  },
  // 设置用户信息
  getUserInfo() {
    let userInfo = wx.getStorageSync('userInfo') || {};
    if (JSON.stringify(userInfo) === '{}') {
      userInfo = {
        nickName: '可爱的网友',
        avatarUrl: '../../images/mine/defaultAvatarUrl.jpeg',
      };
    }

    this.setData({
      userInfo: userInfo,
    });
  },
  // 获取游记数据
  getTravelLists() {
    const that = this;
    httpUtil.http(configUtil.mineTravelList, this.data.userInfo, res => {
      const list = res.list;
      that.setData({
        travelList: list,
      });
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
        this.setData({
          userInfo: userInfo,
        });
      },
    });
  },
  // 跳转我的游记列表
  gotoTravel() {
    if (this.data.travelList.length === 0) {
      wx.showModal({
        title: '温馨提示',
        content: '您暂时还没有发表游记,是否跳转热门游记?',
        success(res) {
          if (res.confirm) {
            wx.redirectTo({
              url: '../travelList/travelList?type=hot',
            });
          } else if (res.cancel) {
            console.log('用户点击取消');
          }
        },
      });
    } else {
      wx.redirectTo({
        url: '../travelList/travelList?type=self',
      });
    }
  },
  // 拨打客服电话
  phoneCall() {
    const phoneNumber = constant.servicePhone;
    wx.makePhoneCall({
      phoneNumber: phoneNumber,
    });
  },
  // 退出登录
  loginOut() {
    wx.setStorageSync('userInfo', {});
    wx.switchTab({
      url: '../home/home',
    });
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
