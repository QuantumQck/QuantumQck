import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { TravelWhereUniqueInput } from "../travel/TravelWhereUniqueInput";

export type ActivityWhereInput = {
  accommodation?: StringNullableFilter;
  afternoonDescription?: StringNullableFilter;
  afternoonPoint?: StringNullableFilter;
  eveningDescription?: StringNullableFilter;
  eveningPoint?: StringNullableFilter;
  id?: StringFilter;
  morningDescription?: StringNullableFilter;
  price?: FloatNullableFilter;
  startpoint?: StringNullableFilter;
  travel?: TravelWhereUniqueInput;
};
