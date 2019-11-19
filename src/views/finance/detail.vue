<template>
  <div class="app-container">
    <el-link v-if="type === 'edit'" icon="el-icon-edit" @click="closeThisView">{{ $t('common.cancel_edit') }}</el-link>
    <el-link v-if="type === 'edit'" v-permission="['delete_finance_'+financeType, 'delete_finance']" icon="el-icon-edit" @click="onDelete" style="margin-left:20px;">{{ $t('common.delete') }}</el-link>
    <el-link v-if="type === 'show'" v-permission="['edit_finance_'+financeType, 'edit_finance']" icon="el-icon-edit" @click="goToEdit">{{ $t('common.edit') }}</el-link>

    <qt-form :type="type" :data-source-url="getFormUrls()" />
  </div>
</template>
<script>
import QtForm from '../../components/Form/QtForm'
import { deleteRequest } from '../../utils/delete'
import { closeView } from '../../utils/tag-view'
import { deleteFinance } from '../../api/finance'
export default {
  name: 'FinanceDetail',
  components: { QtForm },
  data() {
    return {
      tempRoute: {},
      type: '',
      financeType: '',
      financeId: -1
    }
  },
  created() {
    // Why need to make a copy of this.$route here?
    // Because if you enter this page and quickly switch tag, may be in the execution of the setTagsViewTitle function, this.$route is no longer pointing to the current page
    // https://github.com/PanJiaChen/vue-element-admin/issues/1221
    this.tempRoute = Object.assign({}, this.$route)

    const lang = this.$store.getters.language
    const financeId = this.$route.params.id
    const financeType = this.$route.params.type
    const type = this.$route.params.action_type || 'show'
    console.log("action type", type, financeId, financeType, type)
    const idOrType = type === 'create' ? this.$route.params.type : financeId

    this.type = type
    this.financeId = financeId
    this.financeType = financeType
    this.setTagsViewTitle(lang, idOrType)
    this.setPageTitle(lang, idOrType)
  },
  methods: {
    getFormUrls() {
      const exp_type = this.$route.params.exp_type
      const id = this.financeId

      if (this.type === 'create') {
        switch (this.financeType) {
          case 'expenditure': return ['/api/finance/exps/base/structure', `/api/finance/exps/${exp_type}/structure`]
          case 'social_insurance': return ['/api/finance/social_insurances/structure']
          case 'social_funds': return ['/api/finance/social_funds/structure']
        }
      } else {
        switch (this.financeType) {
          case 'expenditure': return [`/api/finance/exps/${id}/base/structure`, `/api/finance/exps/${id}/extra/structure`]
          case 'social_insurance': return [`/api/finance/social_insurances/${id}/structure`]
          case 'social_funds': return [`/api/finance/social_funds/${id}/structure`]
        }
      }
    },
    getTitle(lang, idOrType) {
      let title
      if (this.type === 'show') {
        switch (lang) {
          case 'zh':
            title = this.$t('route.' + this.financeType) + '详情'
            break
          case 'en':
            title = this.$t('route.' + this.financeType) + ' Info'
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
      const url = `/finance/${this.financeType}/${id}/edit`
      this.$router.push(url)
    },
    onDelete() {
      deleteRequest(this, _ => {
        deleteFinance(this.financeType, this.financeId)
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
