import { Travel } from "../travel/Travel";

export type Activity = {
  accommodation: string | null;
  afternoonDescription: string | null;
  afternoonPoint: string | null;
  createdAt: Date;
  eveningDescription: string | null;
  eveningPoint: string | null;
  id: string;
  morningDescription: string | null;
  price: number | null;
  startpoint: string | null;
  travel?: Travel | null;
  updatedAt: Date;
};
