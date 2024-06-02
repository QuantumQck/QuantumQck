import { ActivityCreateNestedManyWithoutTravelsInput } from "./ActivityCreateNestedManyWithoutTravelsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TravelCreateInput = {
  activity?: ActivityCreateNestedManyWithoutTravelsInput;
  createdby: UserWhereUniqueInput;
  endpoint: string;
  name: string;
  startpoint: string;
  tags?: string | null;
};
