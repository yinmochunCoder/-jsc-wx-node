// pages/home/main.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuList: [
     {
       type: 'success',
       title: '成功'
     },
     {
      type: 'warn',
      title: '警告'
    },
    {
      type: 'waiting',
      title: '等待'
    },
    {
      type: 'cancel',
      title: '错误'
    },
    {
      type: 'download',
      title: '下载'
    },
    ],
    height: '',
    scrollContents: [
      {
        alt: '背景1',
        src: 'https://images.unsplash.com/photo-1565699894576-1710004524ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1832&q=80'
      },
      {
        alt: '背景2',
        src: 'https://images.unsplash.com/photo-1566402441483-c959946717ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80'
      },
      {
        alt: '背景3',
        src: 'https://images.unsplash.com/photo-1566378955258-7633cb5c823e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
      }
    ]
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
    this.setData({
      height: app.globalData.height * 2
    })
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

  },
  saveTheimage(e) {
    console.log(e.detail)
  },
  methods: {
   
  }
})