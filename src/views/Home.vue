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
    <h1>test</h1>
    <div>
      <v-card
        v-for="j in justify"
        :key="j"
        :class="`d-flex justify-${j} md-6`"
        color="grey lighten-2"
        flat=""
        tile="">
          <v-card
            v-for="n in 3"
            :key="n"
            class="pa-2"
            outlined=""
            tile="">
            Flex item
          </v-card>
      </v-card>
    </div>
    <div>
      <v-card
        v-for="j in align"
        :key="j"
        :class="`d-flex align-${j} mb-6`"
        color="grey lighten-2"
        flat=""
        height="100"
        tile="">
          <v-card
            v-for="n in 3"
            :key="n"
            class="pa-2"
            outlined=""
            tile="">
            Flex item
          </v-card>
      </v-card>
    </div>
    <div>
      <v-card
        v-for="j in justify"
        :key="j"
        :class="`d-flex justify-${j} md-6`"
        color="grey lighten-2"
        flat=""
        tile="">
          <v-card
            v-for="n in 3"
            :key="n"
            class="pa-2"
            :class="[ n === 2 && `align-self-${j}`]"
            outlined=""
            tile="">
            {{ n === 2 ? 'Align flex item': 'Flex item' }}
          </v-card>
      </v-card>
    </div>
    <div class="d-block">
      <h1>Float</h1>
      <div>
        <div class="float-left">Float left</div>
        <div class="float-right">Float right</div>
        <div class="float-none">Float None</div>
      </div>
    </div>
    <div class="d-block blue">
      <div class="ma-5 pa-5 grey">
        Margin
      </div>
    </div>
    <div>
      <div class="text-justify">
        Lorem ipsum dolor sit amet.
      </div>
      <div class="text-center">
        Lorem ipsum dolor sit amet.
      </div>
      <div class="text-left">
        Lorem ipsum dolor sit amet.
      </div>
      <div class="text-right">
        Lorem ipsum dolor sit amet.
      </div>
      <div class="text-no-wrap" style="width: 5rem;">
        Lorem ipsum dolor sit amet.
      </div>
      <div class="text-truncate" style="max-width: 100px;">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, laborum.
      </div>
      <div>
        <p class="text-lowercase">Lorem, ipsum dolor.</p>
        <p class="text-uppercase">Lorem, ipsum dolor.</p>
        <p class="text-capitalize">Lorem, ipsum dolor.</p>
        <p class="text-break" style="max-width: 4rem">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, labore.
        </p>
      </div>
      <div class="d-block">
        <p class="font-weight-black">Black</p>
        <p class="font-weight-bold">Bold</p>
        <p class="font-weight-medium">medium</p>
        <p class="font-weight-regular">regular</p>
        <p class="font-weight-light">light</p>
        <p class="font-weight-thin">thin</p>
        <p class="font-italic">Italic</p>
      </div>
      <div class="d-block">
        <h1>Font size</h1>
        <p class="display-4">96sp</p>
        <p class="display-3">60sp</p>
        <p class="display-2">48sp</p>
        <p class="display-1">34sp</p>
        <p class="headline">24sp</p>
        <p class="title">20sp</p>
        <p class="subtitle-1">regular 16sp</p>
        <p class="subtitle-2">medium 14sp</p>
        <p class="body-1">regular 16sp</p>
        <p class="body-2">regular 14sp</p>
        <p class="caption">regular 12sp</p>
        <p class="overline">10sp</p>
      </div>
      <div class="d-block">
        <h1>Transition</h1>
        <v-row justify="center">
          <v-menu transition="slide-x-transition">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" class="ma-2" v-on="on">
                Slide X Transition
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="n in 5"
                :key="n"
                link="">
                <v-list-item-title v-text="'Item ' + n">
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <div class="mx-6 hidden-sm-and-down">
          </div>
          <v-menu transition="scroll-y-transition">
            <template v-slot:activator="{ on }">
              <v-btn color="secondary" class="ma-2" v-on="on">
                Scroll y transition
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="n in 5"
                :key="n"
                link="">
                <v-list-item-title v-text="'Item ' + n"></v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-row>
      </div>
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
      selected: 0,
      justify: [
        'start',
        'end',
        'center',
        'space-between',
        'space-arround',
        'baseline',
        'auto',
        'stretch'
      ],
      align: [
        'start',
        'end',
        'center',
        'baseline',
        'stretch'
      ]
    }
  }
}
</script>
