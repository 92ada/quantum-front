<template>
  <div class="app-container">
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
  </div>
</template>

<script>
import { fetchPaperList } from '../../../../api/my'
import { renderJson } from './util'

export default {
  name: 'PaperList',
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
      fetchPaperList().then(response => {
        this.list = response
        this.listLoading = false
      })
    },
    goToDetail(row, event, column) {
      const url = `/my/research/paper/${row.id}`
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
