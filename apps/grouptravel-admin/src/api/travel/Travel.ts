import { Activity } from "../activity/Activity";
import { User } from "../user/User";

export type Travel = {
  activity?: Array<Activity>;
  createdAt: Date;
  createdby?: User;
  endpoint: string;
  id: string;
  name: string;
  startpoint: string;
  tags: string | null;
  updatedAt: Date;
};
