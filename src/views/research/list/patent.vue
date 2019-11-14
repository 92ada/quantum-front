<template>
  <div class="app-container">
    <qt-search
      :params-source="{status: ['授权', '申请']}"
      i18n-index="research"
      search-url="/research/patent"
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
      <el-table-column align="center" :label="$t('research.id')" min-width="80" sortable prop="id">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="420" align="center" :label="$t('research.title')" sortable prop="name">
        <template slot-scope="scope">
          <span>{{ scope.row.title }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="180" align="center" :label="$t('research.applicant')">
        <template slot-scope="scope">
          <span>{{ scope.row.applicant }}</span>
        </template>
      </el-table-column>

      <el-table-column class-name="status-col" :label="$t('research.status')" min-width="180" sortable prop="status">
        <template slot-scope="{row}">
          <el-tag :type="row.status | statusFilter">
            {{ row.status }}
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
import { fetchPatentList } from '../../../api/research'
import Pagination from '../../../components/Pagination/index'
import QtSearch from '../../../components/Search/QtSearch' // Secondary package based on el-pagination

export default {
  name: 'PatentList',
  components: { QtSearch, Pagination },
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
      },
      searchObj: {}
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchPatentList({ ...this.listQuery, ...this.$route.query }).then(response => {
        console.log(response)
        this.list = response.content
        this.total = response.totalPages
        this.listLoading = false
      })
    },
    goToDetail(row, event, column) {
      const url = `/research/patent/${row.id}`
      this.$router.push(url)
    },
    goToCreate() {
      this.$router.push('/research/patent/create')
    }
  }
}
</script>

<style scoped>
  .search-container {
    span {
      font-size: 12px;
    }
  }
  .create-btn {
    margin: 10px 10px 10px 10px;
    float: right;
  }
</style>
