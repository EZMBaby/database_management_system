<script setup lang="ts">
import { ref, watch } from "vue";
import Login from "../components/login/Login.vue";
import { acceptedFileTypesExport, acceptedFileTypesImport } from "../mock/filetypes";
import { dbMock } from "../mock/db-mock";
import DatabaseModule from "../components/database-module/DatabaseModule.vue";

const loggedIn = ref(true);
const userData = {
  ID: 1,
  Vorname: "Marvin",
  Nachname: "Dietermann",
  Abteilung: "Software-Entwicklung",
};

watch(loggedIn, (newVal) => {
  console.log(newVal);
});

const validDataTypes = (typesArray) => {
  let output = "";
  for (let index = 0; index < typesArray.length; index++) {
    const element = typesArray[index];
    output += element;
    if (index !== typesArray.length - 1) {
      output += ", ";
    }
  }
  return output;
};
</script>

<template>
  <template v-if="!loggedIn">
    <Login @login="loggedIn = true" />
  </template>
  <template v-else>
    <div id="welcome">
      <p class="display-6">Willkommen im DMS!</p>
      <span class="lead">
        <strong>D</strong>atabase <strong>M</strong>anagement <strong>S</strong>ystem
      </span>
      <br />
      <p>
        Ihr Tool zur Umwandlung von Datenbanktabellen zu
        <strong>{{ validDataTypes(acceptedFileTypesExport) }}</strong> und den Import von
        <strong>{{ validDataTypes(acceptedFileTypesImport) }}</strong> in
        Datenbanktabellen!
      </p>
    </div>
    <div class="row section">
      <div class="col d-flex justify-content-center align-items-center">
        <p class="display-4" style="height: fit-content">Benutzerdaten</p>
      </div>
      <div class="col">
        <div class="row">
          <table class="table">
            <tbody>
              <tr v-for="(val, key) in userData">
                <th scope="row">
                  {{ key }}
                </th>
                <td>
                  {{ val }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="row">
          <p>Benutzerdaten ändern?</p>
          <button type="button" class="btn btn-outline-primary">Ändern</button>
        </div>
      </div>
    </div>
        <DatabaseModule :databasesForRow="{'mysql': dbMock['mysql'], 'sqlserver': dbMock['sqlserver']}"/>
        <DatabaseModule :databasesForRow="{'postgresql': dbMock['postgresql'], 'mariadb': dbMock['mariadb']}"/>
  </template>
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
