// pages/components/menu/component-menu.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    menus: {
      type: Array,
      value: []
    }
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
    goToMenu(e) {
      let [title] = [e.currentTarget.dataset.item.title]
      console.log(title)
      const urls = {
        "成功": "/pages/success/success",
        "警告": "/pages/warn/warn",
        "等待": "/pages/wait/wait",
        "错误": "/pages/errorP/error"
      }
      return this.toPages(urls[title])
    },
    // 对应跳转页面
    toPages(url) {
      wx.navigateTo({
        url: url,
      })
    }
  }
})
