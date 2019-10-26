<template>
  <div style="display: inline;">
    <el-button type="text" @click="dialogFormVisible = true">{{ $t('common.edit') }}</el-button>
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
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'FlightInfoDialog',
  props: ['dataSource'],
  data() {
    return {
      postForm: {},
      dialogFormVisible: false
    }
  },
  created() {
    this.postForm = Object.assign({}, this.dataSource, this.postForm)
  }
}
</script>

<style lang="scss" scoped>
  .flight-form-item {

  }
  .dialog.el-dialog {
    width: 400px;
  }
</style>
