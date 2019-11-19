<template>
  <div class="app-container">
    <qt-search
      :params-source="{}"
      i18n-index="finance.social_insurance"
      search-url="/finance/social_insurance"
      by-date-range
    />

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
      <el-table-column align="center" :label="$t('finance.social_insurance.uid')" min-width="100" sortable prop="id">
        <template slot-scope="scope">
          <span>{{ scope.row.people.sid }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="100" align="center" :label="$t('finance.social_insurance.name')" sortable prop="name">
        <template slot-scope="scope">
          <span>{{ scope.row.people.name }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="100" align="center" :label="$t('finance.social_insurance.fund_source')">
        <template slot-scope="scope">
          <span>{{ scope.row.fund_source }}</span>
        </template>
      </el-table-column>

      <el-table-column :label="$t('finance.social_insurance.receivable')" align="center">
        <el-table-column min-width="80" align="center" :label="$t('finance.social_insurance.total')">
          <template slot-scope="scope">
            <span>{{ scope.row.receivable_total }}</span>
          </template>
        </el-table-column>

        <el-table-column min-width="80" align="center" :label="$t('finance.social_insurance.individual')">
          <template slot-scope="scope">
            <span>{{ scope.row.receivable_by_individual }}</span>
          </template>
        </el-table-column>

        <el-table-column min-width="80" align="center" :label="$t('finance.social_insurance.institution')">
          <template slot-scope="scope">
            <span>{{ scope.row.receivable_by_institution }}</span>
          </template>
        </el-table-column>
      </el-table-column>

      <el-table-column :label="$t('finance.social_insurance.pension')" align="center">
        <el-table-column min-width="80" align="center" :label="$t('finance.social_insurance.base_amount')">
          <template slot-scope="scope">
            <span>{{ scope.row.pension_base_amount }}</span>
          </template>
        </el-table-column>

        <el-table-column min-width="80" align="center" :label="$t('finance.social_insurance.individual')">
          <template slot-scope="scope">
            <span>{{ scope.row.pension_by_individual }}</span>
          </template>
        </el-table-column>

        <el-table-column min-width="80" align="center" :label="$t('finance.social_insurance.institution')">
          <template slot-scope="scope">
            <span>{{ scope.row.pension_by_institution }}</span>
          </template>
        </el-table-column>
      </el-table-column>

      <el-table-column :label="$t('finance.social_insurance.medical')" align="center">
        <el-table-column min-width="80" align="center" :label="$t('finance.social_insurance.base_amount')">
          <template slot-scope="scope">
            <span>{{ scope.row.medical_base_amount }}</span>
          </template>
        </el-table-column>

        <el-table-column min-width="80" align="center" :label="$t('finance.social_insurance.individual')">
          <template slot-scope="scope">
            <span>{{ scope.row.medical_by_individual }}</span>
          </template>
        </el-table-column>

        <el-table-column min-width="80" align="center" :label="$t('finance.social_insurance.institution')">
          <template slot-scope="scope">
            <span>{{ scope.row.medical_by_institution }}</span>
          </template>
        </el-table-column>
      </el-table-column>

      <el-table-column :label="$t('finance.social_insurance.work_injury')" align="center">
        <el-table-column min-width="80" align="center" :label="$t('finance.social_insurance.base_amount')">
          <template slot-scope="scope">
            <span>{{ scope.row.work_injury_base_amount }}</span>
          </template>
        </el-table-column>

        <el-table-column min-width="80" align="center" :label="$t('finance.social_insurance.institution')">
          <template slot-scope="scope">
            <span>{{ scope.row.work_injury_by_institution }}</span>
          </template>
        </el-table-column>
      </el-table-column>

      <el-table-column :label="$t('finance.social_insurance.unemployment')" align="center">
        <el-table-column min-width="80" align="center" :label="$t('finance.social_insurance.base_amount')">
          <template slot-scope="scope">
            <span>{{ scope.row.unemployment_base_amount }}</span>
          </template>
        </el-table-column>

        <el-table-column min-width="80" align="center" :label="$t('finance.social_insurance.individual')">
          <template slot-scope="scope">
            <span>{{ scope.row.unemployment_by_individual }}</span>
          </template>
        </el-table-column>

        <el-table-column min-width="80" align="center" :label="$t('finance.social_insurance.institution')">
          <template slot-scope="scope">
            <span>{{ scope.row.unemployment_by_institution }}</span>
          </template>
        </el-table-column>
      </el-table-column>

      <el-table-column :label="$t('finance.social_insurance.fertility')" align="center">
        <el-table-column min-width="80" align="center" :label="$t('finance.social_insurance.base_amount')">
          <template slot-scope="scope">
            <span>{{ scope.row.fertility_base_amount }}</span>
          </template>
        </el-table-column>

        <el-table-column min-width="80" align="center" :label="$t('finance.social_insurance.institution')">
          <template slot-scope="scope">
            <span>{{ scope.row.fertility_by_institution }}</span>
          </template>
        </el-table-column>
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
import { fetchSocialInsurances } from '../../../api/finance'
import Pagination from '../../../components/Pagination/index' // Secondary package based on el-pagination
import QtSearch from '../../../components/Search/QtSearch'

export default {
  name: 'SocialInsuranceList',
  components: { Pagination, QtSearch },
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
      fetchSocialInsurances({ ...this.listQuery, ...this.$route.query }).then(response => {
        console.log(response)
        this.list = response.content
        this.total = response.totalPages
        this.listLoading = false
      })
    },
    goToDetail(row, event, column) {
      const url = `/finance/social_insurance/${row.id}`
      this.$router.push(url)
    },
    goToCreate() {
      this.$router.push('/finance/social_insurance/create')
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
