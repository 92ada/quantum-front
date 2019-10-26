<template>
  <el-form-item :label="label" class="form-item">
    <slot v-if="editable" />
    <div v-else class="not-editable">
      <el-tag v-if="content === true || content === false" :type="content | statusFilter">
        {{ content.toString().toUpperCase() }}
      </el-tag>
      <span v-else>{{ content }}</span>
    </div>
  </el-form-item>
</template>

<script>
export default {
  name: 'QtFormItem',
  components: {},
  filters: {
    statusFilter(status) {
      const statusMap = {
        'true': 'success',
        'false': 'info'
      }
      return statusMap[status]
    }
  },
  props: {
    editable: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      content: undefined
    }
  },
  created() {
    this.content = this.$slots.default[0].data.model.value
  },
  updated() {
    this.content = this.$slots.default[0].data.model.value
  }
}
</script>
<style lang="scss" scoped>
 .not-editable {
   padding-left: 10px;
 }
</style>
