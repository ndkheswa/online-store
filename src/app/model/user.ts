export interface User {
  username: string;
  given_name: string;
  family_name: string;
  name: string;
  password: string;
  email: string;
  user_role: string 
}

export interface LoginDto {
  name: string;
  password: string;

}
