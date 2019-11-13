<template>
  <div>
    <div v-for="(form, index) in dataSource" :key="index" class="form-container">
      <h3>{{ form.title.name }}</h3>
      <el-form label-position="right" label-width="120px" size="small">
        <el-row v-for="row_index in Math.ceil(form.columns.length/2)" :key="row_index" class="form-row">
          <qt-form-col :col="form.columns[(row_index-1) *2]" :post-form="postForms[index].data" />
          <qt-form-col v-if="(row_index-1) * 2 + 1 < form.columns.length" :col="form.columns[(row_index-1) * 2 + 1]" :post-form="postForms[index].data" />
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
import { hideId } from '../../utils/form'

const defaultDataSource = {
  postUrl: '',
  updateUrl: '',
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
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      dataSource: [],
      postForms: [],
      loading: false
    }
  },
  async created() {
    for (const url of this.dataSourceUrl) {
      await request({
        url: url,
        method: 'get'
      }).then(res => {
        this.dataSource = Object.assign([], this.dataSource, this.dataSource.push({
          title: { index: res.index },
          columns: hideId(res.data)
        }))

        this.setTitleName()
        this.setLabelName()
        // this.setOptions()
        this.setPostForm(res)
      })
    }
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
          let index_ = columns[i].index
          if (index_.endsWith('Json')) {
            // 处理Json字段的Field name：(1)去掉Json, (2)驼峰转下划线
            index_ = index_.split('Json')[0].replace(/([A-Z])/g, '_$1').toLowerCase()
          }
          columns[i].name = this.$t(i18nIndex + '.' + index_) || columns[i].name
          columns[i].editable = this.type === 'create' || (columns[i].editable && this.type === 'edit')
        }
        this.dataSource[i].columns = columns
      }
    },
    setOptions() {
      for (let i = 0; i < this.dataSource.length; i++) {
        const columns = this.dataSource[i].columns
        for (let i = 0; i < columns.length; i++) {
          if (columns[i].type === 'object') {
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
    setPostForm(res) {
      const columns = res.data
      const data = {}
      for (let i = 0; i < columns.length; i++) {
        const key = columns[i].index
        const value = columns[i].value
        data[key] = value
      }
      this.postForms = Object.assign([], this.postForms, this.postForms.push({
        data: data,
        postUrl: res.post_url,
        updateUrl: res.update_url,
        deleteUrl: res.delete_url
      }))
    },
    handleSubmit() {
      for (const postForm of this.postForms) {
        switch (this.type) {
          case 'show': return
          case 'edit': this.updateData(postForm); return
          case 'create': this.postData(postForm); return
        }
      }
    },
    // api
    postData(postForm) {
      if (!this.loading) {
        this.loading = true
        request({
          url: postForm.postUrl,
          method: 'post',
          data: JSON.stringify(postForm.data)
        }).then(res => {
          // ...
          this.loading = false
        })
      }
    },
    updateData(postForm) {
      if (!this.loading) {
        this.loading = true
        request({
          url: postForm.updateUrl,
          method: 'put',
          data: JSON.stringify(postForm.data)
        }).then(res => {
          // ...
          this.loading = false
        })
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
