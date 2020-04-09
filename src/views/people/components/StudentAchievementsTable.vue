<template>
  <div v-if="list">
    <h3>学术成果</h3>

    <el-tabs>
      <el-tab-pane label="论文" name="paper">
        <div>
          <student-achievements-dialog0 v-if="type !== 'show'" type="create" :data-source="{ peopleId: peopleId, data: {} }" />
          <el-table
            v-loading="listLoading"
            :data="list[0]"
            border
            fit
            highlight-current-row
            style="width: 100%"
          >

            <el-table-column min-width="180" align="center" label="论文名称">
              <template slot-scope="scope">
                <span>{{ scope.row.title }}</span>
              </template>
            </el-table-column>

            <el-table-column min-width="180" align="center" label="刊物名称">
              <template slot-scope="scope">
                <span>{{ scope.row.journal_title }}</span>
              </template>
            </el-table-column>

            <el-table-column min-width="180" align="center" label="影响因子">
              <template slot-scope="scope">
                <span>{{ scope.row.factor }}</span>
              </template>
            </el-table-column>

            <el-table-column min-width="180" align="center" label="发表日期">
              <template slot-scope="scope">
                <span>{{ scope.row.publish_date }}</span>
              </template>
            </el-table-column>

            <el-table-column type="expand">
              <template slot-scope="scope">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="作者排名">
                    <span>{{ scope.row.author_rank }}</span>
                  </el-form-item>

                  <el-form-item label="收录情况">
                    <span>{{ scope.row.acceptance }}</span>
                  </el-form-item>

                  <el-form-item label="南科大是第几署名单位">
                    <span>{{ scope.row.sustech_rank }}</span>
                  </el-form-item>

                  <el-form-item label="论文署名单位是否含境外单位">
                    <span>{{ scope.row.is_international }}</span>
                  </el-form-item>

                  <el-form-item label="有否提供佐证材料">
                    <span>{{ scope.row.is_supported }}</span>
                  </el-form-item>

                  <el-form-item label="DOI">
                    <span>{{ scope.row.doi }}</span>
                  </el-form-item>

                  <el-form-item label="备注">
                    <span>{{ scope.row.remark }}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>

            <el-table-column v-if="type !== 'show'" min-width="180" align="center" :label="$t('common.operation')">
              <template slot-scope="scope">
                <student-achievements-dialog0 :data-source="{ peopleId: peopleId, data: scope.row }" type="edit" />
                <el-button type="text" @click="onDelete(scope.row.id)">{{ $t('common.delete') }}</el-button>
              </template>
            </el-table-column>

          </el-table>
        </div>
      </el-tab-pane>

      <el-tab-pane label="专利" name="patent">
        <div>
          <student-achievements-dialog1 v-if="type !== 'show'" type="create" :data-source="{ peopleId: peopleId, data: {} }" />
          <el-table
            v-loading="listLoading"
            :data="list[1]"
            border
            fit
            highlight-current-row
            style="width: 100%"
          >

            <el-table-column min-width="180" align="center" label="专利名称">
              <template slot-scope="scope">
                <span>{{ scope.row.title }}</span>
              </template>
            </el-table-column>

            <el-table-column min-width="180" align="center" label="专利状态">
              <template slot-scope="scope">
                <span>{{ scope.row.status }}</span>
              </template>
            </el-table-column>

            <el-table-column min-width="180" align="center" label="类别">
              <template slot-scope="scope">
                <span>{{ scope.row.catagory }}</span>
              </template>
            </el-table-column>

            <el-table-column min-width="180" align="center" label="是否pct">
              <template slot-scope="scope">
                <span>{{ scope.row.is_pct }}</span>
              </template>
            </el-table-column>

            <el-table-column type="expand">
              <template slot-scope="scope">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="授权号">
                    <span>{{ scope.row.approval_no }}</span>
                  </el-form-item>

                  <el-form-item label="授权公告日期">
                    <span>{{ scope.row.approval_date }}</span>
                  </el-form-item>

                  <el-form-item label="申请号">
                    <span>{{ scope.row.application_no }}</span>
                  </el-form-item>

                  <el-form-item label="申请日">
                    <span>{{ scope.row.application_date }}</span>
                  </el-form-item>

                  <el-form-item label="发明人顺序">
                    <span>{{ scope.row.inventor_rank }}</span>
                  </el-form-item>

                  <el-form-item label="南科大署名顺序">
                    <span>{{ scope.row.sustech_rank }}</span>
                  </el-form-item>

                  <el-form-item label="是否提供佐证材料">
                    <span>{{ scope.row.is_supported }}</span>
                  </el-form-item>

                  <el-form-item label="备注">
                    <span>{{ scope.row.remark }}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>

            <el-table-column v-if="type !== 'show'" min-width="180" align="center" :label="$t('common.operation')">
              <template slot-scope="scope">
                <student-achievements-dialog1 :data-source="{ peopleId: peopleId, data: scope.row }" type="edit" />
                <el-button type="text" @click="onDelete(scope.row.id)">{{ $t('common.delete') }}</el-button>
              </template>
            </el-table-column>

          </el-table>
        </div>
      </el-tab-pane>

      <el-tab-pane label="竞赛" name="competition">
        <div>
          <student-achievements-dialog2 v-if="type !== 'show'" type="create" :data-source="{ peopleId: peopleId, data: {} }" />
          <el-table
            v-loading="listLoading"
            :data="list[2]"
            border
            fit
            highlight-current-row
            style="width: 100%"
          >

            <el-table-column min-width="180" align="center" label="竞赛名称">
              <template slot-scope="scope">
                <span>{{ scope.row.title }}</span>
              </template>
            </el-table-column>

            <el-table-column min-width="180" align="center" label="竞赛类型">
              <template slot-scope="scope">
                <span>{{ scope.row.type }}</span>
              </template>
            </el-table-column>

            <el-table-column min-width="180" align="center" label="竞赛项目负责人">
              <template slot-scope="scope">
                <span>{{ scope.row.leader }}</span>
              </template>
            </el-table-column>

            <el-table-column min-width="180" align="center" label="获奖时间">
              <template slot-scope="scope">
                <span>{{ scope.row.date }}</span>
              </template>
            </el-table-column>

            <el-table-column type="expand">
              <template slot-scope="scope">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="获奖类别">
                    <span>{{ scope.row.catagory }}</span>
                  </el-form-item>

                  <el-form-item label="获奖等级">
                    <span>{{ scope.row.level }}</span>
                  </el-form-item>

                  <el-form-item label="指导教师">
                    <span>{{ scope.row.teacher }}</span>
                  </el-form-item>

                  <el-form-item label="是否提供佐证材料">
                    <span>{{ scope.row.is_supported }}</span>
                  </el-form-item>

                  <el-form-item label="备注">
                    <span>{{ scope.row.remark }}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>

            <el-table-column v-if="type !== 'show'" min-width="180" align="center" :label="$t('common.operation')">
              <template slot-scope="scope">
                <student-achievements-dialog2 :data-source="{ peopleId: peopleId, data: scope.row }" type="edit" />
                <el-button type="text" @click="onDelete(scope.row.id)">{{ $t('common.delete') }}</el-button>
              </template>
            </el-table-column>

          </el-table>
        </div>
      </el-tab-pane>

      <el-tab-pane label="研究生获奖荣誉" name="reward">
        <div>
          <student-achievements-dialog3 v-if="type !== 'show'" type="create" :data-source="{ peopleId: peopleId, data: {} }" />
          <el-table
            v-loading="listLoading"
            :data="list[3]"
            border
            fit
            highlight-current-row
            style="width: 100%"
          >

            <el-table-column min-width="180" align="center" label="联培项目">
              <template slot-scope="scope">
                <span>{{ scope.row.program }}</span>
              </template>
            </el-table-column>

            <el-table-column min-width="180" align="center" label="获奖时间">
              <template slot-scope="scope">
                <span>{{ scope.row.date }}</span>
              </template>
            </el-table-column>

            <el-table-column min-width="180" align="center" label="获奖类别">
              <template slot-scope="scope">
                <span>{{ scope.row.catagory }}</span>
              </template>
            </el-table-column>

            <el-table-column min-width="180" align="center" label="奖项/称号名称">
              <template slot-scope="scope">
                <span>{{ scope.row.title }}</span>
              </template>
            </el-table-column>

            <el-table-column type="expand">
              <template slot-scope="scope">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="颁奖单位">
                    <span>{{ scope.row.insitution }}</span>
                  </el-form-item>

                  <el-form-item label="备注">
                    <span>{{ scope.row.remark }}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>

            <el-table-column v-if="type !== 'show'" min-width="180" align="center" :label="$t('common.operation')">
              <template slot-scope="scope">
                <student-achievements-dialog3 :data-source="{ peopleId: peopleId, data: scope.row }" type="edit" />
                <el-button type="text" @click="onDelete(scope.row.id)">{{ $t('common.delete') }}</el-button>
              </template>
            </el-table-column>

          </el-table>
        </div>
      </el-tab-pane>

      <el-tab-pane label="参与国际会议情况" name="conference">
        <div>
          <student-achievements-dialog4 v-if="type !== 'show'" type="create" :data-source="{ peopleId: peopleId, data: {} }" />
          <el-table
            v-loading="listLoading"
            :data="list[4]"
            border
            fit
            highlight-current-row
            style="width: 100%"
          >

            <el-table-column min-width="180" align="center" label="会议名称">
              <template slot-scope="scope">
                <span>{{ scope.row.title }}</span>
              </template>
            </el-table-column>

            <el-table-column min-width="180" align="center" label="会议举办时间">
              <template slot-scope="scope">
                <span>{{ scope.row.date }}</span>
              </template>
            </el-table-column>

            <el-table-column min-width="180" align="center" label="会议地点">
              <template slot-scope="scope">
                <span>{{ scope.row.location }}</span>
              </template>
            </el-table-column>

            <el-table-column min-width="180" align="center" label="会议参与角色">
              <template slot-scope="scope">
                <span>{{ scope.row.role }}</span>
              </template>
            </el-table-column>

            <el-table-column type="expand">
              <template slot-scope="scope">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="会议论文/发言名称">
                    <span>{{ scope.row.title2 }}</span>
                  </el-form-item>

                  <el-form-item label="是否提供佐证材料">
                    <span>{{ scope.row.is_supported }}</span>
                  </el-form-item>

                  <el-form-item label="备注">
                    <span>{{ scope.row.remark }}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>

            <el-table-column v-if="type !== 'show'" min-width="180" align="center" :label="$t('common.operation')">
              <template slot-scope="scope">
                <student-achievements-dialog4 :data-source="{ peopleId: peopleId, data: scope.row }" type="edit" />
                <el-button type="text" @click="onDelete(scope.row.id)">{{ $t('common.delete') }}</el-button>
              </template>
            </el-table-column>

          </el-table>
        </div>
      </el-tab-pane>

      <el-tab-pane label="研究生短期访学明细" name="visit">
        <div>
          <student-achievements-dialog5 v-if="type !== 'show'" type="create" :data-source="{ peopleId: peopleId, data: {} }" />
          <el-table
            v-loading="listLoading"
            :data="list[5]"
            border
            fit
            highlight-current-row
            style="width: 100%"
          >

            <el-table-column min-width="180" align="center" label="访学所在城市">
              <template slot-scope="scope">
                <span>{{ scope.row.city }}</span>
              </template>
            </el-table-column>

            <el-table-column min-width="180" align="center" label="访学高校名称">
              <template slot-scope="scope">
                <span>{{ scope.row.school }}</span>
              </template>
            </el-table-column>

            <el-table-column min-width="180" align="center" label="出访时间">
              <template slot-scope="scope">
                <span>{{ scope.row.start_date }}</span>
              </template>
            </el-table-column>

            <el-table-column min-width="180" align="center" label="结束时间">
              <template slot-scope="scope">
                <span>{{ scope.row.end_date }}</span>
              </template>
            </el-table-column>

            <el-table-column type="expand">
              <template slot-scope="scope">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="备注">
                    <span>{{ scope.row.remark }}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>

            <el-table-column v-if="type !== 'show'" min-width="180" align="center" :label="$t('common.operation')">
              <template slot-scope="scope">
                <student-achievements-dialog5 :data-source="{ peopleId: peopleId, data: scope.row }" type="edit" />
                <el-button type="text" @click="onDelete(scope.row.id)">{{ $t('common.delete') }}</el-button>
              </template>
            </el-table-column>

          </el-table>
        </div>
      </el-tab-pane>

      <el-tab-pane label="参与教师科研项目情况" name="research">
        <div>
          <student-achievements-dialog6 v-if="type !== 'show'" type="create" :data-source="{ peopleId: peopleId, data: {} }" />
          <el-table
            v-loading="listLoading"
            :data="list[6]"
            border
            fit
            highlight-current-row
            style="width: 100%"
          >

            <el-table-column min-width="180" align="center" label="参与科研项目名称">
              <template slot-scope="scope">
                <span>{{ scope.row.title }}</span>
              </template>
            </el-table-column>

            <el-table-column min-width="180" align="center" label="项目负责人">
              <template slot-scope="scope">
                <span>{{ scope.row.leader_name }}</span>
              </template>
            </el-table-column>

            <el-table-column min-width="180" align="center" label="项目性质">
              <template slot-scope="scope">
                <span>{{ scope.row.type }}</span>
              </template>
            </el-table-column>

            <el-table-column min-width="180" align="center" label="纵向项目类别">
              <template slot-scope="scope">
                <span>{{ scope.row.col_type }}</span>
              </template>
            </el-table-column>

            <el-table-column type="expand">
              <template slot-scope="scope">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="参与开始时间">
                    <span>{{ scope.row.start_month }}</span>
                  </el-form-item>

                  <el-form-item label="参与结束时间">
                    <span>{{ scope.row.end_month }}</span>
                  </el-form-item>

                  <el-form-item label="备注">
                    <span>{{ scope.row.remark }}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>

            <el-table-column v-if="type !== 'show'" min-width="180" align="center" :label="$t('common.operation')">
              <template slot-scope="scope">
                <student-achievements-dialog6 :data-source="{ peopleId: peopleId, data: scope.row }" type="edit" />
                <el-button type="text" @click="onDelete(scope.row.id)">{{ $t('common.delete') }}</el-button>
              </template>
            </el-table-column>

          </el-table>
        </div>
      </el-tab-pane>

    </el-tabs>
  </div>
