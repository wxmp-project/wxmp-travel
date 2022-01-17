// pages/zenghouyi/zenghouyi.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    bozhong: {
      // 镈钟-对象变量
      name: '镈钟',
      sizeText: '高92.5厘米，口径60.5X46.2厘米，重134.8公斤。',
      introduce: '曾侯乙编钟的钟梁上刻有表示悬挂位置的律名，与钟体上的标音铭文相对应。与钟体铭文对照发现，这套编钟的部分钟体发生了位移，缺少了一件最大的甬钟。取代它的，是一件圆形的镈钟，乃是楚惠王赠送给曾侯乙的礼物。因曾楚两国此时关系融洽，曾国十分重视这件礼物，故将镈钟挂在全套编钟最显眼的位置，伴随曾侯乙长眠地下。',
      src: 'https://baikebcs.bdimg.com/baike-other/digital_museum/zenghouyi/resources/8%E9%95%88%E9%92%9F%E9%A1%B5_%E9%8E%9B%E9%92%9F%E4%B8%BB%E4%BD%93.jpg',
    },
  },
  /**
   * 展示主页内容
   */
  getHome() {
    this.setData({
      pageType: 'home',
    });
  },
});
