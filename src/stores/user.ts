import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { getUserInfoUsingGet, logoutUsingGet } from "@/api/userController"
import { message } from "ant-design-vue";

export const useLoginUserStore = defineStore("loginUser", () => {
  const loginUser = ref<any>({
    userName: "未登录",
  });

  const fetchLoginUser = async () => {

    const response = await getUserInfoUsingGet()

    loginUser.value = response.data.data;

    console.log("fetchLoginUser", loginUser.value);

    // setTimeout(() => {
    //     loginUser.value = {
    //         userName: "Jimmy",
    //         id: 1,
    //     }
    // },3000)
  }

  const userLogout = async () => {

    await logoutUsingGet().then(() => {
      loginUser.value = {}
      message.success('注销成功');
    })

  }


  return {loginUser , fetchLoginUser, userLogout};
});