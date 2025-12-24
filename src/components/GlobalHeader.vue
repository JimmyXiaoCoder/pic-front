<template>
  <a-row id="globalHeader" :wrap="false">
    <a-col flex="150px">
      <RouterLink to="/">
        <div class="title-bar">
          <img class="logo" src="../assets/chiikawa.png" alt="logo" />
          <div class="title">jimmy-pic</div>
        </div>
      </RouterLink>
    </a-col>
    <a-col flex="auto">
      <a-menu
        v-model:selectedKeys="current"
        mode="horizontal"
        :items="items"
        @click="handleMenuClick"
      />
    </a-col>
    <a-col flex>
      <div v-if="loginUserStore.loginUser.id">
        <a-dropdown v-model:open="visible">
          <a class="ant-dropdown-link" @click.prevent>
            <div>{{ loginUserStore.loginUser.userName }}</div>
            <DownOutlined />
          </a>
          <template #overlay>
            <a-menu @click="handleLoginMenuClick">
              <a-menu-item key="1"
                >个人中心</a-menu-item
              >
              <a-menu-item key="2"
                >注销</a-menu-item
              >
              <!-- <a-menu-item key="3">Clicking me will close the menu</a-menu-item> -->
            </a-menu>
          </template>
        </a-dropdown>
        
      </div>
      <div v-else>
        <a-button style="margin-right: 10px" @click="handleRegister"
          >注册</a-button
        >
        <a-button type="primary" @click="handleLogin">登录</a-button>
      </div>
    </a-col>
  </a-row>
</template>
<script lang="ts" setup>
import { h, ref } from "vue";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue";
import { useRouter } from "vue-router";
import { useLoginUserStore } from "../stores/user";
import type { MenuProps } from 'ant-design-vue';
const loginUserStore = useLoginUserStore();

const visible = ref(false);

const handleLoginMenuClick: MenuProps['onClick'] = e => {
  if (e.key === '1') {
    handlePersonalCenter()
  }

  if (e.key === '2') {
    visible.value = false;
    loginUserStore.userLogout().then(() => {
      router.push({ path: '/' });
    });
  }
};

const current = ref<string[]>(["/"]);
const items = ref<MenuProps["items"]>([
  {
    key: "/",
    icon: () => h(MailOutlined),
    label: "主页",
    title: "主页",
  },
  {
    key: "/about",
    icon: () => h(AppstoreOutlined),
    label: "关于",
    title: "关于",
  },
  {
    key: "others",
    label: h(
      "a",
      { href: "https://www.bilibili.com", target: "_blank" },
      "B站大学"
    ),
    title: "B站大学",
  },
]);

const router = useRouter();

loginUserStore.fetchLoginUser();

const handleMenuClick = ({ key }: { key: string }) => {
  router.push({
    path: key,
  });
};

router.afterEach((to) => {
  current.value = [to.path];
  console.log(current);
});

const handleRegister = () => {
  router.push({
    path: "/user/register",
  });
};

const handlePersonalCenter = () => {
  router.push({
    path: "/user/userPersonalCenter",
  });
};

const handleLogin = () => {
  router.push({
    path: "/user/login",
  });
};
</script>

<style scoped>
#globalHeader .title-bar {
  display: flex;
  align-items: center;
}

.title {
  color: black;
  font-size: 18px;
  margin-left: 16px;
}

.logo {
  height: 48px;
}
</style>
