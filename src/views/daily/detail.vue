<template>
  <div class="app-container">
    <el-link v-if="type === 'edit'" icon="el-icon-edit" @click="closeThisView">{{ $t('common.cancel_edit') }}</el-link>
    <el-link v-if="type === 'edit'" v-permission="['delete_daily_'+dailyType, 'delete_daily']" icon="el-icon-edit" @click="onDelete" style="margin-left:20px;">{{ $t('common.delete') }}</el-link>
    <el-link v-if="type === 'show'" v-permission="['edit_daily_'+dailyType, 'edit_daily']" icon="el-icon-edit" @click="goToEdit">{{ $t('common.edit') }}</el-link>

    <qt-form v-if="type !== 'create'" :type="type" :data-source-url="[requestUrl + '/' + dailyType + '/' + dailyId + '/structure']" />
    <qt-form v-else type="create" :data-source-url="[requestUrl + '/' + dailyType + '/structure']" />

    <flight-info-table v-if="(dailyType === 'visit' || dailyType === 'travel') && type !== 'create'" :type="type" :daily-type="dailyType" :daily-id="dailyId" />
    <attachments v-if="dailyType !== 'travel' && type !== 'create'" :type="type" :data-source-url="'/api/attachment/' + dailyType + '/' + dailyId " />
  </div>
</template>
<script>
import QtForm from '../../components/Form/QtForm'
import FlightInfoTable from './components/FlightInfoTable'
import Attachments from '../../components/Attachment/Attachments'
import { closeView } from '../../utils/tag-view'
import { deleteDaily } from '../../api/daily'
import { deleteRequest } from '../../utils/delete'
export default {
  name: 'DailyDetail',
  components: { FlightInfoTable, QtForm, Attachments },
  data() {
    return {
      tempRoute: {},
      type: '',
      requestUrl: '/api/daily',
      dailyType: '',
      dailyId: -1
    }
  },
  created() {
    // Why need to make a copy of this.$route here?
    // Because if you enter this page and quickly switch tag, may be in the execution of the setTagsViewTitle function, this.$route is no longer pointing to the current page
    // https://github.com/PanJiaChen/vue-element-admin/issues/1221
    this.tempRoute = Object.assign({}, this.$route)

    const lang = this.$store.getters.language
    const dailyId = this.$route.params.id
    const dailyType = this.$route.params.type
    const type = this.$route.params.action_type || 'show'
    const idOrType = type === 'create' ? this.$route.params.type : dailyId

    this.type = type
    this.dailyId = dailyId
    this.dailyType = dailyType
    this.setTagsViewTitle(lang, idOrType)
    this.setPageTitle(lang, idOrType)
  },
  methods: {
    getTitle(lang, idOrType) {
      let title
      if (this.type === 'show') {
        switch (lang) {
          case 'zh':
            title = this.$t('route.' + this.dailyType) + '详情'
            break
          case 'en':
            title = this.$t('route.' + this.dailyType) + ' Info'
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
      const url = `/daily/${this.dailyType}/${id}/edit`
      this.$router.push(url)
    },
    onDelete() {
      deleteRequest(this, _ => {
        deleteDaily(this.dailyType, this.dailyId)
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
