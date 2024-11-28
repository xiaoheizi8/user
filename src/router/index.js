// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import PersonalCenter from '../views/PersonalCenter.vue';
import MyBids from '../views/MyBids.vue';
import Index from "../views/Index.vue";
import Layout    from "../components/Layout.vue";
import WebCenter from "../views/WebCenter.vue";
import InformationUpload from "../views/InformationUpload.vue";
const routes = [
    {
      path: '/',
      name: 'WebCenter',
      component: WebCenter
    },
  {

    path: "/index",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        component: Index

      },{
        path: '/myBids',
        name: 'MyBids',
        component: MyBids
      },{
        path: '/person',
        component: PersonalCenter
      },{
      path: '/upload',
        component: InformationUpload
      }


        ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;