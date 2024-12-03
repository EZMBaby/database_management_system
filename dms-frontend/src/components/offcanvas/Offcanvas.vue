<script setup lang="ts">
    import { useRoute } from 'vue-router'
    import { watch, ref } from 'vue'

    const props = defineProps({
        currentRouteName: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <div class="offcanvas offcanvas-start bg-body-tertiary" tabindex="-1" id="offcanvasMenu"
        aria-labelledby="offcanvasMenuLabel" data-bs-theme="dark">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasMenuLabel">Auswahlmenü</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div>
                Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images,
                lists, etc.
            </div>
            <hr>
            <ul class="list-group list-group-flush">
                <RouterLink to="/"
                            type="button"
                            :class="[
                                `list-group-item list-group-item-action`,
                                currentRouteName == 'Startseite' ? 'active' : ''
                            ]" :aria-current="currentRouteName == 'Startseite'">
                    <li>Startseite</li>
                </RouterLink>
                <RouterLink to="/add-database"
                            type="button"
                            :class="[
                                `list-group-item list-group-item-action`,
                                (currentRouteName == 'Datenbankverwaltung') ? 'active' : ''
                            ]":aria-current="currentRouteName == 'Datenbankverwaltung'">
                    <li>Datenbankverwaltung</li>
                </RouterLink>
                <RouterLink to="/export"
                            type="button"
                            :class="[
                                `list-group-item list-group-item-action`,
                                currentRouteName == 'Datenexport' ? 'active' : ''
                            ]" :aria-current="currentRouteName == 'Datenexport'">
                    <li>Datenexport</li>
                </RouterLink>
                <RouterLink to="/import"
                            type="button"
                            :class="[
                                `list-group-item list-group-item-action`,
                                currentRouteName == 'Datenimport' ? 'active' : ''
                            ]" :aria-current="currentRouteName == 'Datenimport'">
                    <li>Datenimport</li>
                </RouterLink>
                <RouterLink to="#"
                            type="button"
                            :class="[
                                `list-group-item list-group-item-action`,
                                currentRouteName == 'Administrator' ? 'active' : ''
                            ]" :aria-current="currentRouteName == 'Administrator'">
                    <li>Administrator</li>
                </RouterLink>
            </ul>
            <hr>
            <div class="btn-group" role="group" aria-label="Basic outlined example">
                <button type="button" class="btn btn-outline-success">Benutzer wechseln</button>
                <button type="button" class="btn btn-outline-danger">Ausloggen</button>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
