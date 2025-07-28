export interface LoginResponse {
  token: string;
  message: string,
  user: {
    id: number;
    username: string;
    email: string;
    registerDate: string;
    verified: boolean;
  };
}
