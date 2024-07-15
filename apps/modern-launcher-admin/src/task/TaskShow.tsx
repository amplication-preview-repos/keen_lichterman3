import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { PROJECT_TITLE_FIELD } from "../project/ProjectTitle";

export const TaskShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="title" source="title" />
        <TextField label="details" source="details" />
        <TextField label="status" source="status" />
        <TextField label="priority" source="priority" />
        <TextField label="dueDate" source="dueDate" />
        <ReferenceField label="Project" source="project.id" reference="Project">
          <TextField source={PROJECT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="assignedTo" source="assignedTo" />
      </SimpleShowLayout>
    </Show>
  );
};
