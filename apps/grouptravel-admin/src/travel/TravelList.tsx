import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const TravelList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Travels"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
