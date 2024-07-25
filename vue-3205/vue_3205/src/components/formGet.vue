<template>
  <div id="app">
    <h1>get</h1>
    <div v-if="info">{{ info.email }}</div>
  </div>
</template>
<style scoped></style>
<script>
import axios from 'axios'
export default {
  name: 'GetFormAxios',
  data() {
    return {
      info: null
    }
  },
  methods: {
    mounted() {
      axios
        .get(`http://localhost:3010`, { info: this.info })
        .then((res) => {
          console.log(res.data)
          info = res
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          //Perform action in always
        })
    }
  }
}
</script>
