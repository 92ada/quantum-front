<template>
  <el-row :gutter="40" class="panel-group">
    <el-col v-permission="['people', 'people_inlab']" :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="goTo('people')">
        <div class="card-panel-icon-wrapper icon-people">
          <svg-icon icon-class="peoples" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            {{ $t('route.people') }}
          </div>
        </div>
      </div>
    </el-col>
    <el-col v-permission="['research', 'research_patent', 'research_paper', 'research_project', 'research_reward']" :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="goTo('research')">
        <div class="card-panel-icon-wrapper icon-research">
          <svg-icon icon-class="example" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            {{ $t('route.research') }}
          </div>
        </div>
      </div>
    </el-col>
    <el-col v-permission="['finance', 'finance_expenditure', 'finance_social_funds', 'finance_social_insurance']" :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="goTo('finance')">
        <div class="card-panel-icon-wrapper icon-finance">
          <svg-icon icon-class="money" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            {{ $t('route.finance') }}
          </div>
        </div>
      </div>
    </el-col>
    <el-col v-permission="['daily', 'daily_hosting', 'daily_report', 'daily_travel', 'daily_visit']" :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="goTo('daily')">
        <div class="card-panel-icon-wrapper icon-daily">
          <svg-icon icon-class="documentation" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            {{ $t('route.daily') }}
          </div>
        </div>
      </div>
    </el-col>
    <el-col v-permission="['equipment', 'equipment_purchasing', 'equipment_stock']" :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="goTo('equipment')">
        <div class="card-panel-icon-wrapper icon-equipment">
          <svg-icon icon-class="lock" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            {{ $t('route.equipment') }}
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  components: {
  },
  methods: {
    goTo(where) {
      this.$router.push({ path: `${where}` })
    }
  }
}
</script>

<style lang="scss" scoped>
  .panel-group {
    margin-top: 18px;
    .card-panel-col{
      margin-bottom: 32px;
    }
    .card-panel {
      height: 108px;
      cursor: pointer;
      font-size: 12px;
      position: relative;
      /*overflow: hidden;*/
      color: #666;
      background: #fff;
      box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
      border-color: rgba(0, 0, 0, .05);
      &:hover {
        .card-panel-icon-wrapper {
          color: #fff;
        }
        .icon-people {
          background: #40c9c6;
        }
        .icon-research {
          background: #36a3f7;
        }
        .icon-finance {
          background: #f4516c;
        }
        .icon-daily {
          background: #34bfa3;
        }
        .icon-equipment {
          background: #34bfa3;
        }
      }
      .icon-people {
        color: #40c9c6;
      }
      .icon-research {
        color: #36a3f7;
      }
      .icon-finance {
        color: #f4516c;
      }
      .icon-daily {
        color: #34bfa3;
      }
      .icon-equipment {
        color: #34bfa3;
      }

      .card-panel-icon-wrapper {
        float: left;
        margin: 14px;
        padding: 16px;
        transition: all 0.38s ease-out;
        border-radius: 6px;
      }
      .card-panel-icon {
        font-size: 48px;
      }
      .card-panel-description {
        float: right;
        font-weight: bold;
        margin: 26px;
        margin-left: 0px;
        .card-panel-text {
          line-height: 18px;
          color: rgba(0, 0, 0, 0.45);
          font-size: 16px;
          margin-bottom: 12px;
        }
        .card-panel-num {
          font-size: 20px;
        }
      }
    }
  }
</style>
