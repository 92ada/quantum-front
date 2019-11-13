<template>
  <div class="roleManage-container">
    <div v-for="(group, index) in roles" :key="index">
      <h3>{{ group.name }}</h3>
      <el-checkbox v-model="checkAlls[index]" :indeterminate="isIndeterminates[index]" @change="handleCheckAllChange(index, $event)">全选</el-checkbox>
      <div style="margin: 15px 0;"></div>
      <el-checkbox-group v-model="postDataSource[index]">
        <el-checkbox v-for="role in group.auths" :label="role.key" :key="role.id">{{ role.name }}</el-checkbox>
      </el-checkbox-group>
    </div>

  </div>
</template>
<script>
  import { getRoles } from '../../api/role'
export default {
  data() {
    return {
      roles: [],
      postDataSource: []
    }
  },
  created() {
    // getRoles().then(res => {
    //   this.roles = res
    // })
    this.roles = [{
      id: 1,
      name: '人员',
      auths: [
        {
          id: 1,
          name: '可获取用户资料',
          key: 'USER_DATA',
          hasAuth: true
        },
        {
          id: 2,
          name: '可获取用户身份信息',
          key: 'USER_Identity',
          hasAuth: false
        }
      ]
    }]
    for (let i = 0; i < this.roles.length; i++) {
      const checked = this.roles[i].auths.filter(x => x.hasAuth).map(x => x.key)
      this.postDataSource.push(checked)
    }
  },
  updated() {
    console.log("in checked", this.postDataSource)
  },
  computed: {
    checkAlls() {
      return this.postDataSource.map((x, index) => x.length === this.roles[index].auths.length)
    },
    isIndeterminates() {
      return this.postDataSource.map((x, index) => x.length < this.roles[index].auths.length && x.length > 0)
    }
  },
  methods: {
    handleCheckAllChange(index, checked) {
      const allChecked = this.roles[index].auths.map(x => x.key)
      const newValue = checked ? allChecked : []
      this.$set(this.postDataSource, index, newValue)
    }
  }
}
</script>
<style>
  .roleManage-container {
    margin: 40px;
  }
</style>
