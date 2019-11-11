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
      <el-table-column align="center" :label="$t('finance.social_funds.uid')" min-width="100" sortable prop="id">
        <template slot-scope="scope">
          <span>{{ scope.row.uid }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="100" align="center" :label="$t('finance.social_funds.name')" sortable prop="name">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="100" align="center" :label="$t('finance.social_funds.fund_account_no')">
        <template slot-scope="scope">
          <span>{{ scope.row.fund_account_no }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="100" align="center" :label="$t('finance.social_funds.fund_source')">
        <template slot-scope="scope">
          <span>{{ scope.row.fund_source }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="100" align="center" :label="$t('finance.social_funds.month')">
        <template slot-scope="scope">
          <span>{{ scope.row.month }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="100" align="center" :label="$t('finance.social_funds.personal_payment')">
        <template slot-scope="scope">
          <span>{{ scope.row.personal_payment }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="100" align="center" :label="$t('finance.social_funds.institutional_payment')">
        <template slot-scope="scope">
          <span>{{ scope.row.institutional_payment }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="100" align="center" :label="$t('finance.social_funds.base_amount')">
        <template slot-scope="scope">
          <span>{{ scope.row.base_amount }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="100" align="center" :label="$t('finance.social_funds.ratio_of_institutional_payment')">
        <template slot-scope="scope">
          <span>{{ scope.row.ratio_of_institutional_payment }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="100" align="center" :label="$t('finance.social_funds.amount')">
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

export default {
  name: 'SocialFundsList',
  components: { Pagination },
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
      fetchSocialFunds(this.listQuery).then(response => {
        console.log(response)
        this.list = response.content
        this.total = response.totalPages
        this.listLoading = false
      })
    },
    goToDetail(row, event, column) {
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
