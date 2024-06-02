import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { TRAVEL_TITLE_FIELD } from "../travel/TravelTitle";

export const ActivityList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Activities"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Accommodation" source="accommodation" />
        <TextField label="AfternoonDescription" source="afternoonDescription" />
        <TextField label="afternoonPoint" source="afternoonPoint" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="EveningDescription" source="eveningDescription" />
        <TextField label="EveningPoint" source="eveningPoint" />
        <TextField label="ID" source="id" />
        <TextField label="MorningDescription" source="morningDescription" />
        <TextField label="Price" source="price" />
        <TextField label="startpoint" source="startpoint" />
        <ReferenceField label="Travel" source="travel.id" reference="Travel">
          <TextField source={TRAVEL_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
