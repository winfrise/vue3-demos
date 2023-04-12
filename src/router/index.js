import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  // {
  //   path: '/',
  //   redirect: '/home'
  // },
  // {
  //   path: '/home',
  //   component: () => import('@/pages/home/index.vue'),
  //   meta: {
  //     title: '首页'
  //   }
  // },
  // {
  //   path: '/loading-shake',
  //   component: () => import('@/pages/loading-shake/index.vue'),
  //   meta: {
  //     title: 'Loding抖动问题'
  //   }
  // },
  // {
  //   path: '/overflow-tooltip',
  //   component: () => import('@/pages/overflow-tooltip/index.vue'),
  //   meta: {
  //     title: 'Overflow Tooltip 实现'
  //   }
  // }
]

// 动态引入路由
const routerFiles = import.meta.glob('../pages/**/router.json')
for (const key in routerFiles) {
  await routerFiles[key]().then(res => {
    console.log(res, 'res')
    console.log(key, 'key')
    const folderName = key.match(/\.\/pages\/([\w-]+)\/router\.json/)[1]
    routes.push({
      path: res.path,
      name: res.name,
      component: () => import(`@/pages/${folderName}/index.vue`),
      meta: {
        title: res.meta.title
      }
    })
  })
}

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
  window.scrollTo({top: 0, left: 0})
  document.title = to.meta.title
  next()
})

export default router
