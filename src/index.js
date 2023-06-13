import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'; 
import Users from './users.vue';
import Create from './create.vue';
import Update from './update.vue';
import Delete from './delete.vue';
import UpdateConfirm from './updatecon.vue';
import CreateConfirm from './createcon.vue';
import DeleteConfirm from './deletecon.vue';
/*const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),*/
  const routes =[
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/create',
      name: 'create',
      component: Create
    },
    {
      path: '/update',
      name: 'update',
      component: Update
    },
    {
      path: '/delete',
      name: 'delete',
      component: Delete
    },
    {
      path: '/createcon',
      name: 'createcon',
      component: CreateConfirm
    },
    {
      path: '/updatecon',
      name: 'updatecon',
      component: UpdateConfirm
    },
    {
      path: '/deletecon',
      name: 'deletecon',
      component: DeleteConfirm
    }
  ];
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
//})
/*
const app = createApp(App);
app.use(router);
app.mount('#app');
*/
export default router;