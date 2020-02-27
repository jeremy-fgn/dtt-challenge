import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import i18n from '@/i18n'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: `/${i18n.locale}`
  }
]

// fill routes with available locales
// NOTES : declare dynamic segments here, not in json as it will be considered a String
// NOTES : nested paths that start with / will be treated as a root path. This allows you to leverage the component nesting without having to use a nested URL.

const locales = i18n.availableLocales
for (let i = 0; i < locales.length; i++) {
  routes.push({
    path: '/' + locales[i],
    component: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render(c: (arg0: string) => any) {
        return c('router-view')
      }
    },
    children: [
      {
        path: '/' + locales[i],
        name: locales[i] + '-event-list',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/EventList.vue')
      },
      {
        path: '/' + locales[i] + `/${i18n.t('path.create', locales[i])}`,
        name: locales[i] + '-event-create',
        component: () => import('@/views/EventCreate.vue')
      },
      {
        path: '/' + locales[i] + `/${i18n.t('path.show', locales[i])}` + '/:id',
        name: locales[i] + '-event-show',
        component: () => import('@/views/EventShow.vue'),
        props: true
      },
      {
        path:
          '/' +
          locales[i] +
          `/${i18n.t('path.user', locales[i])}` +
          '/:username',
        name: locales[i] + '-user',
        component: () => import('@/views/User.vue'),
        props: true
      },
      {
        path: '/' + locales[i] + '/*',
        name: locales[i] + '-error-404',
        component: () => import('@/views/errors/Error404.vue')
      }
    ]
  })
}
routes.push({
  path: '/*',
  component: () => import('@/views/errors/ErrorLanguage.vue')
})

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
