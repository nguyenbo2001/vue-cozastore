<template>
  <div>
    <Alert />

    <avatar/>

    <badge/>

  </div>
</template>

<script>
import Alert from '../components/Alert.vue'
import Avatar from '../components/Avatar.vue'
import Badge from '../components/Badge.vue'

export default {
  components: {
    Alert,
    Avatar,
    Badge
  },
  data: () => ({

  }),
}
</script>