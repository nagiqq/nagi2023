<template>
  <v-app class="bg-my-blue">
    <v-container>
      <v-sheet
        max-width="500"
        width="100%"
        class="mb-4 text-center mx-auto bg-my-blue"
        ><img src="/nagi2.png"
      /></v-sheet>
      <v-row justify="center">
        <v-col cols="12" md="10" sm="12" xs="12">
          <v-card>
            <v-tabs
              v-model="tab"
              class="bg-my-green"
              color="#EEE"
              align-tabs="center">
              <v-tab
                v-for="item in tabs"
                :value="item.href">
                <NuxtLink :to="item.href"
                  >{{ item.name }}
                </NuxtLink>
              </v-tab>
            </v-tabs>
          </v-card>
        </v-col>
      </v-row>
      <slot />
    </v-container>
  </v-app>
</template>
<script setup>
const tabs = ref([
  { id: 1, name: '目錄', href: '/' },
  { id: 2, name: '程式語言', href: '/coding' },
  { id: 3, name: '心情隨筆', href: '/diary' },
  { id: 4, name: '關於', href: '/about' }
])
const route = useRoute()
const currentRoute = ref(route.href)
const tab = ref(currentRoute)
</script>
<style>
.bg-my-blue {
  background-color: #f2d8d8b3;
}

.bg-my-green {
  background-color: #99a98f;
}

.bg-my-purple {
  background-color: #5c8984;
}
</style>
