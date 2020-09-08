<template>
  <div class="research-index-container">
    <dl>
      <dd><el-link icon="el-icon-right" href="#/my/research/patent">{{ $t('route.patent') }}</el-link></dd>
      <dd><el-link icon="el-icon-right" href="#/my/research/paper">{{ $t('route.paper') }}</el-link></dd>
      <dd><el-link icon="el-icon-right" href="#/my/research/project">{{ $t('route.project') }}</el-link></dd>
      <dd><el-link icon="el-icon-right" href="#/my/research/reward">{{ $t('route.reward') }}</el-link></dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'MyResearchIndex'
}
</script>

<style lang="scss" scoped>
  .research-index-container {
    padding: 32px;
    position: relative;

    dd {
      margin: 10px;
    }
  }
</style>
