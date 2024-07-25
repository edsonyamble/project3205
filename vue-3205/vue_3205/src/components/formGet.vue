<template>
  <div>
    <h1>get</h1>
  </div>
</template>
<style scoped></style>
<script>
import axios from 'axios'
export default {
  mounted() {
    axios
      .get(`http://localhost:3500/form`)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        //Perform action in always
      })
  }
}
</script>
