import { TaskCreateNestedManyWithoutProjectsInput } from "./TaskCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  title?: string | null;
  description?: string | null;
  isActive?: boolean | null;
  tasks?: TaskCreateNestedManyWithoutProjectsInput;
};
