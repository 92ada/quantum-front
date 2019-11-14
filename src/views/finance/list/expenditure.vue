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
      <el-table-column type="index" align="center" width="80" sortable prop="id" />

      <el-table-column align="center" :label="$t('finance.expenditure.expenditure_id')" width="180" sortable prop="id">
        <template slot-scope="scope">
          <span>{{ scope.row.expenditure_id }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="180" align="center" :label="$t('finance.expenditure.abstract')">
        <template slot-scope="scope">
          <span>{{ scope.row.title || scope.row.matter || scope.row.subject }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180" align="center" :label="$t('finance.expenditure.type')">
        <template slot-scope="scope">
          <span>{{ scope.row.type }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180" align="center" :label="$t('finance.expenditure.amount')">
        <template slot-scope="scope">
          <span>{{ scope.row.amount }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180" align="center" :label="$t('finance.expenditure.lab')">
        <template slot-scope="scope">
          <span>{{ scope.row.lab }}</span>
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
import { fetchExpenditure } from '../../../api/finance'
import Pagination from '../../../components/Pagination/index' // Secondary package based on el-pagination

export default {
  name: 'ExpenditureList',
  components: { Pagination },
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
      fetchExpenditure({ ...this.listQuery, ...this.$route.query }).then(response => {
        console.log(response)
        this.list = response.content
        this.total = response.totalPages
        this.listLoading = false
      })
    },
    goToDetail(row, event, column) {
      const url = `/finance/expenditure/${row.id}`
      this.$router.push(url)
    },
    goToCreate() {
      this.$router.push('/finance/expenditure/create_index')
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
