<template>
  <div class="index-container">
    <el-select
      v-if="editable"
      v-model="selected"
      value-key="id"
      multiple
      allow-create
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
        :label="toNameWithId(item)"
        :value="toNameWithId(item)"
      />
    </el-select>
    <div v-else style="display: inline-block;">
      <span v-for="label in selected" :key="label" class="people-label">
        <el-link v-if="label.endsWith(')')" :href="'#/people/' + fetchId(label)">{{ label }}</el-link>
        <el-link v-else disabled>{{ label }}</el-link>
      </span>
    </div>
  </div>
</template>
<script>
import { searchOptionsByWord } from '../../api/options'

// TODO: 等后段把Json改成Json
export default {
  name: 'index',
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
      type: Array,
      default: () => []
    }
  },
  model: {
    prop: 'selected',
    event: 'change'
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
  .people-label {
    margin: 4px;
  }
</style>
