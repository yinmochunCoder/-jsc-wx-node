// pages/components/component-header.js
Component({
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goToPages() {
      wx.navigateTo({
        url: '/pages/navigations/navigations',
      })
    }
  }
})
