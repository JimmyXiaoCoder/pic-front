<template>
  <div class="userInfoTable">
    <div class="userAvatar">
      <a-space wrap :size="16">
        <a-avatar :size="64">
          <img src="https://jimmy-pic-1328446628.cos.ap-guangzhou.myqcloud.com/out_logo.png"></img>
          <!-- <template #icon><UserOutlined /></template> -->
        </a-avatar>
      </a-space>
      <div class="userName" :span="16">
        {{ loginUserStore.loginUser.userName }}
      </div>
      <div
        v-if="loginUserStore.loginUser.gender === '1'"
        class="gender-man"
        :span="16"
      >
        ♂
      </div>
      <div
        v-else-if="loginUserStore.loginUser.gender === '2'"
        class="gender-woman"
        :span="16"
      >
        ♀
      </div>
      <div v-else class="gender-woman" :span="16" style="visibility: hidden">
        ♀
      </div>
      <a-button class="edit" :span="16" @click="handleOpen">Edit</a-button>
      <a-modal v-model:open="open" title="Basic Modal" @ok="handleOk">
        <a-form :model="formState">
          <a-form-item
            label="userName"
            name="userName"
            :rules="[
              { required: true, message: 'Please input your userName!' },
            ]"
          >
            <a-input
              placeholder="userName"
              v-model:value="formState.userName"
            />
          </a-form-item>

          <a-form-item
            label="gender"
            name="gender"
            :rules="[{ required: true, message: 'Please input your gender!' }]"
          >
            <a-select
              ref="select"
              v-model:value="formState.gender"
              style="width: 120px"
              @change="handleChange"
            >
              <a-select-option value="1">男</a-select-option>
              <a-select-option value="2">女</a-select-option>
            </a-select>
          </a-form-item>
        </a-form>
      </a-modal>
    </div>
    <div class="infoDetails">
      <a-descriptions>
        <a-descriptions-item label="UserAccount" :span="24">{{
          loginUserStore.loginUser.userAccount
        }}</a-descriptions-item>
        <a-descriptions-item label="Telephone">{{
          loginUserStore.loginUser.phone
        }}</a-descriptions-item>
      </a-descriptions>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { UserOutlined } from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import { useLoginUserStore } from "@/stores/user";
import { reactive, ref } from "vue";
import { updateUserUsingPost } from "@/api/userController";

const formState = reactive<API.UserUpdateReq>({
  userName: "",
  id: "",
  userAvatar: "",
  gender: "",
});

const loginUserStore = useLoginUserStore();

const open = ref(false);

const handleOk = async () => {
  const response = await updateUserUsingPost(formState);

  if (response.data.code === 0) {
    message.success("更新成功");
    loginUserStore.fetchLoginUser().then(() => {
      open.value = false;
    });
  } else {
    message.error("更新失败：" + response.data.message);
  }
};
const handleOpen = () => {
  formState.userName = loginUserStore.loginUser.userName;
  formState.id = loginUserStore.loginUser.id;
  formState.userAvatar = loginUserStore.loginUser.userAvatar;
  formState.gender = loginUserStore.loginUser.gender;
  open.value = true;
};

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
  formState.gender = value;
  console.log(formState.gender);
};

console.log("loginUserStore", loginUserStore.loginUser);
</script>

<style scoped>
.userInfoTable {
  /* display: flex; */
  margin-top: 1%;
  margin-left: 20%;
  margin-right: 20%;
}

.edit {
  margin-left: 20%;
}

.userAvatar {
  display: flex;
  align-items: flex-start; /* 对齐顶部 */
  margin-bottom: 40px;
  width: 100%;
}

.gender-man {
  margin-top: 5px;
  margin-left: 2px;
  font-size: large;
  font-weight: 1000;
  color: rgb(65, 134, 255);
}

.gender-woman {
  font-size: large;
  margin-top: 5px;
  margin-left: 2px;
  font-weight: 1000;
  color: rgb(255, 105, 180);
}
.userName {
  margin-top: 5px;
  margin-left: 10px;
  font-size: 24px;
  font-weight: 600;
}

.infoDetails {
  /* margin-left: 2%; */
}
</style>
