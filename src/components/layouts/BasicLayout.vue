<template>
    <div>
        <a-layout>
            <a-layout-header :style="headerStyle">Header</a-layout-header>
        <a-layout-content :style="contentStyle">Content</a-layout-content>
        <a-layout-footer class="footer dynamic-gradient">Footer</a-layout-footer>
        </a-layout>
    </div>

</template>


<script setup lang="ts">
import type { CSSProperties } from 'vue';
const headerStyle: CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};

const contentStyle: CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
};

const siderStyle: CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#3ba0e9',
};

const footerStyle: CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};


</script>


<style scoped>
#basicLayout .footer{
    bottom: 0;
}


.dynamic-gradient {
  width: 100%;
  background: linear-gradient(to right, #ff6b6b, #4ecdc4, #45b7d1);
  background-size: 400% 400%;
  animation: gradientShift 8s ease infinite;
  
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
</style>
