// @ts-ignore
/* eslint-disable */
import request from "@/request";

/** test GET /api/health */
export async function testUsingGet(options?: { [key: string]: any }) {
  return request<string>("/api/health", {
    method: "GET",
    ...(options || {}),
  });
}
