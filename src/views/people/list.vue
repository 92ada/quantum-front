<template>
  <div class="app-container">
    <qt-search
      :params-source="{}"
      i18n-index="people"
      search-url="/people"
    />

    <el-link v-if="peopleType" class="create-btn" icon="el-icon-edit" @click="goToCreate">新建</el-link>
    <el-table
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%"
      @row-click="goToDetail"
    >
      <el-table-column align="center" :label="$t('people.uid')" min-width="100" sortable prop="id">
        <template slot-scope="scope">
          <span>{{ scope.row.uid }}</span>
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

      <el-table-column class-name="status-col" :label="$t('people.status')" min-width="120" sortable prop="status">
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
import { fetchList } from '../../api/people'
import Pagination from '../../components/Pagination'
import QtSearch from '../../components/Search/QtSearch' // Secondary package based on el-pagination

export default {
  name: 'PeopleList',
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
      },
      peopleType: undefined
    }
  },
  created() {
    this.peopleType = this.getType()
    this.getList(this.peopleType)
  },
  methods: {
    getType() {
      let type = this.$route.path.split('/')[2]
      if (type === 'all') type = undefined
      return type
    },
    getList(type) {
      this.listLoading = true
      fetchList({ ...this.listQuery, type: type }).then(response => {
        console.log(response)
        this.list = response.data.items
        this.total = response.data.total
        this.listLoading = false
      })
    },
    goToDetail(row, event, column) {
      const url = `/people/${row.uid}`
      this.$router.push(url)
    },
    goToCreate() {
      this.$router.push(`/people/${this.peopleType}/create`)
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
