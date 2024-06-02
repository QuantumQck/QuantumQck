import { TravelWhereInput } from "./TravelWhereInput";
import { TravelOrderByInput } from "./TravelOrderByInput";

export type TravelFindManyArgs = {
  where?: TravelWhereInput;
  orderBy?: Array<TravelOrderByInput>;
  skip?: number;
  take?: number;
};
