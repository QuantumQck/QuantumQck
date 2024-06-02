import { TravelTagWhereInput } from "./TravelTagWhereInput";
import { TravelTagOrderByInput } from "./TravelTagOrderByInput";

export type TravelTagFindManyArgs = {
  where?: TravelTagWhereInput;
  orderBy?: Array<TravelTagOrderByInput>;
  skip?: number;
  take?: number;
};
