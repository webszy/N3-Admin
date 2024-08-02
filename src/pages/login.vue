<script setup lang="ts">
import {LockClosedOutline, LogoFacebook, LogoGithub, LogoWechat, PersonOutline,LogoGoogle} from '@vicons/ionicons5'
import {naiveMessage} from "~/composables/useNaiveAPI";

definePageMeta({
  layout: false,
  meta:{
    title: 'Login',
  }
});
const env = useRuntimeConfig()
const config = useSiteConfig()
// onNuxtReady(() => {
//   setInterval(() => {
//     isBounce.value = !isBounce.value;
//   }, 1000)
// })
//https://plus.naiveadmin.com/login-v4
const icon = computed(() => `url(${unref(config).icon})`)
const isBounce = ref(false)
const loginData = reactive({
  username: '',
  password: '',
  autoLogin: false
})
const rules = {
  username: [{require: true, trigger: 'blur', message: 'Username is required'}],
  password: [{require: true, trigger: 'blur', message: 'Password is required'}]
}
const formRef = ref(null)
const loading = ref(false)
const handleLogin =  () => {
  unref(formRef).validate((errors) => {
    if (!errors) {
      loading.value = true
      useLogin(loginData)
          .then(({status,data}) => {
            if(status === 'success') {

              navigateTo('/')
            }
          })
          .finally(() => {
            loading.value = false
          })
    }})

}

</script>

<template>
  <main class="flex justify-between w-full h-full">
    <div class="images w-2/5 h-full flex flex-col justify-center items-center">
      <h1 class="bg-contain bg-no-repeat bg-left-center" :class="config.icon ? 'hasIcon' : ''">{{ config.title }}</h1>
      <p>{{ config.description }}</p>
      <img src="@/assets/svg/logo-left.svg">
    </div>
    <div class="login-form flex-1 flex justify-center items-center">
      <div class="form bg-white flex flex-col justify-between items-center">
        <img class="animated bounce infinite anima" :style="{animationPlayState: isBounce ? 'running' : 'paused' }"
             src="@/assets/svg/boy.svg">
        <n-form
            class="w-full"
            ref="formRef"
            :model="loginData"
            :rules="rules"
            label-placement="left"
            :show-require-mark="false"
        >
          <n-form-item
              path="username"
              label="Username"
          >
            <n-input
                v-model:value="loginData.username"
                size="large"
                class="w-full"
                style="--n-height: 40px;"
                :input-props="{autocomplete: 'off'}"
            >
              <template #prefix>
                <n-icon size="18" color="#808695">
                  <PersonOutline/>
                </n-icon>
              </template>
            </n-input>
          </n-form-item>
          <n-form-item
              path="password"
              label="password"
              size="large"
              class="w-full"
          >
            <n-input
                v-model:value="loginData.password"
                type="password"
                style="--n-height: 40px;"
                show-password-on="mousedown"
                :input-props="{autocomplete: 'new-password'}"
            >
              <template #prefix>
                <n-icon size="18" color="#808695">
                  <LockClosedOutline/>
                </n-icon>
              </template>
            </n-input>
          </n-form-item>
          <n-form-item class="default-color">
            <n-checkbox v-model:checked="loginData.autoLogin">自动登录</n-checkbox>
            <n-button quaternary type="primary"
                      style="--n-color-hover:#fff;--n-color-focus:#fff;--n-color-pressed:#fff;">忘记密码
            </n-button>
          </n-form-item>
        </n-form>
        <n-button
            style="--n-height:38px;--n-font-size:18px;"
            class="w-full"
            type="info"
            :loading="loading"
            @click="handleLogin"
        >
          Login
        </n-button>
        <n-divider>
          <span>More</span>
        </n-divider>
        <div class="flex w-2/3 justify-around items-center">
          <n-button strong secondary circle type="success" size="large">
            <template #icon>
              <n-icon>
                <LogoWechat/>
              </n-icon>
            </template>
          </n-button>
          <n-button strong secondary circle  size="large">
            <template #icon>
              <n-icon>
                <LogoGoogle/>
              </n-icon>
            </template>
          </n-button>
          <n-button strong secondary circle size="large">
            <template #icon>
              <n-icon>
                <LogoGithub/>
              </n-icon>
            </template>
          </n-button>
          <n-button strong secondary circle type="info" size="large">
            <template #icon>
              <n-icon>
                <LogoFacebook/>
              </n-icon>
            </template>
          </n-button>
        </div>
      </div>
      <LoginForm />
    </div>
  </main>
</template>

<style scoped>
.images {
  background: #e9edf7;
  box-sizing: border-box;
  display: none;
}

h1 {
  color: #1677ff;
  font-size: 32px;
}

p {
  color: #323d6f;
  font-size: 16px;
  margin-bottom: 42px;
}

.hasIcon {
  background-image: v-bind(icon);
  text-indent: 60px;
}

.images img {
  width: 75%;
}

.login-form {

  background: url('@/assets/login_bg.webp') no-repeat left center;
  background-size: cover;
}

.form {
  max-width: 600px;
  box-sizing: border-box;
  --offset-shadow: 0 0 #0000;
  --shadow: 0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1) !important;
  box-shadow: var(--offset-shadow, 0 0 #0000), var(--offset-shadow, 0 0 #0000), var(--shadow);
  border-radius: 20px;
  padding: 40px 80px;
}

.form img {
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
}
</style>
