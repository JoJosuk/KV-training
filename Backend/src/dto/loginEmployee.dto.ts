import { IsEmail, IsNotEmpty } from "class-validator";
import { Column } from "typeorm";

export class LoginEmployeeDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  password: string;
}
