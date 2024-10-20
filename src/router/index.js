import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory('/base-site/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView, 
      children:[
        {
          path: 'base-site',
          component: () => import('../views/AboutView.vue'), 
          name: 'base-site',   
          children:[
            {
              path:'book-detail',
              component:() =>import('../components/BookDetail.vue'),
              name: 'book-detail'
            }
           
          ]
        }     
          
      ]
    },
    
  ]
})
router.beforeEach((to,from)=>{
  // if(to.path == '/book-detail'){
  //   console.log('book-detail')
  //   return 'base-site/book-detail'
  // }
  console.log('to',to)
  console.log('from',from)
})

export default router
