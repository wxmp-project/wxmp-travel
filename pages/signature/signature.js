// pages/signature/signature.js
Page({
  data: {
    ctx: null,
    width: null,
    height: null,
    drawCount: 0,
    drawState: 'init',
  },
  onShow: function () {
    this.initCanvas();
  },
  initCanvas() {
    let { width, height } = this.data;
    width = wx.getSystemInfoSync().windowWidth;
    height = wx.getSystemInfoSync().windowHeight;
    console.log(wx.getSystemInfoSync());
    this.data.ctx = wx.createCanvasContext('canvas');
    this.setData({
      width,
      height,
    });
    this.clearCanvas();
  },
  clearCanvas() {
    this.data.drawCount = 0;
    this.data.drawState = 'ing';
    this.data.ctx.setTextBaseline('top');
    this.data.ctx.setTextAlign('center');
    this.data.ctx.setFontSize(20);
    this.data.ctx.setFillStyle('#616165');
    this.data.ctx.fillText('请灰色区域内完成签名', this.data.width / 2, 30);
    this.data.ctx.draw(false);
  },
  catchtouchstart(e) {
    if (this.data.drawCount == 0) {
      this.data.ctx.draw(false);
    }
    this.data.drawCount++;
    this.data.ctx.moveTo(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
  },
  catchtouchmove(e) {
    if (this.data.drawState == 'stop') return;
    this.data.drawState = 'ing';
    if (e.touches.length > 1) {
      return;
    }
    this.data.ctx.setStrokeStyle('#000000');
    this.data.ctx.setLineWidth(3);
    this.data.ctx.setShadow(0, 0, 0.5, '#000000');
    this.data.ctx.setLineCap('round');
    this.data.ctx.setLineJoin('round');
    this.data.ctx.lineTo(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
    this.data.ctx.stroke();
    this.data.ctx.draw(true);
    this.data.ctx.moveTo(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
  },
  canvasToImg() {
    if (this.data.drawState == 'init') return;
    this.data.drawState = 'stop';
    wx.canvasToTempFilePath({
      canvasId: 'canvas',
      success: res => {
        console.log(res.tempFilePath);
        // ...
        // 上传服务器
        wx.navigateTo({
          url: '/pages/showImg/showImg?src=' + res.tempFilePath,
        });
      },
    });
  },
});
