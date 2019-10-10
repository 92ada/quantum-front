<template>
  <el-col :key="col.index" :span="12" class="form-col">
    <form-item v-if="col.type === 'string'" :label="col.name+':'" :editable="col.editable" class="form-item">
      <el-input v-model="postForm[col.index]" class="form-input" />
    </form-item>

    <form-item v-if="col.type === 'enum'" :label="col.name+':'" :editable="col.editable" class="form-item">
      <el-select v-model="postForm[col.index]" :placeholder="$t('common.pleaseChoose')">
        <el-option v-for="option in col.options" :key="option" :value="option" />
      </el-select>
    </form-item>

    <form-item v-if="col.type === 'date'" :label="col.name+':'" :editable="col.editable" class="form-item">
      <el-date-picker
        v-model="postForm[col.index]"
        class="form-date"
        type="date"
        :placeholder="$t('common.pleaseChoose')"
      />
    </form-item>

    <form-item v-if="col.type === 'text'" :label="col.name+':'" :editable="col.editable" class="form-item">
      <el-input v-model="postForm[col.index]" type="textarea" :rows="5" />
    </form-item>

  </el-col>
</template>
<script>
import FormItem from './QtFormItem'

export default {
  name: 'QtFormCol',
  components: { FormItem },
  props: {
    postForm: {
      default: () => {},
      type: Object
    },
    col: {
      default: () => {},
      type: Object
    }
  }
}
</script>
<style lang="scss" scoped>
    .form-input {
      max-width: 195px;
    }

    .form-date {
      max-width: 195px;
    }

    .form-item {
      border-left: 1px solid #f0f0f0;
      border-right: 1px solid #f0f0f0;
      margin: 0px 0px 0px -1px;
      padding: 2px 2px 2px 2px;
    }
</style>
