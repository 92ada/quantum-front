<template>
  <div class="app-container">
    <el-link v-if="type === 'edit'" icon="el-icon-edit" @click="closeThisView">{{ $t('common.cancel_edit') }}</el-link>
    <el-link v-if="type === 'edit'" v-permission="['delete_finance_social_insurance', 'delete_finance']" icon="el-icon-edit" @click="onDelete" style="margin-left:20px;">{{ $t('common.delete') }}</el-link>
    <el-link v-if="type === 'show'" v-permission="['edit_finance_social_insurance', 'edit_finance']" icon="el-icon-edit" @click="goToEdit">{{ $t('common.edit') }}</el-link>

    <el-form :inline="true" :model="tableData" label-width="80px" label-position="left" class="insurance-form">
      <el-row>
        <el-form-item label="人员">
          <person-selector v-model="person" :editable="editable" option-url="/api/people/options" />
        </el-form-item>
      </el-row>
      <el-row>
        <form-item :editable="editable" label="经费来源">
          <el-input v-model="otherData.fund_source" />
        </form-item>
      </el-row>
      <el-row>
        <form-item label="日期" :editable="editable">
          <el-date-picker
            v-model="otherData.date"
            :placeholder="$t('common.pleaseChoose')"
          />
        </form-item>
      </el-row>

      <el-row class="insurance-row">
        <form-item :editable="editable" label="" class="insurance-form-item" />
        <form-item :editable="editable" label="缴费基数" class="insurance-form-item" />
        <form-item :editable="editable" label="个人" class="insurance-form-item" />
        <form-item :editable="editable" label="单位" class="insurance-form-item" />
      </el-row>
      <el-row class="insurance-row">
        <form-item :editable="editable" label="养老保险" class="insurance-form-item" />
        <form-item :editable="editable" label="" class="insurance-form-item">
          <el-input type="number" v-model="tableData.pension_base_amount" />
        </form-item>
        <form-item :editable="editable" label="" class="insurance-form-item">
          <el-input type="number" v-model="tableData.pension_by_individual" />
        </form-item>
        <form-item :editable="editable" label="" class="insurance-form-item">
          <el-input type="number" v-model="tableData.pension_by_institution" />
        </form-item>
      </el-row>
      <el-row class="insurance-row">
        <form-item :editable="editable" label="医疗保险" class="insurance-form-item" />
        <form-item :editable="editable" label="" class="insurance-form-item">
          <el-input type="number" v-model="tableData.medical_base_amount" />
        </form-item>
        <form-item :editable="editable" label="" class="insurance-form-item">
          <el-input type="number" v-model="tableData.medical_by_individual" />
        </form-item>
        <form-item :editable="editable" label="" class="insurance-form-item">
          <el-input type="number" v-model="tableData.medical_by_institution" />
        </form-item>
      </el-row>

      <el-row class="insurance-row">
        <form-item :editable="editable" label="工伤保险" class="insurance-form-item" />
        <form-item :editable="editable" label="" class="insurance-form-item">
          <el-input type="number" v-model="tableData.work_injury_base_amount" />
        </form-item>
        <form-item :editable="editable" label="" class="insurance-form-item" />
        <form-item :editable="editable" label="" class="insurance-form-item">
          <el-input type="number" v-model="tableData.work_injury_by_institution" />
        </form-item>
      </el-row>

      <el-row class="insurance-row">
        <form-item :editable="editable" label="医疗保险" class="insurance-form-item" />
        <form-item :editable="editable" label="" class="insurance-form-item">
          <el-input type="number" v-model="tableData.unemployment_base_amount" />
        </form-item>
        <form-item :editable="editable" label="" class="insurance-form-item">
          <el-input type="number" v-model="tableData.unemployment_by_individual" />
        </form-item>
        <form-item :editable="editable" label="" class="insurance-form-item">
          <el-input type="number" v-model="tableData.unemployment_by_institution" />
        </form-item>
      </el-row>

      <el-row class="insurance-row">
        <form-item :editable="editable" label="生育医疗" class="insurance-form-item" />
        <form-item :editable="editable" label="" class="insurance-form-item">
          <el-input type="number" v-model="tableData.fertility_base_amount" />
        </form-item>
        <form-item :editable="editable" label="" class="insurance-form-item" />
        <form-item :editable="editable" label="" class="insurance-form-item">
          <el-input type="number" v-model="tableData.fertility_by_institution" />
        </form-item>
      </el-row>

      <el-row class="insurance-row insurance-dark">
        <el-form-item label="应收金额" class="insurance-form-item" />
        <el-form-item label="" class="insurance-form-item" />
        <el-form-item label="个人" class="insurance-form-item">
          {{ tableDataComputed.receivable_by_individual }}
        </el-form-item>
        <el-form-item label="单位" class="insurance-form-item">
          {{ tableDataComputed.receivable_by_institution }}
        </el-form-item>
        <el-form-item label="合计" class="insurance-form-item">
          {{ tableDataComputed.receivable_total }}
        </el-form-item>
      </el-row>
    </el-form>
    <el-button v-if="type === 'edit' || type === 'create'" v-loading="loading" style="margin-left: 20px;" type="primary" @click="onSubmit">
      {{ $t(`common.${type}`) }}
    </el-button>
  </div>
