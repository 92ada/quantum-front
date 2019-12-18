<template>
  <div class="labSelector-container">
    <el-select
      v-if="editable"
      v-model="childrenSelected"
      value-key="id"
      filterable
      remote
      :placeholder="$t('common.pleaseSearch')"
      :remote-method="remoteMethod"
      :loading="loading"
      @change="value => $emit('change', value)"
    >
      <el-option
        v-for="item in options"
        :key="item.id"
        :label="toNameWithId(item)"
        :value="{ name: item.name, id: item.id }"
      />
    </el-select>
    <div v-else class="not-editable">
      <el-link v-if="selected" :href="'#/lab/' + selected.id">{{ selected.name }}</el-link>
    </div>
  </div>
</template>
<script>
import { searchOptionsByWord } from '../../api/options'

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
      loading: false,
      childrenSelected: []
    }
  },
  created() {
    this.childrenSelected = this.selected
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
