<template>
  <div class="app-container">
    <people-detail status="create" />
    <el-button v-loading="loading" style="margin-left: 20px;" type="primary" @click="submitForm">
      {{ $t('common.create') }}
    </el-button>
  </div>
</template>
<script>
import PeopleDetail from './components/PeopleDetail'
import request from '../../utils/request'

export default {
  name: 'CreateNewPerson',
  components: { PeopleDetail },
  computed: {
    lang() {
      return this.$store.getters.language
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
      const title = this.lang === 'zh' ? '创建' : 'Create'
      const type = this.$route.params && this.$route.params.type
      const route = Object.assign({}, this.tempRoute, { title: `${title}-${type}` })
      this.$store.dispatch('tagsView/updateVisitedView', route)
    },
    setPageTitle() {
      const title = this.lang === 'zh' ? '创建' : 'Create'
      const type = this.$route.params && this.$route.params.type
      document.title = `${title} - ${type}`
    },
    submitForm() {
      this.loading = true
      request({
        url: this.dataSourceUrl,
        method: 'post',
        data: this.postForm
      }).then(res => {
        this.loading = false
        this.$notify({
          title: '成功',
          message: '创建成功',
          type: 'success',
          duration: 2000
        })
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.app-container {
  margin: 20px;
}
</style>
