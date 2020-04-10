import VueRouter from "vue-router";
import Bookable from "./bookable/Bookable.vue";
import Bookables from "./bookables/Bookables.vue";
import Ex2 from "./components/Ex2.vue";

const routes = [
    {
        path: "/",
        component: Bookables,
        name: "home"
    },
    {
        path: "/bookable/:id",
        component: Bookable,
        name: "bookable"
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
