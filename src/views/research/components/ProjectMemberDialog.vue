<template>
  <div style="display: inline;">
    <el-link v-if="type === 'create'" class="create-btn" icon="el-icon-edit" @click="dialogFormVisible = true">添加项目成员</el-link>
    <el-button v-if="type === 'edit'" type="text" @click="dialogFormVisible = true">{{ $t('common.edit') }}</el-button>

    <el-dialog :title="$t('research.project_member_info.TITLE')" :visible.sync="dialogFormVisible" class="dialog">
      <el-form :model="person" label-width="100px" label-position="left">

        <el-form-item :label="$t('research.project_member_info.name')" class="flight-form-item">
          <el-input v-model="postForm.memberName" autocomplete="off" />
        </el-form-item>

        <el-form-item :label="$t('research.project_member_info.institution')" class="flight-form-item">
          <el-input v-model="postForm.institution" autocomplete="off" />
        </el-form-item>

        <el-form-item :label="$t('research.project_member_info.position_title')" class="flight-form-item">
          <el-input v-model="postForm.position_title" autocomplete="off" />
        </el-form-item>

        <el-form-item :label="$t('research.project_member_info.degree')" class="flight-form-item">
          <el-input v-model="postForm.degree" autocomplete="off" />
        </el-form-item>

        <el-form-item :label="$t('research.project_member_info.research_direction')" class="flight-form-item">
          <el-input v-model="postForm.research_direction" autocomplete="off" />
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
import { createProjectMember, updateProjectMember } from '../../../api/research'
import { refresh } from '../../../utils/tag-view'

export default {
  name: 'ProjectMemberDialog',
  props: ['dataSource', 'type'],
  data() {
    return {
      postForm: {},
      dialogFormVisible: false,
      loading: false
    }
  },
  created() {
    this.person = Object.assign({}, this.person, this.dataSource.person)
  },
  methods: {
    handleSubmit() {
      switch (this.type) {
        case 'edit': this.updateData(this.postForm); return
        case 'create': this.postData(this.postForm); return
      }
    },
    postData(data) {
      const projectId = this.dataSource.projectId

      if (!this.loading) {
        this.loading = true
        createProjectMember(projectId, data).then(res => {
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
      const memberId = this.dataSource.data.id

      if (!this.loading) {
        updateProjectMember(projectId, memberId, data).then(res => {
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
