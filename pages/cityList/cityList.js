// pages/cityList/cityList.js
const httpUtil = require('../../utils/httpUtil.js');
const configUtil = require('../../utils/configUtil.js');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    province: {}, // 选择的省份数据
    inputValue: '', // 输入框值
    list: [], // 城市列表
    chooseCityList: [], // 已选城市列表
    chooseCityShow: false,
    allChecked: false, // 是否进行了全选操作
    allCheckedHalf: false, // 是否只选择了部分
    next: '',
    listInit: [], // 列表初始化
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setCityInfo(options);
    this.getList(options);
    this.setChooseCityList(options);
  },
  // 回显城市
  setCityInfo(options) {
    if (options.hasOwnProperty('provinceId')) {
      this.setData({
        province: {
          ...options,
        },
        next: options.next,
      });
    }
  },
  /**
   * 获取省份列表
   */
  getList(options) {
    const that = this;
    httpUtil.http(configUtil.getCityList, { ...options }, res => {
      that.setData({
        list: res,
        listInit: res,
      });
    });
  },
  // 初始化列表选中状态
  setListInit(listInit, values) {
    listInit.forEach(item => {
      item.list.map(itx => {
        itx.checked = false;
        if (values.includes(String(itx.cityId))) {
          itx.checked = true;
        }
      });
    });
    return listInit;
  },
  // 回显选择的城市
  setChooseCityList(options) {
    let cityInfo = wx.getStorageSync('cityInfo') || {};
    let chooseCityList = [];
    let chooseCityListInit = cityInfo.cityList ? cityInfo.cityList : [];
    // 重置页面列表选中状态
    let listInit = [].concat(this.data.list);
    if (chooseCityListInit.length != 0 && cityInfo.provinceId == options.provinceId) {
      chooseCityList = [].concat(chooseCityListInit);
      let values = chooseCityList.map(item => {
        return String(item.cityId);
      });
      console.log(values, 'values');
      listInit = this.setListInit(listInit, values);
      this.countAllChooseFlag(listInit, chooseCityList);
    }
    this.setData({
      chooseCityList: chooseCityList,
      list: listInit,
    });
  },
  // 重新选择省份
  gotoProvince() {
    wx.navigateTo({
      url: '../provinceList/provinceList?next=' + this.data.next,
    });
  },
  // 输入框值
  bindKeyInput(e) {
    this.setData({
      inputValue: e.detail.value,
    });
    this.wxSearchInput(e.detail.value);
  },
  //实时搜索
  wxSearchInput: function (value) {
    let listInit = [].concat(this.data.listInit);
    let newArr = [];
    if (value) {
      let newList = [].concat(listInit);
      newArr = newList.filter(data => {
        let lists = data.list.filter(city => {
          return city.cityName.indexOf(value) != -1;
        });

        if (lists.length == 0) {
          return false;
        } else {
          data.list = lists;
          return true;
        }
      });
    } else {
      newArr = [].concat(listInit);
    }
    this.setData({
      list: newArr,
    });
  },
  // 已选列表弹窗-打开
  chooseCityOpen() {
    this.setData({
      chooseCityShow: true,
    });
  },
  // 已选列表弹窗-关闭
  chooseCityClose() {
    this.setData({
      chooseCityShow: false,
    });
  },
  // 计算是否全部选择了
  countAllChooseFlag(list, chooseCityList) {
    let allChecked = false;
    let allCheckedHalf = false;
    let listInit = [];
    list.forEach(item => {
      item.list.forEach(itx => {
        listInit.push(itx);
      });
    });

    if (chooseCityList.length != 0 && chooseCityList.length != listInit.length) {
      allCheckedHalf = true;
    }
    if (chooseCityList.length == listInit.length) {
      allChecked = true;
    }
    this.setData({
      allChecked: allChecked,
      allCheckedHalf: allCheckedHalf,
    });
  },
  // 已选列表弹窗-删除
  chooseCityDelete(e) {
    let chooseCityList = [].concat(this.data.chooseCityList);
    let chooseCityIndex = e.currentTarget.dataset.chooseCityIndex;
    chooseCityList.splice(chooseCityIndex, 1);
    // 重置页面列表选中状态
    let listInit = [].concat(this.data.list);
    let values = chooseCityList.map(item => {
      return item.cityId;
    });
    listInit = this.setListInit(listInit, values);
    this.countAllChooseFlag(listInit, chooseCityList);
    this.setData({
      chooseCityList: chooseCityList,
      list: listInit,
    });
  },
  // 选择城市
  checkboxChange(e) {
    let chooseCityList = [];
    let listInit = [].concat(this.data.list);
    const values = e.detail.value;
    listInit = this.setListInit(listInit, values);
    listInit.forEach(item => {
      item.list.forEach(itx => {
        if (itx.checked) {
          chooseCityList.push(itx);
        }
      });
    });
    this.countAllChooseFlag(listInit, chooseCityList);
    this.setData({
      chooseCityList: chooseCityList,
    });
  },
  // 全选操作
  selectAll(e) {
    let allChecked = !this.data.allChecked;
    let listInit = [].concat(this.data.list);
    let chooseCityList = [];
    if (allChecked) {
      listInit.map(item => {
        item.list.map(itx => {
          itx.checked = true;
          chooseCityList.push(itx);
        });
      });
    } else {
      listInit.map(item => {
        item.list.map(itx => {
          itx.checked = false;
        });
      });
    }
    this.setData({
      allChecked: allChecked,
      list: listInit,
      chooseCityList: chooseCityList,
      allCheckedHalf: false,
    });
  },
  // 确定操作
  defineOperate() {
    let cityInfo = {
      cityList: this.data.chooseCityList,
      ...this.data.province,
    };
    wx.setStorageSync('cityInfo', cityInfo);
    wx.navigateTo({
      url: '/' + this.data.next,
    });
  },
});
