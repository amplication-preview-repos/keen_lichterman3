import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TaskUpdateInput = {
  title?: string | null;
  details?: string | null;
  status?: "Option1" | null;
  priority?: "Option1" | null;
  dueDate?: Date | null;
  project?: ProjectWhereUniqueInput | null;
  assignedTo?: string | null;
};
