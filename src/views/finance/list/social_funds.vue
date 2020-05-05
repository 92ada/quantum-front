<template>
  <div class="app-container">
<!--    <upload-file v-permission="['edit_finance, edit_finance_social_funds']" url="/api/excel/finance/social_funds" style="float: right;" />-->

    <qt-search
      :params-source="{}"
      i18n-index="finance.social_funds"
      search-url="/finance/social_funds"
      export-excel
    />

    <el-link v-permission="['edit_finance_social_funds', 'edit_finance']" class="create-btn" icon="el-icon-edit" @click="goToCreate">{{ $t('common.new') }}</el-link>
    <el-table
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%"
      @row-click="goToDetail"
    >
      <el-table-column align="center" :label="$t('finance.social_fund.sid')" min-width="100" sortable prop="id">
        <template slot-scope="scope">
          <span>{{ scope.row.people && scope.row.people.sid }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="100" align="center" :label="$t('finance.social_fund.name')" sortable prop="name">
        <template slot-scope="scope">
          <span>{{ scope.row.people && scope.row.people.name }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="100" align="center" :label="$t('finance.social_fund.fund_account_no')">
        <template slot-scope="scope">
          <span>{{ scope.row.fund_account_no }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="100" align="center" :label="$t('finance.social_fund.fund_source')">
        <template slot-scope="scope">
          <span>{{ scope.row.fund_source }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="100" align="center" :label="$t('finance.social_fund.date')">
        <template slot-scope="scope">
          <span>{{ scope.row.date }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="100" align="center" :label="$t('finance.social_fund.personal_payment')">
        <template slot-scope="scope">
          <span>{{ scope.row.personal_payment }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="100" align="center" :label="$t('finance.social_fund.institutional_payment')">
        <template slot-scope="scope">
          <span>{{ scope.row.institutional_payment }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="100" align="center" :label="$t('finance.social_fund.base_amount')">
        <template slot-scope="scope">
          <span>{{ scope.row.base_amount }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="100" align="center" :label="$t('finance.social_fund.ratio_of_institutional_payment')">
        <template slot-scope="scope">
          <span>{{ scope.row.ratio_of_institutional_payment }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="100" align="center" :label="$t('finance.social_fund.amount')">
        <template slot-scope="scope">
          <span>{{ scope.row.amount }}</span>
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
import { fetchSocialFunds } from '../../../api/finance'
import Pagination from '../../../components/Pagination/index' // Secondary package based on el-pagination
import QtSearch from '../../../components/Search/QtSearchDate'
import UploadFile from '../../../components/Upload/UploadFile'

export default {
  name: 'SocialFundsList',
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
      fetchSocialFunds({ ...this.listQuery, ...this.$route.query }).then(response => {
        this.list = response.content
        this.total = response.totalElements
        this.listLoading = false
      })
    },
    goToDetail(row, event, column) {
      const url = `/finance/social_funds/${row.id}`
      this.$router.push(url)
    },
    goToCreate() {
      this.$router.push('/finance/social_funds/create')
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
