import { Project } from "../project/Project";

export type Task = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  details: string | null;
  status?: "Option1" | null;
  priority?: "Option1" | null;
  dueDate: Date | null;
  project?: Project | null;
  assignedTo: string | null;
};
