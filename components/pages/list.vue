<template>
  <v-container>
    <v-row justify="center" align="center" class="flex-column-reverse">
      <v-col cols="12" md="10" sm="12" xs="12" v-for="article in data" :key="article._path">
        <v-card color="#3E54AC00" theme="dark">
          <div class="d-flex flex-no-wrap justify-space-between">
            <div class="ma-3 flex-grow-1">
              <v-card-title class="text-h5"> {{ article.name }} </v-card-title>

              <v-card-text>{{ article.description }}</v-card-text>

              <v-card-actions class="justify-end">
                <v-btn class="end my_action_button" size="small">
                  <NuxtLink :to="article._path">
                    <span class="flex"
                      >前往文章<v-icon icon="mdi-chevron-double-right"></v-icon
                    ></span>
                    <hr class="block mt-5px w-full h-5" /> </NuxtLink
                ></v-btn>
              </v-card-actions>
            </div>

            <v-avatar class="mx-3" size="200" rounded="0">
              <v-img
                :src="article.img"
                lazy-src="https://picsum.photos/10/6?image=1"
                aspect-ratio="1.778"></v-img>
            </v-avatar>
          </div>
        </v-card>
        <v-divider :thickness="1" class="border-opacity-100"></v-divider>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object
  }
})
// const myData = computed(() => {
//   return props.data.reverse()
// })

</script>

<style>
.my_action_button.v-btn .v-btn__content {
  flex-direction: column;
}
.my_action_button.v-btnt {
  border-radius: 0px;
}
.my_action_button.v-btn:hover > .v-btn__overlay {
  opacity: 0;
}
.my_action_button.v-btn:hover hr {
  border-color: #ad7be9;
  /*animation: appearing 1s cubic-bezier(0.68,-0.55,0.27,1.55) infinite;*/
  animation: appearing 1s ease-out infinite;
}

@keyframes appearing {
  30% {
    transform: translateX(3px);
  }
  50% {
    transform: translateX(13px);
  }
  100% {
    transform: translateX(33px);
    border-color: #ad7be900;
  }
}
.my_action_button.v-btn:hover {
  color: #ad7be9;
  /*border-bottom: 1px #AD7BE9 solid;*/
}
</style>
