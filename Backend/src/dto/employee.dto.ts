import { IsEmail, IsString, IsNotEmpty, ValidateNested } from "class-validator";
import Address from "../entity/address.entity";
import { CreateAddressDto } from "./address.dto";
import { Type } from "class-transformer";
import "reflect-metadata"
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
}
