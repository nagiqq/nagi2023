<template>
  <div class="m-5 mx-auto">
    <ul class="flex justify-center align-center flex-wrap w-300px">
      <li v-for="(item, index) in 5" :key="item.id" class="mb-5">
        <button
          @click="open(index)"
          class="h-50px w-300px p3 rounded pb-1 tab-title bg-blue-lighten-1 flex justify-space-around align-center">
          <span> tab{{ index + 1 }}</span>
          <v-icon
              v-if="isOpen === index"
              start
              icon="mdi-arrow-up"
          ></v-icon>
          <v-icon
              v-else
              start
              icon="mdi-arrow-down"
          ></v-icon>
        </button>
        <div class="tab-content p-3 bg-blue-lighten-3 hidden" :class="{'is-active': isOpen === index}">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dicta dolorum eveniet
          harum hic in magnam, mollitia odio pariatur rem suscipit, totam voluptatibus! Dolorum
          incidunt ipsam ipsum magni odit porro.
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { definePageMeta } from '#imports'

definePageMeta({
  layout: 'test'
})

let isOpen = ref(0)

function open(index: number) {
  if (index == isOpen.value) {
    isOpen.value = null
    return
  } else {
    isOpen.value = index
  }
}
</script>

<style>
.tab-content.is-active {
  display: block!important;
}
</style>
