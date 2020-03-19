<template>
  <div class="app-container">
    <upload-file v-permission="['edit_daily, edit_daily_report']" url="/api/excel/daily/report" style="float: right;" />

    <qt-search
      :params-source="{}"
      i18n-index="daily.report"
      search-url="/daily/report"
      export
    />

    <el-link v-permission="['edit_daily_report', 'edit_daily']" class="create-btn" icon="el-icon-edit" @click="goToCreate">{{ $t('common.new') }}</el-link>
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

      <el-table-column min-width="420" align="center" :label="$t('daily.report.title')">
        <template slot-scope="scope">
          <span>{{ scope.row.title }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="180" align="center" :label="$t('daily.report.invitee_name')">
        <template slot-scope="scope">
          <span>{{ scope.row.invitee_name }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="180" align="center" :label="$t('daily.report.time')" sortable prop="time">
        <template slot-scope="scope">
          <span>{{ scope.row.time }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="180" align="center" :label="$t('daily.report.location')">
        <template slot-scope="scope">
          <span>{{ scope.row.location }}</span>
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
import { fetchReports } from '../../../api/daily'
import Pagination from '../../../components/Pagination/index'
import QtSearch from '../../../components/Search/QtSearch' // Secondary package based on el-pagination
import UploadFile from '../../../components/Upload/UploadFile'

export default {
  name: 'ReportList',
  components: { UploadFile, QtSearch, Pagination },
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
      fetchReports({ ...this.listQuery, ...this.$route.query }).then(response => {
        this.list = response.content
        this.total = response.totalElements
        this.listLoading = false
      })
    },
    goToDetail(row, event, column) {
      const url = `/daily/report/${row.id}`
      this.$router.push(url)
    },
    goToCreate() {
      this.$router.push('/daily/report/create')
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
