// pages/components/component-scroll.js
const order = ['demo1', 'demo2', 'demo3']

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    scrollContents: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    toView: 'green'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    scroll(e) {
      console.log(e)
    },
    seeImageInfo(e) {
      let src = e.currentTarget.dataset.image;
      this.triggerEvent('tapImage', src, {})
    }
  },
  
})
