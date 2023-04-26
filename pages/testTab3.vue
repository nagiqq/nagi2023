<template>
  <div class="m-10 mx-auto">
    <div class="mx-auto w-300px">
      <ul class="flex flex-md-row">
        <li
          v-for="item in link"
          class="mr-2 p-2"
          :class="{ ' border-b-5 border-blue-500 text-blue-500': currentRoute == item.href }">
            <NuxtLink :to="item.href">{{ item.name }}</NuxtLink>
          <div class=" hidden" :class="{ '!block flex flex-column':currentRoute == item.href }">
           <ul class="bg-blue-accent-1 text-white p-3 p-2 ">
             <li class="p-2">
               <NuxtLink :to="item.href">item1</NuxtLink>
             </li>
             <li class="p-2">
               <NuxtLink :to="item.href">item2</NuxtLink>
             </li>
             <li class="p-2">
               <NuxtLink :to="item.href">item3</NuxtLink>
             </li>
           </ul>

          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { definePageMeta } from '#imports'

definePageMeta({
  layout: 'test'
})

const link = ref([
  { name: 'testTab3', href: '/testTab3' },
  { name: 'testTab2', href: '/testTab2' },
  { name: 'testTab', href: '/testTab' }
])

const route = useRoute()
const currentRoute = ref(route.href)
const currentRouteTitle = currentRoute.value.split('/')[1]
console.log(currentRouteTitle)
const isActiveTab = ref(currentRouteTitle)


</script>

<style scoped></style>
