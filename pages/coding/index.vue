<template>
  <ContentList v-slot="{ list }" path="/coding">
    <pagesList :data="list"/>
    </ContentList>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>

</style>