import { TravelTag as TTravelTag } from "../api/travelTag/TravelTag";

export const TRAVELTAG_TITLE_FIELD = "name";

export const TravelTagTitle = (record: TTravelTag): string => {
  return record.name?.toString() || String(record.id);
};
