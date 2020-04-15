<template>
  <div class="app-container">
    <qt-search
      :params-source="{}"
      search-url="/role"
    />
    <el-table
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%"
      @row-click="goToDetail"
    >
      <el-table-column align="center" :label="$t('people.sid')" min-width="100" sortable prop="id">
        <template slot-scope="scope">
          <span>{{ scope.row.sid }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="180" align="center" :label="$t('people.name')" sortable prop="name">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="120" align="center" :label="$t('people.office_phone')">
        <template slot-scope="scope">
          <span>{{ scope.row.office_phone }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="120" align="center" :label="$t('people.mobile_phone')">
        <template slot-scope="scope">
          <span>{{ scope.row.mobile_phone }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="180" align="center" :label="$t('people.office_address')">
        <template slot-scope="scope">
          <span>{{ scope.row.office_address }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="200" :label="$t('people.email')">
        <template slot-scope="scope">
          <span>{{ scope.row.email }}</span>
        </template>
      </el-table-column>

      <el-table-column class-name="status-col" :label="$t('people.type')" min-width="130" sortable prop="type">
        <template slot-scope="{row}">
          <el-tag :type="row.type | statusFilter">
            {{ row.type.replace(/^\S/, s => s.toUpperCase()) }}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column min-width="200" :label="$t('common.operation')" fixed="right">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click.stop="goToRoleManage(scope.row.id)"
          >
            {{ $t('common.manageRole') }}
          </el-button>
          <el-button
            type="text"
            size="small"
            @click.stop="deletePerson(scope.row.id)"
          >
            {{ $t('common.delete') }}
          </el-button>
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
import { fetchList, apiDelete } from '../../api/people'
import Pagination from '../../components/Pagination'
import QtSearch from '../../components/Search/QtSearch' // Secondary package based on el-pagination

export default {
  name: 'RoleIndex',
  components: { QtSearch, Pagination },
  filters: {
    statusFilter(status) {
      const statusMap = {
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
      peopleType: undefined
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
        this.total = response.totalElements
        this.listLoading = false
      })
    },
    goToDetail(row, event, column) {
      const url = `/people/${row.id}`
      this.$router.push(url)
    },
    deletePerson(id) {
      // TODO: 换行无效
      this.$confirm('此操作将永久删除该人员, 是否继续?\nThis action will permanently delete the person. Do you want to continue?', '提示 Mention', {
        confirmButtonText: '确定 Confirm',
        cancelButtonText: '取消 Cancel',
        type: 'warning'
      }).then(() => {
        apiDelete(id).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功! Success!'
          })
          this.$router.go(0)
        }).catch(() => {
          this.$message({
            type: 'warning',
            message: '删除失败! Failed!'
          })
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除. Canceled.'
        })
      })
    },
    goToRoleManage(id) {
      const url = `/role/${id}`
      this.$router.push(url)
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
