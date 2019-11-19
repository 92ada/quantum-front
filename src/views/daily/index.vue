<template>
  <div class="daily-index-container">
    <dl>
      <dd><el-link v-permission="['daily', 'daily_travel']" icon="el-icon-right" href="#/daily/travel">{{ $t('route.travel') }}</el-link></dd>
      <dd><el-link v-permission="['daily', 'daily_visit']" icon="el-icon-right" href="#/daily/visit">{{ $t('route.visit') }}</el-link></dd>
      <dd><el-link v-permission="['daily', 'daily_report']" icon="el-icon-right" href="#/daily/report">{{ $t('route.report') }}</el-link></dd>
      <dd><el-link v-permission="['daily', 'daily_hosting']" icon="el-icon-right" href="#/daily/hosting">{{ $t('route.hosting') }}</el-link></dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'DailyIndex'
}
</script>

<style lang="scss" scoped>
  .daily-index-container {
    padding: 32px;
    position: relative;

    dd {
      margin: 10px;
    }
  }
</style>
