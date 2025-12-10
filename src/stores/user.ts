import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useLoginUserStore = defineStore("loginUser", () => {
  const loginUser = ref<any>({
    userName: "未登录",
  });

  const fetchLoginUser = async () => {

    setTimeout(() => {
        loginUser.value = {
            userName: "Jimmy",
            id: 1,
        }
    },3000)
  }


  return {loginUser , fetchLoginUser};
});