<template>
  <div class="basicInfo-container">
    <h3>基本信息</h3>
    <el-row>
      <el-col :span="12">
        <form-item :label="$t('people.id')+':'">
          <el-input v-model="data.id" class="form-input" />
        </form-item>
      </el-col>
      <el-col :span="12">
        <form-item :label="$t('people.name')+':'">
          <el-input v-model="data.name" class="form-input" />
        </form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <form-item :label="$t('people.type')+':'">
          <el-select v-model="data.type" :placeholder="$t('common.pleaseChoose')">
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
        <form-item :label="$t('people.status')+':'">
          <el-select v-model="data.status" :placeholder="$t('common.pleaseChoose')">
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
        <form-item :label="$t('people.identity_type')+':'">
          <el-select v-model="data.identity_type" :placeholder="$t('common.pleaseChoose')">
            <el-option value="ID Card" />
            <el-option value="Passport" />
          </el-select>
        </form-item>
      </el-col>
      <el-col :span="12">
        <form-item :label="$t('people.identity_no')+':'">
          <el-input v-model="data.identity_no" class="form-input" />
        </form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <form-item :label="$t('people.birth_date')+':'">
          <el-date-picker
            v-model="data.birth_date"
            class="form-date"
            type="date"
            :placeholder="$t('common.pleaseChoose')"
          />
        </form-item>
      </el-col>
      <el-col :span="12">
        <form-item :label="$t('people.phone')+':'" :editable="editable">
          <el-input v-model="data.phone" class="form-input" />
        </form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <form-item :label="$t('people.email')+':'" :editable="editable">
          <el-input v-model="data.email" class="form-input" />
        </form-item>
      </el-col>
      <el-col :span="12">
        <form-item :label="$t('people.political_status')+':'">
          <el-select v-model="data.political_status" :placeholder="$t('common.pleaseChoose')">
            <el-option value="群众" />
            <el-option value="党员" />
            <el-option value="团员" />
          </el-select>
        </form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <form-item :label="$t('people.entry_date')+':'">
          <el-date-picker
            v-model="data.entry_date"
            class="form-date"
            type="date"
            :placeholder="$t('common.pleaseChoose')"
          />
        </form-item>
      </el-col>
      <el-col :span="12">
        <form-item :label="$t('people.departure_date')+':'">
          <el-date-picker
            v-model="data.departure_date"
            class="form-date"
            type="date"
            :placeholder="$t('common.pleaseChoose')"
          />
        </form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <form-item :label="$t('people.gender')+':'">
          <el-select v-model="data.gender" :placeholder="$t('common.pleaseChoose')">
            <el-option value="Male" />
            <el-option value="Female" />
            <el-option value="Unknown" />
          </el-select>
        </form-item>
      </el-col>
      <el-col :span="12">
        <form-item :label="$t('people.lab')+':'" :editable="editable">
          <el-input v-model="data.lab" class="form-input" />
        </form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <form-item :label="$t('people.describe')+':'" :editable="editable">
          <el-input v-model="data.describe" type="textarea" :rows="5" />
        </form-item>
      </el-col>
    </el-row>

    <h3>紧急联系人信息</h3>

    <el-row>
      <el-col :span="12">
        <form-item :label="$t('people.name')+':'" :editable="editable">
          <el-input v-model="data.emergency_contact_name" class="form-input" />
        </form-item>
      </el-col>
      <el-col :span="12">
        <form-item :label="$t('people.relationship')+':'" :editable="editable">
          <el-select v-model="data.emergency_contact_relationship" :placeholder="$t('common.pleaseChoose')">
            <el-option value="父母" />
            <el-option value="子女" />
            <el-option value="配偶" />
          </el-select>
        </form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <form-item :label="$t('people.phone')+':'" :editable="editable">
          <el-input v-model="data.emergency_contact_phone" class="form-input" />
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
    data: {
      type: Object,
      default: defaultForm
    }
  },
  computed: {
    editable() {
      return this.type === 'edit' || this.type === 'create'
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