</template>

<script>
import FormItem from '../../components/Form/QtFormItem'
import PersonSelector from '../../components/Selector/PersonSelector'
import {
  createSocialInsurance,
  updateSocialInsurance,
  getSocialInsurance,
  deleteSocialInsurance
} from '../../api/finance'
import { closeView } from '../../utils/tag-view'
import { deleteRequest } from '../../utils/delete'

export default {
  name: 'InsuranceDetail',
  components: { FormItem, PersonSelector },
  data() {
    return {
      type: '',
      loading: false,
      person: {},
      otherData: {
        date: '',
        fund_source: ''
      },
      tableData: {
        pension_base_amount: 0,
        pension_by_individual: 0,
        pension_by_institution: 0,
        medical_base_amount: 0,
        medical_by_individual: 0,
        medical_by_institution: 0,
        work_injury_base_amount: 0,
        work_injury_by_institution: 0,
        unemployment_base_amount: 0,
        unemployment_by_individual: 0,
        unemployment_by_institution: 0,
        fertility_base_amount: 0,
        fertility_by_institution: 0
      }
    }
  },
  computed: {
    editable() {
      return this.type === 'create' || this.type === 'edit'
    },
    tableDataComputed() {
      const individual = Number(this.tableData.pension_by_individual) + Number(this.tableData.medical_by_individual) +
        Number(this.tableData.unemployment_by_individual)
      const institution = Number(this.tableData.pension_by_institution) + Number(this.tableData.medical_by_institution) +
        Number(this.tableData.work_injury_by_institution) + Number(this.tableData.unemployment_by_institution) + Number(this.tableData.fertility_by_institution)
      const ret = {
        receivable_by_individual: individual,
        receivable_by_institution: institution,
        receivable_total: individual + institution
      }
      return ret
    }
  },
  created() {
    // Why need to make a copy of this.$route here?
    // Because if you enter this page and quickly switch tag, may be in the execution of the setTagsViewTitle function, this.$route is no longer pointing to the current page
    // https://github.com/PanJiaChen/vue-element-admin/issues/1221
    this.tempRoute = Object.assign({}, this.$route)

    const lang = this.$store.getters.language
    const financeId = this.$route.params.id
    const type = this.$route.params.action_type || 'show'
    const idOrType = type === 'create' ? this.$route.params.type : financeId

    this.type = type
    this.financeId = financeId
    this.setTagsViewTitle(lang, idOrType)
    this.setPageTitle(lang, idOrType)

    if (type !== 'create') {
      this.fetchData()
    }
  },
  methods: {
    fetchData() {
      const id = this.$route.params.id
      getSocialInsurance(id).then(res => {
        for (const key in this.tableData) {
          this.$set(this.tableData, key, res[key])
        }
        this.person = res.people
        this.$set(this.otherData, 'date', res.date)
        this.$set(this.otherData, 'fund_source', res.fund_source)
      })
    },
    getTitle(lang, idOrType) {
      let title
      if (this.type === 'show') {
        switch (lang) {
          case 'zh':
            title = this.$t('route.social_insurance') + '详情'
            break
          case 'en':
            title = this.$t('route.social_insurance') + ' Info'
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
      const url = `/finance/social_insurance/${id}/edit`
      this.$router.push(url)
    },
    onDelete() {
      const id = this.$route.params.id
      deleteRequest(this, _ => {
        deleteSocialInsurance(id)
      })
    },
    onSubmit() {
      const finalPostData = { ...this.tableData, ...this.tableDataComputed,
        people: this.person, peopleJson: this.person, ...this.otherData }
      switch (this.type) {
        case 'create': this.postData(finalPostData); break
        case 'edit': this.updateData(finalPostData); break
      }
    },
    postData(data) {
      if (!this.loading) {
        this.loading = true
        createSocialInsurance(data).then(res => {
          this.$message({
            message: '创建成功! Created Successfully!',
            type: 'success'
          })
          const btn = document.getElementById('close-' + this.$route.path)
          btn.click()
        }).catch(error => {
          this.$message.error('创建失败! Creation Failed!')
          this.loading = false
        })
      }
    },
    updateData(data) {
      const id = this.$route.params.id
      if (!this.loading) {
        this.loading = true
        updateSocialInsurance(id, data).then(res => {
          this.$message({
            message: '更新成功! Updated Successfully!',
            type: 'success'
          })
          this.loading = false
        }).catch(error => {
          this.$message.error('更新失败! Update Failed!')
          this.loading = false
        })
      }
      return
    },
    closeThisView() {
      closeView(this.$route.path)
    }
  }
}
</script>
<style lang="scss" scoped>
  .app-container {
    margin: 32px;
    .insurance-form {
      margin-bottom: 20px;
      margin-top: 20px;
    }
    .insurance-form-item {
      width: 18%;
      margin: 8px;
    }
    .insurance-row {
      border-bottom: 1px solid gainsboro;
    }
    .insurance-dark {
      background-color: #f5f7fa;
    }
  }
</style>
