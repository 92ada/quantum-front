<template>
  <div class="downloads-container">
    <single-image value=""></single-image>
  </div>
</template>

<script>
import SingleImage from '../../components/Upload/SingleImage'
export default {
  name: 'Downloads',
  components: { SingleImage },
  data() {
    return {
      selected: { id: 1, name: 'XXX实验室' }
    }
  },
  methods: {
    log() {
      console.log('in downloads,', this.selected)
    }
  }
}
</script>
<style lang="scss" scoped>
  .downloads-container {
    padding: 32px;
  }
</style>
