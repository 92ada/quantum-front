<template>
  <div class="form-container">
    <h3>{{ dataSource.title.name }}</h3>
    <el-form label-position="right" label-width="100px" size="small">
      <el-row>
        <el-col v-for="(col, index) in dataSource.columns" :key="col.index" :span="12">
          <form-item v-if="col.type === 'string'" :label="col.name+':'" :editable="col.editable">
            <el-input v-model="postForm[index].value" class="form-input" />
          </form-item>

          <form-item v-else-if="col.type === 'enum'" :label="col.name+':'" :editable="col.editable">
            <el-select v-model="postForm[index].value" :placeholder="$t('common.pleaseChoose')">
              <el-option v-for="option in col.options" :key="option" :value="option" />
            </el-select>
          </form-item>

          <form-item v-else-if="col.type === 'date'" :label="col.name+':'" :editable="col.editable">
            <el-date-picker
              v-model="postForm[index].value"
              class="form-date"
              type="date"
              :placeholder="$t('common.pleaseChoose')"
            />
          </form-item>

          <form-item v-else-if="col.type === 'text'" :label="col.name+':'" :editable="col.editable">
            <el-input v-model="postForm[index].value" type="textarea" :rows="5" />
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
    status: {
      type: String,
      default: 'view'
    },
    dataSourceUrl: {
      type: String,
      default: () => {}
    }
  },
  data() {
    return {
      dataSource: defaultDataSource,
      postForm: []
    }
  },
  computed: {
    editable() {
      return this.status === 'edit' || this.status === 'create'
    }
  },
  created() {
    const id = this.$route.params && this.$route.params.id
    request({
      url: this.dataSourceUrl,
      method: 'get',
      params: { id }
    }).then(res => {
      this.dataSource = res.data

      this.setTitleName()
      this.setLabelName()
      this.setOptions()
      this.setPostForm()
    })
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
            columns[i].options = res.data
            this.dataSource.columns = columns
          })
        }
      }
    },
    setPostForm() {
      const columns = this.dataSource.columns
      for (let i = 0; i < columns.length; i++) {
        this.$set(this.postForm, i, { index: columns[i].index, value: columns[i].value })
      }
      console.log("in setPostForm", this.postForm)
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
