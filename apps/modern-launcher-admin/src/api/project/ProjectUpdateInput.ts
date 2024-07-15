import { TaskUpdateManyWithoutProjectsInput } from "./TaskUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  title?: string | null;
  description?: string | null;
  isActive?: boolean | null;
  tasks?: TaskUpdateManyWithoutProjectsInput;
};
