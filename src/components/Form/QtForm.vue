<template>
  <div>
    <div v-for="(form, index) in dataSource" :key="index" class="form-container">
      <h3>{{ form.title.name }}</h3>
      <el-form label-position="right" label-width="120px" size="small">
        <el-row v-for="row_index in parseInt(form.columns.length/2)" :key="row_index" class="form-row">
          <qt-form-col :col="form.columns[(row_index-1) *2]" :post-form="postForm" />
          <qt-form-col v-if="(row_index-1) * 2 + 1 < form.columns.length" :col="form.columns[(row_index-1) * 2 + 1]" :post-form="postForm" />
        </el-row>
      </el-form>
    </div>
    <el-button v-if="type === 'edit' || type === 'create'" v-loading="loading" style="margin-left: 20px;" type="primary" @click="handleSubmit">
      {{ $t(`common.${type}`) }}
    </el-button>
  </div>
</template>

<script>
import request from '../../utils/request'
import QtFormCol from './QtFormCol'

const defaultDataSource = {
  postUrl: '',
  data: [{
    title: {
      name: '',
      index: ''
    },
    columns: []
  }]
}

export default {
  name: 'QtForm',
  components: { QtFormCol },
  props: {
    type: {
      type: String,
      default: 'show'
    },
    dataSourceUrl: {
      type: String,
      default: () => {}
    }
  },
  data() {
    return {
      dataSource: defaultDataSource.data,
      postUrl: defaultDataSource.postUrl,
      postForm: {},
      loading: false
    }
  },
  created() {
    request({
      url: this.dataSourceUrl,
      method: 'get'
    }).then(res => {
      this.dataSource = Object.assign([], this.dataSource, res.data.data)
      this.postUrl = res.data.postUrl

      this.setTitleName()
      this.setLabelName()
      this.setOptions()
      this.setPostForm()
    })
  },
  methods: {
    setTitleName() {
      for (let i = 0; i < this.dataSource.length; i++) {
        const i18nIndex = this.dataSource[i].title.index
        this.dataSource[i].title.name = this.$t(i18nIndex + '.TITLE')
      }
    },
    setLabelName() {
      for (let i = 0; i < this.dataSource.length; i++) {
        const i18nIndex = this.dataSource[i].title.index
        const columns = this.dataSource[i].columns
        for (let i = 0; i < columns.length; i++) {
          columns[i].name = this.$t(i18nIndex + '.' + columns[i].index) || columns[i].name
          columns[i].editable = this.type === 'create' || (columns[i].editable && this.type === 'edit')
        }
        this.dataSource[i].columns = columns
      }
    },
    setOptions() {
      for (let i = 0; i < this.dataSource.length; i++) {
        const columns = this.dataSource[i].columns
        for (let i = 0; i < columns.length; i++) {
          if (columns[i].type === 'reference') {
            request({
              url: columns[i].option_url,
              method: 'get'
            }).then(res => {
              columns[i].options = res.data
              columns[i].type = 'enum'
              this.dataSource[i].columns = columns
            })
          }
        }
      }
    },
    setPostForm() {
      const data = {}
      for (let i = 0; i < this.dataSource.length; i++) {
        const columns = this.dataSource[i].columns
        for (let i = 0; i < columns.length; i++) {
          const key = columns[i].index
          const value = columns[i].value
          data[key] = value
        }
        this.postForm = Object.assign({}, this.postForm, data)
      }
    },
    handleSubmit() {
      switch (this.type) {
        case 'show': return
        case 'edit': this.updateData(this.dataSource); return
        case 'create': this.postData(this.dataSource); return
      }
    },
    // api
    postData(attrs) {
      if (!this.loading) {
        this.loading = true
        // ...
        this.loading = false
      }
      return
    },
    updateData(attrs) {
      if (!this.loading) {
        this.loading = true
        // ...
        this.loading = false
      }
      return
    }
  }
}
</script>

<style lang="scss" scoped>
  .form-container {
    margin-bottom: 20px;

    .form-row {
      border: 1px solid #f0f0f0;
      margin: 0px 0px -1px 0px;
    }
  }
</style>
