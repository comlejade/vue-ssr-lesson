// import Todo from '../views/todo/Todo.vue'
// import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    // path: '/app',
    path: '/app/:id',
    props: true,
    // props: {
    //   id: 456
    // },
    // props: (route) => ({ id: route.query.b }),
    // component: Todo,
    component: () => import('../views/todo/Todo.vue'),
    // components: {
    //   default: Todo,
    //   a: Login
    // },
    // name: 'app',
    meta: {
      title: 'this is app',
      description: 'asdasd'
    },
    beforeEnter: (to, from, next) => {
      console.log('app route before enter')
      next()
    }
  },
  {
    path: '/login',
    // component: Login
    component: () => import('../views/login/login.vue')
  }
]
