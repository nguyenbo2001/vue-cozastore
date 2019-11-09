<template>
  <div>
    <v-app-bar
      color="deep-purple accent-4"
      dark="" >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Page title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        icon="" >
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn
        icon="" >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
        left=""
        top="" >
        <template
          v-slot:activator="{ on }" >
          <v-btn
            icon=""
            v-on="on" >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}" >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

    </v-app-bar>

    <v-row
      justify="center">
      <v-col
        cols="6"
        md="4">
        <v-select
          v-model="color"
          label="COlor"
          :items="colors"></v-select>
      </v-col>
      <v-col cols="12"></v-col>
      <v-col
        cols="3"
        md="2">
        <v-switch
          v-model="elevateOnScroll"
          label="Elevate on scroll">
        </v-switch>
      </v-col>
      <v-col
        cols="3"
        md="2">
        <v-switch
          v-model="hideOnScroll"
          label="Hide on scroll">
        </v-switch>
      </v-col>
      <v-col
        cols="3"
        md="2">
        <v-switch
          v-model="fadeOnScroll"
          label="Fade on scroll">
        </v-switch>
      </v-col>
      <v-col
        cols="3"
        md="2">
        <v-switch
          v-model="fadeImgOnScroll"
          label="Fade Img on scroll">
        </v-switch>
      </v-col>
      <v-col
        cols="3"
        md="2">
        <v-switch
          v-model="invertedScroll"
          label="Inverted scroll">
        </v-switch>
      </v-col>
      <v-col
        cols="3"
        md="2">
        <v-switch
          v-model="collapse"
          label="Collapse">
        </v-switch>
      </v-col>
      <v-col
        cols="3"
        md="2">
        <v-switch
          v-model="collapseOnScroll"
          label="Collapse on scroll">
        </v-switch>
      </v-col>
      <v-col
        cols="3"
        md="2">
        <v-switch
          v-model="shrinkOnScroll"
          label="Shrink on scroll">
        </v-switch>
      </v-col>
      <v-col
        cols="3"
        md="2">
        <v-switch
          v-model="extended"
          label="Extended">
        </v-switch>
      </v-col>
    </v-row>
    <v-card
      class="overflow-hidden">
      <v-app-bar
        absolute=""
        dark=""
        scroll-target="#playground-example"
        :color="color"
        :elevate-on-scroll="elevateOnScroll"
        :hide-on-scroll="hideOnScroll"
        :fade-on-scroll="fadeOnScroll"
        :fade-img-on-scroll="fadeImgOnScroll"
        :inverted-scroll="invertedScroll"
        :collapse="collapse"
        :collapse-on-scroll="collapseOnScroll"
        :shrink-on-scroll="shrinkOnScroll"
        :extended="extended">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Title</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
          icon="">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-app-bar>
      <v-sheet
        id="playground-example"
        class="overflow-y-auto"
        max-height="600">
        <v-container
          style="height: 1500px;">

        </v-container>
      </v-sheet>
    </v-card>
    <v-card
      class="overflow-hidden">
      <v-app-bar
        absolute=""
        color="#fcb69f"
        dark=""
        shrink-on-scroll=""
        src="https://picsum.photos/1920/1080?random"
        scroll-target="#scrolling-techniques-2"
        scroll-threshold="500">
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)">
          </v-img>
        </template>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>Title</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
          icon="">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn
          icon="">
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn
          icon="">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
      <v-sheet
        id="scrolling-techniques-2"
        class="overflow-y-auto"
        max-height="600px">
        <v-container style="height: 1000px"></v-container>
      </v-sheet>
    </v-card>

    <v-card
      class="overflow-hidden">
      <v-app-bar
        absolute=""
        color="#6a76ab"
        dark=""
        shrink-on-scroll=""
        prominent=""
        src="https://picsum.photos/1920/1080?random"
        fade-img-on-scroll=""
        scroll-target="#scrolling-techniques-3">
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)">
          </v-img>
        </template>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>Titlte</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>

        <template v-slot:extension>
          <v-tabs
            align-with-title
            background-color="transparent" >
            <v-tab>Tab 1</v-tab>
            <v-tab>Tab 2</v-tab>
            <v-tab>Tab 3</v-tab>
          </v-tabs>
        </template>
      </v-app-bar>
      <v-sheet
        id="scrolling-techniques-3"
        class="overflow-y-auto"
        max-height="600">
        <v-container style="height: 1000px;"></v-container>
      </v-sheet>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    elevateOnScroll: false,
    hideOnScroll: false,
    fadeOnScroll: false,
    fadeImgOnScroll: false,
    invertedScroll: false,
    collapse: false,
    collapseOnScroll: false,
    shrinkOnScroll: false,
    extended: false,
    color: 'accent',
    colors: ['primary', 'accent', 'warning lighten-2', 'teal', 'orange'],
  }),
}
</script>