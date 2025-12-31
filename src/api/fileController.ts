import request from "@/request";

export async function uploadFileByUser(
  body: API.FileUploadReq,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseString_>("/api/file/upload/byUser", {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data: body,
    ...(options || {}),
  });
}