// pages/showImg/showImg.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    src: '', // 展示的图片
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let src = options.src;
    this.setData({
      src: src,
    });
  },
});
