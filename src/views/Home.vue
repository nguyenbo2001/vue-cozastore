<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <div class="purple darken-2 text-center">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, hic?
      <span class="white--text">Lorem, ipsum.</span>
    </div>
    <div class="red">Lorem ipsum dolor sit amet consectetur.</div>
    <p class="red--text darken-6">Lorem ipsum dolor sit.</p>
    <p class="indigo--text text-darken-2">indigo darken 2</p>
    <p class="pink--text accent-4">Lorem ipsum dolor sit.</p>
    <blockquote class="blockquote">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci sunt voluptate nesciunt a pariatur ipsa sed accusamus aliquam consequuntur corrupti omnis iure quidem illum possimus, iste ullam modi, incidunt necessitatibus?</blockquote>
    <var>v</var> = <var>u</var> * <var>e</var>

    <div class="d-block d-md-flex d-sm-none">
      <div class="d-inline">one</div>
      <div class="d-inline">two</div>
    </div>
    <div class="d-print-none">print hidden</div>

    <v-row>
      <v-col v-for="n in 25" :key="n" cols="auto">
        <v-card :elevation="n - 1" height="100" width="100">
          <v-row
            class="fill-height"
            align="center"
            justify="center"
            v-text="n - 1"></v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4">
        <v-slider
          v-model="selected"
          prepend-icon="mdi-pan-horizontal"
          min="0"
          max="24"
          thumb-label=""></v-slider>
      </v-col>
    </v-row>
    <div class="text--primary">
      <v-hover>
        <template v-slot="{ hover }">
          <v-card
            :elevation="hover ? 24 : 6"
            class="mx-auto pa-6">
            Prop base elevation
          </v-card>
        </template>
      </v-hover>
      <div class="my-6"></div>
      <v-hover>
        <template v-slot="{ hover }">
          <v-card
            :class="`elevation-${hover ? 24 : 6}`"
            class="mx-auto pa-6 transition-swing">
            class base elevation
          </v-card>
        </template>
      </v-hover>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
  },
  data () {
    return {
      selected: 0
    }
  }
}
</script>
