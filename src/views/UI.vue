<template>
  <div>
    <Alert />

    <avatar/>

    <badge/>

    <banner/>

  </div>
</template>

<script>
import Alert from '../components/Alert.vue'
import Avatar from '../components/Avatar.vue'
import Badge from '../components/Badge.vue'
import Banner from '../components/Banner.vue'

export default {
  components: {
    Alert,
    Avatar,
    Badge,
    Banner,
  },
  data: () => ({

  }),
}
</script>