<template>
  <el-col :key="col.index" :span="12" class="form-col">
    <form-item v-if="col.type === 'string'" :label="col.name+':'" :editable="col.editable" :required="col.required" class="form-item">
      <el-input v-model="postForm[col.index]" class="form-input" />
    </form-item>

    <form-item v-if="col.type === 'number'" :label="col.name+':'" :editable="col.editable" :required="col.required" class="form-item">
      <el-input v-model="postForm[col.index]" type="number" class="form-input" />
    </form-item>

    <form-item v-if="col.type === 'phone'" :label="col.name+':'" :editable="col.editable" :required="col.required" class="form-item">
      <el-input v-model="postForm[col.index]" type="tel" class="form-input" />
    </form-item>

    <form-item v-if="col.type === 'email'" :label="col.name+':'" :editable="col.editable" :required="col.required" class="form-item">
      <el-input v-model="postForm[col.index]" type="email" class="form-input" />
    </form-item>

    <form-item v-if="col.type === 'enumerated'" :label="col.name+':'" type="enumerated" :editable="col.editable" :required="col.required" class="form-item">
      <el-select v-model="postForm[col.index]" :placeholder="$t('common.pleaseChoose')">
        <el-option v-for="option in col.options" :key="option" :value="option" :label="toLabel(option)" />
      </el-select>
    </form-item>

    <form-item v-if="col.type === 'bool'" :label="col.name+':'" type="enumerated" :editable="col.editable" :required="col.required" class="form-item">
      <el-select v-model="postForm[col.index]" :placeholder="$t('common.pleaseChoose')">
        <el-option :value="true" label="True" />
        <el-option :value="false" label="False" />
      </el-select>
    </form-item>

    <form-item v-if="col.type === 'date'" :label="col.name+':'" :editable="col.editable" :required="col.required" class="form-item">
      <el-date-picker
        v-model="postForm[col.index]"
        class="form-date"
        type="date"
        :placeholder="$t('common.pleaseChoose')"
        value-format="yyyy-MM-dd"
      />
    </form-item>

    <form-item v-if="col.type === 'datetime'" :label="col.name+':'" :editable="col.editable" prop="time" class="form-item">
      <el-date-picker
        v-model="postForm[col.index]"
        class="form-date"
        type="datetime"
        :placeholder="$t('common.pleaseChoose')"
        value-format="yyyy-MM-dd HH:mm:ss"
      />
    </form-item>

    <form-item v-if="col.type === 'text'" :label="col.name+':'" :editable="col.editable" :required="col.required" class="form-item">
      <el-input v-model="postForm[col.index]" type="textarea" :rows="5" />
    </form-item>

    <el-form-item v-if="col.type === 'photo' && !col.editable" :label="col.name+':'" :required="col.required" class="form-item">
      <img :src="toFullUrl(col.value)" height="100px" alt="">
    </el-form-item>

    <el-form-item v-if="col.type === 'photo' && col.editable" :label="col.name+':'" :required="col.required" class="form-item">
      <single-image v-model="postForm[col.index]" style="width: 100px; height: 100px;" />
    </el-form-item>

    <el-form-item v-if="col.type === 'people'" :label="col.name+':'" :required="col.required" class="form-item">
      <people-selector v-model="postForm[col.index]" :editable="col.editable" :option-url="col.option_url" />
    </el-form-item>

    <el-form-item v-if="col.type === 'person'" :label="col.name+':'" :required="col.required" class="form-item">
      <person-selector v-model="postForm[col.index]" :editable="col.editable" :option-url="col.option_url" />
    </el-form-item>

    <el-form-item v-if="col.type === 'labs'" :label="col.name+':'" :required="col.required" class="form-item">
      <labs-selector v-model="postForm[col.index]" :editable="col.editable" :option-url="col.option_url" />
    </el-form-item>

    <el-form-item v-if="col.type === 'lab'" :label="col.name+':'" :required="col.required" class="form-item">
      <lab-selector v-model="postForm[col.index]" :editable="col.editable" :option-url="col.option_url" />
    </el-form-item>
  </el-col>
</template>
<script>
import FormItem from './QtFormItem'
import PeopleSelector from '../Selector/PeopleSelector'
import LabSelector from '../Selector/LabSelector'
import LabsSelector from '../Selector/LabsSelector'
import PersonSelector from '../Selector/PersonSelector'
import SingleImage from '../Upload/SingleImage'

// TODO: 时间、日期、月份选择不一样哦 e.g. Hosting里面要选时间
export default {
  name: 'QtFormCol',
  components: { PeopleSelector, LabSelector, LabsSelector, PersonSelector, FormItem, SingleImage },
  props: {
    postForm: {
      default: () => {},
      type: Object
    },
    col: {
      default: () => {},
      type: Object
    }
  },
  methods: {
    toLabel(option) {
      const name = option.replace(/_./g, ch => ch.toUpperCase()).replace(/^./, ch => ch.toUpperCase()).replace(/_/g, ' ')
      return name
    },
    toFullUrl(url) {
      if (url !== '') {
        return process.env.VUE_APP_BASE_API + url
      } else return ''
    }
  }
}
</script>
<style lang="scss" scoped>
    .form-input {
      max-width: 195px;
    }

    .form-date {
      max-width: 195px;
    }

    .form-item {
      border-left: 1px solid #f0f0f0;
      border-right: 1px solid #f0f0f0;
      margin: 0px 0px 0px -1px;
      padding: 2px 2px 2px 2px;
    }
</style>
