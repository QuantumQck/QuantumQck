/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TravelTagWhereInput } from "./TravelTagWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TravelTagOrderByInput } from "./TravelTagOrderByInput";

@ArgsType()
class TravelTagFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TravelTagWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TravelTagWhereInput, { nullable: true })
  @Type(() => TravelTagWhereInput)
  where?: TravelTagWhereInput;

  @ApiProperty({
    required: false,
    type: [TravelTagOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TravelTagOrderByInput], { nullable: true })
  @Type(() => TravelTagOrderByInput)
  orderBy?: Array<TravelTagOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { TravelTagFindManyArgs as TravelTagFindManyArgs };
