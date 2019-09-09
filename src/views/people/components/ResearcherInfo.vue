<template>
  <div class="researcherInfo-container">
    <h3>详细信息</h3>
    <el-row>
      <el-col :span="12">
        <el-form-item :label="$t('people.position_title')+':'">
          <el-input v-model="data.position_title" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item :label="$t('people.job')+':'">
          <el-input v-model="data.job" />
        </el-form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <el-form-item :label="$t('people.social_job')+':'">
          <el-input v-model="data.social_job" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item :label="$t('people.is_phd_mentor')+':'">
          <el-select v-model="data.is_phd_mentor" :placeholder="$t('common.pleaseChoose')">
            <el-option value="True" />
            <el-option value="False" />
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <el-form-item :label="$t('people.is_master_mentor')+':'">
          <el-select v-model="data.is_master_mentor" :placeholder="$t('common.pleaseChoose')">
            <el-option value="True" />
            <el-option value="False" />
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item :label="$t('people.is_union_member')+':'">
          <el-select v-model="data.is_union_member" :placeholder="$t('common.pleaseChoose')">
            <el-option value="True" />
            <el-option value="False" />
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <el-form-item :label="$t('people.salary_card_no')+':'">
          <el-input v-model="data.salary_card_no" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item :label="$t('people.bank')+':'">
          <el-input v-model="data.bank" />
        </el-form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <el-form-item :label="$t('people.annual_salary')+':'">
          <el-input v-model="data.annual_salary" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item :label="$t('people.monthly_salary')+':'">
          <el-input v-model="data.monthly_salary" />
        </el-form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <el-form-item :label="$t('people.housing_subsidy')+':'">
          <el-input v-model="data.housing_subsidy" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item :label="$t('people.contract_no')+':'">
          <el-input v-model="data.contract_no" />
        </el-form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <el-form-item :label="$t('people.contract_start_date')+':'">
          <el-date-picker
            v-model="data.contract_start_date"
            type="date"
            :placeholder="$t('common.pleaseChoose')"
          />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item :label="$t('people.contract_end_date')+':'">
          <el-date-picker
            v-model="data.contract_end_date"
            type="date"
            :placeholder="$t('common.pleaseChoose')"
          />
        </el-form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <el-form-item :label="$t('people.achievements')+':'">
          <el-input v-model="data.achievements" type="textarea" :rows="5" />
        </el-form-item>
      </el-col>
    </el-row>

  </div>
</template>

<script>
const defaultForm = () => {
  return {
    id: undefined,
    name: undefined

  }
}

export default {
  name: 'BasicInfo',
  components: { },
  props: {
    type: {
      type: String,
      default: 'view'
    },
    data: {
      type: Object,
      default: defaultForm
    }
  },
  computed: {
    editable() {
      return this.type === 'view' || this.type === 'create'
    }
  }
}
</script>

<style lang="scss" scoped>
  .researcherInfo-container {
    .el-input {
      max-width: 195px;
    }

    .el-date-picker {
      max-width: 195px;
    }

    .el-form-item {
      border: 1px solid #f0f0f0;
      margin: 0px -1px -1px 0px;
      padding: 2px 2px 2px 2px;
    }

    margin-bottom: 40px;
  }
</style>
