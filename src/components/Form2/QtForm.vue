<template>
  <div class="form-container">
    <h3>{{ dataSource.title.name }}</h3>
    <el-form label-position="right" label-width="100px" size="small">
      <el-row>
        <el-col v-for="(col) in dataSource.columns" :key="col.index" :span="12">
          <form-item v-if="col.type === 'string'" :label="col.name+':'" :editable="col.editable" class="form-item">
            <el-input class="form-input" v-model="postForm[col.index]" />
          </form-item>

          <form-item v-if="col.type === 'enum'" :label="col.name+':'" :editable="col.editable" class="form-item">
            <el-select :placeholder="$t('common.pleaseChoose')" v-model="postForm[col.index]" >
              <el-option v-for="option in col.options" :key="option" :value="option" />
            </el-select>
          </form-item>

          <form-item v-if="col.type === 'date'" :label="col.name+':'" :editable="col.editable" class="form-item">
            <el-date-picker
              class="form-date"
              type="date"
              :placeholder="$t('common.pleaseChoose')"
              v-model="postForm[col.index]"
            />
          </form-item>

          <form-item v-if="col.type === 'text'" :label="col.name+':'" :editable="col.editable" class="form-item">
            <el-input type="textarea" :rows="5" v-model="postForm[col.index]" />
          </form-item>

        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import FormItem from './QtFormItem'
import request from '../../utils/request'

const defaultDataSource = {
  title: {
    name: '',
    index: ''
  },
  columns: []
}

export default {
  name: 'QtForm',
  components: { FormItem },
  props: {
    type: {
      type: String,
      default: 'show'
    },
    dataSourceUrl: {
      type: String,
      default: () => {}
    },
    onValueChange: {
      type: Function,
      default: undefined
    }
  },
  data() {
    return {
      dataSource: defaultDataSource,
      postForm: {}
    }
  },
  created() {
    request({
      url: this.dataSourceUrl,
      method: 'get'
    }).then(res => {
      this.dataSource = res.data

      this.setTitleName()
      this.setLabelName()
      this.setOptions()
      this.setPostForm()
    })
  },
  updated() {
    // console.log('>> postForm', this.postForm)
    if (this.onValueChange) this.onValueChange(this.postForm)
  },
  methods: {
    setTitleName() {
      const i18nIndex = this.dataSource.title.index
      const title = this.dataSource.title.name
      this.dataSource.title.name = this.$t('titles.' + i18nIndex) || title
    },
    setLabelName() {
      const i18nIndex = this.dataSource.title.index
      const columns = this.dataSource.columns
      for (let i = 0; i < columns.length; i++) {
        columns[i].name = this.$t(i18nIndex + '.' + columns[i].index) || columns[i].name
        columns[i].editable = this.type === 'create' || (columns[i].editable && this.type === 'edit')
      }
      this.dataSource.columns = columns
    },
    setOptions() {
      const columns = this.dataSource.columns
      for (let i = 0; i < columns.length; i++) {
        if (columns[i].type === 'reference') {
          request({
            url: columns[i].option_url,
            method: 'get'
          }).then(res => {
            console.log("in setOptions")
            columns[i].options = res.data
            columns[i].type = 'enum'
            this.dataSource.columns = columns
          })
        }
      }
    },
    setPostForm() {
      const columns = this.dataSource.columns
      const data = {}
      for (let i = 0; i < columns.length; i++) {
        const key = columns[i].index
        const value = columns[i].value
        data[key] = value
      }
      this.postForm = Object.assign({}, this.postForm, data)
    }
  }
}
</script>

<style lang="scss" scoped>
  .form-container {
    margin-bottom: 20px;

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
  }
</style>
