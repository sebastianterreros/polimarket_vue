import { createRouter, createWebHistory } from 'vue-router';
import ProductosView from '../views/ProductosView.vue';
import ClientesView from '../views/ClientesView.vue';
import VentasView from '../views/VentasView.vue';

const routes = [
    {
        path: '/',
        name: 'Productos',
        component: ProductosView
    },
    {
        path: '/clientes',
        name: 'Clientes',
        component: ClientesView
    },
    {
        path: '/ventas',
        name: 'Ventas',
        component: VentasView
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;