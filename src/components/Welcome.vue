<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Bienvenido</h2>
        <form @submit.prevent="enterChat">
          <label for="name">Ingrese su nombre:</label>
          <input type="text" id="name" v-model="name">
          <p v-if="feedback" class="red-text">{{ feedback }}</p>
          <button class="btn teal">Entrar al chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      name: null,
      feedback: false
    }
  },
  methods: {
    enterChat() {
      if(this.name) {
        this.$router.push({ name: "Chat", params: { name: this.name } })
      } else {
        this.feedback = "Debe ingresar un nombre para unirse al chat."
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .welcome{
    max-width: 400px;
    margin-top: 100px;
  }
  .welcome h2{
    font-size: 3em;
  }
  .welcome button{
    margin: 30px auto;
  }
</style>
