// @ts-ignore
/* eslint-disable */
import request from "@/request";

/** addUser POST /api/user/addUser */
export async function addUserUsingPost(
  body: API.UserAddReq,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseObject_>("/api/user/addUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** authTest GET /api/user/authTest */
export async function authTestUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseObject_>("/api/user/authTest", {
    method: "GET",
    ...(options || {}),
  });
}

/** deleteUser DELETE /api/user/deleteUser */
export async function deleteUserUsingDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUserUsingDELETEParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseObject_>("/api/user/deleteUser", {
    method: "DELETE",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getUserInfo GET /api/user/getUserInfo */
export async function getUserInfoUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseUserInfoRespVO_>("/api/user/getUserInfo", {
    method: "GET",
    ...(options || {}),
  });
}

/** login POST /api/user/login */
export async function loginUsingPost(
  body: API.UserLoginReq,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseUser_>("/api/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** logout GET /api/user/logout */
export async function logoutUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseObject_>("/api/user/logout", {
    method: "GET",
    ...(options || {}),
  });
}

/** getUserPage GET /api/user/page */
export async function getUserPageUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserPageUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseObject_>("/api/user/page", {
    method: "GET",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** register POST /api/user/register */
export async function registerUsingPost(
  body: API.UserRegisterReq,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseLong_>("/api/user/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** updateUser POST /api/user/updateUser */
export async function updateUserUsingPost(
  body: API.UserUpdateReq,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseObject_>("/api/user/updateUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}
