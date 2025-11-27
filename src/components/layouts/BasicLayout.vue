<template>
  <div id="basicLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header"><GlobalHeader/></a-layout-header>
      <a-layout-content class="content">
        <RouterView />
      </a-layout-content>
      <a-layout-footer class="footer">
        <a href="https://www.bilibili.com/" target="_blank">
          Jimmy Pic Frontend ©2025 Created by Jimmy
        </a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import GlobalHeader from '@/components/GlobalHeader.vue';
</script>

<style scoped>
#basicLayout .footer {
  background: linear-gradient(
    to right,
    #232323,
    #484848,
    #000000,
    #454545,
    #1c1c1c
  );
  padding: 16px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  color: white !important;
}

#basicLayout .header {
    background: white;
    padding-inline: 15px;
    margin-bottom: 0;
    position: relative;
    border-bottom: none !important;
    box-shadow: none !important;
}



#basicLayout .footer a {
  color: white !important; /* 使用 !important 确保覆盖浏览器默认样式 */
  text-decoration: none;
  font-weight: bold; /* 去掉下划线 */
}

#basicLayout .content {
  background: #c4c4c4;
  margin-bottom: 28px;
  padding: 20px;
}
</style>