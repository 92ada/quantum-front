<template>
  <div class="app-container">
    <!--    <upload-file v-permission="['edit_finance,edit_finance_expenditure']" url="/api/excel/finance/exps" style="float: right;" />-->

    <qt-search
      :params-source="{}"
      i18n-index="finance.expenditure"
      search-url="/finance/expenditure"
      by-date-range
      export-excel
      export-url="/api/excel/finance/exps"
    />

    <el-link v-permission="['edit_finance_expenditure', 'edit_finance']" class="create-btn" icon="el-icon-edit" @click="goToCreate">{{ $t('common.new') }} </el-link>
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

      <el-table-column align="center" :label="$t('finance.expenditure.expenditureNo')" width="180" sortable prop="id">
        <template slot-scope="scope">
          <span>{{ scope.row.expenditureNo }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="180" align="center" :label="$t('finance.expenditure.summary')">
        <template slot-scope="scope">
          <span>{{ scope.row.summary }}</span>
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
          <span>{{ scope.row.lab && scope.row.lab.name }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180" align="center" :label="$t('finance.expenditure.handler')">
        <template slot-scope="scope">
          <span>{{ scope.row.handler && scope.row.handler.name }}</span>
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
import QtSearch from '../../../components/Search/QtSearch'
import UploadFile from '../../../components/Upload/UploadFile'

export default {
  name: 'ExpenditureList',
  components: { Pagination, QtSearch, UploadFile },
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
        this.list = response.content
        this.total = response.totalElements
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
