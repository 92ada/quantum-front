<template>
  <el-form ref="postForm" :model="postForm" class="form-container" label-position="right" label-width="100px" size="small">
    <el-link icon="el-icon-edit" @click="closeThisView">取消编辑</el-link>
    <people-detail type="edit" :post-form="postForm" />
    <el-button v-loading="loading" style="margin-left: 20px;" type="primary" @click="submitForm">
      {{ $t('common.update') }}
    </el-button>
  </el-form>
</template>
<script>
import PeopleDetail from './components/PeopleDetail'
import { fetchPeopleInfo } from '../../api/people'

export default {
  name: 'EditPeople',
  components: { PeopleDetail },
  data() {
    return {
      postForm: undefined,
      loading: false
    }
  },
  computed: {
    lang() {
      return this.$store.getters.language
    }
  },
  created() {
    const id = this.$route.params && this.$route.params.id
    this.fetchData(id)

    // Why need to make a copy of this.$route here?
    // Because if you enter this page and quickly switch tag, may be in the execution of the setTagsViewTitle function, this.$route is no longer pointing to the current page
    // https://github.com/PanJiaChen/vue-element-admin/issues/1221
    this.tempRoute = Object.assign({}, this.$route)
  },
  methods: {
    fetchData(id) {
      fetchPeopleInfo(id).then(response => {
        this.postForm = response.data

        // set tagsview title
        this.setTagsViewTitle()

        // set page title
        this.setPageTitle()
      }).catch(err => {
        console.log(err)
      })
    },
    setTagsViewTitle() {
      const title = this.lang === 'zh' ? '编辑' : 'Edit'
      const route = Object.assign({}, this.tempRoute, { title: `${title}-${this.postForm.id}` })
      this.$store.dispatch('tagsView/updateVisitedView', route)
    },
    setPageTitle() {
      const title = this.lang === 'zh' ? '编辑' : 'Edit'
      document.title = `${title} - ${this.postForm.id}`
    },
    closeThisView() {
      // TODO: 改成this.$store.dispatch
      const btn = document.getElementById('close-' + this.$route.path)
      btn.click()
    },
    submitForm() {
      this.$refs.postForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$notify({
            title: '成功',
            message: '更新成功',
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
