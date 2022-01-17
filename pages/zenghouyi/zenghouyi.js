// pages/zenghouyi/zenghouyi.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    pageType: 'home', // 页面type值 区分展示模块
    navList: [
      // 主模块-导航列表
      {
        id: 1,
        name: '结构',
        top: 10,
        left: 5,
        key: 'jiegou',
      },
      {
        id: 2,
        name: '细节',
        top: 10,
        left: 30,
        key: 'xijie',
      },
      {
        id: 3,
        name: '译文',
        top: 10,
        left: 55,
        key: 'yiwen',
      },
      {
        id: 4,
        name: '奏乐',
        top: 10,
        left: 80,
        key: 'zouyue',
      },
      {
        id: 5,
        name: '钮钟',
        bottom: 10,
        left: 5,
        key: 'niuzhong',
      },
      {
        id: 6,
        name: '甬钟',
        bottom: 10,
        left: 30,
        key: 'yongzhong',
      },
      {
        id: 7,
        name: '镈钟',
        bottom: 10,
        left: 55,
        key: 'bozhong',
      },
      {
        id: 8,
        name: '分享',
        bottom: 10,
        left: 80,
        key: 'fenxiang',
      },
    ], // 主模块-导航数组
    jiegouFlag: 'size', // 结构-展示内容的flag值
    jiegouTextFlag: 'size', // 结构-结构分类-展示内容的flag值
    jiegou: {
      // 结构-数据对象
      flag: 'size',
      list: [
        {
          key: 'size',
          name: '尺 寸',
        },
        {
          key: 'structure',
          name: '结 构',
        },
      ],
      structureList: [
        {
          key: 'structureTop',
          name: '上 层',
        },
        {
          key: 'structureMiddle',
          name: '中 层',
        },
        {
          key: 'structureBottom',
          name: '下 层',
        },
      ],
      text: {
        size: '曾侯乙编钟，长7.48米，宽3.35米，高2.73米。重2567公斤。',
        structure: '钟架分三层八组悬挂着65件青铜钟。',
        structureTop: '上层分三组钮钟，19件。',
        structureMiddle: '中层分三组甬钟，33件。',
        structureBottom: '下层为两组大型长枚甬钟，12件。下层正中悬挂的是楚惠王送给曾侯乙的意见镈钟。',
      },
    },
    xijieFlag: 'bymw', // 细节-展示内容的flag值
    xijie: {
      // 细节-数据对象
      list: [
        {
          key: 'bymw',
        },
        {
          key: 'jsmw',
        },
        {
          key: 'zj',
        },
        {
          key: 'pj',
        },
      ],
      enum: {
        bymw: {
          name: '标音铭文',
          introduce: '钟架、钟钩、钟体上共有铭文3755字，内容为编号、记事、标音和乐律理论、铭文多数错金。标音铭文标示了钟的悬挂位置或敲击部位及其所发音的名称。',
          src: 'https://baikebcs.bdimg.com/baike-other/digital_museum/zenghouyi/resources/%E6%A0%87%E9%9F%B3%E5%9B%BE1.jpg',
        },
        jsmw: {
          name: '记事铭文',
          introduce: '全部甬钟的记事铭文均有 “曾侯乙作持”5字，标明钟的制作和享用者是曾侯乙。曾侯乙，姓姬名乙。“曾”是国名，“侯”是爵位，“乙”是名字，“曾侯乙”即战国时期曾国一位名叫“乙”的君主。',
          src: 'https://baikebcs.bdimg.com/baike-other/digital_museum/zenghouyi/resources/%E8%AE%B0%E4%BA%8B%E5%9B%BE1.jpg',
        },
        zj: {
          name: '钟架',
          introduce: '由六个青铜佩剑',
          src: 'https://baikebcs.bdimg.com/baike-other/digital_museum/zenghouyi/resources/%E9%92%9F%E6%9E%B6%E5%9B%BE1.jpg',
        },
        pj: {
          name: '配件',
          introduce: '钟架、钟钩、钟体上共有铭文3755字，内容为编号、记事、标音和乐律理论、铭文多数错金。标音铭文标示了钟的悬挂位置或敲击部位及其所发音的名称。',
          src: 'https://baikebcs.bdimg.com/baike-other/digital_museum/zenghouyi/resources/%E9%85%8D%E4%BB%B6%E5%9B%BE1.jpg',
        },
      },
    },
    xijieItem: {}, // 细节-当前选中的对象变量
    yiwenFlag: 'old',
    yiwen: {
      text: '点击铭文图片查看古文对照',
      // 译文-对象变量
      old: 'https://baikebcs.bdimg.com/baike-other/digital_museum/zenghouyi/resources/8%E9%95%88%E9%92%9F%E9%A1%B5_%E9%93%AD%E6%96%87%E6%94%BE%E5%A4%A7%E5%9B%BE-%E9%93%AD.jpg',
      new: 'https://baikebcs.bdimg.com/baike-other/digital_museum/zenghouyi/resources/8%E9%95%88%E9%92%9F%E9%A1%B5_%E9%93%AD%E6%96%87%E6%94%BE%E5%A4%A7%E5%9B%BE-%E8%AF%91.jpg',
      name: '现代译文',
      introduce: ['这篇铭文告诉我们，这件镈钟是楚惠王熊章为曾侯乙制作的一套宗庙祭器之一，放置在西阳，其铭文纪年为楚惠王五十六年，即公元前433年。', '也有学者认为，古书中“返”与“报”两字常互相代用，“报”即报丧的意思。铭文中的“返自西阳”应解释为从西阳得到曾侯乙去世的消息后，楚惠王为曾侯乙制作了镈钟这件祭器。'],
    },
    zouyueFlag: 'cs', // 奏乐-展示内容的flag值
    zouyue: {
      // 奏乐-对象变量
      name: '奏乐',
      introduce: '编钟音域宽广，跨越五个半八度，只比现代钢琴少一个八度，中心音域12个半音齐全。',
      list: [
        {
          key: 'cs',
        },
        {
          key: 'gs',
        },
        {
          key: 'cjhyy',
        },
        {
          key: 'dfg',
        },
      ],
      enum: {
        cs: {
          name: '楚商',
          src: 'https://baikebcs.bdimg.com/baike-other/digital_museum/zenghouyi/resources/%E6%A5%9A%E5%95%86.jpg',
          video: 'https://baikebcs.bdimg.com/baike-other/digital_museum/zenghouyi/resources/%E6%A5%9A%E5%95%86%E7%89%87%E6%AE%B5.mp3',
        },
        gs: {
          name: '国殇',
          src: 'https://baikebcs.bdimg.com/baike-other/digital_museum/zenghouyi/resources/%E5%9B%BD%E6%AE%87.jpg',
          video: 'https://baikebcs.bdimg.com/baike-other/digital_museum/zenghouyi/resources/%E5%9B%BD%E6%AE%87%E7%89%87%E6%AE%B5.mp3',
        },
        cjhyy: {
          name: '春江花月夜',
          src: 'https://baikebcs.bdimg.com/baike-other/digital_museum/zenghouyi/resources/%E6%98%A5%E6%B1%9F.jpg',
          video: 'https://baikebcs.bdimg.com/baike-other/digital_museum/zenghouyi/resources/%E6%98%A5%E6%B1%9F%E8%8A%B1%E6%9C%88%E5%A4%9C%E7%89%87%E6%AE%B5.mp3',
        },
        dfg: {
          name: '东方红',
          src: 'https://baikebcs.bdimg.com/baike-other/digital_museum/zenghouyi/resources/%E4%B8%9C%E6%96%B9.jpg',
          video: 'https://baikebcs.bdimg.com/baike-other/digital_museum/zenghouyi/resources/%E4%B8%9C%E6%96%B9%E7%BA%A2.mp3',
        },
      },
    },
    zouyueItem: {}, // 奏乐-当前选中的对象变量
    niuzhongImgIndex: null,
    niuzhong: {
      // 钮钟-对象变量
      name: '钮钟',
      list: [
        {
          id: 0,
          className: 'niuzhong-item1',
          src: 'https://baikebcs.bdimg.com/baike-other/digital_museum/zenghouyi/resources/3%E9%92%AE%E9%92%9F%E9%A1%B5_1.png',
        },
        {
          id: 1,
          className: 'niuzhong-item2',
          src: 'https://baikebcs.bdimg.com/baike-other/digital_museum/zenghouyi/resources/3%E9%92%AE%E9%92%9F%E9%A1%B5_2.png',
        },
        {
          id: 2,
          className: 'niuzhong-item3',
          src: 'https://baikebcs.bdimg.com/baike-other/digital_museum/zenghouyi/resources/3%E9%92%AE%E9%92%9F%E9%A1%B5_3.png',
        },
        {
          id: 3,
          className: 'niuzhong-item4',
          src: 'https://baikebcs.bdimg.com/baike-other/digital_museum/zenghouyi/resources/3%E9%92%AE%E9%92%9F%E9%A1%B5_4.png',
        },
        {
          id: 4,
          className: 'niuzhong-item5',
          src: 'https://baikebcs.bdimg.com/baike-other/digital_museum/zenghouyi/resources/3%E9%92%AE%E9%92%9F%E9%A1%B5_5.png',
        },
        {
          id: 5,
          className: 'niuzhong-item6',
          src: 'https://baikebcs.bdimg.com/baike-other/digital_museum/zenghouyi/resources/3%E9%92%AE%E9%92%9F%E9%A1%B5_6.png',
        },
        {
          id: 6,
          className: 'niuzhong-item7',
          src: 'https://baikebcs.bdimg.com/baike-other/digital_museum/zenghouyi/resources/3%E9%92%AE%E9%92%9F%E9%A1%B5_7.png',
        },
      ],
      introduce: [
        {
          title: '结构',
          text: ['共三组19件，钟体素面无纹饰，皆铸有铭文。'],
        },
        {
          title: '尺寸',
          text: ['上层三组1号钟最小，通高20.2厘米，重2.4千克。', '上层三组7号钟最大，通高39.9厘米，重11.4千克。'],
        },
      ],
    },
    bozhong: {
      // 镈钟-对象变量
      name: '镈钟',
      sizeText: '高92.5厘米，口径60.5X46.2厘米，重134.8公斤。',
      introduce: '曾侯乙编钟的钟梁上刻有表示悬挂位置的律名，与钟体上的标音铭文相对应。与钟体铭文对照发现，这套编钟的部分钟体发生了位移，缺少了一件最大的甬钟。取代它的，是一件圆形的镈钟，乃是楚惠王赠送给曾侯乙的礼物。因曾楚两国此时关系融洽，曾国十分重视这件礼物，故将镈钟挂在全套编钟最显眼的位置，伴随曾侯乙长眠地下。',
      src: 'https://baikebcs.bdimg.com/baike-other/digital_museum/zenghouyi/resources/8%E9%95%88%E9%92%9F%E9%A1%B5_%E9%8E%9B%E9%92%9F%E4%B8%BB%E4%BD%93.jpg',
    },
    yongzhong: {
      // 甬钟-对象变量
      name: '甬钟',
      introduce: '最大的钟通高153.4厘米，重253.6公斤；最小的钟通高20.2厘米，重2.4公斤。中层一组为短枚钟，共十一件；中层二组为无枚钟，共十二件；中层三组为长枚钟，共十件；下层一组三件，下层二组九件亦为长枚钟，因其形体甚大，亦称大型长枚甬钟。',
      list: [
        {
          id: 1,
          key: 'gan',
          name: '幹',
          introduce: '用于承挂钟钩，使甬钟能侧向钩挂于钟架上。',
          show: false,
          left: 206,
          top: 122,
          introduceLeft: -200,
          introduceTop: -140,
          introduceWidth: 168,
        },
        {
          id: 2,
          key: 'gu',
          name: '枚',
          introduce: '用于抑制钟声中的高频成分，调节钟声音色。',
          show: false,
          top: 228,
          left: 120,
          introduceLeft: -120,
          introduceTop: 84,
          introduceWidth: 168,
        },
        {
          id: 3,
          key: 'gu',
          name: '鼓',
          introduce: '是钟的发声部位“正鼓”底部口沿，正中央的部位。',
          show: false,
          left: 468,
          top: 416,
          introduceLeft: 40,
          introduceTop: -296,
          introduceWidth: 164,
        },
      ],
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},
  /**
   * 导航点击事件-切换当前需要展示的模块内容
   */
  getItemShow(e) {
    let item = e.currentTarget.dataset.item;
    // =>true: 设置细节当前展示的item项
    if (item.key === 'xijie') {
      let { xijie, xijieFlag } = this.data;
      this.setData({
        xijieItem: xijie.enum[xijieFlag],
      });
    } else if (item.key === 'zouyue') {
      // =>true: 设置奏乐当前展示的item项
      let { zouyue, zouyueFlag } = this.data;
      this.setData({
        zouyueItem: zouyue.enum[zouyueFlag],
      });
    }
    this.setData({
      pageType: item.key,
    });
  },
  /**
   * 展示主页内容
   */
  getHome(e) {
    let key = e.currentTarget.dataset.key;
    // 重置变量值
    if (key === 'jiegou') {
      this.setData({
        jiegouFlag: 'size',
        jiegouTextFlag: 'size',
      });
    } else if (key === 'xijie') {
      this.setData({
        xijieItem: {},
        xijieFlag: 'bymw',
      });
    } else if (key === 'zouyue') {
      let { zouyue } = this.data;
      let zouyueFlag = 'cs';
      this.setData({
        zouyueItem: zouyue.enum[zouyueFlag],
        zouyueFlag: 'cs',
      });
    } else if (key === 'yongzhong') {
      let yongzhong = this.data.yongzhong;
      yongzhong.list.map(item => {
        item.show = false;
      });
      this.setData({
        yongzhong: yongzhong,
      });
    } else if (key === 'niuzhong') {
      this.setData({
        niuzhongImgIndex: null,
      });
    } else if (key === 'yewei') {
      this.setData({
        yeweiFlag: 'old',
      });
    }
    this.setData({
      pageType: 'home',
    });
  },
  /**
   * 结构-切换底部导航
   */
  jiegouNavChange(e) {
    let item = e.currentTarget.dataset.item;
    let jiegouFlag = item.key;
    let jiegouTextFlag = item.key;
    this.setData({
      jiegouFlag: jiegouFlag,
      jiegouTextFlag: jiegouTextFlag,
    });
  },
  /**
   * 结构-结构-切换导航
   */
  jiegouStructureNavChange(e) {
    let item = e.currentTarget.dataset.item;
    let jiegouTextFlag = item.key;
    this.setData({
      jiegouTextFlag: jiegouTextFlag,
    });
  },
  /**
   * 细节-切换导航
   */
  xijieGetItemShow(e) {
    let item = e.currentTarget.dataset.item;
    let xijie = this.data.xijie;
    this.setData({
      xijieFlag: item.key,
      xijieItem: xijie.enum[item.key],
    });
  },
  /**
   * 奏乐-切换导航
   */
  zouyueGetItemShow(e) {
    let item = e.currentTarget.dataset.item;
    let zouyue = this.data.zouyue;
    this.setData({
      zouyueFlag: item.key,
      zouyueItem: zouyue.enum[item.key],
    });
  },
  /**
   * 奏乐-播放
   */
  onVideoPlay() {
    //播放
    disabled.ispay = true;
  },
  /**
   * 甬钟-切换导航
   */
  yongzhongGetItemShow(e) {
    let item = e.currentTarget.dataset.item;
    let yongzhong = this.data.yongzhong;
    let list = yongzhong.list;
    let itemNew = list[item.id - 1];
    itemNew.show = !itemNew.show;
    this.setData({
      yongzhong: yongzhong,
    });
  },
  /**
   * 钮钟-点击图片
   */
  niuzhongGetImgIndex(e) {
    let item = e.currentTarget.dataset.item;
    this.setData({
      niuzhongImgIndex: item.id,
    });
  },
  /**
   * 译文-按钮点击
   */
  yiwenChange() {
    let yiwenFlag = this.data.yiwenFlag;
    yiwenFlag = yiwenFlag === 'new' ? 'old' : 'new';
    this.setData({
      yiwenFlag: yiwenFlag,
    });
  },
});
