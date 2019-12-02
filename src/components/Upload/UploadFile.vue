<template>
  <div v-permission="['import_excel']" class="upload-container">
    <el-button type="primary" plain @click="downloadTemplate">{{ $t('common.download_template') }}</el-button>

    <el-upload
      :multiple="false"
      :show-file-list="false"
      :on-success="handleUploadSuccess"
      :on-error="handleUploadError"
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
      this.$message({
        type: 'success',
        message: '上传成功! Uploaded Successfully！'
      })
    },
    handleUploadError(e) {
      const msg = JSON.parse(e.message)
      this.$message({
        type: 'error',
        message: '上传失败!' + msg.message,
        duration: 0,
        showClose: true
      })
    },
    downloadTemplate() {
      const name = '0'
      downloadByUrl(this.url + `/${name}-template.xlsx`)
    }
  }
}
</script>

<style lang="scss" scoped>
  .upload-container {
    margin-bottom: 20px;
  }
</style>
