<template>
  <div class="userInfoTable">
    <div class="userAvatar">
      <a-space wrap :size="16">
        <a-avatar :src="loginUserStore.loginUser.userAvatar" :size="64">
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
          <a-form-item label="头像" name="avatarFile">
            <a-upload
              v-model:fileList="fileList"
              maxCount="1"
              name="avatarFile"
              list-type="picture-card"
              class="avatar-uploader"
              :show-upload-list="false"
              :before-upload="() => false"
              @change="handlePicChange"
            >
              <img v-if="imageUrl" :src="imageUrl" alt="avatar" style="width: 50%; height: 100%; object-fit: cover" />
              <div v-else>
                <loading-outlined v-if="loading"></loading-outlined>
                <plus-outlined v-else></plus-outlined>
                <div class="ant-upload-text">Upload</div>
              </div>
            </a-upload>
          </a-form-item>
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
import { uploadFileByUser } from "@/api/fileController";
import type { UploadChangeParam } from "ant-design-vue";

const uploadFile = reactive<API.FileUploadReq>({
  file: undefined,
});

const formState = reactive<API.UserUpdateReq>({
  userName: "",
  id: "",
  userAvatar: "",
  gender: "",
  avatarFile: undefined,
});

const imageUrl = ref<any>("");

const loginUserStore = useLoginUserStore();

const open = ref(false);

const handlePicChange = async (info: UploadChangeParam) => {
  
  uploadFile.file = info.file;

  const response = await uploadFileByUser(uploadFile);
  console.log("upload response", response);

  if (response.data.code === 0) {
    formState.userAvatar = response.data.data;
    imageUrl.value = response.data.data;
    message.success("头像上传成功");
  } else {
    message.error("头像上传失败：" + response.data.message);
  }
};

const loading = ref<boolean>(false);

const handleOk = async () => {
  // if (fileList.value.length > 0) {
  //   formState.avatarFile = fileList.value[0].originFileObj;
  // }

  loading.value = true;

  const response = await updateUserUsingPost(formState);

  if (response.data.code === 0) {
    loading.value = false;
    message.success("更新成功");
    loginUserStore.fetchLoginUser().then(() => {
      open.value = false;
    });
  } else {
    loading.value = false;
    message.error("更新失败：" + response.data.message);
  }
};

const fileList = ref<any[]>([]);

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
  margin-top: 3%;
  width: 400px;
  margin-left: 30%;
  margin-right: 30%;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  /* 四周扩散阴影，模拟离地 */
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
}

.edit {
  margin-left: 10%;
  margin-top: 15px;
}

.userAvatar {
  display: flex;
  align-items: flex-start; /* 对齐顶部 */
  margin-left: 15px;
  margin-bottom: 20px;
  width: 100%;
}

.gender-man {
  margin-top: 15px;
  margin-left: 2px;
  font-size: large;
  font-weight: 1000;
  color: rgb(65, 134, 255);
}

.gender-woman {
  font-size: large;
  margin-top: 15px;
  margin-left: 2px;
  font-weight: 1000;
  color: rgb(255, 105, 180);
}
.userName {
  margin-top: 15px;
  margin-left: 10px;
  font-size: 24px;
  font-weight: 600;
}

.infoDetails {
  margin-left: 10%;
}

.avatar-uploader > .ant-upload {
  width: 128px;
  height: 128px;
}
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>
