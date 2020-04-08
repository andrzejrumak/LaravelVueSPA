import VueRouter from "vue-router";
import ExampleComponent from "./components/ExampleComponent";
import Ex2 from "./components/Ex2.vue";

const routes = [
    {
        path: "/",
        component: ExampleComponent,
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
