<template>
  <div style="padding-top: 20px;">
    <h3 class="project-member-title">项目成员情况</h3>
    <project-member-dialog v-if="type !== 'show'" type="create" :data-source="{ projectId: projectId, data: {} }" />

    <el-table
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%"
    >

      <el-table-column width="180" align="center" :label="$t('research.project_member_info.name')" sortable prop="name">
        <template slot-scope="scope">
          <span>{{ scope.row.memberName }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180" align="center" :label="$t('research.project_member_info.phone')" >
        <template slot-scope="scope">
          <span>{{ scope.row.phone }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180" align="center" :label="$t('research.project_member_info.email')" >
        <template slot-scope="scope">
          <span>{{ scope.row.email }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180" align="center" :label="$t('research.project_member_info.institution')">
        <template slot-scope="scope">
          <span>{{ scope.row.institution }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="180" align="center" :label="$t('research.project_member_info.position_title')">
      <template slot-scope="scope">
        <span>{{ scope.row.position_title }}</span>
      </template>
    </el-table-column>

      <el-table-column min-width="180" align="center" :label="$t('research.project_member_info.degree')">
        <template slot-scope="scope">
          <span>{{ scope.row.degree }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="180" align="center" :label="$t('research.project_member_info.research_direction')">
        <template slot-scope="scope">
          <span>{{ scope.row.research_direction }}</span>
        </template>
      </el-table-column>

      <el-table-column v-if="type !== 'show'" min-width="180" align="center" :label="$t('common.operation')">
        <template slot-scope="scope">
          <project-member-dialog :data-source="{ projectId: projectId, data: scope.row }" type="edit" />
          <el-button type="text" @click="onDelete(scope.row.id)">{{ $t('common.delete') }}</el-button>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
import { deleteProjectMember, fetchProjectMemberByProject } from '../../../api/research'
import ProjectMemberDialog from './ProjectMemberDialog'
import { refresh } from '../../../utils/tag-view'

export default {
  name: 'ProjectMemberTable',
  components: { ProjectMemberDialog },
  props: ['projectId', 'type'],
  data() {
    return {
      list: null,
      listLoading: false
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchProjectMemberByProject(this.projectId).then(response => {
        this.list = response
        this.listLoading = false
      })
    },
    onDelete(recordId) {
      this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(_ => {
        deleteProjectMember(this.projectId, recordId)
        refresh(this)
      }).then(res => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(error => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
</script>

<style scoped>
  .project-member-title {
    margin-top: 10px;
    float: left;
  }
  .create-btn {
    margin: 13px 10px 10px 10px;
    float: right;
  }

  .project-member-pagination {
    margin-top: -10px;
  }
</style>
