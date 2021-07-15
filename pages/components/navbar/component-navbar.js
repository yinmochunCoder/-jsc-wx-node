// pages/components/navbar/component-navbar.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    height: '',
  },



  /**
   * 组件的方法列表
   */
  methods: {

  },

  /**
   * 组件生命周期
   */
  lifetimes: {
    // 组件初始化
    attached() {
      this.setData({
        height: app.globalData.height * 2
      })
    }
  }

})
