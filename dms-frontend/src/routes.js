import HomeView from "./views/HomeView.vue";
import ImportView from "./views/ImportView.vue";
import ExportView from "./views/ExportView.vue";
import AddDatabaseView from "./views/AddDatabaseView.vue";

export const routes = [
    { path: '/', component: () => import('./views/HomeView.vue'), hidden: true },
    { path: '/import', component: () => import('./views/ImportView.vue'), hidden: true },
    { path: '/export', component: () => import('./views/ExportView.vue'), hidden: true },
    { path: '/add-database', component: () => import('./views/AddDatabaseView.vue'), hidden: true },
]