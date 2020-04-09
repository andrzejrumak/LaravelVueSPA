import VueRouter from "vue-router";
import Bookables from "./bookables/Bookables.vue";
import Ex2 from "./components/Ex2.vue";

const routes = [
    {
        path: "/",
        component: Bookables,
        name: "home"
    },
    {
        path: "/second",
        component: Ex2,
        name: "second"
    }
];
const router = new VueRouter({
    routes,
    mode: "history"
});
export default router;
