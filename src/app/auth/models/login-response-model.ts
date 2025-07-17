export interface LoginResponse {
  token: string;
  user: {
    id: number;
    username: string;
    email: string;
    registerDate: string;
    verified: boolean;
  };
}
