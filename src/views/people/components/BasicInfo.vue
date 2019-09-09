<template>
  <div class="basicInfo-container">
    <h3>基本信息</h3>
    <el-row>
      <el-col :span="12">
        <form-item :label="$t('people.id')+':'" :content="data.id">
          <el-input class="form-input" />
        </form-item>
      </el-col>
      <el-col :span="12">
        <form-item :label="$t('people.name')+':'" :content="data.name">
          <el-input class="form-input" />
        </form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <form-item :label="$t('people.type')+':'" :content="data.type">
          <el-select :placeholder="$t('common.pleaseChoose')">
            <el-option value="Researcher" />
            <el-option value="Teacher" />
            <el-option value="Administration" />
            <el-option value="Visitor" />
            <el-option value="Postdoctoral" />
            <el-option value="Student" />
          </el-select>
        </form-item>
      </el-col>
      <el-col :span="12">
        <form-item :label="$t('people.status')+':'" :content="data.status">
          <el-select :placeholder="$t('common.pleaseChoose')">
            <el-option value="Normal" />
            <el-option value="On vacation" />
            <el-option value="Dismissed" />
            <el-option value="Abnormal" />
          </el-select>
        </form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <form-item :label="$t('people.identity_type')+':'" :content="data.identity_type">
          <el-select :placeholder="$t('common.pleaseChoose')">
            <el-option value="ID Card" />
            <el-option value="Passport" />
          </el-select>
        </form-item>
      </el-col>
      <el-col :span="12">
        <form-item :label="$t('people.identity_no')+':'" :content="data.identity_no">
          <el-input class="form-input" />
        </form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <form-item :label="$t('people.birth_date')+':'" :content="data.birth_date">
          <el-date-picker
            class="form-date"
            type="date"
            :placeholder="$t('common.pleaseChoose')"
          />
        </form-item>
      </el-col>
      <el-col :span="12">
        <form-item :label="$t('people.phone')+':'" :content="data.phone">
          <el-input class="form-input" />
        </form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <form-item :label="$t('people.email')+':'" :content="data.email">
          <el-input class="form-input" />
        </form-item>
      </el-col>
      <el-col :span="12">
        <form-item :label="$t('people.political_status')+':'" :content="data.political_status">
          <el-select :placeholder="$t('common.pleaseChoose')">
            <el-option value="群众" />
            <el-option value="党员" />
            <el-option value="团员" />
          </el-select>
        </form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <form-item :label="$t('people.entry_date')+':'" :content="data.entry_date">
          <el-date-picker
            class="form-date"
            type="date"
            :placeholder="$t('common.pleaseChoose')"
          />
        </form-item>
      </el-col>
      <el-col :span="12">
        <form-item :label="$t('people.departure_date')+':'" :content="data.departure_date">
          <el-date-picker
            class="form-date"
            type="date"
            :placeholder="$t('common.pleaseChoose')"
          />
        </form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <form-item :label="$t('people.gender')+':'" :content="data.gender">
          <el-select :placeholder="$t('common.pleaseChoose')">
            <el-option value="Male" />
            <el-option value="Female" />
            <el-option value="Unknown" />
          </el-select>
        </form-item>
      </el-col>
      <el-col :span="12">
        <form-item :label="$t('people.lab')+':'" :content="data.lab">
          <el-input class="form-input" />
        </form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <form-item :label="$t('people.describe')+':'" :content="data.describe">
          <el-input type="textarea" :rows="5" />
        </form-item>
      </el-col>
    </el-row>

    <h3>紧急联系人信息</h3>

    <el-row>
      <el-col :span="12">
        <form-item :label="$t('people.name')+':'" :content="data.emergency_contact_name">
          <el-input class="form-input" />
        </form-item>
      </el-col>
      <el-col :span="12">
        <form-item :label="$t('people.relationship')+':'" :content="data.emergency_contact_relationship">
          <el-select :placeholder="$t('common.pleaseChoose')">
            <el-option value="父母" />
            <el-option value="子女" />
            <el-option value="配偶" />
          </el-select>
        </form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <form-item :label="$t('people.phone')+':'" :content="data.emergency_contact_phone">
          <el-input class="form-input" />
        </form-item>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import FormItem from './FormItem'

const defaultForm = () => {
  return {
    id: undefined,
    name: undefined

  }
}

export default {
  name: 'BasicInfo',
  components: { FormItem },
  props: {
    type: {
      type: String,
      default: 'view'
    },
    sourceData: {
      type: Object,
      default: defaultForm
    }
  },
  computed: {
    editable() {
      return this.type === 'view' || this.type === 'create'
    },
    data() {
      console.log(this.sourceData)
      const obj = {}
      for (const i in this.sourceData) {
        obj[i] = { value: this.sourceData[i], editable: false }
      }
      console.log(obj)
      return obj
    }
  }
}
</script>

<style lang="scss" scoped>
  .basicInfo-container {
    .form-input {
      max-width: 195px;
    }

    .form-date {
      max-width: 195px;
    }

    .form-item {
      border: 1px solid #f0f0f0;
      margin: 0px -1px -1px 0px;
      padding: 2px 2px 2px 2px;
    }

    margin-bottom: 40px;
  }
</style>
