<script setup>

</script>

<template>
 <div class="header">
     <RouterLink to="/" class="link">
         <h2>
             DMS-System
         </h2>
     </RouterLink>
     <div class="link-list">
         <RouterLink class="link" to="/import">Import</RouterLink>
         <RouterLink class="link" to="/export">Export</RouterLink>
         <RouterLink class="link" to="/add-database">Datenbank hinzufügen</RouterLink>
     </div>
 </div>
</template>

<style scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: #213547;
    width: calc(100vw - 32px);
    height: 48px;
    padding: 8px;
    border-radius: 4px;
    gap: 16px;
    margin: 8px;
}

.link-list {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
}

.link {
    cursor: pointer;
    color: white;
    transition: all 0.3s ease-out;
}

.link:hover {
    text-decoration: underline;
    color: burlywood;
}
</style>