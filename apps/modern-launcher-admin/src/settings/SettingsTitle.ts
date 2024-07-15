import { Settings as TSettings } from "../api/settings/Settings";

export const SETTINGS_TITLE_FIELD = "name";

export const SettingsTitle = (record: TSettings): string => {
  return record.name?.toString() || String(record.id);
};
