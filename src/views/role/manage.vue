<template>
  <div class="roleManage-container">
    <div v-for="(group, index) in roles" :key="index">
      <h3>{{ group.name }}</h3>
      <el-checkbox v-model="checkAlls[index]" :indeterminate="isIndeterminates[index]" @change="handleCheckAllChange(index, $event)">全选</el-checkbox>
      <div style="margin: 15px 0;" />
      <el-checkbox-group v-model="postDataSource[index]">
        <el-checkbox v-for="role in group.auths" :key="role.id" :label="role.key">{{ role.name }}</el-checkbox>
      </el-checkbox-group>
    </div>

    <div style="margin-top: 40px;">
      <el-button type="primary" @click="onSubmit">{{ $t('common.update') }}</el-button>
      <el-button @click="onCancel">{{ $t('common.cancel') }}</el-button>
    </div>

  </div>
</template>
<script>
import { getRoles, updateRole } from '../../api/role'
export default {
  data() {
    return {
      roles: [],
      postDataSource: []
    }
  },
  computed: {
    checkAlls() {
      console.log('in computed', this.postDataSource)
      return this.postDataSource.map((x, index) => x.length === this.roles[index].auths.length)
    },
    isIndeterminates() {
      return this.postDataSource.map((x, index) => x.length < this.roles[index].auths.length && x.length > 0)
    }
  },
  created() {
    const id = this.$route.params.id
    getRoles(id).then(res => {
      this.roles = Object.assign([], this.roles, res)
      /**
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
       **/
      for (let i = 0; i < this.roles.length; i++) {
        const checked = this.roles[i].auths.filter(x => x.hasAuth).map(x => x.key)
        console.log('in created', checked)
        this.postDataSource.push(checked)
      }
    })
  },
  methods: {
    onSubmit() {
      const postDataResult = { roles: this.postDataSource.reduce((res, c) => res.concat(c), []) }
      const id = this.$route.params.id
      console.log(id, postDataResult)
      updateRole(id, postDataResult).then(res => {
        this.$message({
          message: '更新成功! Updated Successfully!',
          type: 'success'
        })
      }).catch(error => {
        this.$message.error('更新失败! Update failed!')
      })
    },
    onCancel() {
      const btn = document.getElementById('close-' + this.$route.path)
      btn.click()
    },
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
