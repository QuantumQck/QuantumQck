import { Travel as TTravel } from "../api/travel/Travel";

export const TRAVEL_TITLE_FIELD = "name";

export const TravelTitle = (record: TTravel): string => {
  return record.name?.toString() || String(record.id);
};
