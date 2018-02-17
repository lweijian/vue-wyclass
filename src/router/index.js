import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Account from '@/components/Account'
import Mystudy from '@/components/Mystudy'
import classify from '@/components/Classify'
import recommend from '@/components/Home/recommend'
import classic from '@/components/Home/classic'
import major from '@/components/Home/major'
import expert from '@/components/Home/expert'
import Coursedetails from '@/components/Coursedetails/Coursedetails'
import introduce from '@/components/Coursedetails/introduce'
import catalog from '@/components/Coursedetails/catalog'
import comment from '@/components/Coursedetails/comment'
import Classifydetails from '@/components/Classifydetails' 
import NotFound from '@/components/NotFound'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children:[
        {
          path: '',
          redirect: 'recommend'
        },
        { path: 'recommend', component: recommend, name: 'recommend' },
        { path: 'classic', component: classic, name: 'classic' },
        { path: 'major', component: major, name: 'major' },
        { path: 'expert', component: expert, name: 'expert' },
      ]
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    },
    {
      path: '/mystudy',
      name: 'Mystudy',
      component: Mystudy
    },
    {
      path: '/classify',
      name: 'Classify',
      component: classify
    },
    {
      path: '/coursedetails',
      name: 'Coursedetails',
      component: Coursedetails,
      children:[
        {
          path: '',
          redirect: 'introduce'
        },
        { path: 'introduce', component: introduce, name: 'introduce' },
        { path: 'catalog', component: catalog, name: 'catalog' },
        { path: 'comment', component:comment, name: 'comment' },
      ]
    },
    {
      path: '/classifydetails',
      name: 'Classifydetails',
      component: Classifydetails,
      children:[
      ]
    },
    {
      path: '*',
      name: 'notfound',
      component: NotFound
    },

  ]
})