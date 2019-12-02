<template>
  <el-form ref="form" :model="searchObj" label-width="65px" inline class="search-container">
    <el-form-item :label="$t('common.keyword')">
      <el-input v-model="searchObj.word" />
    </el-form-item>
    <el-form-item v-for="(options, label) in paramsSource" :key="label" :label="$t(i18nIndex + '.' + label)">
      <el-select v-model="searchObj[label]" :placeholder="$t('common.pleaseChoose')">
        <el-option v-for="option in options" :key="option" :label="option" :value="option" />
      </el-select>
    </el-form-item>

    <el-form-item v-if="byDateRange" :label="$t('common.from') + ': '">
      <el-date-picker
        v-model="searchObj.start"
        value-format="yyyy-MM-dd"
        type="date"
        :placeholder="$t('common.pleaseChoose')"
      />
    </el-form-item>
    <el-form-item v-if="byDateRange" :label="$t('common.to') + ': '">
      <el-date-picker
        v-model="searchObj.end"
        value-format="yyyy-MM-dd"
        type="date"
        :placeholder="$t('common.pleaseChoose')"
      />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">{{ $t('common.search') }}</el-button>
    </el-form-item>

    <el-form-item v-permission="['export_excel']">
      <el-button v-if="exportExcel" type="primary" plain @click="onExport">{{ $t('common.export') }}</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { refresh } from '../../utils/tag-view'
import { downloadByUrlAndQuery } from '../../api/excel'

export default {
  name: 'QtSearch',
  props: {
    paramsSource: {
      type: Object,
      default: () => {}
    },
    i18nIndex: {
      type: String,
      default: ''
    },
    searchUrl: {
      type: String,
      default: ''
    },
    byDateRange: {
      type: Boolean,
      default: false
    },
    exportExcel: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      searchObj: {}
    }
  },
  created() {
    this.searchObj = Object.assign({}, this.searchObj, this.$route.query)
  },
  updated() {
    console.log(this.searchObj)
  },
  methods: {
    onSubmit() {
      this.$router.push({ path: this.searchUrl, query: this.searchObj })
      refresh(this)
    },
    onExport() {
      const name = this.searchUrl.split('/')[1].replace('/', '_')
      const url = '/api/excel' + this.searchUrl + '/' + name + '.xlsx'
      const query = this.searchObj

      downloadByUrlAndQuery(url, query)
    }
  }
}
</script>

<style>

</style>
