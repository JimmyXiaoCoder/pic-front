<template>
  <h1>{{ title }}</h1>
  <a-form
    :model="formState"
    name="basic"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-form-item
      label="account"
      name="userAccount"
      :rules="[{ required: true, message: 'Please input your account!' }]"
    >
      <a-input v-model:value="formState.userAccount" />
    </a-form-item>

    <a-form-item
      label="password"
      name="userPassword"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password v-model:value="formState.userPassword" />
    </a-form-item>

    <a-form-item
      label="checkPassword"
      name="checkPassword"
      :rules="[
        { required: true, message: 'Please input your password again!' },
      ]"
    >
      <a-input-password v-model:value="formState.checkPassword" />
    </a-form-item>

    <!-- <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
      <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
    </a-form-item> -->
    <a-alert message="Error" type="error" show-icon />

    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit" @click="registerUser">Submit</a-button>
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { registerUsingPost } from "@/api/userController"

const formState = reactive<API.UserRegisterReq>({
  userAccount: "",
  userPassword: "",
  checkPassword: "",
});
const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const registerUser = async () => {
  try {
    const response = await registerUsingPost(formState);
    console.log("Registration successful:", response);
  } catch (error) {
    console.error("Registration failed:", error);
  }
};

const title = "Register";
</script>

<style scoped></style>