</template>

<script>
import { deleteStudentAchievement, fetchStudentAchievementsByPeople } from '../../../api/people'
import StudentAchievementsDialog0 from './dialog/StudentAchievementsDialog0'
import StudentAchievementsDialog1 from './dialog/StudentAchievementsDialog1'
import StudentAchievementsDialog2 from './dialog/StudentAchievementsDialog2'
import StudentAchievementsDialog3 from './dialog/StudentAchievementsDialog3'
import StudentAchievementsDialog4 from './dialog/StudentAchievementsDialog4'
import StudentAchievementsDialog5 from './dialog/StudentAchievementsDialog5'
import StudentAchievementsDialog6 from './dialog/StudentAchievementsDialog6'
import { refresh } from '../../../utils/tag-view'

export default {
  name: 'StudentAchievementsTable',
  components: { StudentAchievementsDialog0, StudentAchievementsDialog1, StudentAchievementsDialog2, StudentAchievementsDialog3, StudentAchievementsDialog4, StudentAchievementsDialog5, StudentAchievementsDialog6 },
  props: ['peopleId', 'type'],
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
      fetchStudentAchievementsByPeople(this.peopleId).then(response => {
        if (!response) {
          this.list = null
          this.listLoading = false
          return
        }

        const list = [[], [], [], [], [], [], []]
        for (const record of response) {
          const row = { id: record.id, ...record.data }

          switch (record.type) {
            case 'paper': list[0].push(row); break
            case 'patent': list[1].push(row); break
            case 'competition': list[2].push(row); break
            case 'reward': list[3].push(row); break
            case 'conference': list[4].push(row); break
            case 'visit': list[5].push(row); break
            case 'research': list[6].push(row); break
          }
        }
        this.list = list
        this.listLoading = false
      })
    },
    onDelete(recordId) {
      this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(_ => {
        deleteStudentAchievement(this.peopleId, recordId)
      }).then(res => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
        refresh(this)
      }).catch(_ => {
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
  .student-achievements-title {
    margin-top: 10px;
    float: left;
  }
  .create-btn {
    margin: 13px 10px 10px 10px;
    float: right;
  }

  .student-achievements-pagination {
    margin-top: -10px;
  }
</style>
