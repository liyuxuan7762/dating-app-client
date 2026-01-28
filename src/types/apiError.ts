/*
 * @Author       : Li Yuxaun
 * @Version      : V1.0
 * @Date         : 2026-01-27 19:35:35
 */
export type ApiError = {
  message: string;

  statusCode: number;

  details?: string;
};
