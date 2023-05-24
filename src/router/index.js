import { createWebHistory, createRouter } from "vue-router";

import MainPage from "@/components/pages/MainPage.vue";
import PersonalAccountProfile from "@/components/pages/Account/PersonalAccountProfile.vue";
import OrdersTemplate from "@/components/pages/Account/OrdersTemplate.vue";
import CartTemplate from "@/components/pages/Account/CartTemplate.vue";
import BaseTemplateLeftMenu from "@/components/BaseTemplateLeftMenu.vue";
import AllCategoriesPage from "@/components/pages/AllCategoriesPage.vue";
import ProductPage from "@/components/pages/ProductPage.vue";

const routes = [
	{path: '/', component: MainPage},
	{
		path: '/user',
		component: BaseTemplateLeftMenu,
		children: [
			{
				path: '',
				component: PersonalAccountProfile
			},
			{
				path: 'orders',
				component: OrdersTemplate
			},
			{
				path: 'cart',
				component: CartTemplate
			}
		]
	},
	{path: '/', component: MainPage},
	{
		path: '/categories',
		component: AllCategoriesPage
	},
	{
		path: '/guitars/:id',
		component: ProductPage
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;