<template>
  <div class="app-container">
    <el-link v-if="type === 'edit'" icon="el-icon-edit" @click="closeThisView">{{ $t('common.cancel_edit') }}</el-link>
    <el-link v-if="type === 'show'" icon="el-icon-edit" @click="goToEdit">{{ $t('common.edit') }}</el-link>
    <qt-form :type="type" :data-source-url="requestUrl + researchType + '/' + researchId" />

    <project-member-table v-if="researchType === 'project'" :project-id="researchId" />
    <project-funds-table v-if="researchType === 'project'" :project-id="researchId" />
  </div>
</template>
<script>
import QtForm from '../../components/Form/QtForm'
import ProjectFundsTable from './components/ProjectFundsTable'
import ProjectMemberTable from './components/ProjectMemberTable'
export default {
  name: 'ResearchDetail',
  components: { QtForm, ProjectFundsTable, ProjectMemberTable },
  data() {
    return {
      tempRoute: {},
      type: '',
      requestUrl: '/api/research/',
      researchType: '',
      researchId: -1
    }
  },
  created() {
    // Why need to make a copy of this.$route here?
    // Because if you enter this page and quickly switch tag, may be in the execution of the setTagsViewTitle function, this.$route is no longer pointing to the current page
    // https://github.com/PanJiaChen/vue-element-admin/issues/1221
    this.tempRoute = Object.assign({}, this.$route)

    console.log('in people view page')
    const lang = this.$store.getters.language
    const researchId = this.$route.params.id
    const researchType = this.$route.params.type
    const type = this.$route.params.action_type || 'show'
    const idOrType = type === 'create' ? this.$route.params.type : researchId

    this.type = type
    this.researchId = researchId
    this.researchType = researchType
    this.setTagsViewTitle(lang, idOrType)
    this.setPageTitle(lang, idOrType)
  },
  methods: {
    getTitle(lang, idOrType) {
      let title
      if (this.type === 'show') {
        switch (lang) {
          case 'zh':
            title = this.$t('route.' + this.researchType) + '详情'
            break
          case 'en':
            title = this.$t('route.' + this.researchType) + ' Info'
            break
        }
      }
      if (this.type === 'edit') title = lang === 'zh' ? '编辑' : 'Edit'
      if (this.type === 'create') title = lang === 'zh' ? '创建' : 'Create'
      return `${title}-${idOrType}`
    },
    setTagsViewTitle(lang, idOrType) {
      const route = Object.assign({}, this.tempRoute, { title: this.getTitle(lang, idOrType) })
      this.$store.dispatch('tagsView/updateVisitedView', route)
    },
    setPageTitle(lang, idOrType) {
      document.title = this.getTitle(lang, idOrType)
    },
    goToEdit() {
      const id = this.$route.params.id
      const url = `/research/${this.researchType}/${id}/edit`
      this.$router.push(url)
    },
    closeThisView() {
      // TODO: 改成this.$store.dispatch
      const btn = document.getElementById('close-' + this.$route.path)
      btn.click()
    }
  }
}
</script>
<style lang="scss" scoped>
  .app-container {
    margin: 20px;
  }
</style>
