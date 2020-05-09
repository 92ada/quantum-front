<template>
  <div class="app-container">
    <el-link v-if="type === 'edit'" icon="el-icon-edit" @click="closeThisView">{{ $t('common.cancel_edit') }}</el-link>
    <el-link v-if="type === 'edit'" v-permission="['delete_people', 'delete_people_inlab']" icon="el-icon-edit" style="margin-left:20px;" @click="onDelete">{{ $t('common.delete') }}</el-link>
    <el-link v-if="type === 'show'" v-permission="['edit_people', 'edit_people_inlab']" icon="el-icon-edit" @click="goToEdit">{{ $t('common.edit') }}</el-link>

    <qt-form v-if="type !== 'create'" :type="type" :data-source-url="[requestUrl + '/' + peopleId + '/base/structure', requestUrl + '/' + peopleId + '/extra/structure']" />
    <qt-form v-else type="create" :data-source-url="[requestUrl + '/base/structure', requestUrl + '/' + idOrType + '/structure']" />

    <attachments v-if="type !== 'create'" :type="type" :data-source-url="'/api/attachment/people/' + peopleId " />

    <student-achievements-table v-if="type !== 'create'" :type="type" :people-id="peopleId" />

  </div>
</template>
<script>
import Attachments from '../../components/Attachment/Attachments'
import QtForm from '../../components/Form/QtForm'
import { deleteRequest } from '../../utils/delete'
import { closeView } from '../../utils/tag-view'
import { apiDelete } from '../../api/people'
import StudentAchievementsTable from './components/StudentAchievementsTable'

export default {
  name: 'PeopleDetail',
  components: { StudentAchievementsTable, QtForm, Attachments },
  data() {
    return {
      tempRoute: {},
      type: '',
      requestUrl: '/api/people',
      peopleId: -1,
      idOrType: ''
    }
  },
  created() {
    // Why need to make a copy of this.$route here?
    // Because if you enter this page and quickly switch tag, may be in the execution of the setTagsViewTitle function, this.$route is no longer pointing to the current page
    // https://github.com/PanJiaChen/vue-element-admin/issues/1221
    this.tempRoute = Object.assign({}, this.$route)

    const lang = this.$store.getters.language
    const peopleId = this.$route.params.id
    const type = this.$route.params.action_type || 'show'
    const idOrType = type === 'create' ? this.$route.params.type : peopleId

    this.type = type
    this.peopleId = peopleId
    this.idOrType = idOrType
    this.setTagsViewTitle(lang, idOrType)
    this.setPageTitle(lang, idOrType)
  },
  methods: {
    getTitle(lang, idOrType) {
      let title
      if (this.type === 'show') title = lang === 'zh' ? '人员详情' : 'Personal Info'
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
      const url = `/people/${id}/edit`
      this.$router.push(url)
    },
    onDelete() {
      deleteRequest(this, _ => {
        apiDelete(this.peopleId)
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
