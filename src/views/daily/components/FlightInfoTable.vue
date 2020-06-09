<template>
  <div style="padding-top: 20px;">
    <h3 class="daily-funds-title">航班信息</h3>
    <flight-info-dialog v-if="type !== 'show'" type="create" :data-source="{ dailyType: dailyType, dailyId: dailyId, data: {} }" />

    <el-table
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%"
    >

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

      <el-table-column v-if="type !== 'show'" min-width="180" align="center" :label="$t('daily.flight_info.operation')">
        <template slot-scope="scope">
          <flight-info-dialog :data-source="{ dailyType: dailyType, dailyId: dailyId, data: scope.row }" type="edit" />
          <el-button type="text" @click="onDelete(scope.row.id)">{{ $t('common.delete') }}</el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
import { deleteFlightInfo, fetchFlightInfoByTypeAndId } from '../../../api/daily'
import FlightInfoDialog from './FlightInfoDialog'
import { refresh } from '../../../utils/tag-view'

export default {
  name: 'FlightInfoTable',
  components: { FlightInfoDialog },
  props: ['type', 'dailyType', 'dailyId'],
  data() {
    return {
      list: null,
      listLoading: false
    }
  },
  created() {
    this.getList()
  },
  methods: {
    handleDialogOpen(val) {
      this.dialogOpen = val
    },
    getList() {
      this.listLoading = true
      fetchFlightInfoByTypeAndId(this.dailyType, this.dailyId).then(response => {
        this.list = response
        this.listLoading = false
      })
    },
    onDelete(id) {
      this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(_ => {
        const dailyType = this.dailyType
        const dailyId = this.dailyId
        const flightId = id

        deleteFlightInfo(dailyType, dailyId, flightId)
        refresh(this)
      }).then(res => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(error => {
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
</style>
