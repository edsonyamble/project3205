<template>
  <div>
    <h1>get</h1>
     {{ info }}
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
        .get(`http://localhost:3500/auth`)
        .then((res) => {
          console.log(res.data)
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
