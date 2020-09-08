<template>
  <div class="equipment-index-container">
    <dl>
      <dd><el-link icon="el-icon-right" href="#/my/equipment/purchasing">{{ $t('route.purchasing') }}</el-link></dd>
      <dd><el-link icon="el-icon-right" href="#/my/equipment/stock">{{ $t('route.stock') }}</el-link></dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'EquipmentIndex'
}
</script>

<style lang="scss" scoped>
  .equipment-index-container {
    padding: 32px;
    position: relative;

    dd {
      margin: 10px;
    }
  }
</style>
