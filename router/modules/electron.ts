import Layout from '@/layout/index.vue'
const electron = {
  path: '/electron',
  component: Layout,
  meta: { title: 'electron', icon: 'user' },
  alwaysShow: true,
  children: [
    {
      path: 'main-renderer-comm',
      component: () => import('@/views/electron/MainRendererComm.vue'),
      name: 'MainRenderer',
      meta: { title: 'Main Renderer' }
    },
    {
      path: 'electron-demo',
      component: () => import('@/views/electron/ElectronDemo.vue'),
      name: 'ElectronDemo',
      meta: { title: 'Electron Demo' }
    },
    {
      path: 'fs-extra',
      component: () => import('@/views/electron/FsExtra.vue'),
      name: 'FsExtra',
      meta: { title: 'fs-extra' }
    },
    {
      path: 'notify-netListen',
      component: () => import('@/views/electron/NotifyNetListen.vue'),
      name: 'NotifyNetListen',
      meta: { title: 'Notify Net' }
    },
    {
      path: 'nedb-demo',
      component: () => import('@/views/electron/NedbDemo.vue'),
      name: 'NedbDemo',
      meta: { title: 'NedbDemo' }
    },
    {
      path: 'indexDb-demo.vue',
      component: () => import('@/views/electron/IndexDbDemo.vue'),
      name: 'IndexDbDemo',
      meta: { title: 'IndexDbDemo' }
    }
  ]
}

export default electron
