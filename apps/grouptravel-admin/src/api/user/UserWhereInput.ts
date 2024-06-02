import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { TravelWhereUniqueInput } from "../travel/TravelWhereUniqueInput";

export type UserWhereInput = {
  age?: IntNullableFilter;
  description?: StringNullableFilter;
  firstName?: StringNullableFilter;
  gender?: "Male" | "Female" | "Other";
  hobbies?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  location?: StringNullableFilter;
  rating?: JsonFilter;
  travels?: TravelWhereUniqueInput;
  username?: StringFilter;
};
