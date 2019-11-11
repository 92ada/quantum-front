<template>
  <div class="app-container">
    <el-link class="create-btn" icon="el-icon-edit" @click="goToCreate">新建</el-link>
    <el-table
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%"
      @row-click="goToDetail"
    >
      <el-table-column align="center" :label="$t('daily.visit.id')" min-width="80" sortable prop="id">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="420" align="center" :label="$t('daily.visit.name')" sortable prop="name">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="180" align="center" :label="$t('daily.visit.receptionist')">
        <template slot-scope="scope">
          <span>{{ scope.row.receptionist }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="180" align="center" :label="$t('daily.visit.approval_status')">
        <template slot-scope="{row}">
          <el-tag :type="row.approval_status | statusFilter">
            {{ row.approval_status }}
          </el-tag>
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
import { fetchVisits } from '../../../api/daily'
import Pagination from '../../../components/Pagination/index' // Secondary package based on el-pagination

export default {
  name: 'VisitList',
  components: { Pagination },
  filters: {
    statusFilter(status) {
      const statusMap = {
        '已批准': 'success',
        '审批中': 'info',
        '未提交': 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 0,
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
      fetchVisits(this.listQuery).then(response => {
        console.log(response)
        this.list = response.content
        this.total = response.totalPages
        this.listLoading = false
      })
    },
    goToDetail(row, event, column) {
      const url = `/daily/visit/${row.id}`
      this.$router.push(url)
    },
    goToCreate() {
      this.$router.push('/daily/visit/create')
    }
  }
}
</script>

<style scoped>
  .create-btn {
    margin: 10px 10px 10px 10px;
    float: right;
  }
</style>
