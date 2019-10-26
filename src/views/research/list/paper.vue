<template>
  <div class="app-container">
    <qt-search
      :params-source="{}"
      i18n-index="research"
      search-url="/research/paper"
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

      <el-table-column min-width="400" align="center" :label="$t('research.title')" sortable prop="name">
        <template slot-scope="scope">
          <span>{{ scope.row.title }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="180" align="center" :label="$t('research.paper_info.author')">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>

      <el-table-column class-name="status-col" :label="$t('research.paper_info.journal_conference_title')" min-width="400" sortable prop="status">
        <template slot-scope="scope">
          <span>{{ scope.row.journal_conference_title }}</span>
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
import { fetchPaperList } from '../../../api/research'
import Pagination from '../../../components/Pagination/index'
import QtSearch from '../../../components/Search/QtSearch' // Secondary package based on el-pagination

export default {
  name: 'PaperList',
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
      fetchPaperList(this.listQuery).then(response => {
        console.log(response)
        this.list = response.data.items
        this.total = response.data.total
        this.listLoading = false
      })
    },
    goToDetail(row, event, column) {
      const url = `/research/paper/${row.id}`
      this.$router.push(url)
    },
    goToCreate() {
      this.$router.push('/research/paper/create')
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
