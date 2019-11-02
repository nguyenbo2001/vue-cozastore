<template>
  <div>
    <v-banner
      single-line=""
      sticky=""
      tile=""
    >
      one line message text string with two action on tablet desktop
      <template v-slot:actions>
        <v-btn
          text=""
          color="deep-purple accent-4"
        >
          Action
        </v-btn>
      </template>
    </v-banner>
    <v-row
      justify="space-around"
    >
      <v-switch
        v-model="sticky"
        label="Sticky"
      ></v-switch>
      <v-switch
        v-model="singleLine"
        label="Single Line"
      ></v-switch>
      <v-select
        v-model="icon"
        :items="icons"
        label="icon"
        style="max-width: 250px;"
        clearable=""
      ></v-select>
      <v-select
        v-model="color"
        :items="colors"
        label="Color"
        style="max-width: 250px;"
        clearable=""
      ></v-select>
      <v-select
        v-model="iconColor"
        :items="colors"
        label="icon color"
        style="max-width: 250px;"
        clearable=""
      ></v-select>
      <v-slider
        v-model="elevation"
        label="Elevation"
        min="0"
        max="24"
        style="width: 100%"
        clearable
      ></v-slider>
    </v-row>
    <v-sheet
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container
        style="height: 1500px;"
      >
        <v-banner
          :sticky="sticky"
          :single-line="singleLine"
          :icon="icon"
          :color="color"
          :icon-color="iconColor"
          :elevation="elevation"
        >
          Lorem ipsum dolor sit amet.
          Iste voluptate doloribus blanditiis non.
          Excepturi sequi dignissimos laboriosam temporibus!
          <template v-slot:actions>
            <v-btn
              text=""
              color="deep-purple accent-4"
            >
              Action
            </v-btn>
          </template>
        </v-banner>
      </v-container>
    </v-sheet>

    <v-card>
      <v-system-bar></v-system-bar>
      <v-toolbar flat="">
        <v-toolbar-title>My Document</v-toolbar-title>
        <v-spacer></v-spacer>
        <div>
          <v-switch
            v-model="sticky"
            label="Sticky Banner"
            hide-details=""
          ></v-switch>
        </div>
      </v-toolbar>
      <v-banner
        single-line=""
        :sticky="sticky"
      >
        we can't save your edit while your are in offline model
        <template v-slot:actions>
          <v-btn
            text=""
            color="deep-purple accent-4"
          >
            Get online
          </v-btn>
        </template>
      </v-banner>
      <v-card-text class="grey lighten-4">
        <v-sheet
          class="mx-auto"
          max-width="800"
          height="300"
        ></v-sheet>
      </v-card-text>
    </v-card>

    <v-checkbox v-model="v0" label="Visible"></v-checkbox>
    <v-banner
      two-line
      @click:icon="alert"
      v-model="v0"
      transition="slide-y-transition"
    >
      <v-avatar
        slot="icon"
        color="deep-purple accent-4"
        size="40"
      >
        <v-icon
          icon="mdi-lock"
          color="white"
        >
          mdi-lock
        </v-icon>
      </v-avatar>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio quisquam temporibus aut nemo hic ullam eius enim nulla veritatis corporis vel dolore et, ipsa iure. Laborum obcaecati quas debitis!
      <template v-slot:actions="{ dismiss }">
        <v-btn text="" color="primary" @click="dismiss">Dismiss</v-btn>
        <v-btn text="" color="primary">Retry</v-btn>
      </template>
    </v-banner>

  </div>
</template>

<script>
export default {
  data: () => ({
    v0: true,
    sticky: false,
    singleLine: true,
    icon: 'mdi-plus',
    color: undefined,
    iconColor: undefined,
    elevation: 4,
    colors: ['red', 'blue', 'teal lighten-2', 'warning lighten-1', 'orange'],
    icons: ['mdi-access-point-network', 'mdi-plus', 'mdi-minus', 'mdi-network-strength-2-alert', 'mdi-earth'],
  }),
  methods: {
    alert() {
      alert('hello world')
    }
  }
}
</script>