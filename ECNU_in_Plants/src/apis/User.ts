/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** File */
export interface File {
  absolute?: boolean;
  absoluteFile?: File;
  absolutePath?: string;
  canonicalFile?: File;
  canonicalPath?: string;
  directory?: boolean;
  executable?: boolean;
  file?: boolean;
  /** @format int64 */
  freeSpace?: number;
  hidden?: boolean;
  /** @format int64 */
  lastModified?: number;
  name?: string;
  parent?: string;
  parentFile?: File;
  path?: string;
  readable?: boolean;
  /** @format int64 */
  totalSpace?: number;
  /** @format int64 */
  usableSpace?: number;
  writable?: boolean;
}

/** InputStream */
export type InputStream = object;

/** Resource */
export interface Resource {
  description?: string;
  file?: File;
  filename?: string;
  inputStream?: InputStream;
  open?: boolean;
  readable?: boolean;
  uri?: URI;
  url?: URL;
}

/** URI */
export interface URI {
  absolute?: boolean;
  authority?: string;
  fragment?: string;
  host?: string;
  opaque?: boolean;
  path?: string;
  /** @format int32 */
  port?: number;
  query?: string;
  rawAuthority?: string;
  rawFragment?: string;
  rawPath?: string;
  rawQuery?: string;
  rawSchemeSpecificPart?: string;
  rawUserInfo?: string;
  scheme?: string;
  schemeSpecificPart?: string;
  userInfo?: string;
}

/** URL */
export interface URL {
  authority?: string;
  content?: object;
  /** @format int32 */
  defaultPort?: number;
  deserializedFields?: URLStreamHandler;
  file?: string;
  host?: string;
  path?: string;
  /** @format int32 */
  port?: number;
  protocol?: string;
  query?: string;
  ref?: string;
  /** @format int32 */
  serializedHashCode?: number;
  userInfo?: string;
}

/** URLStreamHandler */
export type URLStreamHandler = object;

/** User 用户 */
export interface User {
  /** @format int32 */
  continuousPostDay?: number;
  /** 邮箱 */
  email?: string;
  /**
   * 用户id
   * @format int64
   */
  id?: number;
  /** 用户名 */
  name?: string;
  /** 密码 */
  password?: string;
  /** 头像地址 */
  photopath?: string;
  /** 会话id */
  sessionId?: string;
  /** 签名 */
  signature?: string;
  /** @format int32 */
  totalPostDay?: number;
  /**
   * 用户类型 0为普通用户 1为管理员
   * @format int32
   */
  type?: number;
}

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "//124.71.207.55:8081" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title UTF-8 project Documentation
 * @version 1.0
 * @baseUrl //124.71.207.55:8081
 *
 * UTF小组项目
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  insertUser = {
    /**
     * No description
     *
     * @tags 传输用户信息
     * @name InsertUserUsingPost
     * @summary 插入用户
     * @request POST:/InsertUser/{name}/{password}/{email}
     */
    insertUserUsingPost: (email: string, name: string, password: string, params: RequestParams = {}) =>
      this.request<string, void>({
        path: `/InsertUser/${name}/${password}/${email}`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),
  };
  changeType = {
    /**
     * No description
     *
     * @tags 传输用户信息
     * @name ChangeTypeUsingPost
     * @summary 改变用户权限类型
     * @request POST:/changeType/{name}
     */
    changeTypeUsingPost: (name: string, params: RequestParams = {}) =>
      this.request<string, void>({
        path: `/changeType/${name}`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),
  };
  changeUserInformation = {
    /**
     * No description
     *
     * @tags 传输用户信息
     * @name ChangeUserInformationUsingPost
     * @summary 修改用户信息
     * @request POST:/changeUserInformation/{oldName}/{name}/{password}/{email}/{signature}
     */
    changeUserInformationUsingPost: (
      email: string,
      name: string,
      oldName: string,
      password: string,
      signature: string,
      params: RequestParams = {},
    ) =>
      this.request<string, void>({
        path: `/changeUserInformation/${oldName}/${name}/${password}/${email}/${signature}`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),
  };
  changeUserPassword = {
    /**
     * No description
     *
     * @tags 传输用户信息
     * @name ChangeUserPasswordUsingPost
     * @summary 用户忘记密码/修改密码
     * @request POST:/changeUserPassword/{name}/{email}/{newPassword}
     */
    changeUserPasswordUsingPost: (email: string, name: string, newPassword: string, params: RequestParams = {}) =>
      this.request<string, void>({
        path: `/changeUserPassword/${name}/${email}/${newPassword}`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),
  };
  deleteUser = {
    /**
     * No description
     *
     * @tags 传输用户信息
     * @name DeleteUserUsingPost
     * @summary 删除用户信息
     * @request POST:/deleteUser/{name}/{password}
     */
    deleteUserUsingPost: (name: string, password: string, params: RequestParams = {}) =>
      this.request<string, void>({
        path: `/deleteUser/${name}/${password}`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),
  };
  getAllUser = {
    /**
     * No description
     *
     * @tags 传输用户信息
     * @name GetUserByNameAndPasswordUsingGet
     * @summary 传输所有用户信息
     * @request GET:/getAllUser
     */
    getUserByNameAndPasswordUsingGet: (params: RequestParams = {}) =>
      this.request<User[], void>({
        path: `/getAllUser`,
        method: "GET",
        ...params,
      }),
  };
  getTypeByName = {
    /**
     * No description
     *
     * @tags 传输用户信息
     * @name NewGetAccessByNameUsingGet
     * @summary 返回是否是管理员
     * @request GET:/getTypeByName/{name}
     */
    newGetAccessByNameUsingGet: (name: string, params: RequestParams = {}) =>
      this.request<number, void>({
        path: `/getTypeByName/${name}`,
        method: "GET",
        ...params,
      }),
  };
  getUserByName = {
    /**
     * No description
     *
     * @tags 传输用户信息
     * @name GetUserByNameUsingPost
     * @summary 传输用户信息
     * @request POST:/getUserByName/{name}
     */
    getUserByNameUsingPost: (name: string, params: RequestParams = {}) =>
      this.request<User, void>({
        path: `/getUserByName/${name}`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),
  };
  testAdmin = {
    /**
     * No description
     *
     * @tags 传输用户信息
     * @name TestAdminUsingPost
     * @summary testAdmin
     * @request POST:/testAdmin
     */
    testAdminUsingPost: (params: RequestParams = {}) =>
      this.request<string, void>({
        path: `/testAdmin`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),
  };
  uploadUserImgByName = {
    /**
     * No description
     *
     * @tags 传输用户信息
     * @name UploadUserImgPathUsingPost
     * @summary 修改用户头像
     * @request POST:/uploadUserImgByName
     */
    uploadUserImgPathUsingPost: (
      data: {
        /** 照片 */
        photo: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/uploadUserImgByName`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),
  };
  userLogin = {
    /**
     * No description
     *
     * @tags 传输用户信息
     * @name UserLoginUsingPost
     * @summary 用户登录，并且返回登录用户的session_id
     * @request POST:/userLogin/{name}/{password}
     */
    userLoginUsingPost: (name: string, password: string, params: RequestParams = {}) =>
      this.request<string, void>({
        path: `/userLogin/${name}/${password}`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),
  };
}
