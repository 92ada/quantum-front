<template>
  <div class="app-container">
    <qt-search
      :params-source="{}"
      i18n-index="research"
      search-url="/research/hosting"
    />

    <el-link v-permission="['edit_daily_hosting', 'edit_daily']" class="create-btn" icon="el-icon-edit"  @click="goToCreate">{{  $t('common.new') }}</el-link>
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

      <el-table-column min-width="420" align="center" :label="$t('daily.hosting.title')">
        <template slot-scope="scope">
          <span>{{ scope.row.title }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="180" align="center" :label="$t('daily.hosting.time')" sortable prop="name">
        <template slot-scope="scope">
          <span>{{ scope.row.time }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="180" align="center" :label="$t('daily.hosting.site')">
        <template slot-scope="scope">
          <span>{{ scope.row.site }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="180" align="center" :label="$t('daily.hosting.is_reimbursement')">
        <template slot-scope="{row}">
          <el-tag v-if="row.is_reimbursement" :type="row.is_reimbursement | statusFilter">
            {{ row.is_reimbursement.toString().toUpperCase() }}
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
import { fetchHostings } from '../../../api/daily'
import Pagination from '../../../components/Pagination/index'
import QtSearch from '../../../components/Search/QtSearch' // Secondary package based on el-pagination

export default {
  name: 'HostingList',
  components: { QtSearch, Pagination },
  filters: {
    statusFilter(status) {
      const statusMap = {
        'true': 'success',
        'false': 'info'
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
      fetchHostings({ ...this.listQuery, ...this.$route.query }).then(response => {
        this.list = response.content
        this.total = response.totalPages
        this.listLoading = false
      })
    },
    goToDetail(row, event, column) {
      const url = `/daily/hosting/${row.id}`
      this.$router.push(url)
    },
    goToCreate() {
      this.$router.push('/daily/hosting/create')
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
