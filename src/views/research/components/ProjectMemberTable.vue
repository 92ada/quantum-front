<template>
  <div style="padding-top: 20px;">
    <h3 class="project-member-title">项目成员情况</h3>
    <el-link class="create-btn" icon="el-icon-edit" @click="goToCreate">新增项目成员</el-link>
    <el-table
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%"
      @row-click="goToDetail"
    >
      <el-table-column align="center" :label="$t('research.project_member_info.uid')" width="100" sortable prop="id">
        <template slot-scope="scope">
          <span>{{ scope.row.uid }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180" align="center" :label="$t('research.project_member_info.name')" sortable prop="name">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column width="120" align="center" :label="$t('research.project_member_info.institution')">
        <template slot-scope="scope">
          <span>{{ scope.row.institution }}</span>
        </template>
      </el-table-column>

      <el-table-column width="120" align="center" :label="$t('research.project_member_info.position_title')">
        <template slot-scope="scope">
          <span>{{ scope.row.position_title }}</span>
        </template>
      </el-table-column>

      <el-table-column width="120" align="center" :label="$t('research.project_member_info.degree')">
        <template slot-scope="scope">
          <span>{{ scope.row.degree }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="180" align="center" :label="$t('research.project_member_info.research_direction')">
        <template slot-scope="scope">
          <span>{{ scope.row.research_direction }}</span>
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total>1"
      class="project-member-pagination"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getList"
    />
  </div>
</template>

<script>
import Pagination from '../../../components/Pagination/index' // Secondary package based on el-pagination
import { fetchProjectMemberByProject } from '../../../api/research'

export default {
  name: 'ProjectMemberTable',
  components: { Pagination },
  props: ['projectId'],
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
      fetchProjectMemberByProject(this.projectId).then(response => {
        console.log(response)
        this.list = response.data.items
        this.total = response.data.total
        this.listLoading = false
      })
    },
    goToDetail(row, event, column) {
      // const url = `/research/project/${this.projectId}/member/${row.id}`
      // this.$router.push(url)
    },
    goToCreate() {
      // this.$router.push(`/research/project/${this.projectId}/member/create`)
    }
  }
}
</script>

<style scoped>
  .project-member-title {
    margin-top: 10px;
    float: left;
  }
  .create-btn {
    margin: 13px 10px 10px 10px;
    float: right;
  }
  .project-member-pagination {
    margin-top: -10px;
  }
</style>
