<template>
  <div style="padding-top: 20px;">
    <h3 class="project-funds-title">经费到账情况</h3>
    <project-funds-dialog v-if="type !== 'show'" type="create" :data-source="{ projectId: projectId, data: {} }" />

    <el-table
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%"
    >
      <el-table-column type="index" align="center" width="80" sortable prop="id" />

      <el-table-column width="180" align="center" :label="$t('research.project_funds_info.arrival_date')" sortable prop="name">
        <template slot-scope="scope">
          <span>{{ scope.row.arrival_date }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180" align="center" :label="$t('research.project_funds_info.amount')">
        <template slot-scope="scope">
          <span>{{ scope.row.amount }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="400" align="center" :label="$t('research.project_funds_info.remark')">
        <template slot-scope="scope">
          <span>{{ scope.row.remark }}</span>
        </template>
      </el-table-column>

      <el-table-column v-if="type !== 'show'" min-width="180" align="center" :label="$t('common.operation')">
        <template slot-scope="scope">
          <project-funds-dialog :data-source="{ projectId: projectId, data: scope.row }" type="edit" />
          <el-button type="text" @click="onDelete(scope.row.id)">{{ $t('common.delete') }}</el-button>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
  import { deleteProjectFund, fetchProjectFundsByProject } from '../../../api/research'
import ProjectFundsDialog from './ProjectFundsDialog'
import { refresh } from '../../../utils/tag-view'

export default {
  name: 'ProjectFundsTable',
  components: { ProjectFundsDialog },
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
      fetchProjectFundsByProject(this.projectId).then(response => {
        this.list = response
        this.listLoading = false
      })
    },
    onDelete(fundId) {
      this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(_ => {
        deleteProjectFund(this.projectId, fundId)
      }).then(res => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
        refresh(this)
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
  .project-funds-title {
    margin-top: 10px;
    float: left;
  }
  .create-btn {
    margin: 13px 10px 10px 10px;
    float: right;
  }

  .project-funds-pagination {
    margin-top: -10px;
  }
</style>
