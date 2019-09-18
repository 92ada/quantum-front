<template>
  <div>
    <qt-form :type="type" :data-source-url="requestUrls.basicInfoUrl" :on-value-change="handleBasicInfoChange" />
    <qt-form :type="type" :data-source-url="requestUrls.emergencyContactUrl" :on-value-change="handleEmergencyContactChange" />
    <el-button v-if="type === 'edit' || type === 'create'" v-loading="loading" style="margin-left: 20px;" type="primary" @click="handleSubmit">
      {{ $t(`common.${type}`) }}
    </el-button>
  </div>
</template>

<script>
import QtForm from '../../../components/Form2/QtForm'
// import request from '../../../utils/request'

export default {
  name: 'PeopleDetail',
  components: { QtForm },
  props: {
    peopleId: {
      type: String,
      default: '-1'
    },
    type: {
      type: String,
      default: 'show'
    }
  },
  data() {
    return {
      requestUrls: {
        basicInfoUrl: '/people/basic_info/{people_id}',
        emergencyContactUrl: '/people/emergency_contact/{people_id}'
      },
      dataSource: {
        basicInfo: {},
        emergencyContact: {}
      },
      loading: false
    }
  },
  created() {
    for (const url in this.requestUrls) {
      console.log(url)
      this.requestUrls[url] = this.requestUrls[url].replace('{people_id}', this.peopleId)
    }
    console.log(this.requestUrls)
  },
  methods: {
    // handler
    handleBasicInfoChange(attrs) {
      this.dataSource.basicInfo = attrs
    },
    handleEmergencyContactChange(attrs) {
      this.dataSource.emergencyContact = attrs
    },
    handleSubmit() {
      // attrs = {basicInfo: {}, emergencyContact: {}}
      console.log(this.dataSource)
      switch (this.type) {
        case 'show': return
        case 'edit': this.updateData(this.dataSource); return
        case 'create': this.postData(this.dataSource); return
      }
    },
    // api
    postData(attrs) {
      if (!this.loading) {
        this.loading = true
        // ...
        this.loading = false
      }
      return
    },
    updateData(attrs) {
      if (!this.loading) {
        this.loading = true
        // ...
        this.loading = false
      }
      return
    }
  }
}
</script>
