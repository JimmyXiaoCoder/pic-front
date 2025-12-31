<template>
  <div class="infoCard">
    <a-card hoverable style="width: 300px" @click="handleClick">
      <template #cover>
        <img
          alt="Mcdonald's"
          src="https://jimmy-pic-1328446628.cos.ap-guangzhou.myqcloud.com/Mc-1999005428512022530-1767088211296.jpg"
          style="width: 100%; height: 150px; object-fit: cover"
        />
      </template>
      <!-- <template #actions>
        <setting-outlined key="setting" />
        <edit-outlined key="edit" />
        <ellipsis-outlined key="ellipsis" />
      </template> -->
      <a-card-meta :title="loginUserStore.loginUser.userName" description="This is the description">
        <template #avatar>
          <a-avatar :src="loginUserStore.loginUser.userAvatar" :size="64" />
        </template>
      </a-card-meta>
    </a-card>
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
import router from "@/router";

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

const handleClick = () => {
  router.push({ path: "/user/userPersonalCenter" });
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
.infoCard {

}

.edit {
  margin-left: 20%;
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
