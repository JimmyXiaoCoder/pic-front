// @ts-ignore
/* eslint-disable */
import request from "@/request";

/** test GET /api/health */
export async function testUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseString_>("/api/health", {
    method: "GET",
    ...(options || {}),
  });
}

/** getTest GET /api/health/jsonTest */
export async function getTestUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseListJsonTest_>("/api/health/jsonTest", {
    method: "GET",
    ...(options || {}),
  });
}

/** insertTest POST /api/health/jsonTest/insert */
export async function insertTestUsingPost(options?: { [key: string]: any }) {
  return request<API.BaseResponse>("/api/health/jsonTest/insert", {
    method: "POST",
    ...(options || {}),
  });
}

/** userTest POST /api/health/jsonTest/userTest */
export async function userTestUsingPost(options?: { [key: string]: any }) {
  return request<API.BaseResponse>("/api/health/jsonTest/userTest", {
    method: "POST",
    ...(options || {}),
  });
}
