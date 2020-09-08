<template>
  <div class="app-container">
    <el-link v-permission="['edit_research_project', 'edit_research']" class="create-btn" icon="el-icon-edit" @click="goToCreate">{{ $t('common.new') }}</el-link>
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

      <el-table-column min-width="420" align="center" :label="$t('research.project_info.title')" sortable prop="name">
        <template slot-scope="scope">
          <span>{{ scope.row.title }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180" align="center" :label="$t('research.project_info.leader')">
        <template slot-scope="scope">
          <span>{{ scope.row.leader && scope.row.leader.name }}</span>
        </template>
      </el-table-column>

      <el-table-column class-name="status-col" :label="$t('research.project_info.category')" width="180" sortable prop="status">
        <template slot-scope="scope">
          <span>{{ scope.row.category }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { fetchProjectList } from '../../../../api/my'
import { renderJson } from './util'

// TODO: 这个leader没填啊哥，selector的问题嗷
export default {
  name: 'ProjectList',
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
      fetchProjectList().then(response => {
        this.list = response
        this.listLoading = false
      })
    },
    goToDetail(row, event, column) {
      const url = `/my/research/project/${row.id}`
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
