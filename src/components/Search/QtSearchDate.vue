<template>
  <el-form ref="form" :model="searchObj" label-width="70px" inline class="search-container">
    <el-form-item v-for="(options, label) in paramsSource" :key="label" :label="$t(i18nIndex + '.' + label)">
      <el-select v-model="searchObj[label]" :placeholder="$t('common.pleaseChoose')">
        <el-option v-for="option in options" :key="option" :label="option" :value="option" />
      </el-select>
    </el-form-item>

    <el-form-item :label="$t('common.from') + ': '">
      <el-date-picker
        v-model="searchObj.start"
        value-format="yyyy-MM-dd"
        type="date"
        :placeholder="$t('common.pleaseChoose')"
      />
    </el-form-item>
    <el-form-item :label="$t('common.to') + ': '">
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
  name: 'QtSearchDate',
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
    exportUrl: {
      type: String,
      default: ''
    },
    exportQuery: {
      type: Object,
      default: () => {}
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
  methods: {
    onSubmit() {
      this.$router.push({ path: this.searchUrl, query: this.searchObj })
      refresh(this)
    },
    onExport() {
      const query = { ...this.searchObj, ...this.exportQuery }
      const baseUrl = this.exportUrl || '/api/excel' + this.searchUrl
      const name = this.format(baseUrl)

      const url = baseUrl + '/' + name + '.xlsx'

      downloadByUrlAndQuery(url, query)
    },
    format(str) {
      // remove leading
      if (str.startsWith('/api/excel/')) str = str.substr(11)

      // replace slash with hyphen
      return str.split('/').join('_')
    }
  }
}
</script>

<style>

</style>
