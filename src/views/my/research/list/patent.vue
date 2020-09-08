<template>
  <div class="app-container">
    <el-link v-permission="['edit_research_patent', 'edit_research']" class="create-btn" icon="el-icon-edit" @click="goToCreate">{{ $t('common.new') }}</el-link>
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

      <el-table-column min-width="420" align="center" :label="$t('research.title')" sortable prop="name">
        <template slot-scope="scope">
          <span>{{ scope.row.title }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="180" align="center" :label="$t('research.applicant')">
        <template slot-scope="scope">
          <span>{{ renderJson(scope.row.applicantJson) }}</span>
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
  </div>
</template>

<script>
import { fetchPatentList } from '../../../../api/my'
import { renderJson } from './util'

export default {
  name: 'PatentList',
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
    renderJson,
    getList() {
      this.listLoading = true
      fetchPatentList().then(response => {
        this.list = response
        this.listLoading = false
      })
    },
    goToDetail(row, event, column) {
      const url = `/my/research/patent/${row.id}`
      this.$router.push(url)
    },
    goToCreate() {
      this.$router.push('/research/patent/create')
    }
  }
}
</script>

<style scoped>
  .create-btn {
    margin: 10px 10px 10px 10px;
    float: right;
  }
  .el-tag {
    text-transform: capitalize;
  }
</style>
