<template>
  <div class="app-container">
    <qt-search
      :params-source="{category: ['国家级', '省部级', '地市级', '其他']}"
      i18n-index="research.project_info"
      search-url="/research/project"
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
      <el-table-column align="center" :label="$t('research.id')" width="80" sortable prop="id">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column width="420" align="center" :label="$t('research.project_info.title')" sortable prop="name">
        <template slot-scope="scope">
          <span>{{ scope.row.title }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180" align="center" :label="$t('research.project_info.leader')">
        <template slot-scope="scope">
          <span>{{ scope.row.leader }}</span>
        </template>
      </el-table-column>

      <el-table-column class-name="status-col" :label="$t('research.project_info.category')" width="180" sortable prop="status">
        <template slot-scope="scope">
          <span>{{ scope.row.category }}</span>
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
import { fetchProjectList } from '../../../api/research'
import Pagination from '../../../components/Pagination/index'
import QtSearch from '../../../components/Search/QtSearch'

export default {
  name: 'ProjectList',
  components: { QtSearch, Pagination },
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
      fetchProjectList({ ...this.listQuery, ...this.$route.query }).then(response => {
        console.log(response)
        this.list = response.content
        this.total = response.totalPages
        this.listLoading = false
      })
    },
    goToDetail(row, event, column) {
      const url = `/research/project/${row.id}`
      this.$router.push(url)
    },
    goToCreate() {
      this.$router.push('/research/project/create')
    }
  }
}
</script>

<style scoped>
  .create-btn {
    margin: 10px 10px 10px 10px;
    float: right;
  }
  span {
    text-transform: capitalize;
  }
</style>
