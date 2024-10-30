// pages/chaoshi/chaoshi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight:0,
     
    shigetp:[
      {url:'http://sbnpdxvd3.hb-bkt.clouddn.com/store12.jpg',text:'新鲜水果'},
      {url:'http://sbnpdxvd3.hb-bkt.clouddn.com/微信图片_20240306141407.png',text:'新鲜蔬菜'},
      {url:'http://sbnpdxvd3.hb-bkt.clouddn.com/store11.jpg',text:'海鲜水产'},
      {url:'http://sbnpdxvd3.hb-bkt.clouddn.com/store17.jpg',text:'肉禽蛋品'},
      {url:'http://sbnpdxvd3.hb-bkt.clouddn.com/store16.jpg',text:'粮油调味'},
  ],
  shigetp2:[
    {url:'http://sbnpdxvd3.hb-bkt.clouddn.com/store18.jpg',text:'烘焙咖啡'},
    {url:'http://sbnpdxvd3.hb-bkt.clouddn.com/store19.jpg',text:'餐饮熟食'},
    {url:'http://sbnpdxvd3.hb-bkt.clouddn.com/store20.jpg',text:'素食冷冻'},
    {url:'http://sbnpdxvd3.hb-bkt.clouddn.com/store21.jpg',text:'乳品冷饮'},
    {url:'http://sbnpdxvd3.hb-bkt.clouddn.com/store1.jpg',text:'酒水饮料'},
],
   
  },

  // 显示购物车的函数
  
  
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    const that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          // 假设 statusBarHeight 是您用于存储状态栏高度的变量
          statusBarHeight: res.statusBarHeight
        });
      }
    });
  },
  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})