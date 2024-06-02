import { TravelWhereUniqueInput } from "../travel/TravelWhereUniqueInput";

export type ActivityUpdateInput = {
  accommodation?: string | null;
  afternoonDescription?: string | null;
  afternoonPoint?: string | null;
  eveningDescription?: string | null;
  eveningPoint?: string | null;
  morningDescription?: string | null;
  price?: number | null;
  startpoint?: string | null;
  travel?: TravelWhereUniqueInput | null;
};
