<template>
  <div class="downloads-container">
    <lab-selector :editable="true" v-model="selected" option-url="/api/lab/options"></lab-selector>
<!--    <el-button @click="log">Log selected</el-button>-->
  </div>
</template>

<script>
import LabSelector from '../../components/Selector/LabSelector'
export default {
  name: 'Downloads',
  components: { LabSelector },
  data() {
    return {
      selected: { id: 1, name: 'XXX实验室' }
    }
  },
  methods: {
    log() {
      console.log("in downloads,", this.selected)
    }
  }
}
</script>
<style lang="scss" scoped>
  .downloads-container {
    padding: 32px;
  }
</style>
