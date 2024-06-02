/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TravelTagWhereInput } from "./TravelTagWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TravelTagListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => TravelTagWhereInput,
  })
  @ValidateNested()
  @Type(() => TravelTagWhereInput)
  @IsOptional()
  @Field(() => TravelTagWhereInput, {
    nullable: true,
  })
  every?: TravelTagWhereInput;

  @ApiProperty({
    required: false,
    type: () => TravelTagWhereInput,
  })
  @ValidateNested()
  @Type(() => TravelTagWhereInput)
  @IsOptional()
  @Field(() => TravelTagWhereInput, {
    nullable: true,
  })
  some?: TravelTagWhereInput;

  @ApiProperty({
    required: false,
    type: () => TravelTagWhereInput,
  })
  @ValidateNested()
  @Type(() => TravelTagWhereInput)
  @IsOptional()
  @Field(() => TravelTagWhereInput, {
    nullable: true,
  })
  none?: TravelTagWhereInput;
}
export { TravelTagListRelationFilter as TravelTagListRelationFilter };
