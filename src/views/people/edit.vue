<template>
  <div class="app-container">
    <el-link icon="el-icon-edit" @click="closeThisView">取消编辑</el-link>
    <people-detail type="edit" />

    <el-button v-loading="loading" style="margin-left: 20px;" type="primary" @click="submitForm">
      {{ $t('common.update') }}
    </el-button>
  </div>
</template>
<script>
import PeopleDetail from './components/PeopleDetail'
import request from '../../utils/request'

export default {
  name: 'EditPeople',
  components: { PeopleDetail },
  computed: {
    lang() {
      return this.$store.getters.language
    },
    id() {
      return this.$route.params && this.$route.params.id
    }
  },
  data() {
    return {
      tempRoute: {},
      loading: false
    }
  },
  created() {
    // Why need to make a copy of this.$route here?
    // Because if you enter this page and quickly switch tag, may be in the execution of the setTagsViewTitle function, this.$route is no longer pointing to the current page
    // https://github.com/PanJiaChen/vue-element-admin/issues/1221
    this.tempRoute = Object.assign({}, this.$route)

    this.setTagsViewTitle()
    this.setPageTitle()
  },
  methods: {
    setTagsViewTitle() {
      const title = this.lang === 'zh' ? '编辑' : 'Edit'
      const route = Object.assign({}, this.tempRoute, { title: `${title}-${this.id}` })
      this.$store.dispatch('tagsView/updateVisitedView', route)
    },
    setPageTitle() {
      const title = this.lang === 'zh' ? '编辑' : 'Edit'
      document.title = `${title} - ${this.id}`
    },
    closeThisView() {
      // TODO: 改成this.$store.dispatch
      const btn = document.getElementById('close-' + this.$route.path)
      btn.click()
    },
    submitForm() {
      // console.log("in submitForm", this.postForm)
      // this.loading = true
      // request({
      //   url: this.dataSourceUrl,
      //   method: 'put',
      //   data: this.postForm
      // }).then(res => {
      //   this.loading = false
      //   this.$notify({
      //     title: '成功',
      //     message: '更新成功',
      //     type: 'success',
      //     duration: 2000
      //   })
      // })
    }
  }
}
</script>
<style lang="scss" scoped>
  .app-container {
    margin: 20px;
  }
</style>
