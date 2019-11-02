<template>
  <div>
    <div class="text-center">
      <v-badge>
        <template v-slot:badge>0</template>
        <v-icon>mdi-email</v-icon>
      </v-badge>
    </div>

    <v-container fluid="">
      <v-row
        align="center"
        justify="space-between"
        style="flex-grow: 0;"
      >
        <v-col>
          <v-select
            v-model="color"
            :items="colors"
            style="width: 250px;"
            label="Color"
          >
          </v-select>
        </v-col>
        <v-col>
          <v-switch
            v-model="left"
            label="Left"
          >
          </v-switch>
        </v-col>
        <v-col>
          <v-switch
            v-model="bottom"
            label="Bottom"
          ></v-switch>
        </v-col>
        <v-col>
          <v-btn
            color="indigo"
            class="white--text"
            @click="show = !show"
          >
            Toggle
          </v-btn>
        </v-col>
        <v-col>
          <v-switch
            v-model="overlap"
            label="Overlap"
          ></v-switch>
        </v-col>
        <v-col>
          <v-btn
            class="mx-1"
            color="info"
            @click="messages++"
          >
            Send
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
            class="mx-1"
            color="error"
            @click="messages = 0"
          >
            Clear
          </v-btn>
        </v-col>
        <v-col
          cols="12"
          class="text-center"
        >
          <v-badge
            v-model="show"
            :bottom="bottom"
            :color="color"
            :left="left"
            :overlap="overlap"
            class="align-self-center"
          >
            <template
              v-slot:badge
            >
              <span v-if="messages > 0">{{ messages }}</span>
            </template>
            <v-icon
              large=""
              color="grey"
              @mouseover="show = true"
              @mouseout="show = false"
            >
              mail
            </v-icon>
          </v-badge>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    messages: 0,
    show: true,
    bottom: false,
    color: 'primary',
    colors: ['primary', 'accent', 'warning lighten-2', 'teal', 'error lighten-2'],
    left: false,
    overlap: true,
  })
}
</script>