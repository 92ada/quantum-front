<template>
  <div class="downloads-container">
    <lab-selector v-model="selected" :editable="true" option-url="/api/lab/options" />
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
