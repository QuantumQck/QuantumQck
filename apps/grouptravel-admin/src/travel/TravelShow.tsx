import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { TRAVEL_TITLE_FIELD } from "./TravelTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const TravelShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="createdby" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="endpoint" source="endpoint" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="startpoint" source="startpoint" />
        <TextField label="Tags" source="tags" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Activity"
          target="travelId"
          label="Activities"
        >
          <Datagrid rowClick="show">
            <TextField label="Accommodation" source="accommodation" />
            <TextField
              label="AfternoonDescription"
              source="afternoonDescription"
            />
            <TextField label="afternoonPoint" source="afternoonPoint" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="EveningDescription" source="eveningDescription" />
            <TextField label="EveningPoint" source="eveningPoint" />
            <TextField label="ID" source="id" />
            <TextField label="MorningDescription" source="morningDescription" />
            <TextField label="Price" source="price" />
            <TextField label="startpoint" source="startpoint" />
            <ReferenceField
              label="Travel"
              source="travel.id"
              reference="Travel"
            >
              <TextField source={TRAVEL_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
