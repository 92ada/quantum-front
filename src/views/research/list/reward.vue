<template>
  <div class="app-container">
    <qt-search
      :params-source="{level: ['国家级', '省部级', '地市级', '其他']}"
      i18n-index="research.reward_info"
      search-url="/research/reward"
    />

    <el-link class="create-btn" icon="el-icon-edit" @click="goToCreate">新建</el-link>
    <el-table
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%"
      @row-click="goToDetail"
    >
      <el-table-column align="center" :label="$t('research.id')" width="80" sortable prop="id">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column width="420" align="center" :label="$t('research.reward_info.title')" sortable prop="name">
        <template slot-scope="scope">
          <span>{{ scope.row.title }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180" align="center" :label="$t('research.reward_info.rewarded')">
        <template slot-scope="scope">
          <span>{{ scope.row.rewarded }}</span>
        </template>
      </el-table-column>

      <el-table-column class-name="status-col" :label="$t('research.reward_info.level')" width="180" sortable prop="status">
        <template slot-scope="scope">
          <span>{{ scope.row.level }}</span>
        </template>
      </el-table-column>

      <el-table-column class-name="status-col" :label="$t('research.reward_info.grade')" width="180" sortable prop="status">
        <template slot-scope="scope">
          <span>{{ scope.row.grade }}</span>
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
import { fetchRewardList } from '../../../api/research'
import Pagination from '../../../components/Pagination/index'
import QtSearch from '../../../components/Search/QtSearch' // Secondary package based on el-pagination

export default {
  name: 'RewardList',
  components: { QtSearch, Pagination },
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
      fetchRewardList(this.listQuery).then(response => {
        console.log(response)
        this.list = response.data.items
        this.total = response.data.total
        this.listLoading = false
      })
    },
    goToDetail(row, event, column) {
      const url = `/research/reward/${row.id}`
      this.$router.push(url)
    },
    goToCreate() {
      this.$router.push('/research/reward/create')
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
