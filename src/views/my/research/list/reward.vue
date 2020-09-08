<template>
  <div class="app-container">
    <el-link v-permission="['edit_research_reward', 'edit_research']" class="create-btn" icon="el-icon-edit" @click="goToCreate">{{ $t('common.new') }}</el-link>
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

      <el-table-column width="420" align="center" :label="$t('research.reward_info.title')" sortable prop="name">
        <template slot-scope="scope">
          <span>{{ scope.row.title }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180" align="center" :label="$t('research.reward_info.rewarded')">
        <template slot-scope="scope">
          <span>{{ renderJson(scope.row.rewardedJson) }}</span>
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

  </div>
</template>

<script>
import { fetchRewardList } from '../../../../api/my'
import { renderJson } from './util'

export default {
  name: 'RewardList',
  components: { },
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
      fetchRewardList().then(response => {
        this.list = response
        this.listLoading = false
      })
    },
    goToDetail(row, event, column) {
      const url = `/my/research/reward/${row.id}`
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
  span {
    text-transform: capitalize;
  }
</style>
