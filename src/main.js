import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import VueSweetalert2 from "vue-sweetalert2";
import routes from "./routes";

import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueRouter);
Vue.use(VueSweetalert2);

Vue.config.productionTip = false;

const router = new VueRouter({
	mode: "history",
	routes,
});

new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app");
