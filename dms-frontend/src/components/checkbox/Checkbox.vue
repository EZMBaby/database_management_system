<script setup lang="ts">
import {CheckBoxTypes} from "./CheckBoxTypes.js";
import {PropType} from "vue";

const props = defineProps({
    label: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String as PropType<CheckBoxTypes>,
        default: "checkbox"
    }
});
</script>

<template>
    <label class="container">
        {{ props.label }}
        <input :type="props.type" :id="props.id" :name="props.name"/>
    </label>
</template>

<style scoped>
.container {
    padding: 4px;
    margin: 4px;
    cursor: pointer;
    border: 1px solid var(--main-color);
    border-radius: 4px;
    transition: all 0.3s ease-out;
}

.container:hover {
    background: var(--main-color);
    color: white;
}
</style>