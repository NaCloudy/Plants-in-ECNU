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

/** Windows */
export interface Windows {
  canteen?: string;
  /** @format int32 */
  favor?: number;
  /** @format int32 */
  id?: number;
  name?: string;
  photoPath?: string;
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
  addWindowsByCanteen = {
    /**
     * No description
     *
     * @tags 传输窗口信息
     * @name AddWindowsByCanteenUsingGet
     * @summary 给某餐厅增加窗口
     * @request GET:/addWindowsByCanteen/{canteen}/{name}
     */
    addWindowsByCanteenUsingGet: (canteen: string, name: string, params: RequestParams = {}) =>
      this.request<string, void>({
        path: `/addWindowsByCanteen/${canteen}/${name}`,
        method: "GET",
        ...params,
      }),
  };
  getWindowsByCanteen = {
    /**
     * No description
     *
     * @tags 传输窗口信息
     * @name GetWindowsByCanteenUsingGet
     * @summary 根据餐厅名称返回窗口
     * @request GET:/getWindowsByCanteen/{canteen}
     */
    getWindowsByCanteenUsingGet: (canteen: string, params: RequestParams = {}) =>
      this.request<Windows[], void>({
        path: `/getWindowsByCanteen/${canteen}`,
        method: "GET",
        ...params,
      }),
  };
  uploadWindowsImgByName = {
    /**
     * No description
     *
     * @tags 传输窗口信息
     * @name UploadWindowsImgPathUsingPost
     * @summary 上传或修改窗口头像
     * @request POST:/uploadWindowsImgByName
     */
    uploadWindowsImgPathUsingPost: (
      data: {
        /**
         * 上传图片
         * @format binary
         */
        photo: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<string, void>({
        path: `/uploadWindowsImgByName`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),
  };
}
