// pages/zixun/zixun.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   dz:'http://sbnpdxvd3.hb-bkt.clouddn.com/icons8-thumb-24.png',
   fule:true
  },
  onLikeTap: function(e) {
    this.setData({
      dz:'http://sbnpdxvd3.hb-bkt.clouddn.com/icons8-thumb-24 (1).png',
    })
    
    
  
  },
  onReplyTap: function(event) {
    // 处理回复逻辑
    console.log("回复");
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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