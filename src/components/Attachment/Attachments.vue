<template>
  <div>
    <el-row gutter="24">
      <el-col :span="10">
        <h3>附件列表</h3>
      </el-col>
      <el-col :span="14">
        <el-row type="flex" class="row-bg uploader" justify="end">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :multiple="false"
            :limit="1"
            :on-success="handleUploadSuccess"
            :on-error="handleUploadError"
            :file-list="fileList">
            <el-button size="small" type="primary">上传附件</el-button>
          </el-upload>
        </el-row>
      </el-col>
    </el-row>
    
    <el-table
    :data="dataSource"
    border>
    <el-table-column
      prop="fileType"
      label="文件类型"
      width="100">
    </el-table-column>
    <el-table-column
      prop="fileName"
      label="文件名">
    </el-table-column>
    <el-table-column
      prop="fileUrl"
      label="下载链接">
    </el-table-column>
    <el-table-column
      prop="createdAt"
      label="日期"
      width="200">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <a :href="scope.row.fileUrl" target="_blank" class="el-button el-button--text el-button--small">下载</a>
        <el-button @click="handleClickDelete(scope.row)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import request from '../../utils/request'

const defaultDataSource = {
  postUrl: '/api/xxx',
  removeUrl: '/api/xxx/{id}',
  data: [{
    id: 0,
    fileName: '测试图片',
    fileUrl: 'https://www.baidu.com/img/bd_logo1.png?qua=high&where=super',
    fileType: 'PNG',
    createdAt: '2018-09-09 18:34'
  }]
}

export default {
  name: 'Attachments',
  props: {
    dataSourceUrl: {
      type: String,
      default: () => {}
    }
  },
  data() {
    return {
      dataSource: defaultDataSource.data,
      postUrl: defaultDataSource.postUrl,
      removeUrl: defaultDataSource.removeUrl,
    }
  },
  created() {
    request({
      url: this.dataSourceUrl,
      method: 'get'
    }).then(res => {
      this.dataSource = Object.assign([], this.dataSource, res.data.data)
      this.postUrl = res.data.postUrl
      this.removeUrl = res.data.removeUrl
    })
  },
  methods: {
    handleAttachmentCreate(fileName, fileUrl) {
      const requestUrl = this.postUrl
      request({
        url: this.postUrl,
        method: 'post',
        data: {fileName, fileUrl}
      }).then(res => {
        alert('success') // 记得自己改成更友好的提示哦1😯
      })
    },
    handleClickDelete(row) {
      request({
        url: this.removeUrl.replace('{id}', row.id),
        method: 'delete'
      }).then(res => {
        alert('success') // 记得自己改成更友好的提示哦2😯
      })
    },
    // uploader
    handleUploadSuccess(response, file, fileList) {
      console.log(response)
      const {fileName, fileUrl} = response.data
      this.handleAttachmentCreate(fileName, fileUrl)
    },
    handleUploadError(err, file, fileList) {
      console.error(err)
    },
  }
}
</script>

<style lang="scss" scoped>
  .uploader{
    margin: 12px 0;
  }
</style>
