<template>
  <div style="display: inline;">
    <el-link v-if="type === 'create'" class="create-btn" icon="el-icon-edit" @click="dialogFormVisible = true">新增</el-link>
    <el-button v-if="type === 'edit'" type="text" @click="dialogFormVisible = true">{{ $t('common.edit') }}</el-button>

    <el-dialog :visible.sync="dialogFormVisible" class="dialog">
      <el-form :model="postForm" label-width="200px" label-position="left">

        <el-form-item label="访学所在城市" class="dialog-form-item">
          <el-input v-model="postForm.city" autocomplete="off" />
        </el-form-item>

        <el-form-item label="访学高校名称" class="dialog-form-item">
          <el-input v-model="postForm.school" autocomplete="off" />
        </el-form-item>

        <el-form-item label="出访时间" class="dialog-form-item">
          <el-input v-model="postForm.start_date" autocomplete="off" />
          <small>输入格式YYYY/MM</small>
        </el-form-item>

        <el-form-item label="结束时间" class="dialog-form-item">
          <el-input v-model="postForm.end_date" autocomplete="off" />
          <small>输入格式YYYY/MM</small>
        </el-form-item>

        <el-form-item label="备注" class="dialog-form-item">
          <el-input v-model="postForm.remark" autocomplete="off" />
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
import { createStudentAchievement, updateStudentAchievement } from '../../../../../api/people'
import { refresh } from '../../../../../utils/tag-view'

export default {
  name: 'StudentAchievementsDialog5',
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
      const finalPostForm = { type: 'visit', data: this.postForm }
      switch (this.type) {
        case 'edit': this.updateData(finalPostForm); return
        case 'create': this.postData(finalPostForm); return
      }
    },
    // api
    postData(data) {
      const peopleId = this.dataSource.peopleId

      if (!this.loading) {
        this.loading = true
        createStudentAchievement(peopleId, data).then(res => {
          this.$message({
            message: '创建成功! Created Successfully!',
            type: 'success'
          })
          this.dialogFormVisible = false
          refresh(this)
        }).catch(_ => {
          this.$message.error('创建失败! Creation Failed!')
          this.loading = false
        })
      }
    },
    updateData(data) {
      const peopleId = this.dataSource.peopleId
      const recordId = this.dataSource.data.id

      if (!this.loading) {
        updateStudentAchievement(peopleId, recordId, data).then(res => {
          this.$message({
            message: '更新成功! Updated Successfully!',
            type: 'success'
          })
          this.dialogFormVisible = false
          refresh(this)
        }).catch(_ => {
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
  .dialog-form-item {
    small {
      color: gray;
      text-align: left;
      display: block;
    }
  }
  .dialog.el-dialog {
    width: 400px;
  }
  .create-btn {
    margin: 0px 10px 10px 10px;
    float: right;
  }
</style>
