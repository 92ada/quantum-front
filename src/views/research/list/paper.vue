<template>
  <div class="app-container">
    <upload-file v-permission="['edit_research_paper', 'edit_research']" force-mode url="/api/excel/research/paper" style="float: right;" />

    <qt-search
      :params-source="{}"
      i18n-index="research"
      search-url="/research/paper"
      export-excel
    />

    <el-link v-permission="['edit_research_paper', 'edit_research']" class="create-btn" icon="el-icon-edit" @click="goToCreate">{{ $t('common.new') }}</el-link>
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

      <el-table-column min-width="400" align="center" :label="$t('research.title')" sortable prop="name">
        <template slot-scope="scope">
          <span>{{ scope.row.title }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="180" align="center" :label="$t('research.paper_info.author')">
        <template slot-scope="scope">
          <span>{{ renderJson(scope.row.authorJson) }}</span>
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
import UploadFile from '../../../components/Upload/UploadFile'
import { renderJson } from './util'

export default {
  name: 'PaperList',
  components: { QtSearch, Pagination, UploadFile },
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
    renderJson,
    getList() {
      this.listLoading = true
      fetchPaperList({ ...this.listQuery, ...this.$route.query }).then(response => {
        this.list = response.content
        this.total = response.totalElements
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
  span {
    text-transform: capitalize;
  }
</style>
