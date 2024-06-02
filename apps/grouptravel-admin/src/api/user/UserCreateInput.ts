import { InputJsonValue } from "../../types";
import { TravelWhereUniqueInput } from "../travel/TravelWhereUniqueInput";

export type UserCreateInput = {
  age?: number | null;
  description?: string | null;
  firstName?: string | null;
  gender?: "Male" | "Female" | "Other" | null;
  hobbies?: string | null;
  lastName?: string | null;
  location?: string | null;
  password: string;
  rating?: InputJsonValue;
  roles: InputJsonValue;
  travels?: TravelWhereUniqueInput | null;
  username: string;
};
