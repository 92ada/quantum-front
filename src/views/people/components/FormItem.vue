<template>
  <el-form-item :label="label" class="form-item">
    <slot v-if="content && content.editable" :v-model="content.value" />
    <span v-else>{{ content && content.value }}</span>
  </el-form-item>
</template>

<script>
export default {
  name: 'FormItem',
  components: {},
  props: ['editable', 'label', 'content']
}
</script>
<style lang="scss" scoped>
 span {
   padding-left: 10px;
 }
</style>
