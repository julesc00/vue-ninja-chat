<template>
  <form @submit.prevent="addMessage">
    <label for="new-message">Nuevo mensaje (enter para agregar)</label>
    <input type="text" id="new-message" v-model="newMessage">
    <p class="red-text" v-if="feedback">{{ feedback }}</p>
  </form>
</template>

<script>
  import db from "@/firebase/init"

  export default {
    name: "NewMessage",
    data () {
      return {
        newMessage: null,
        feedback: null,
      }
    },
    props: ["name"],
    methods: {
      addMessage() {
        if (this.newMessage) {
          db.collection("messages").add({
            content: this.newMessage,
            name: this.name,
            timestamp: Date.now()
          }).catch(err => console.log(err));
        } else {
          this.feedback = "Debe escribir un mensaje para envíar uno."
        }
      }
    }
  }
</script>

<style scoped>

</style>
