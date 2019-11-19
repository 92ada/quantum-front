<template>
  <div style="display: inline;">
    <el-link v-if="type === 'create'" class="create-btn" icon="el-icon-edit" @click="dialogFormVisible = true">新增航班记录</el-link>
    <el-button v-if="type === 'edit'" type="text" @click="dialogFormVisible = true">{{ $t('common.edit') }}</el-button>

    <el-dialog :title="$t('daily.flight_info.TITLE')" :visible.sync="dialogFormVisible" class="dialog">
      <el-form :model="postForm" label-width="80px" label-position="right">
        <el-form-item :label="$t('daily.flight_info.departure_site')" class="flight-form-item">
          <el-input v-model="postForm.departure_site" autocomplete="off" />
        </el-form-item>

        <el-form-item :label="$t('daily.flight_info.arrival_site')" class="flight-form-item">
          <el-input v-model="postForm.arrival_site" autocomplete="off" />
        </el-form-item>

        <el-form-item :label="$t('daily.flight_info.flight_no')" class="flight-form-item">
          <el-input v-model="postForm.flight_no" autocomplete="off" />
        </el-form-item>

        <el-form-item :label="$t('daily.flight_info.price')" class="flight-form-item">
          <el-input v-model="postForm.price" autocomplete="off" />
        </el-form-item>

        <el-form-item :label="$t('daily.flight_info.departure_time')" class="flight-form-item">
          <el-date-picker
            v-model="postForm.departure_time"
            class="form-date"
            type="datetime"
            :placeholder="$t('common.pleaseChoose')"
          />
        </el-form-item>

        <el-form-item :label="$t('daily.flight_info.arrival_time')" class="flight-form-item">
          <el-date-picker
            v-model="postForm.arrival_time"
            class="form-date"
            type="datetime"
            :placeholder="$t('common.pleaseChoose')"
          />
        </el-form-item>

        <el-form-item :label="$t('daily.flight_info.remark')" class="flight-form-item">
          <el-input v-model="postForm.remark" type="textarea" :rows="5" autocomplete="off" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleSubmit" v-loading="loading">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { createFlightInfo, updateFlightInfo } from '../../../api/daily'
import { refresh } from '../../../utils/tag-view'

export default {
  name: 'FlightInfoDialog',
  props: ['dataSource', 'type'],
  data() {
    return {
      postForm: {},
      dialogFormVisible: false,
      loading: false
    }
  },
  created() {
    this.postForm = Object.assign({}, this.dataSource.data, this.postForm)
  },
  methods: {
    handleSubmit() {
      const finalPostForm = this.postForm
      switch (this.type) {
        case 'edit': this.updateData(finalPostForm); return
        case 'create': this.postData(finalPostForm); return
      }
    },
    // api
    postData(data) {
      console.log("in post", data)
      const dailyType = this.dataSource.dailyType
      const dailyId = this.dataSource.dailyId

      if (!this.loading) {
        this.loading = true
        createFlightInfo(dailyType, dailyId, data).then(res => {
          this.$message({
            message: '创建成功! Created Successfully!',
            type: 'success'
          })
          this.dialogFormVisible = false
          refresh(this)
        }).catch(error => {
          this.$message.error('创建失败! Creation Failed!')
          this.loading = false
        })
      }
    },
    updateData(data) {
      const dailyType = this.dataSource.dailyType
      const dailyId = this.dataSource.dailyId
      const flightId = this.dataSource.data.id

      if (!this.loading) {
        updateFlightInfo(dailyType, dailyId, flightId, data).then(res => {
          this.$message({
            message: '更新成功! Updated Successfully!',
            type: 'success'
          })
          this.dialogFormVisible = false
          refresh(this)
        }).catch(error => {
          this.$message.error('更新失败! Update Failed!')
          this.loading = false
        })
      }
      return
    }
  }
}
</script>

<style lang="scss" scoped>
  .flight-form-item {

  }
  .dialog.el-dialog {
    width: 400px;
  }
  .create-btn {
    margin: 15px 10px 0px 10px;
    float: right;
  }
</style>
