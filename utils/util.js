const formatTime = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`;
};

const formatNumber = n => {
  n = n.toString();
  return n[1] ? n : `0${n}`;
};
// 日期格式化
const dateFormatter = (date, fmt) => {
  date = date.constructor === Date ? date : new Date(Number(date));
  var o = {
    'y+': date.getFullYear(),
    'M+': date.getMonth() + 1, //月份
    'd+': date.getDate(), //日
    'h+': date.getHours(), //小时
    'm+': date.getMinutes(), //分
    's+': date.getSeconds(), //秒
    'q+': Math.floor((date.getMonth() + 3) / 3), //季度
    'S+': date.getMilliseconds(), //毫秒
  };
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      if (k == 'y+') {
        fmt = fmt.replace(RegExp.$1, ('' + o[k]).substr(4 - RegExp.$1.length));
      } else if (k == 'S+') {
        var lens = RegExp.$1.length;
        lens = lens == 1 ? 3 : lens;
        fmt = fmt.replace(RegExp.$1, ('00' + o[k]).substr(('""' + o[k]).length - 1, lens));
      } else {
        fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
      }
    }
  }
  return fmt;
};

/**
 * 公共跳转处理
 * @param {string} url 最终跳转链接
 * @return {void} 无
 */
const commonRedirectToNext = url => {
  /** @name 底部tab的路由 */
  const tabList = ['pages/mine/mine', 'pages/home/home'];
  // =>true: 属于底部tab的路由使用wx.switchTab
  if (tabList.filter(item => url.indexOf(item) !== -1).length) {
    wx.switchTab({
      url: '/' + url,
    });
  } else {
    wx.redirectTo({
      url: '/' + url,
    });
  }
};

module.exports = {
  formatTime,
  dateFormatter,
  commonRedirectToNext,
};
