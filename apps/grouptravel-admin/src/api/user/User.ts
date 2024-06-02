import { JsonValue } from "type-fest";
import { Travel } from "../travel/Travel";

export type User = {
  age: number | null;
  createdAt: Date;
  description: string | null;
  firstName: string | null;
  gender?: "Male" | "Female" | "Other" | null;
  hobbies: string | null;
  id: string;
  lastName: string | null;
  location: string | null;
  rating: JsonValue;
  roles: JsonValue;
  travels?: Travel | null;
  updatedAt: Date;
  username: string;
};
