<template>
  <form @submit.prevent="addMessage">
    <label for="new-message">Nuevo mensaje (enter para agregar)</label>
    <input type="text" id="new-message" v-model="newMessage">
  </form>
</template>

<script>
  export default {
    name: "NewMessage",
    data () {
      return {
        newMessage: null
      }
    },
    props: ["name"],
    methods: {
      addMessage() {
        console.log(this.newMessage, this.name, Date.now())
      }
    }
  }
</script>

<style scoped>

</style>
