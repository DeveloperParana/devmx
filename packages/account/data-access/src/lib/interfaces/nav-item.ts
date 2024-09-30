import { Role } from "@devmx/shared-api-interfaces";

export interface NavItem {
  path: (string | number)[];
  text: string;
  roles: Role[]
  icon?: string;
}
