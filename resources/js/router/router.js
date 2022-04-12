import { createRouter, createWebHistory } from "vue-router";
import createPersistedState from "vuex-persistedstate";

/**
 * Pages for the router
 */
import Home from "../pages/Home.vue";
import Contact from "../pages/Contact.vue";
import Portfolio from "../pages/Portfolio.vue";
import Resume from "../pages/Resume.vue";

const routes = [
    { path: "/home", component: Home, meta: { header: true, title: 'Welcome', subtitle: "'You have power over your mind — not outside events. Realize this, and you will find strength' - Marcus Aurelius" } },
    { path: "/resume", component: Resume, meta: { header: true, title: 'Resume', subtitle: "'Because a thing seems difficult for you, do not think it impossible for anyone to accomplish' - Marcus Aurelius" } },
    { path: "/contact", component: Contact, meta: { header: true, title: 'Contact', subtitle: "'Luck is what happens when preparation meets opportunity' - Seneca" } },
    { path: "/portfolio", component: Portfolio, meta: { header: true, title: 'Portfolio', subtitle: "'How long are you going to wait before you demand the best for yourself?' - Epictetus" } },
];

const router = createRouter({
    plugins: [createPersistedState()],
    history: createWebHistory(),
    routes,
});

export default router;