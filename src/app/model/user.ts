export interface User {
  give_name: string;
  family_name: string;
  username: string;
  password: string;
}

export interface LoginDto {
  name: string;
  password: string;
}
