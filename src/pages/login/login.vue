<template>
  <div class="login-page">
    <input class="login-item" placeholder="login" type="text" v-model="email">
    <input class="login-item" placeholder="senha" type="password" v-model="password">

    <button class="login-button" @click="login">Entrar</button>
    <button class="login-button" @click="signup">Criar Conta</button>
  </div>
</template>

<script>

import firebaseSetup from 'firebase';

import config from '../../firebase.json' 


const firebase =  firebaseSetup.initializeApp(config);

export default {

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
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((user) => {
        console.log(user)
        alert('Conta criada, bem vindo')
      }).catch((err) => {
        alert('Erro: ' + err.message)
      })
    }, 

    login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((user) => {
        console.log(user)
        alert('Login efetuado com sucesso')
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
