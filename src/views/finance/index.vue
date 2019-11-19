<template>
  <div class="finance-index-container">
    <dl>
      <dd><el-link v-permission="['finance', 'finance_social_insurance']" icon="el-icon-right" href="#/finance/social_insurance">{{ $t('route.social_insurance') }}</el-link></dd>
      <dd><el-link v-permission="['finance', 'finance_social_funds']" icon="el-icon-right" href="#/finance/social_funds">{{ $t('route.social_funds') }}</el-link></dd>
      <dd><el-link v-permission="['finance', 'finance_expenditure']" icon="el-icon-right" href="#/finance/expenditure">{{ $t('route.expenditure') }}</el-link></dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'FinanceIndex'
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
