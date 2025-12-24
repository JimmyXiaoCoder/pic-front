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
      label="Username"
      name="userAccount"
      :rules="[{ required: true, message: 'Please input your account!' }]"
    >
      <a-input placeholder="account" v-model:value="formState.userAccount" />
    </a-form-item>

    <a-form-item
      label="Password"
      name="userPassword"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password
        placeholder="password"
        v-model:value="formState.userPassword"
      />
    </a-form-item>

    <!-- <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
      <a-checkbox v-model:checked="formState.userAccount">Remember me</a-checkbox>
    </a-form-item> -->

    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit" @click="handleLoginUser"
        >Submit</a-button
      >
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { loginUsingPost } from "@/api/userController";
import { message } from "ant-design-vue";
import { useLoginUserStore } from "@/stores/user";
import router from "@/router";

const title = "loginPage";

const formState = reactive<API.UserLoginReq>({
  userAccount: "",
  userPassword: "",
});
const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const loginUserStore = useLoginUserStore();

const handleLoginUser = async () => {
  try {
    const response = await loginUsingPost(formState);

    console.log(response.data.code);
    if (response.data.code !== 0) {
      message.error("登录失败：" + response.data.message);
    } else {
      loginUserStore.fetchLoginUser().then(() => {
        message.success("登录成功");
        router.push({
          path: "/",
        });
      });
    }
    console.log(response.data);
  } catch (error) {
    console.log("登录失败", error);
  }
};
</script>

<style scoped></style>
