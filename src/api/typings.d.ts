declare namespace API {
  type BaseResponse = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type BaseResponseListJsonTest_ = {
    code?: number;
    data?: JsonTest[];
    message?: string;
  };

  type BaseResponseLong_ = {
    code?: number;
    data?: number;
    message?: string;
  };

  type BaseResponseObject_ = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type BaseResponseString_ = {
    code?: number;
    data?: string;
    message?: string;
  };

  type BaseResponseUser_ = {
    code?: number;
    data?: User;
    message?: string;
  };

  type BaseResponseUserInfoRespVO_ = {
    code?: number;
    data?: UserInfoRespVO;
    message?: string;
  };

  type deleteUserUsingDELETEParams = {
    /** id */
    id: number;
  };

  type getUserPageUsingGETParams = {
    gender?: string;
    pageNo?: number;
    pageSize?: number;
    userName?: string;
  };

  type JsonTest = {
    createTime?: string;
    editTime?: string;
    id?: number;
    isDelete?: number;
    jsonData?: User;
    updateTime?: string;
  };

  type User = {
    createTime?: string;
    editTime?: string;
    gender?: string;
    id?: number;
    isDelete?: number;
    updateTime?: string;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userPassword?: string;
    userProfile?: string;
    userRole?: string;
    vipCode?: string;
    vipExpireTime?: string;
    vipNumber?: number;
  };

  type UserAddReq = {
    userAccount?: string;
    userName?: string;
  };

  type UserInfoRespVO = {
    createTime?: string;
    editTime?: string;
    gender?: string;
    id?: number;
    updateTime?: string;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
    vipCode?: string;
    vipExpireTime?: string;
    vipNumber?: number;
  };

  type UserLoginReq = {
    userAccount?: string;
    userPassword?: string;
  };

  type UserRegisterReq = {
    checkPassword?: string;
    userAccount?: string;
    userPassword?: string;
  };

  type UserUpdateReq = {
    id?: string;
    userName?: string;
    userAvatar?: string;
    gender?: string;
  };
}
