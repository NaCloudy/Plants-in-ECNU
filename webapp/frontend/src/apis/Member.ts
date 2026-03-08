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

/** Member */
export interface Member {
  contact_way?: string;
  hobby?: string;
  /** @format int32 */
  id?: number;
  name?: string;
  picUrl?: string;
  signature?: string;
  web?: string;
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
  changeMemberContactWayById = {
    /**
     * No description
     *
     * @tags 传输成员信息
     * @name ChangeMemberContactWayByIdUsingGet
     * @summary 修改联系方式
     * @request GET:/changeMemberContact_WayById/{id}/{contact_way}
     */
    changeMemberContactWayByIdUsingGet: (contactWay: string, id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/changeMemberContact_WayById/${id}/${contactWay}`,
        method: "GET",
        ...params,
      }),
  };
  changeMemberHobbyById = {
    /**
     * No description
     *
     * @tags 传输成员信息
     * @name ChangeMemberHobbyByIdUsingGet
     * @summary 修改爱好
     * @request GET:/changeMemberHobbyById/{id}/{hobby}
     */
    changeMemberHobbyByIdUsingGet: (hobby: string, id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/changeMemberHobbyById/${id}/${hobby}`,
        method: "GET",
        ...params,
      }),
  };
  changeMemberNameById = {
    /**
     * No description
     *
     * @tags 传输成员信息
     * @name ChangeMemberNameByIdUsingGet
     * @summary 修改名称
     * @request GET:/changeMemberNameById/{id}/{name}
     */
    changeMemberNameByIdUsingGet: (id: number, name: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/changeMemberNameById/${id}/${name}`,
        method: "GET",
        ...params,
      }),
  };
  changeMemberPicUrlById = {
    /**
     * No description
     *
     * @tags 传输成员信息
     * @name ChangeMemberPicUrlByIdUsingGet
     * @summary 修改图片网络地址
     * @request GET:/changeMemberPicUrlById/{id}/{picUrl}
     */
    changeMemberPicUrlByIdUsingGet: (id: number, picUrl: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/changeMemberPicUrlById/${id}/${picUrl}`,
        method: "GET",
        ...params,
      }),
  };
  changeMemberSignatureById = {
    /**
     * No description
     *
     * @tags 传输成员信息
     * @name ChangeMemberSignatureByIdUsingGet
     * @summary 修改个性签名
     * @request GET:/changeMemberSignatureById/{id}/{signature}
     */
    changeMemberSignatureByIdUsingGet: (id: number, signature: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/changeMemberSignatureById/${id}/${signature}`,
        method: "GET",
        ...params,
      }),
  };
  changeMemberWebById = {
    /**
     * No description
     *
     * @tags 传输成员信息
     * @name ChangeMemberWebByIdUsingGet
     * @summary 修改个人网站
     * @request GET:/changeMemberWebById/{id}/{web}
     */
    changeMemberWebByIdUsingGet: (id: number, web: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/changeMemberWebById/${id}/${web}`,
        method: "GET",
        ...params,
      }),
  };
  getMemberById = {
    /**
     * No description
     *
     * @tags 传输成员信息
     * @name GetMemberByIdUsingGet
     * @summary 传输单成员信息
     * @request GET:/getMemberById/{id}
     */
    getMemberByIdUsingGet: (id: number, params: RequestParams = {}) =>
      this.request<Member, void>({
        path: `/getMemberById/${id}`,
        method: "GET",
        ...params,
      }),
  };
  getMemberScoreById = {
    /**
     * No description
     *
     * @tags 传输成员信息
     * @name GetMemberScoreByIdUsingGet
     * @summary 查询成员得分
     * @request GET:/getMemberScoreById/{id}
     */
    getMemberScoreByIdUsingGet: (id: number, params: RequestParams = {}) =>
      this.request<number, void>({
        path: `/getMemberScoreById/${id}`,
        method: "GET",
        ...params,
      }),
  };
}
