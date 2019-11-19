<template>
  <div class="app-container">
    <el-link v-if="type === 'edit'" icon="el-icon-edit" @click="closeThisView">{{ $t('common.cancel_edit') }}</el-link>
    <el-link v-if="type === 'edit'" icon="el-icon-edit" @click="onDelete" style="margin-left:20px;">{{ $t('common.delete') }}</el-link>
    <el-link v-if="type === 'show'" icon="el-icon-edit" @click="goToEdit">{{ $t('common.edit') }}</el-link>

    <qt-form v-if="type !== 'create'" :type="type" :data-source-url="[requestUrl + '/' + labId + '/structure']" />
    <qt-form v-else type="create" :data-source-url="[requestUrl + '/structure']" />
  </div>
</template>
<script>
import QtForm from '../../components/Form/QtForm'
import { deleteRequest } from '../../utils/delete'
import { closeView } from '../../utils/tag-view'
import { deleteLab } from '../../api/lab'

export default {
  name: 'LabDetail',
  components: { QtForm },
  data() {
    return {
      tempRoute: {},
      type: '',
      requestUrl: '/api/labs',
      labId: -1
    }
  },
  created() {
    // Why need to make a copy of this.$route here?
    // Because if you enter this page and quickly switch tag, may be in the execution of the setTagsViewTitle function, this.$route is no longer pointing to the current page
    // https://github.com/PanJiaChen/vue-element-admin/issues/1221
    this.tempRoute = Object.assign({}, this.$route)

    console.log('in lab view page')
    const lang = this.$store.getters.language
    const labId = this.$route.params.id
    const type = this.$route.params.action_type || 'show'
    const idOrType = type === 'create' ? 'Lab' : labId

    console.log(labId, type, idOrType)
    console.log(this.$route)

    this.type = type
    this.labId = labId
    this.setTagsViewTitle(lang, idOrType)
    this.setPageTitle(lang, idOrType)
  },
  methods: {
    getTitle(lang, idOrType) {
      let title
      if (this.type === 'show') title = lang === 'zh' ? '实验室详情' : 'Lab Info'
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
      const url = `/lab/${id}/edit`
      this.$router.push(url)
    },
    onDelete() {
      deleteRequest(this, _ => {
        deleteLab(this.labId)
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
