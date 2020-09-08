<template>
  <div class="app-container">
    <el-link v-if="type === 'edit'" icon="el-icon-edit" @click="closeThisView">{{ $t('common.cancel_edit') }}</el-link>
    <el-link v-if="type === 'show'" v-permission="['edit_people', 'edit_people_inlab']" icon="el-icon-edit" @click="goToEdit">{{ $t('common.edit') }}</el-link>

    <qt-form v-if="type !== 'create'" :type="type" :data-source-url="['/api/my/base/structure', '/api/my/extra/structure']" />
    <qt-form v-else type="create" :data-source-url="['/api/people/base/structure', '/api/people/create/structure']" />

    <attachments v-if="type !== 'create'" :type="type" :data-source-url="'/api/my/attachment'" />

    <student-achievements-table v-if="type !== 'create'" :type="type"/>

  </div>
</template>
<script>
import Attachments from '../../../components/Attachment/Attachments'
import QtForm from '../../../components/Form/QtForm'
import { closeView } from '../../../utils/tag-view'
import StudentAchievementsTable from './components/StudentAchievementsTable'
import { getMyInfo } from '../../../api/my'

export default {
  name: 'PeopleDetail',
  components: { StudentAchievementsTable, QtForm, Attachments },
  data() {
    return {
      tempRoute: {},
      type: '',
      requestUrl: ''
    }
  },
  created() {
    // Why need to make a copy of this.$route here?
    // Because if you enter this page and quickly switch tag, may be in the execution of the setTagsViewTitle function, this.$route is no longer pointing to the current page
    // https://github.com/PanJiaChen/vue-element-admin/issues/1221
    this.tempRoute = Object.assign({}, this.$route)

    const lang = this.$store.getters.language
    this.type = 'show'
    this.setTagsViewTitle(lang)
    this.setPageTitle(lang)
  },
  methods: {
    getTitle(lang) {
      let title
      if (this.type === 'show') title = lang === 'zh' ? '个人信息' : 'Personal Info'
      if (this.type === 'edit') title = lang === 'zh' ? '编辑' : 'Edit'
      if (this.type === 'create') title = lang === 'zh' ? '创建' : 'Create'
      return `${title}`
    },
    setTagsViewTitle(lang) {
      const route = Object.assign({}, this.tempRoute, { title: this.getTitle(lang) })
      this.$store.dispatch('tagsView/updateVisitedView', route)
    },
    setPageTitle(lang) {
      document.title = this.getTitle(lang)
    },
    goToEdit() {
      const _this = this
      getMyInfo().then(res => {
        const peopleId = res.id
        const url = `/people/${peopleId}/edit`
        _this.$router.push(url)
      })
    },
    closeThisView() {
      closeView(this.$route.path)
    }
  }
}
</script>
<style lang="scss" scoped>
  .app-container {
    margin: 20px;
  }
</style>
