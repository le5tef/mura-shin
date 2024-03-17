import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import {useCatalogStore} from "@/store";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home')
    },
    // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: function () {
    //     return import(/* webpackChunkName: "about" */ '../views/About.vue')
    //   }
    // }
    {
        path: '/catalog',
        name: 'Catalog',
        redirect: {name: 'Goods'},
        children: [
            {
                path: '',
                name: 'Goods',
                component: () => import('../views/CatalogView'),
                meta: {
                    label: 'Каталог'
                },
            },
            {
                path: '/car/:id',
                name: 'Car good',
                component: () => import('../views/GoodPage'),
            },
            {
                path: '/part/:id',
                name: 'Part good',
                component: () => import('../views/GoodPage'),
            },

        ]
    },
    {
        path: '/cart',
        name: 'Cart',
        component: () => import('../views/CartView'),
        meta: {
            label: 'Корзина'
        },
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/AboutView'),
        meta: {
            label: 'О компании'
        }
    },
    {
        path: '/customers',
        name: 'Customers',
        component: () => import('../views/CustomersView'),
        meta: {
            label: 'Покупателю'
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
