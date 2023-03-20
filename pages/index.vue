<template>
  <ContentList v-slot="{ list }" >
    <v-container fluid>
      <v-row>
        <v-col
            v-for="article in list" :key="article._path"
            cols="12"
            md="4"
        >
          <v-img
              :src="article.img"
              lazy-src="https://picsum.photos/10/6?image=1"
              aspect-ratio="1.778"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>

  </ContentList>
</template>

<script>
definePageMeta({
  layout: 'default'
})
</script>

<style scoped>

</style>
