import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import UsuarioIndex from '../views/users/UsuarioIndex.vue'
import UsuarioCreate from '../views/users/UsuarioCreate.vue'
import UsuarioEdit from '../views/users/UsuarioEdit.vue'
import UsuarioPerfil from '../views/users/UsuarioPerfil.vue'
import Login from '../views/auth/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/usuarios',
    name: 'UsuarioIndex',
    component: {
      render(c) {
        return c('router-view')
      }
    },
    children: [
      {
        path: '',
        name: 'Listado',
        component: UsuarioIndex
      },
  
      {
        path: 'create',
        meta: {
          label: 'Alta Usuario'
        },
        name: 'UsuarioCreate',
        component: UsuarioCreate
      },
      {
        path: 'perfil',
        meta: {
          label: 'Perfil de usuario'
        },
        name: 'Perfil',
        component: UsuarioPerfil
      },
      
      {
        path: ':id',
        meta: {
          label: 'Modificar Usuario'
        },
        name: 'UsuarioEdit',
        component: UsuarioEdit,
        props: (route) => ({
          user: route.params
      })
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
