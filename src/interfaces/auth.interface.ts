export interface ILoginParams {
  email: string;
  password: string;
}

export interface IRegisterParams extends ILoginParams {
  name: string;
}

export interface ILoginResponse {
  access_token: string;
}
