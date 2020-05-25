import VueRouter from "vue-router";
import Bookable from "./bookable/Bookable.vue";
import Bookables from "./bookables/Bookables.vue";
import Ex2 from "./components/Ex2.vue";
import Review from "./review/Review.vue";
import Basket from "./basket/Basket";

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
    },
    {
        path: "/review/:id",
        component: Review,
        name: "review"
    },
    {
        path: "/basket",
        component: Basket,
        name: "basket"
    },
    {
        path: "/auth/login",
        component: require("./auth/Login").default,
        name: "login"
    }
];
const router = new VueRouter({
    routes,
    mode: "history"
});
export default router;
