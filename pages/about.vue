<template>
  <v-container class="mt-5">
    <v-row justify="space-around">
      <v-card width="400" class="mt-5">
        <v-sheet
          :rounded="rounded"
          class="mx-auto"
          height="200"
          width="200">
          <v-img
            height="200"
            src="/75066.jpg"
            cover
            class="text-white">
          </v-img>
        </v-sheet>

        <v-card-text>
          <div class="font-weight-bold ms-1 mb-2">
            Today
          </div>

          <v-timeline
            density="compact"
            align="start">
            <v-timeline-item
              v-for="message in messages"
              :key="message.time"
              :dot-color="message.color"
              size="x-small">
              <div class="mb-4">
                <div class="font-weight-normal">
                  <strong>{{
                    message.from
                  }}</strong>
                  @{{ message.time }}
                </div>
                <div>{{ message.message }}</div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'default'
})
const messages = ref([
  {
    from: 'You',
    message: `Sure, I'll see you later.`,
    time: '10:42am',
    color: 'deep-purple-lighten-1'
  },
  {
    from: 'John Doe',
    message: 'Yeah, sure. Does 1:00pm work?',
    time: '10:37am',
    color: 'green'
  },
  {
    from: 'You',
    message:
      'Did you still want to grab lunch today?',
    time: '9:47am',
    color: 'deep-purple-lighten-1'
  }
])
</script>

<style>
.v-responsive.v-img.text-white {
  border-radius: 50%;
  margin-top: 5px;
}
</style>
