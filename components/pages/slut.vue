<template>
  <v-container>
    <v-row justify="center">
        <v-col cols="12" md="10" sm="12" xs="12">
          <v-card color="#3E54AC00" theme="dark">
            <h1 class="text-h3 my-2">{{ data.title }}</h1>
            <h3 class="text-subtitle-2">{{ data.date }}</h3>
            <v-chip
                v-for="tag in data.tags"
                class="ma-2 ms-0"
                color="#BFDCE5"
                label
                text-color="white">
              <v-icon start icon="mdi-label"></v-icon>
              {{ tag }}
            </v-chip>
            <v-sheet max-width="500" width="100%" class="my-4 text-center mx-auto bg-my-blue">
              <v-img
                  :src="data.img"
                  lazy-src="https://picsum.photos/10/6?image=1"
                  aspect-ratio="1.778"></v-img
              ></v-sheet>
            <ContentRenderer :value="doc" class="text-body-1" />
          </v-card>
        </v-col>

    </v-row>
  </v-container>
</template>
<script setup>
defineProps({
  data: {
    type: Object
  }
})
</script>

<style >
img {
  border-radius: 8px;
}
</style>