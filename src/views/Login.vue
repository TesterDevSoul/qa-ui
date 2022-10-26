<template>
  <!-- v-app 组件中。 该组件是确保正确的跨浏览器兼容性所必需的。
       id  设置组件上的 DOM id -->
  <v-app id="login">
    <!-- 根据应用组件来调整你的内容 -->
    <v-main class="grey lighten-3">
    <!-- v-container 将网站内容居中和水平填充。 -->
    <v-container class="login">
      <v-row>
        <!-- 包裹内容  cols 属性定义列宽  sm-->
        <v-col cols="12" sm="8">
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <h1>登录</h1>
              <v-text-field
                v-model="name"
                :counter="10"
                :rules="nameRules"
                label="账号"
                required
              ></v-text-field>

             <v-text-field
              v-model="password"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="passwordRules"
              :type="show ? 'text' : 'password'"
              label="密码"
              hint="至少3个字符"
              counter
              @click:append="show = !show"
            ></v-text-field>

              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="login"
              >
                登录
              </v-btn>

              <v-btn
                color="primary"
                class="mr-4"
                @click="register"
              >
                注册
              </v-btn>
            </v-form>
        </v-col>
      </v-row>
      
    </v-container>



       
    </v-main>
  </v-app>

</template>
<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || '账号不能为空',
        v => (v && v.length <= 20) || '您输入的账号格式不正确',
      ],
      show: false,
      password: '',
      passwordRules: [
        v => !!v || '密码不能为空',
        v => (v && v.length >= 3)|| '您输入的密码格式有误',
      ],
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },

    },
  }
</script>
<style scoped>
.login {
  width: 500px;
  margin: auto;
  text-align: center;
}
</style>