<template>
  <div class="app-container">
    <el-link v-permission="['edit_daily_travel', 'edit_daily']" class="create-btn" icon="el-icon-edit" @click="goToCreate">{{  $t('common.new') }}</el-link>
    <el-table
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%"
      @row-click="goToDetail"
    >
      <el-table-column align="center" :label="$t('daily.travel.id')" min-width="80" sortable prop="id">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="420" align="center" :label="$t('daily.travel.traveler')" sortable prop="name">
        <template slot-scope="scope">
          <span>{{ scope.row.travelerJson }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="180" align="center" :label="$t('daily.travel.type')">
        <template slot-scope="scope">
          <span>{{ scope.row.type }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="180" align="center" :label="$t('daily.travel.startDate')">
        <template slot-scope="scope">
          <span>{{ scope.row.startDate }}</span>
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
import { fetchTravels } from '../../../api/daily'
import Pagination from '../../../components/Pagination/index' // Secondary package based on el-pagination

// TODO: 1）travelerJson的显示，2）peopleSelector组建put的值，3）traveler和travelerJson的一致性
export default {
  name: 'TravelList',
  components: { Pagination },
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
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchTravels({ ...this.listQuery, ...this.$route.query }).then(response => {
        console.log(response)
        this.list = response.content
        this.total = response.totalPages
        this.listLoading = false
      })
    },
    goToDetail(row, event, column) {
      const url = `/daily/travel/${row.id}`
      this.$router.push(url)
    },
    goToCreate() {
      this.$router.push('/daily/travel/create')
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
