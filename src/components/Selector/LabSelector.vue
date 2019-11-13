<template>
  <div class="labSelector-container">
    <el-select
      v-if="editable"
      v-model="selected"
      value-key="id"
      filterable
      remote
      :placeholder="$t('common.pleaseSearch')"
      :remote-method="remoteMethod"
      :loading="loading"
      @change="selected => $emit('change', selected)"
    >
      <el-option
        v-for="item in options"
        :key="item.id"
        :label="item.name"
        :value="item"
      />
    </el-select>
    <div v-else class="not-editable">
        <el-link :href="'#/lab/' + selected.id">{{ selected.name }}</el-link>
    </div>
  </div>
</template>
<script>
import { searchOptionsByWord } from '../../api/options'

// TODO: 接口
// TODO: 等后段把Json改成Json
export default {
  name: 'LabSelector',
  model: {
    prop: 'selected',
    event: 'change'
  },
  props: {
    editable: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: ''
    },
    optionUrl: {
      type: String,
      default: ''
    },
    selected: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      options: [],
      loading: false
    }
  },
  methods: {
    remoteMethod(word) {
      if (word !== '') {
        this.loading = true
        searchOptionsByWord(this.optionUrl, word).then(res => {
          this.loading = false
          this.options = res
        })
      } else {
        this.options = []
      }
    },
    toNameWithId(item) {
      return item.name + ' (' + item.id + ')'
    },
    fetchId(label) {
      return label.split('(')[1].split(')')[0]
    }
  }
}
</script>
<style>
  .lab-label {
    margin: 4px;
  }
  .not-editable {
    display: inline-block;
    padding-left: 10px;
  }
</style>
