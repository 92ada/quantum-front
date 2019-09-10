<template>
  <div class="peopleDetail-container">
    <basic-info :type="type" :data="postForm" />
    <researcher-info v-if="postForm && postForm.type === 'Researcher'" :type="type" :data="postForm" />
  </div>
</template>

<script>
import BasicInfo from './BasicInfo'
import ResearcherInfo from './ResearcherInfo'

export default {
  name: 'PeopleDetail',
  components: { BasicInfo, ResearcherInfo },
  props: {
    type: {
      type: String,
      default: 'edit'
    },
    postForm: Object
  }
}
</script>

