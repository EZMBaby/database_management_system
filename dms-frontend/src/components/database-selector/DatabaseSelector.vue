<script setup>

</script>

<template>
    <div class="database-selector">
        <h2>Datenbankauswahl</h2>
        <table class="table table-striped">
            <thead>
            <tr>
                <th>Datenbank</th>
                <th>Nutzer</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Datenbank 1</td>
                <td>Nutzer 1</td>
            </tr>
            <tr>
                <td>Datenbank 2</td>
                <td>Nutzer 2</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
.database-selector {
    width: fit-content;
    height: fit-content;
    padding: 8px;
    border-radius: 8px;
}

.table {
    width: 100%;
    border-spacing: 0;
}

.table tbody tr {
    transition: all 0.3s ease-out;
}

.table tbody tr:hover {
    background: #213547;
    color: white;
}
</style>