<template>
  <div>
    <ContentDoc v-slot="{ doc }">
      <h1>{{ doc.name }}</h1>
      <img :src="doc.img">
      <small>{{ doc.date }}</small>
      <h2>{{ doc.description }}</h2>
      <ContentRenderer :value="doc"/>
    </ContentDoc>
  </div>
</template>

<script>
export default {
  name: "[slut]"
}
</script>

<style scoped>

</style>