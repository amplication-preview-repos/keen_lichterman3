import { Task } from "../task/Task";

export type Project = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  isActive: boolean | null;
  tasks?: Array<Task>;
};
