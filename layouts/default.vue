<template>
  <v-app class="bg-my-blue">
    <v-container>
      <v-sheet
        max-width="500"
        width="100%"
        class="mb-4 text-center mx-auto bg-my-blue"
        ><img src="/nagi2.png"
      /></v-sheet>
      <v-card >
        <v-tabs v-model="tab" class="bg-my-green" color="#EEE" align-tabs="center">
          <v-tab value="1"><NuxtLink to="/">目錄</NuxtLink></v-tab>
          <v-tab value="2"><NuxtLink to="/coding">程式語言</NuxtLink></v-tab>
          <v-tab value="3"><NuxtLink to="/diary">心情隨筆</NuxtLink></v-tab>
          <v-tab value="4"><NuxtLink to="/about">關於</NuxtLink></v-tab>
        </v-tabs>
      </v-card>
      <slot />
    </v-container>
  </v-app>
</template>
<script setup>
const tab = ref(null)
</script>
<style>
.bg-my-blue{
  background-color: #09192C;
}
.bg-my-green{
  background-color: #AD7BE9;
}
.bg-my-purple{
  background-color: #AD7BE9;
}
</style>
