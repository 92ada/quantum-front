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
      <el-table-column align="center" :label="$t('equipment.stock.stock_id')" min-width="80" sortable prop="id">
        <template slot-scope="scope">
          <span>{{ scope.row.stock_id }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="180" align="center" :label="$t('equipment.stock.type')">
        <template slot-scope="scope">
          <span>{{ scope.row.type }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="420" align="center" :label="$t('equipment.stock.title')" sortable prop="name">
        <template slot-scope="scope">
          <span>{{ scope.row.title }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="180" align="center" :label="$t('equipment.stock.taker_institution')">
        <template slot-scope="scope">
          <span>{{ scope.row.taker_institution }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="180" align="center" :label="$t('equipment.stock.taker')">
        <template slot-scope="scope">
          <span>{{ scope.row.taker }}</span>
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
import { fetchStocks } from '../../../api/equipment'
import Pagination from '../../../components/Pagination/index' // Secondary package based on el-pagination

export default {
  name: 'StockList',
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
      fetchStocks(this.listQuery).then(response => {
        console.log(response)
        this.list = response.content
        this.total = response.totalPages
        this.listLoading = false
      })
    },
    goToDetail(row, event, column) {
      const url = `/equipment/stock/${row.stock_id}`
      this.$router.push(url)
    },
    goToCreate() {
      this.$router.push('/equipment/stock/create')
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
