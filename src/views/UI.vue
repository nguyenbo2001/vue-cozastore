<template>
  <div>
    <Alert />

    <v-card>
      <v-responsive :aspect-ratio="16/9"
        height="200"
        max-height="500"
        max-width="400"
        min-height="100"
        min-width="50"
        width="100"
        >
        <v-card-text>
          this card will alway be 16:9 (unless you put more stuff in it)
        </v-card-text>
      </v-responsive>
    </v-card>

    <v-row justify="space-around">
      <v-avatar
        color="blue"
        height="100"
        width="100"
        size="20"
      >
        <span class="white--text headline">20</span>
      </v-avatar>
      <v-avatar
        size="48"
        color="teal"
      >
        48
      </v-avatar>
      <v-avatar
        color="orange"
        size="62"
      >
        62
      </v-avatar>
      <v-avatar tile="" color="blue">
        <v-icon dark="">
          mdi-alarm
        </v-icon>
      </v-avatar>
    </v-row>

    <v-row justify="space-around">
      <v-avatar color="indigo">
        <v-icon dark="">mdi-account-circle</v-icon>
      </v-avatar>
      <v-avatar>
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
      </v-avatar>
      <v-avatar
        color="red"
      >
        <span class="white--text headline">CJ</span>
      </v-avatar>
    </v-row>

    <v-card
      class="mx-auto"
      max-width="434"
      tile=""
    >
      <v-img
        height="100%"
        src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
      >
        <v-row
          align="end"
          class="fill-height"
        >
          <v-col
            align-self="start"
            class="pa-0"
            cols="12"
          >
            <v-avatar
              class="profile"
              color="grey"
              size="164"
              tile=""
            >
              <v-img
                src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
              ></v-img>
            </v-avatar>
          </v-col>
          <v-col
            class="py-0"
          >
            <v-list-item
              color="rgba(0,0,0,.4)"
              dark=""
            >
              <v-list-item-content>
                <v-list-item-title class="title">Marcus Obrient</v-list-item-title>
                <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
      </v-img>
    </v-card>


  </div>
</template>

<script>
import Alert from '../components/Alert.vue'

export default {
  components: {
    Alert
  }
}
</script>