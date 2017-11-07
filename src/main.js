// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routeConfig from './router-config'
import store from './store.js'

import VueAMap from 'vue-amap'

//加载路由中间件
Vue.use(VueRouter)
Vue.use(VueResource)

Vue.use(VueAMap);

//定义路由
const router = new VueRouter({
  routes: routeConfig
})

//引入vue-map
VueAMap.initAMapApiLoader({
  key: 'a1d37daf4b76768ec5c73cb74b244eac',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor',    'AMap.Walking',
    'AMap.Driving',
    'AMap.Geocoder']
});

new Vue({
  router,
  store,
  el: "#app",
  render: h => h(App)
})
