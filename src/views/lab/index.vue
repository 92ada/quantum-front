<template>
  <div class="app-container">
    <qt-search
      :params-source="{}"
      i18n-index="lab"
      search-url="/lab"
    />

    <el-link class="create-btn" icon="el-icon-edit" @click="goToCreate">{{  $t('common.new') }}</el-link>
    <el-table
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%"
      @row-click="goToDetail"
    >

      <el-table-column min-width="180" align="center" :label="$t('lab.name')" sortable prop="name">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="300" align="center" :label="$t('lab.description')">
        <template slot-scope="scope">
          <span>{{ scope.row.description }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="180" align="center" :label="$t('lab.pi')">
        <template slot-scope="scope">
          <span>{{ scope.row.pi && scope.row.pi.name }}</span>
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
import { fetchList } from '../../api/lab'
import Pagination from '../../components/Pagination'
import QtSearch from '../../components/Search/QtSearch' // Secondary package based on el-pagination

export default {
  name: 'LabIndex',
  components: { QtSearch, Pagination },
  filters: {
    statusFilter(status) {
      const statusMap = {
        'Normal': 'success',
        'On vacation': 'info',
        'Dismissed': 'info',
        'Abnormal': 'danger'
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
      fetchList({ ...this.listQuery, ...this.$route.query }).then(response => {
        this.list = response.content
        this.total = response.totalPages
        this.listLoading = false
      })
    },
    goToDetail(row, event, column) {
      const url = `/lab/${row.id}`
      this.$router.push(url)
    },
    goToCreate() {
      this.$router.push(`/lab/create`)
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
