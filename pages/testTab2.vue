<template>
  <div class="wrapper m-10 mx-auto">
    <div class="w-300px">
      <ul class="flex flex-md-row">
        <li
          v-for="(i, index) in 3"
          class="mr-2 p-2 bg-amber-accent-1"
          :class="{ 'bg-amber-accent-2  transform translate-y-1': index === isOpen }"
          @click="isOpen = index">
          <button>tab {{ index + 1 }}</button>
        </li>
      </ul>
      <div class="bg-amber-accent-2 h-300px p-2">
        <span v-if="isOpen === 0">
        content1 content1 content1 content1 content1 content1 content1 content1 content1
        </span>
        <span v-else-if="isOpen === 1">
        content2 content2 content2 content2 content2 content2 content2 content2 content2
        </span>
        <span v-else-if="isOpen === 2">
        content3 content3 content3 content3 content3 content3 content3 content3 content3
        </span>

      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { definePageMeta } from '#imports'

definePageMeta({
  layout: 'test'
})
const isOpen = ref(0)

</script>

<style scoped></style>
