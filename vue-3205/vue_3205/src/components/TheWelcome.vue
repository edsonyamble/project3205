<template>
  <div id="app">
    <form v-on:submit.prevent="submitForm">
      <div>
        <label for="email">Email:</label><br />
        <input id="email" type="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Number:</label><br />
        <input id="password" type="password" v-model="password" required />
      </div>
      <button class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>
<style scoped></style>
<script>
import axios from 'axios'
export default {
  name: 'PostFormAxios',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    submitForm() {
      // const data = { email: this.email, password: this.password }
      axios
        .post(`http://localhost:3500/auth`, {
          email: this.email,
          password: this.password,
          Headers: { Authorization: 'Bearer' + localStorage.getItem('token') }
        })
        .then((res) => {
          console.log(res)
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
