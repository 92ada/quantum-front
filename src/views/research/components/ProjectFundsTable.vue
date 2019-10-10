<template>
  <div style="padding-top: 20px;">
    <h3 class="project-funds-title">经费到账情况</h3>
    <el-link class="create-btn" icon="el-icon-edit" @click="goToCreate">新增到账记录</el-link>
    <el-table
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%"
      @row-click="goToDetail"
    >
      <el-table-column align="center" :label="$t('research.project_funds_info.id')" width="80" sortable prop="id">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>

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

      <el-table-column width="400" align="center" :label="$t('research.project_funds_info.remark')">
        <template slot-scope="scope">
          <span>{{ scope.row.remark }}</span>
        </template>
      </el-table-column>

    </el-table>

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getList"
    />
  </div>
</template>

<script>
import Pagination from '../../../components/Pagination/index' // Secondary package based on el-pagination
import { fetchProjectFundsByProject } from '../../../api/research'

export default {
  name: 'ProjectFundsTable',
  components: { Pagination },
  filters: {
    statusFilter(status) {
      const statusMap = {
        '授权': 'success',
        '申请': 'info'
      }
      return statusMap[status]
    }
  },
  props: ['projectId'],
  data() {
    return {
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchProjectFundsByProject(this.peopleId).then(response => {
        console.log(response)
        this.list = response.data.items
        this.total = response.data.total
        this.listLoading = false
      })
    },
    goToDetail(row, event, column) {
      // const url = `/research/project/${this.projectId}/funds/${row.id}`
      // this.$router.push(url)
    },
    goToCreate() {
      // this.$router.push(`/research/project/${this.projectId}/funds/create`)
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
</style>
