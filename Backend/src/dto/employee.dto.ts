import { IsEmail, IsString, IsNotEmpty, ValidateNested, IsEnum } from "class-validator";
import Address from "../entity/address.entity";
import { CreateAddressDto, UpdateAddressDto } from "./address.dto";
import { Type } from "class-transformer";
import { Role } from "../utils/role.enum";
import "reflect-metadata";
export class CreateEmployeeDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => CreateAddressDto)
  address: CreateAddressDto;

  @IsNotEmpty()
  @IsString()
  password:string

  @IsNotEmpty()
  @IsEnum(Role)
  role:Role
}

export class UpdateEmployeeDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @ValidateNested({ each: true })
  @Type(() => UpdateAddressDto)
  address: UpdateAddressDto;
}
