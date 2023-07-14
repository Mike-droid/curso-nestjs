import { IsString, IsNotEmpty, IsUrl } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateBrandDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsUrl()
  @IsNotEmpty()
  readonly logo: string;
}

export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
