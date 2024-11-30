<script setup>

import Checkbox from "../checkbox/Checkbox.vue";
import DatabaseSelector from "../database-selector/DatabaseSelector.vue";
</script>

<template>
    <div class="sub-container">
        <database-selector/>
        <div class="export-selection">
            <h2>Export-Auswahl</h2>
            <div class="checkbox-container">
                <checkbox id="json" name="export-selector" label="Export as JSON" />
                <checkbox id="csv" name="export-selector" label="Export as CSV" />
            </div>

        </div>
    </div>
</template>

<style scoped>
.sub-container {
    display: flex;
    gap: 16px;
    justify-content: space-evenly;
    width: 90%;
    max-height: fit-content;
    min-height: 150px;
    border-radius: 8px;
    margin: auto;
}

.checkbox-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
}
</style>