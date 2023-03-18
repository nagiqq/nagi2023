<template>
  <v-avatar color="surface-variant"><img src="/assets/logo1.png"></v-avatar>
  <v-card>
    <v-tabs
        v-model="tab"
        color="deep-purple-accent-4"
        align-tabs="center"
    >
      <v-tab :value="1">目錄</v-tab>
      <v-tab :value="2">程式語言</v-tab>
      <v-tab :value="3">心情隨筆</v-tab>
      <v-tab :value="3">關於</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item
          v-for="n in 3"
          :key="n"
          :value="n"
      >
        <v-container fluid>
          <v-row justify="center">
            <v-col cols="8" v-for="i in 6">
              <v-card
                  color="#1F7087"
                  theme="dark"
              >

                <v-container fluid>
                <v-row >
                    <v-col cols="8">
                      <div>
                        <v-card-title class="text-h5">
                          Supermodel
                        </v-card-title>

                        <v-card-subtitle class="d-inline-block text-truncate"
                        >Foster the People Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequatur
                          culpa delectus, doloremque error exercitationem harum, magnam numquam odio optio praesentium, quae
                          recusandae reiciendis repellendus voluptates! Delectus ea incidunt non.
                        </v-card-subtitle>

                        <v-card-actions>
                          <v-btn
                              class="ms-2"
                              variant="outlined"
                              size="small"
                          >
                            START RADIO
                          </v-btn>
                        </v-card-actions>
                      </div>
                    </v-col>
                    <v-col cols="4">
                      <v-img
                          max-width="200"
                          aspect-ratio="16/9"
                          cover
                          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                      ></v-img>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-col>

          </v-row>
        </v-container>
      </v-window-item>
    </v-window>
  </v-card>
  <slot/>
</template>
<script setup>
const tab = ref('')
</script>
