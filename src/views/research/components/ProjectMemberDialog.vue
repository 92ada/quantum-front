<template>
  <div style="display: inline;">
    <el-link v-if="type === 'create'" class="create-btn" icon="el-icon-edit" @click="dialogFormVisible = true">添加项目成员</el-link>
    <el-button v-if="type === 'edit'" type="text" @click="dialogFormVisible = true">{{ $t('common.edit') }}</el-button>

    <el-dialog :title="$t('research.project_member_info.TITLE')" :visible.sync="dialogFormVisible" class="dialog">
      <el-form :model="person" label-width="100px" label-position="left">
        <el-form-item  :label="$t('research.project_member_info.person')" class="form-item">
          <person-selector v-model="person" :editable="true" option-url="/api/people/options" />
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
import { createProjectMember } from '../../../api/research'
import { refresh } from '../../../utils/tag-view'
import PersonSelector from '../../../components/Selector/PersonSelector'

export default {
  name: 'ProjectMemberDialog',
  props: ['dataSource', 'type'],
  components: { PersonSelector },
  data() {
    return {
      person: {},
      dialogFormVisible: false,
      loading: false
    }
  },
  created() {
    this.person = Object.assign({}, this.person, this.dataSource.person)
  },
  methods: {
    handleSubmit() {
      const peopleId = this.person.id

      switch (this.type) {
        case 'edit': this.updateData(peopleId); return
        case 'create': this.postData(peopleId); return
      }
    },
    postData(peopleId) {
      const projectId = this.dataSource.projectId

      if (!this.loading) {
        this.loading = true
        createProjectMember(projectId, peopleId).then(res => {
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
