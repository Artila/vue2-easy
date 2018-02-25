import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   // 按需加载组件
    //   component: r => require.ensure([], () => r(require('@/components/HelloWorld')), 'HelloWorld')
    // }
    {
      path: '/',
      name: 'Home',
      // 按需加载组件
      component: r => require.ensure([], () => r(require('@/page/home')), 'Home')
    },
    {
      path: '/item',
      name: 'Item',
      component: r => require.ensure([], () => r(require('@/page/item')), 'Item')
    },
    {
      path: '/score',
      name: 'Score',
      component: r => require.ensure([], () => r(require('@/page/score')), 'Score')
    }
  ]
})
