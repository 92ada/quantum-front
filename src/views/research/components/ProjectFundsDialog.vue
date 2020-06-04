<template>
  <div style="display: inline;">
    <el-link v-if="type === 'create'" class="create-btn" icon="el-icon-edit" @click="dialogFormVisible = true">新增到账记录</el-link>
    <el-button v-if="type === 'edit'" type="text" @click="dialogFormVisible = true">{{ $t('common.edit') }}</el-button>

    <el-dialog :title="$t('research.project_funds_info.TITLE')" :visible.sync="dialogFormVisible" class="dialog">
      <el-form :model="postForm" label-width="100px" label-position="left">
        <el-form-item :label="$t('research.project_funds_info.arrival_date')" class="flight-form-item">
          <el-date-picker
            v-model="postForm.arrival_date"
            class="form-date"
            type="date"
            :placeholder="$t('common.pleaseChoose')"
          />
        </el-form-item>

        <el-form-item :label="$t('research.project_funds_info.amount')" class="flight-form-item">
          <el-input v-model="postForm.amount" autocomplete="off" type="number" />
        </el-form-item>

        <el-form-item :label="$t('research.project_funds_info.remark')" class="flight-form-item">
          <el-input v-model="postForm.remark" type="textarea" :rows="5" autocomplete="off" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button v-loading="loading" type="primary" @click="handleSubmit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import { createProjectFund, updateProjectFund } from '../../../api/research'
import { refresh } from '../../../utils/tag-view'

export default {
  name: 'ProjectFundsDialog',
  props: ['dataSource', 'type'],
  data() {
    return {
      postForm: {},
      dialogFormVisible: false,
      loading: false
    }
  },
  created() {
    this.postForm = Object.assign({}, this.dataSource.data, this.postForm)
  },
  methods: {
    handleSubmit() {
      const finalPostForm = this.postForm
      switch (this.type) {
        case 'edit': this.updateData(finalPostForm); return
        case 'create': this.postData(finalPostForm); return
      }
    },
    // api
    postData(data) {
      const projectId = this.dataSource.projectId

      if (!this.loading) {
        this.loading = true
        createProjectFund(projectId, data).then(res => {
          this.$message({
            message: '创建成功! Created Successfully!',
            type: 'success'
          })
          this.dialogFormVisible = false
          refresh(this)
        }).catch(error => {
          this.$message.error('创建失败! Creation Failed!')
          this.loading = false
        })
      }
    },
    updateData(data) {
      const projectId = this.dataSource.projectId
      const fundId = this.dataSource.data.id

      if (!this.loading) {
        updateProjectFund(projectId, fundId, data).then(res => {
          this.$message({
            message: '更新成功! Updated Successfully!',
            type: 'success'
          })
          this.dialogFormVisible = false
          refresh(this)
        }).catch(error => {
          this.$message.error('更新失败! Update Failed!')
          this.loading = false
        })
      }
      return
    }
  }
}
</script>

<style lang="scss" scoped>
  .flight-form-item {

  }
  .dialog.el-dialog {
    width: 400px;
  }
  .create-btn {
    margin: 15px 10px 0px 10px;
    float: right;
  }
</style>
