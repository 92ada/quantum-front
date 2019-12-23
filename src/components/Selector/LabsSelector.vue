<template>
  <div class="labSelector-container">
    <el-select
      v-if="editable"
      v-model="childrenSelected"
      value-key="id"
      multiple
      filterable
      remote
      :placeholder="$t('common.pleaseSearch')"
      :remote-method="remoteMethod"
      :loading="loading"
      @change="handleChange"
    >
      <el-option
        v-for="item in options"
        :key="item.id"
        :label="toNameWithId(item)"
        :value="toNameWithId(item)"
      />
    </el-select>
    <div v-else class="not-editable">
      <span v-for="label in selected" :key="label.id" class="people-label">
        <el-link :href="'#/lab/' + label.id">{{ label.name }}</el-link>
      </span>
    </div>
  </div>
</template>
<script>
import { searchOptionsByWord } from '../../api/options'

export default {
  name: 'LabsSelector',
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
      type: Array,
      default: () => []
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
    this.childrenSelected = this.renderSelected(this.selected)
  },
  methods: {
    renderSelected(selected) {
      const childrenSelected = []
      console.log('selected', selected)
      for (const s of selected) {
        childrenSelected.push(`${s.name}(${s.id})`)
      }
      return childrenSelected
    },
    loadSelected(childrenSelected) {
      const selected = []
      console.log('childrenSelected', childrenSelected)
      for (const s of childrenSelected) {
        const name = s.split('(')[0]
        const id = s.split('(')[1].split(')')[0]
        selected.push({ name: name, id: id })
      }
      return selected
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
    },
    toNameWithId(item) {
      return item.name + ' (' + item.id + ')'
    },
    fetchId(label) {
      if (!label) return ''
      return label.split('(')[1].split(')')[0]
    },
    handleChange(value) {
      this.$emit('change', this.loadSelected(value))
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
