//index.js
//获取应用实例
const app = getApp()

Page({
  /**
    * 页面的初始数据
    */
  data: {
    new: 'top-hoverd-btn',
    good: '',
    child: '',
    mom: '',
    girl: '',
    shoe: '',
    home: '',
    beauti: '',
    food: '',
  },
  toNew:function(event){
      this.updateTabStatus("new")
  },
  toGood: function (event) {
    this.updateTabStatus("good")
  },
  toChild: function (event) {
    this.updateTabStatus("child")
  },
  toMom: function (event) {
    this.updateTabStatus("mom")
  },
  toGirl: function (event) {
    this.updateTabStatus("girl")
  },
  toFood: function (event) {
    this.updateTabStatus("food")
  },
  toBeauti: function (event) {
    this.updateTabStatus("beauti")
  },
  toHome: function (event) {
    this.updateTabStatus("home")
  },
  //更新顶部tab标签状态
  updateTabStatus(key) {
    this.setData({
      new: this.getHovered('new',key),
      good: this.getHovered('good', key),
      child: this.getHovered('child', key),
      mom: this.getHovered('mom', key),
      girl: this.getHovered('girl', key),
      shoe: this.getHovered('shoe', key),
      home: this.getHovered('home', key),
      beauti: this.getHovered('beauti', key),
      food: this.getHovered('food', key),
    }) 
  },
  getHovered:function(src,dest){
    return src === dest ?'top-hoverd-btn':''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
