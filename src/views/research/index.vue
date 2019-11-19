<template>
  <div class="research-index-container">
    <dl>
      <dd><el-link v-permission="['research', 'research_patent']" icon="el-icon-right" href="#/research/patent">{{ $t('route.patent') }}</el-link></dd>
      <dd><el-link v-permission="['research', 'research_paper']" icon="el-icon-right" href="#/research/paper">{{ $t('route.paper') }}</el-link></dd>
      <dd><el-link v-permission="['research', 'research_project']" icon="el-icon-right" href="#/research/project">{{ $t('route.project') }}</el-link></dd>
      <dd><el-link v-permission="['research', 'research_reward']" icon="el-icon-right" href="#/research/reward">{{ $t('route.reward') }}</el-link></dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'ResearchIndex'
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
