<template>
  <div class="log-index-container">
    <h4>从该时刻回溯</h4>
    <el-date-picker
      v-model="datetime"
      type="datetime"
      placeholder="选择日期时间"
      :picker-options="pickerOptions"
    />
    <h4>日志条数</h4>
    <el-select v-model="size" placeholder="请选择">
      <el-option value="500" />
      <el-option value="1000" />
      <el-option value="5000" />
    </el-select>
    <h4 />
    <el-button type="primary" @click="formUrlAndOpen">查看日志</el-button>
  </div>
</template>

<script>
export default {
  name: 'LogIndex',
  data() {
    return {
      datetime: new Date(),
      size: '500'
    }
  },
  methods: {
    formUrlAndOpen() {
      const uri = `/api/log/export?timestamp=${this.datetime.getTime()}&size=${this.size}`
      window.open(process.env.VUE_APP_BASE_API + uri)
    }
  }
}
</script>

<style lang="scss" scoped>
  .log-index-container {
    padding: 32px;
    position: relative;

    dd {
      margin: 10px;
    }
  }
</style>
