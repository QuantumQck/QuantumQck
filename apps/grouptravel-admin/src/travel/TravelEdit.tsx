import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { ActivityTitle } from "../activity/ActivityTitle";
import { UserTitle } from "../user/UserTitle";

export const TravelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="activity"
          reference="Activity"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ActivityTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="createdby.id"
          reference="User"
          label="createdby"
        >
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="endpoint" source="endpoint" />
        <TextInput label="Name" source="name" />
        <TextInput label="startpoint" source="startpoint" />
        <TextInput label="Tags" source="tags" />
      </SimpleForm>
    </Edit>
  );
};
