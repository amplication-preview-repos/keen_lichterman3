import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TaskWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  details?: StringNullableFilter;
  status?: "Option1";
  priority?: "Option1";
  dueDate?: DateTimeNullableFilter;
  project?: ProjectWhereUniqueInput;
  assignedTo?: StringNullableFilter;
};
