<template>
  <div class="app-container">
    <upload-file v-permission="['edit_daily, edit_daily_visit']" url="/api/excel/daily/visit" style="float: right;"></upload-file>

    <qt-search
      :params-source="{}"
      i18n-index="daily.visit"
      search-url="/daily/visit"
      export
    />

    <el-link v-permission="['edit_daily_visit', 'edit_daily']" class="create-btn" icon="el-icon-edit" @click="goToCreate">{{  $t('common.new') }}</el-link>
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

      <el-table-column min-width="420" align="center" :label="$t('daily.visit.name')" sortable prop="name">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="180" align="center" :label="$t('daily.visit.receptionist')">
        <template slot-scope="scope">
          <span>{{ format(scope.row.receptionistJson) }}</span>
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
import UploadFile from '../../../components/Upload/UploadFile'
import QtSearch from '../../../components/Search/QtSearch' // Secondary package based on el-pagination

export default {
  name: 'VisitList',
  components: { Pagination, UploadFile, QtSearch },
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
      fetchVisits({ ...this.listQuery, ...this.$route.query }).then(response => {
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
    },
    format(lst) {
      return lst.join(' ')
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
