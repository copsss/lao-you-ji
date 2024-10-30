const app = getApp();
var inputVal = ''; // 用户输入的内容
var msgList = []; // 消息列表
var windowWidth = wx.getSystemInfoSync().windowWidth; // 设备窗口宽度
var windowHeight = wx.getSystemInfoSync().windowHeight; // 设备窗口高度
var keyHeight = 0; // 键盘高度

/**
 * 初始化数据函数
 * @param {Object} that 当前页面的this对象
 */
function initData(that) {
  inputVal = ''; // 初始化输入框为空
  msgList = [{
    speaker: 'server', // 发言者为服务器
    contentType: 'text', // 内容类型为文本
    content: '你好，我是人工智能助手，请问有什么可以帮你？' // 默认欢迎消息
  }];
  that.setData({
    msgList,
    inputVal
  });
}

/**
 * 发送消息
 * @param {String} msg 要发送的消息内容
 * @param {Object} that 当前页面的this对象
 */
function sendMessage(msg, that) {
  if (msg.trim() === '') { // 输入内容为空时不处理
    return;
  }
  let message = { 
    speaker: 'customer', // 发言者为客户
    contentType: 'text',
    content: msg
  };
  msgList.push(message);
  that.setData({
    msgList,
    inputVal: ''
  });
  wx.cloud.callFunction({
    name: 'request',
    data: { phone: msg },
    success: function (res) {
      const { status, message } = res.result;
      msgList.push({
        speaker: 'server',
        contentType: 'text',
        content: message
      });
      that.setData({ msgList });
      scrollToLastMessage(that);
    },
    fail: function () {
      msgList.push({
        speaker: 'server',
        contentType: 'text',
        content: '访问失败，请稍后再试'
      });
      that.setData({ msgList });
      scrollToLastMessage(that);
    }
  });
  
  
  
}

/**
 * 滚动到最新消息
 * @param {Object} that 当前页面的this对象
 */
function scrollToLastMessage(that) {
  that.setData({
    toView: 'msg-' + (msgList.length - 1)
  });
}

Page({
  data: {
    scrollHeight: '100vh',
    inputBottom: 0
  },

  onLoad: function (options) {
    initData(this);
  },

  focus: function (e) {
    let navBarHeight = wx.getSystemInfoSync().statusBarHeight + 44;
    keyHeight = e.detail.height - navBarHeight;
    this.setData({
      scrollHeight: `${windowHeight - keyHeight}px`,
      inputBottom: `${keyHeight}px`,
      toView: 'msg-' + (msgList.length - 1)
    });
  },

  blur: function (e) {
    this.setData({
      scrollHeight: '100vh',
      inputBottom: 0,
      toView: 'msg-' + (msgList.length - 1)
    });
  },

  sendClick: function (e) {
    sendMessage(e.detail.value, this);
  },

  toBackClick: function () {
    wx.navigateBack({});
  }
});
