<template>
  <div>
    <Alert />

    <avatar/>

    <badge/>

    <banner/>

    <bars />

  </div>
</template>

<script>
import Alert from '../components/Alert.vue'
import Avatar from '../components/Avatar.vue'
import Badge from '../components/Badge.vue'
import Banner from '../components/Banner.vue'
import Bars from '../components/Bars.vue'

export default {
  components: {
    Alert,
    Avatar,
    Badge,
    Banner,
    Bars,
  },
  data: () => ({

  }),
}
</script>