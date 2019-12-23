<template>
  <div class="labSelector-container">
    <el-select
      v-if="editable"
      v-model="childSelected"
      value-key="id"
      filterable
      remote
      :placeholder="$t('common.pleaseSearch')"
      :remote-method="remoteMethod"
      :loading="loading"
      @change="value => $emit('change', loadSelected(value))"
    >
      <el-option
        v-for="item in options"
        :key="item.id"
        :label="renderChildSelected(item)"
        :value="renderChildSelected(item)"
      />
    </el-select>
    <div v-else class="not-editable">
      <el-link :href="'#/people/' + selected.id">{{ selected.name }}</el-link>
    </div>
  </div>
</template>
<script>
import { searchOptionsByWord } from '../../api/options'

export default {
  name: 'PersonSelector',
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
      childSelected: []
    }
  },
  created() {
    this.childSelected = this.renderChildSelected(this.selected)
  },
  methods: {
    renderChildSelected(selected) {
      if (!selected) return null
      return `${selected.name} (${selected.id})`
    },
    loadSelected(childSelected) {
      if (!childSelected) return null
      const name = childSelected.split(' ')[0]
      const id = childSelected.split('(')[1].split(')')[0]
      return { name, id }
    },
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
