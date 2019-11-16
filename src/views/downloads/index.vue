<template>
  <div class="downloads-container">
    <div class="image-uploader-container">
      <single-image v-model="url"></single-image>
    </div>
  </div>
</template>

<script>
import SingleImage from '../../components/Upload/SingleImage2'
export default {
  name: 'Downloads',
  components: { SingleImage },
  data() {
    return {
      url: '/file/09d69911-7d0e-46f5-89c4-b9281eee693f屏幕快照 2019-10-30 下午5.34.04.png'
    }
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
  .downloads-container {
    margin: 32px;
    .image-uploader-container {
      width: 100px;
      height: 100px;
    }
  }
</style>
