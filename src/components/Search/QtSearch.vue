<template>
  <el-form ref="form" :model="searchObj" label-width="80px" inline class="search-container">
    <el-form-item :label="$t('common.keyword')">
      <el-input v-model="searchObj.word" />
    </el-form-item>
    <el-form-item v-for="(options, label) in paramsSource" :key="label" :label="$t(i18nIndex + '.' + label)">
      <el-select v-model="searchObj[label]" :placeholder="$t('common.pleaseChoose')">
        <el-option v-for="option in options" :key="option" :label="option" :value="option" />
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">搜索</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
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
    }
  },
  data() {
    return {
      searchObj: {}
    }
  },
  created() {
    this.searchObj = Object.assign({}, this.$route.query, this.searchObj)
  },
  methods: {
    onSubmit() {
      const params = []
      for (const key in this.searchObj) {
        params.push(key + '=' + this.searchObj[key])
      }
      this.$router.push(this.searchUrl + '?' + params.join('&'))
    }
  }
}
</script>

<style>

</style>
