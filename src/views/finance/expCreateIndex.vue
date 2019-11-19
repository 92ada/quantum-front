<template>
  <div class="finance-index-container">
    <dl>
      <dd v-for="exp in expenditures" :key="exp">
        <el-link
          v-permission="['edit_finance', 'edit_finance_expenditure', `edit_finance_expenditure_${exp}`]"
          :href="`#/finance/expenditure/${exp}/create`"
          icon="el-icon-right">
          {{ $t('finance.expenditure.' + exp) }}
        </el-link>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'ExpCreateIndex',
  data() {
    return {
      expenditures: ['equipment', 'material', 'processing', 'travel', 'conference', 'international', 'publication',
        'labor', 'consultation', 'other', 'indirective']
    }
  }
}
</script>

<style lang="scss" scoped>
  .finance-index-container {
    padding: 32px;
    position: relative;

    dd {
      margin: 10px;
    }
  }
</style>
