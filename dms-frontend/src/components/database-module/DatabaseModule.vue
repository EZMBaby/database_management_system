<script setup lang="ts">
import { resolveDbName } from '../../scripts/dbResolver';
import DatabaseTable from './database-table/DatabaseTable.vue';
const props = defineProps({
    databasesForRow: {
        type: Object,
        required: true
    },
})

console.log(props.databasesForRow)
</script>

<template>
    <div class="row">
        <div class="col section sub-section" v-for="(db, name) in databasesForRow">
            <p class="display-6">{{ resolveDbName(name) }}</p>
            <hr>
            <DatabaseTable :databaseData="db" />
        </div>
    </div>

</template>

<style lang="css" scoped>
.section {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    padding: 8px;
    border-radius: 8px;
}

.sub-section {
    margin: 8px;
}
</style>
