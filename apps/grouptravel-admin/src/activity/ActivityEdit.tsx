import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TravelTitle } from "../travel/TravelTitle";

export const ActivityEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Accommodation" source="accommodation" />
        <TextInput
          label="AfternoonDescription"
          multiline
          source="afternoonDescription"
        />
        <TextInput label="afternoonPoint" source="afternoonPoint" />
        <TextInput
          label="EveningDescription"
          multiline
          source="eveningDescription"
        />
        <TextInput label="EveningPoint" source="eveningPoint" />
        <TextInput
          label="MorningDescription"
          multiline
          source="morningDescription"
        />
        <NumberInput label="Price" source="price" />
        <TextInput label="startpoint" source="startpoint" />
        <ReferenceInput source="travel.id" reference="Travel" label="Travel">
          <SelectInput optionText={TravelTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
