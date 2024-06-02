import { Activity as TActivity } from "../api/activity/Activity";

export const ACTIVITY_TITLE_FIELD = "accommodation";

export const ActivityTitle = (record: TActivity): string => {
  return record.accommodation?.toString() || String(record.id);
};
