<template>
  <div class="app-container">
    <el-link v-permission="['edit_equipment_purchasing', 'edit_equipment']" class="create-btn" icon="el-icon-edit" @click="goToCreate">{{ $t('common.new') }}</el-link>
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

      <el-table-column min-width="420" align="center" :label="$t('equipment.purchasing.title')" sortable prop="name">
        <template slot-scope="scope">
          <span>{{ scope.row.title }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="180" align="center" :label="$t('equipment.purchasing.pi')">
        <template slot-scope="scope">
          <span>{{ scope.row.pi && scope.row.pi.name }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="180" align="center" :label="$t('equipment.purchasing.handler')">
        <template slot-scope="scope">
          <span>{{ scope.row.handler && scope.row.handler.name }}</span>
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
import { fetchPurchasings } from '../../../../api/my'

export default {
  name: 'PurchasingList',
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
      fetchPurchasings().then(response => {
        this.list = response
        this.listLoading = false
      })
    },
    goToDetail(row, event, column) {
      const url = `/my/equipment/purchasing/${row.id}`
      this.$router.push(url)
    },
    goToCreate() {
      this.$router.push('/equipment/purchasing/create')
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
