<script setup>
import Header from "./components/Header.vue";
</script>

<template>
    <div class="container">
        <Header/>

        <router-view v-slot:="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component"/>
            </transition>
        </router-view>
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    height: 100%;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease-out;
}

.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
</style>
