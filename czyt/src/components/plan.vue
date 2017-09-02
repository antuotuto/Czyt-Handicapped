<template>
<!--  -->
<div class="plan">
  <div class="heading">
    <span class="company">{{ company }}</span>
    <span class="job">{{ job }}</span>
    <span class="date">{{ date }}</span>
  </div>

  <VmEditor></VmEditor>

</div>
<!--  -->
</template>

<script>
import VmEditor from 'vm-editor'

export default {
  data() {
    return {}
  },
  components: {
    VmEditor
  },
  props: {
    company: {
      type: String,
      default: 'Google'
    },
    job: {
      type: String,
      default: 'Web前端工程师'
    },
    date: {
      type: String,
      default: '2011.9 - 2015.6'
    },
    text: {
      type: String,
      default: '1'
    }
  },
  methods: {
    showHtml: function(data) {
      console.log(data)
    }
  }
}
</script>

<style scoped>

</style>
