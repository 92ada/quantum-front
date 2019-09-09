<template>
  <div class="peopleDetail-container">
    <el-form ref="postForm" :model="postForm" class="form-container" label-position="right" label-width="100px" size="small">
      <div>
        <basic-info :type="type" :source-data="postForm" />
        <researcher-info v-if="postForm.type === 'Researcher'" :type="type" :data="postForm" />
        <el-button v-loading="loading" style="margin-left: 20px;" type="primary" @click="submitForm">
          {{ $t('common.update') }}
        </el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import { fetchPeopleInfo } from '../../../api/people'
import BasicInfo from './BasicInfo'
import ResearcherInfo from './ResearcherInfo'

export default {
  name: 'PeopleDetail',
  components: { BasicInfo, ResearcherInfo },
  props: {
    type: {
      type: String,
      default: 'edit'
    }
  },
  data() {
    return {
      postForm: undefined,
      loading: false,
      userListOptions: [],
      tempRoute: {}
    }
  },
  computed: {
    lang() {
      return this.$store.getters.language
    }
  },
  created() {
    if (this.type === 'edit') {
      const id = this.$route.params && this.$route.params.id
      this.fetchData(id)
    } else {
      this.postForm = undefined
    }

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
      const title = this.lang === 'zh' ? '人员详情' : 'Personal Info'
      const route = Object.assign({}, this.tempRoute, { title: `${title}-${this.postForm.id}` })
      this.$store.dispatch('tagsView/updateVisitedView', route)
    },
    setPageTitle() {
      const title = 'Personal Info'
      document.title = `${title} - ${this.postForm.id}`
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
  .peopleDetail-container {
    margin: 40px 40px 40px 80px;
  }
</style>
