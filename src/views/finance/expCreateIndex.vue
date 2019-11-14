<template>
  <div class="finance-index-container">
    <dl>
      <dd><el-link icon="el-icon-right" href="#/finance/expenditure/equipment/create">{{ $t('finance.expenditure.equipment') }}</el-link></dd>
      <dd><el-link icon="el-icon-right" href="#/finance/expenditure/material/create">{{ $t('finance.expenditure.material') }}</el-link></dd>
      <dd><el-link icon="el-icon-right" href="#/finance/expenditure/processing/create">{{ $t('finance.expenditure.processing') }}</el-link></dd>
      <dd><el-link icon="el-icon-right" href="#/finance/expenditure/travel/create">{{ $t('finance.expenditure.travel') }}</el-link></dd>
      <dd><el-link icon="el-icon-right" href="#/finance/expenditure/conference/create">{{ $t('finance.expenditure.conference') }}</el-link></dd>
      <dd><el-link icon="el-icon-right" href="#/finance/expenditure/international/create">{{ $t('finance.expenditure.international') }}</el-link></dd>
      <dd><el-link icon="el-icon-right" href="#/finance/expenditure/publication/create">{{ $t('finance.expenditure.publication') }}</el-link></dd>
      <dd><el-link icon="el-icon-right" href="#/finance/expenditure/labor/create">{{ $t('finance.expenditure.labor') }}</el-link></dd>
      <dd><el-link icon="el-icon-right" href="#/finance/expenditure/consultation/create">{{ $t('finance.expenditure.consultation') }}</el-link></dd>
      <dd><el-link icon="el-icon-right" href="#/finance/expenditure/other/create">{{ $t('finance.expenditure.other') }}</el-link></dd>
      <dd><el-link icon="el-icon-right" href="#/finance/expenditure/indirective/create">{{ $t('finance.expenditure.indirective') }}</el-link></dd>
    </dl>
  </div>
</template>

<script>
  export default {
    name: 'ExpCreateIndex'
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
