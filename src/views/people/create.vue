<template>
  <el-form ref="postForm" :model="postForm" class="form-container" label-position="right" label-width="100px" size="small">
    <people-detail type="create" :post-form="postForm" />
    <el-button v-loading="loading" style="margin-left: 20px;" type="primary" @click="submitForm">
      {{ $t('common.create') }}
    </el-button>
  </el-form>
</template>
<script>
import PeopleDetail from './components/PeopleDetail'

export default {
  name: 'CreateNewPerson',
  components: { PeopleDetail },
  data() {
    return {
      postForm: {},
      loading: false
    }
  },
  computed: {
    lang() {
      return this.$store.getters.language
    }
  },
  created() {
    this.setTagsViewTitle()
    this.setPageTitle()

    // Why need to make a copy of this.$route here?
    // Because if you enter this page and quickly switch tag, may be in the execution of the setTagsViewTitle function, this.$route is no longer pointing to the current page
    // https://github.com/PanJiaChen/vue-element-admin/issues/1221
    this.tempRoute = Object.assign({}, this.$route)
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
      this.$refs.postForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$notify({
            title: '成功',
            message: '创建成功',
            type: 'success',
            duration: 2000
          })
          console.log(this.postForm)
          this.loading = false
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .form-container {
    margin: 40px 40px 40px 80px;
  }
</style>
