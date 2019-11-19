<template>
  <div class="upload-container" v-permission="['import_excel']">
    <el-button type="primary" plain @click="downloadTemplate">{{ $t('common.download_template') }}</el-button>

    <el-upload
      :multiple="false"
      :show-file-list="false"
      :on-success="handleUploadSuccess"
      :action="postApi"
      style="display: inline-block;"
    >
      <el-button type="primary" plain>{{ $t('common.upload') }}</el-button>
    </el-upload>
  </div>
</template>

<script>
import { downloadByUrl } from '../../api/excel'

export default {
  name: 'UploadFile',
  props: {
    url: {
      type: String,
      default: ''
    }
  },
  computed: {
    postApi() {
      return process.env.VUE_APP_BASE_API + this.url
    }
  },
  methods: {
    handleUploadSuccess() {

    },
    downloadTemplate() {
      const name = '0'
      downloadByUrl(this.url + `/${name}-template.xls`)
    }
  }
}
</script>

<style lang="scss" scoped>
  .upload-container {
    margin-bottom: 20px;
  }
</style>
