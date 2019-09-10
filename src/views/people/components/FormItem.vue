<template>
  <el-form-item :label="label" class="form-item">
    <slot v-if="editable || creating" />
    <span v-else>{{ content }}</span>
  </el-form-item>
</template>

<script>
export default {
  name: 'FormItem',
  components: {},
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
      content: undefined,
      creating: false
    }
  },
  created() {
    const action = this.$route.path.split('/')[2]
    this.creating = action === 'create'
  },
  updated() {
    this.content = this.$slots.default[0].data.model.value
  }
}
</script>
<style lang="scss" scoped>
 span {
   padding-left: 10px;
 }
</style>
