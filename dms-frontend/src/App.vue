<script setup>
import Header from "./components/Header.vue";
import { useRoute } from 'vue-router'
import { onMounted, ref, watch } from 'vue'

const route = useRoute()
const currentRouteName = ref("")
onMounted(() => {
    currentRouteName.value = route.name
})
watch(route, (to) => {
    currentRouteName.value = to.name
    console.log(currentRouteName.value);

})

</script>

<template>
    <div class="h-100">
        <Header :currentRouteName="currentRouteName"/>
        <br>
        <div class="container text-center">
            <Transition name="fade" mode="out-in">
                <h1 :key="currentRouteName" class="display-2">{{ currentRouteName }}</h1>
            </Transition>
            <hr>
            <router-view v-slot:="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component"/>
            </transition>
        </router-view>
        </div>
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
