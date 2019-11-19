<template>
  <el-form-item :label="label" class="form-item">
    <slot v-if="editable" />
    <div v-else class="not-editable">
      <el-tag v-if="type === 'enumerated' && content" :type="content | statusFilter">
        {{ format(content.toString()) }}
      </el-tag>
      <span v-else>{{ content }}</span>
    </div>
  </el-form-item>
</template>

<script>
import { underlineToSentenceFormat } from '../../utils/form'
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
    },
    type: {
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
    this.content = this.$slots.default && this.$slots.default[0].data.model.value
  },
  updated() {
    this.content = this.$slots.default && this.$slots.default[0].data.model.value
  },
  methods: {
    format(str) {
      return underlineToSentenceFormat(str)
    }
  }
}
</script>
<style lang="scss" scoped>
 .not-editable {
   padding-left: 10px;
 }
</style>
