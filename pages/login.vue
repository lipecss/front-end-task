<template>
  <div class="login-page">
    <TheLoginTemplate>
      <template #content>
        <div class="login-page__form">
          <div class="d-flex justify-content-center align-items-center vh-100">
            <b-card style="width: 350px">
              <b-card-header>Entrar</b-card-header>
              <b-card-body>
                <b-form @submit.prevent="login">
                  <b-form-group label="Email" label-for="email-input">
                    <b-form-input id="email-input" v-model="username" type="email" required />
                  </b-form-group>
                  <b-form-group label="Senha" label-for="password-input">
                    <b-form-input id="password-input" v-model="password" type="password" required />
                  </b-form-group>
                  <b-button type="submit" variant="primary" block>
                    Entrar
                  </b-button>
                </b-form>
              </b-card-body>
            </b-card>
          </div>
        </div>
      </template>
    </TheLoginTemplate>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      username: 'task@searchandstay.com',
      password: 'ph37i45K'
    }
  },
  methods: {
    ...mapActions(['setToken']),
    async login () {
      // Enviar solicitação de login para a API
      try {
        const response = await this.$axios.post('/login_json', {
          login: {
            email: this.username,
            password: this.password
          }
        })

        if (response.status === 200) {
          // this.$store.dispatch('setToken', response.data.data.result)
          this.setToken(response.data.data.result)
        }
      } catch (error) {

      }
    }
  }
}
</script>
