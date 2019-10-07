import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/index'
import All from '@/components/topics/all'
import Good from '@/components/topics/good'
import Ask from '@/components/topics/ask'
import Share from '@/components/topics/share'
import Job from '@/components/topics/job'
import Dev from '@/components/topics/dev'

// 引入列表内容详情
import Show from '@/components/topics/show'
// 引入加载组件
import Loading from '@/components/loading/loading'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path:'/all',
      name:'all',
      component:All,
    },
    {
      path:'/good',
      name:'good',
      component:Good,
    },
    {
      path:'/ask',
      name:'ask',
      component:Ask,
    },
    {
      path:'/share',
      name:'share',
      component:Share,
    },
    {
      path:'/job',
      name:'job',
      component:Job,
    },
    {
      path:'/dev',
      name:'dev',
      component:Dev,
    },
    {
      path:'/show/:id',
      name:'show',
      component:Show,
    },
    {
      path:'/loading',
      name:'loading',
      component:Loading
    }
  ]
})
