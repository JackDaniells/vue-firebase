<template>

  <div class="login-page">
    <input class="login-item" placeholder="login" type="text" v-model="email">
    <input class="login-item" placeholder="senha" type="password" v-model="password">

    <button class="login-button" @click="login">Entrar</button>
    <button class="login-button" @click="signup">Criar Conta</button>
  </div>
</template>

<script>

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: ''
    }
  },

  mounted() {
    console.log('login rendered')
  },

  methods: {

    signup() {
      window.firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((user) => {
        console.log(user)
        alert('Conta criada, bem vindo')
        this.$router.go({name: 'home'})
      }).catch((err) => {
        alert('Erro: ' + err.message)
      })
    }, 

    login() {
      window.firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((user) => {
        console.log(user)
        alert('Login efetuado com sucesso')
        this.$router.go({name: 'home'})
      }).catch((err) => {
        alert('Erro: ' + err.message)
      })
    }

  }

}
</script>

<style>

.login-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
}

.login-item {
  margin: 5px;
  height: 30px;
  padding-left: 15px;
}

.login-button {
  margin: 5px;
  margin-top: 15px;
  height: 30px;
  background: #555;
  color: #FFF;
}

</style>
