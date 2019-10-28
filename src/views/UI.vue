<template>
  <div>
    <div class="alert">
      <h1>Alert</h1>
      <v-alert type="success">success</v-alert>
      <v-alert type="info">info</v-alert>
      <v-alert type="warning">warning</v-alert>
      <v-alert type="error">error</v-alert>
      <v-alert border="right"
              color="red lighten-2"
              dark="">border right</v-alert>
      <v-alert
          border="left"
          colored-border=""
          color="deep-purple accent-4"
          elevation="8">
        colored border
      </v-alert>
      <v-alert
          border="top"
          colored-border=""
          type="info"
          elevation="2">
        Lorem ipsum dolor sit amet.
      </v-alert>
      <v-alert
        border="bottom"
        type="warning"
        colored-border=""
        elevation="2"
      >
        Lorem ipsum dolor sit amet.
      </v-alert>
      <v-alert
        border="right"
        colored-border=""
        type="error"
        elevation="2"
      >
        Lorem ipsum dolor sit amet.
      </v-alert>
      <v-alert
        dense=""
        type="info"
      >
        Lorem, ipsum.
      </v-alert>
      <v-alert
        dense=""
        type="success"
      >
        Lorem, ipsum.
      </v-alert>
      <v-alert
        dense=""
        type="warning"
      >
        Lorem, ipsum.
      </v-alert>
      <v-alert
        dense=""
        type="error"
      >
        Lorem, ipsum.
      </v-alert>
      <v-alert
        v-model="alert"
        border="left"
        close-text="Close Alert"
        color="deep-purple accent-4"
        dark=""
        dismissible=""
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias esse similique rerum ab reiciendis, nisi ad ipsum molestias architecto perspiciatis!
      </v-alert>
      <div class="text-center">
        <v-btn
          v-if="!alert"
          color="deep-purple accent-4"
          dark=""
          @click="alert = true"
        >
          Reset
        </v-btn>
      </div>

      <v-alert
        color="#2a3b4d"
        dark=""
        icon="mdi-firework"
        dense=""
      >
        Lorem ipsum dolor sit amet.
      </v-alert>
      <v-alert
        color="#c51162"
        dark=""
        icon="mdi-material-design"
        border="right"
      >
        Lorem ipsum dolor sit amet.
      </v-alert>
      <v-alert
        color="primary"
        dark=""
        icon="mdi-vuetify"
        border="left"
        prominent=""
      >
        Lorem ipsum dolor sit amet.
      </v-alert>
      <v-alert
        color="purple"
        outlined=""
      >
        <div class="title">Lorem, ipsum.</div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti soluta explicabo recusandae earum dolore. Hic, asperiores fugiat. Architecto, porro dolorem.</p>
      </v-alert>
      <v-alert
        outlined=""
        type="success"
        text=""
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sequi!
      </v-alert>
      <v-alert
        outlined=""
        type="warning"
        prominent=""
        border="right"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, ea.
      </v-alert>

      <v-alert
        prominent=""
        type="error"
      >
        <v-row align="center">
          <v-col class="grow">
            Lorem ipsum dolor sit amet.
          </v-col>
          <v-col class="shrink">
            <v-btn>Take</v-btn>
          </v-col>
        </v-row>
      </v-alert>
      <v-alert
        color="blue-grey"
        dark=""
        dense=""
        icon="mdi-school"
        prominent=""
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, aut.
      </v-alert>
      <v-alert
        icon="mdi-shield-lock-outline"
        prominent=""
        text=""
        type="info"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, ab.
      </v-alert>

      <v-alert
        text=""
        color="info"
      >
        <h3 class="headline">Lorem, ipsum.</h3>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, provident!</div>
        <v-divider
          class="my-4 info"
          style="opacity: 0.22"
        ></v-divider>
        <v-row
          align="center"
          no-gutters=""
        >
          <v-col class="grow">Lorem ipsum dolor sit.</v-col>
          <v-spacer></v-spacer>
          <v-col class="shrink">
            <v-btn
              color="info"
              outlined=""
            >
              Okay
            </v-btn>
          </v-col>
        </v-row>
      </v-alert>
      <v-alert
        text=""
        outlined=""
        color="deep-orange"
        icon="mdi-fire"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, maiores!
      </v-alert>
      <v-alert
        text=""
        dense=""
        color="teal"
        icon="mdi-clock-fast"
        border="left"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, autem.
      </v-alert>
      <v-alert
        text=""
        prominent=""
        type="error"
        icon="mdi-cloud-alert"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, at!
      </v-alert>
      <div class="text-center mb-4">
        <v-btn
          color="primary"
          @click="alert = !alert"
        >
          Toggle
        </v-btn>
      </div>
      <v-alert
        :value="alert"
        color="pink"
        dark=""
        border="top"
        icon="mdi-home"
        transition="scale-transition"
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, officiis perspiciatis labore illo pariatur consequatur deleniti. Facilis amet labore quidem?
      </v-alert>

      <v-alert
        v-model="alert"
        dismissible=""
        color="cyan"
        border="left"
        elevation="2"
        colored-border=""
        icon="mdi-twitter"
      >
        you're got <strong>5</strong> new update on your timeline
      </v-alert>
      <div class="text-center">
        <v-btn
          v-if="!alert"
          dark=""
          @click="alert = !alert"
        >
          Reset alert
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      alert: false
    }
  }
}
</script>