<template>
  <div style="padding-top: 20px;">
    <h3 class="project-admin-title">可查看经费的人员</h3>
    <project-admin-dialog v-if="type !== 'show'" type="create" :data-source="{ projectId: projectId, person: {} }" />

    <el-table
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%"
    >
      <el-table-column align="center" :label="$t('research.project_admin_info.sid')" width="100" sortable prop="id">
        <template slot-scope="scope">
          <span>{{ scope.row.sid }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180" align="center" :label="$t('research.project_admin_info.name')" sortable prop="name">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column v-if="type !== 'show'" min-width="180" align="center" :label="$t('common.operation')">
        <template slot-scope="scope">
          <el-button type="text" @click="onDelete(scope.row.peopleId)">{{ $t('common.delete') }}</el-button>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
  import { deleteProjectAdmin, fetchProjectAdminByProject } from '../../../api/research'
  import ProjectAdminDialog from './ProjectAdminDialog'
  import { refresh } from '../../../utils/tag-view'

  export default {
    name: 'ProjectAdminTable',
    components: { ProjectAdminDialog },
    props: ['projectId', 'type'],
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
      getList() {
        this.listLoading = true
        fetchProjectAdminByProject(this.projectId).then(response => {
          this.list = this.formatList(response)
          this.listLoading = false
        })
      },
      formatList(dataSource) {
        const list = []
        for (let i = 0; i < dataSource.length; i++) {
          const item = {}
          item.id = dataSource[i].id

          const people = dataSource[i].people
          item.peopleId = people.id
          item.sid = people.sid
          item.name = people.name

          for (const key in people) {
            if (key.startsWith('people') && people[key] && typeof people[key] === 'object') {
              item.institution = people.institution
              item.position_title = people.position_title
              item.degree = people.degree
              item.research_direction = people.research_direction
              break
            }
          }

          list.push(item)
        }
        return list
      },
      onDelete(peopleId) {
        this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(_ => {
          deleteProjectAdmin(this.projectId, peopleId)
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
  .project-admin-title {
    margin-top: 10px;
    float: left;
  }
  .create-btn {
    margin: 13px 10px 10px 10px;
    float: right;
  }

  .project-admin-pagination {
    margin-top: -10px;
  }
</style>
