import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  details?: SortOrder;
  status?: SortOrder;
  priority?: SortOrder;
  dueDate?: SortOrder;
  projectId?: SortOrder;
  assignedTo?: SortOrder;
};
