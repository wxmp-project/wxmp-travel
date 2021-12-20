// component/stars/starts.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //是否可以点击
    canSelect: {
      type: Boolean,
      value: true,
    },
    //星星个数
    starCount: {
      type: Number,
      value: 5,
    },
    // 当前引用组件的子项的索引 当父组件是数组时有效
    index: {
      type: Number,
      value: 0,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    imgs: [
      {
        id: 1,
      },
      {
        id: 2,
      },
      {
        id: 3,
      },
      {
        id: 4,
      },
      {
        id: 5,
      },
    ],
    starNoSelect: '/images/icon/star-noSelect.png',
    starSelect: '/images/icon/star-select.png',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 更新星星颜色 内部方法建议以下划线开头
    _changeColor: function (e) {
      let starCount = e.currentTarget.dataset.index;
      this.setData({
        starCount: starCount,
      });
      let myEventDetail = {
        starCount: starCount,
        index: this.data.index,
      };
      this.triggerEvent('myevent', myEventDetail);
    },
  },
});
