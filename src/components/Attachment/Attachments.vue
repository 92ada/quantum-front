<template>
  <div class="attachments-container">
    <el-row :gutter="24">
      <el-col :span="10">
        <h3>附件列表</h3>
      </el-col>
      <el-col :span="14">
        <el-row type="flex" class="row-bg uploader" justify="end">
          <el-upload
            class="upload-demo"
            :action="uploadApi"
            :multiple="false"
            :limit="1"
            :on-success="handleUploadSuccess"
            :on-error="handleUploadError"
            :file-list="fileList"
          >
            <el-button v-if="type !== 'show'" size="small" type="primary">上传附件</el-button>
          </el-upload>
        </el-row>
      </el-col>
    </el-row>

    <el-table
      :data="dataSource"
      border
    >
      <el-table-column :label="$t('attachment.type')" width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.type }}</span>
        </template>
      </el-table-column>

      <el-table-column :label="$t('attachment.name')" width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column :label="$t('attachment.url')">
        <template slot-scope="scope">
          <span>{{ scope.row.url }}</span>
        </template>
      </el-table-column>

      <el-table-column :label="$t('attachment.createdAt')" width="200">
        <template slot-scope="scope">
          <span>{{ scope.row.createdAt }}</span>
        </template>
      </el-table-column>

      <el-table-column
        fixed="right"
        :label="$t('common.operation')"
        width="100"
      >
        <template slot-scope="scope">
          <a :href="scope.row.url" target="_blank" class="el-button el-button--text el-button--small">下载</a>
          <el-button v-if="type === 'edit'" type="text" size="small" @click="handleClickDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import request from '../../utils/request'
import { deleteRequest } from '../../utils/delete'
import { refresh } from '../../utils/tag-view'

export default {
  name: 'Attachments',
  props: {
    dataSourceUrl: {
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
      dataSource: [],
      fileList: [],
      uploadApi: process.env.VUE_APP_BASE_API + '/api/upload'
    }
  },
  created() {
    request({
      url: this.dataSourceUrl,
      method: 'get'
    }).then(res => {
      this.dataSource = Object.assign([], this.dataSource, res)
    })
  },
  methods: {
    handleAttachmentCreate(name, url) {
      const type = name.split('.').reverse()[0]
      const fullUrl = process.env.VUE_APP_BASE_API + url
      request({
        url: this.dataSourceUrl, // e.g. '/api/attachment/paper/1'
        method: 'post',
        data: { type, name, url: fullUrl }
      }).then(res => {
        this.$message({
          message: '上传成功! Uploaded Successfully!',
          type: 'success'
        })
        refresh(this)
      }).catch(error => {
        this.$message.error('拉取附件失败! Fetch Attachments Failed!')
        this.loading = false
      })
    },
    handleClickDelete(row) {
      deleteRequest(this, request({
        url: `${this.dataSourceUrl}/${row.recordId}`,
        method: 'delete'
      }))
    },
    // uploader
    handleUploadSuccess(response, file, fileList) {
      const { fileOriginName, fileUrl } = response
      this.handleAttachmentCreate(fileOriginName, fileUrl)
    },
    handleUploadError(err, file, fileList) {
      console.error(err)
      this.$message.error('上传失败! Upload Failed!')
    }
  }
}
</script>

<style lang="scss" scoped>
    .attachments-container {
      margin-top: 20px;
    }
  .uploader{
    margin: 12px 0;
  }
</style>
