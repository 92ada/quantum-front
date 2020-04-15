<template>
  <div v-permission="['import_excel']" class="upload-container">
    <!--    <el-button type="primary" plain @click="downloadTemplate">{{ $t('common.download_template') }}</el-button>-->

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

    <el-switch
      v-if="forceMode"
      v-model="force"
      active-text="覆盖模式"
    />
  </div>
</template>

<script>
import { downloadByUrl } from '../../api/excel'

export default {
  name: 'UploadFile',
  props: {
    forceMode: {
      type: Boolean,
      default: false
    },
    url: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      force: false
    }
  },
  computed: {
    postApi() {
      return process.env.VUE_APP_BASE_API + this.url + '?force=' + this.force
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
      let msg
      try {
        msg = JSON.parse(e.message).message
      } catch (_) {
        msg = e.message
      }
      this.$message({
        type: 'error',
        message: '上传失败! ' + msg,
        duration: 0,
        showClose: true
      })
    },
    downloadTemplate() {
      const name = this.format(this.url)
      downloadByUrl(this.url + `/${name}-template.xlsx`)
    },
    format(str) {
      // remove leading
      if (str.startsWith('/api/excel/')) str = str.substr(11)

      // replace slash with hyphen
      return str.split('/').join('_')
    }
  }
}
</script>

<style lang="scss" scoped>
  .upload-container {
    margin-bottom: 20px;
  }
</style>
