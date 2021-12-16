Component({
  data: {
    selected: 0,
    color: '#A0A3B1',
    selectedColor: '#007AF5',
    list: [
      {
        pagePath: '/pages/home/home',
        iconPath: '/images/icon/home-unselected.png',
        selectedIconPath: '/images/icon/home-selected.png',
        text: '首页',
      },
      {
        pagePath: '/pages/mine/mine',
        iconPath: '/images/icon/mine-unselected.png',
        selectedIconPath: '/images/icon/mine-selected.png',
        text: '我的',
      },
    ],
  },
  ready() {
    this.tabChange();
  },
  attached() {},
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset;
      const url = data.path;
      wx.switchTab({ url });
    },
    tabChange() {
      const pages = getCurrentPages(); //获取加载的页面
      const currentPage = pages[pages.length - 1]; //获取当前页面的对象
      const url = currentPage.route; //当前页面url

      const list = this.data.list;
      let selected = 0;
      list.forEach((item, index) => {
        if (item.pagePath.indexOf(url) != -1) {
          selected = index;
        }
      });
      this.setData({
        selected: selected,
      });
    },
  },
});
