import { ActivityListRelationFilter } from "../activity/ActivityListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TravelWhereInput = {
  activity?: ActivityListRelationFilter;
  createdby?: UserWhereUniqueInput;
  endpoint?: StringFilter;
  id?: StringFilter;
  name?: StringFilter;
  startpoint?: StringFilter;
  tags?: StringNullableFilter;
};
