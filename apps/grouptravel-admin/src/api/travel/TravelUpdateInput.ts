import { ActivityUpdateManyWithoutTravelsInput } from "./ActivityUpdateManyWithoutTravelsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TravelUpdateInput = {
  activity?: ActivityUpdateManyWithoutTravelsInput;
  createdby?: UserWhereUniqueInput;
  endpoint?: string;
  name?: string;
  startpoint?: string;
  tags?: string | null;
};
