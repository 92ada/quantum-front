<template>
  <div style="padding-top: 20px;">
    <h3 class="daily-funds-title">航班信息</h3>
    <el-link v-if="type === 'edit'" class="create-btn" icon="el-icon-edit" @click="onCreate">新增航班记录</el-link>
    <el-table
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%"
    >

      <el-table-column align="center" :label="$t('daily.flight_info.id')" width="80" sortable prop="id">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="100" align="center" :label="$t('daily.flight_info.departure_site')" sortable prop="name">
        <template slot-scope="scope">
          <span>{{ scope.row.departure_site }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="100" align="center" :label="$t('daily.flight_info.arrival_site')" sortable prop="name">
        <template slot-scope="scope">
          <span>{{ scope.row.arrival_site }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="100" align="center" :label="$t('daily.flight_info.flight_no')">
        <template slot-scope="scope">
          <span>{{ scope.row.flight_no }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="180" align="center" :label="$t('daily.flight_info.departure_time')">
        <template slot-scope="scope">
          <span>{{ scope.row.departure_time }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="180" align="center" :label="$t('daily.flight_info.arrival_time')">
        <template slot-scope="scope">
          <span>{{ scope.row.arrival_time }}</span>
        </template>
      </el-table-column>

      <el-table-column type="expand" width="80" :label="$t('daily.flight_info.more')">
        <template slot-scope="scope">
          <el-form label-position="left">
            <el-form-item :label="$t('daily.flight_info.price')">
              <span>{{ scope.row.price }}</span>
            </el-form-item>
            <el-form-item :label="$t('daily.flight_info.remark')">
              <span>{{ scope.row.remark }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>

      <el-table-column min-width="180" align="center" :label="$t('daily.flight_info.operation')">
        <template slot-scope="scope">
          <flight-info-dialog :data-source="scope.row" />
          <el-button type="text" @click="onDelete(scope.row.id)">{{ $t('common.delete') }}</el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
import { fetchFlightInfoByTypeAndId } from '../../../api/daily'
import FlightInfoDialog from './FlightInfoDialog'

export default {
  name: 'FlightInfoTable',
  components: { FlightInfoDialog },
  props: ['type', 'dailyType', 'dailyId'],
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
      fetchFlightInfoByTypeAndId(this.dailyType, this.dailyId).then(response => {
        console.log(response)
        this.list = response.data.items
        this.total = response.data.total
        this.listLoading = false
      })
    },
    onCreate() {
      // this.$router.push(`/research/daily/${this.dailyId}/funds/create`)
    },
    onDelete(id) {
      this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
</script>

<style scoped>
  .daily-funds-title {
    margin-top: 10px;
    float: left;
  }
  .create-btn {
    margin: 13px 10px 10px 10px;
    float: right;
  }
</style>
