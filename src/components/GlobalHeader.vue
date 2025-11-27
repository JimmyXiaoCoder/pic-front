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
      <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" @click="handleMenuClick"/>
    </a-col>
    <a-col flex="100px">
      <a-button type="primary">登录</a-button>
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
import { MenuProps } from "ant-design-vue";
import { useRouter } from "vue-router";
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
  //   {
  //     key: 'sub1',
  //     icon: () => h(SettingOutlined),
  //     label: 'Navigation Three - Submenu',
  //     title: 'Navigation Three - Submenu',
  //     children: [
  //       {
  //         type: 'group',
  //         label: 'Item 1',
  //         children: [
  //           {
  //             label: 'Option 1',
  //             key: 'setting:1',
  //           },
  //           {
  //             label: 'Option 2',
  //             key: 'setting:2',
  //           },
  //         ],
  //       },
  //       {
  //         type: 'group',
  //         label: 'Item 2',
  //         children: [
  //           {
  //             label: 'Option 3',
  //             key: 'setting:3',
  //           },
  //           {
  //             label: 'Option 4',
  //             key: 'setting:4',
  //           },
  //         ],
  //       },
  //     ],
  //   },
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

const handleMenuClick = ({key}: { key: string }) => {
    router.push({
        path: key,
    });
};

router.afterEach((to) => {
    current.value = [to.path];
    console.log(current)
});

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
