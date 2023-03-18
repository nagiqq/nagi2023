<template>
  <ContentList v-slot="{ list }" path="/coding">
  <v-container fluid>

                <v-row justify="center">
                  <v-col cols="8" v-for="article in list" :key="article._path">
                    <v-card
                        color="#3E54AC"
                        theme="dark"
                    >

                      <v-container fluid>
                        <v-row>
                          <v-col cols="8">
                            <div>
                              <v-card-title class="text-h5">
                                {{ article.name }}
                              </v-card-title>

                              <v-card-subtitle class="d-inline-block text-truncate"
                              >{{ article.description }}
                              </v-card-subtitle>

                              <v-card-actions>
                                <v-btn
                                    class="ms-2"
                                    variant="outlined"
                                    size="small"
                                >
                                  了解更多
                                </v-btn>
                              </v-card-actions>
                            </div>
                          </v-col>
                          <v-col cols="4">
                            <v-img
                                max-width="200"
                                aspect-ratio="16/9"
                                cover
                                :src="article.img"
                            ></v-img>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                  </v-col>

                </v-row>
              </v-container>
    </ContentList>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>

</style>