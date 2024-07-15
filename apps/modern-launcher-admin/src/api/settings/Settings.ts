import { JsonValue } from "type-fest";

export type Settings = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  value: JsonValue;
};
