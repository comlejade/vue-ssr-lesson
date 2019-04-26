import Todo from '../views/todo/Todo.vue'
import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app',
    component: Todo,
    name: 'app'
  },
  {
    path: '/login',
    component: Login
  }
]
