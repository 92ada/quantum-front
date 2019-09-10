<template>
  <el-form ref="postForm" :model="postForm" class="form-container" label-position="right" label-width="100px" size="small">
    <el-link icon="el-icon-edit" @click="goToEdit">编辑</el-link>
    <people-detail type="view" :post-form="postForm" />
  </el-form>
</template>
<script>
import PeopleDetail from './components/PeopleDetail'
import { fetchPeopleInfo } from '../../api/people'

export default {
  name: 'ViewPeople',
  components: { PeopleDetail },
  data() {
    return {
      postForm: undefined
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
      const title = this.lang === 'zh' ? '人员详情' : 'Personal Info'
      const route = Object.assign({}, this.tempRoute, { title: `${title}-${this.postForm.id}` })
      this.$store.dispatch('tagsView/updateVisitedView', route)
    },
    setPageTitle() {
      const title = 'Personal Info'
      document.title = `${title} - ${this.postForm.id}`
    },
    goToEdit() {
      this.$router.push('/people/edit/' + this.postForm.id)
    }
  }
}
</script>
<style lang="scss" scoped>
  .form-container {
    margin: 40px 40px 40px 80px;
  }
</style>
