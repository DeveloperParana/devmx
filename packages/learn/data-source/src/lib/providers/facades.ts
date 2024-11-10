import { provideSkillsFacade } from "../application";

export function provideFacades() {
  return [provideSkillsFacade()];
}
