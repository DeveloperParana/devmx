import { AccountRole } from '@devmx/shared-api-interfaces';
import { SectionHeaderOptions } from '../interfaces';
import { NavLink, SectionHeader } from '../models';

export const navLinksValidator = (
  sections: SectionHeaderOptions[],
  roles: AccountRole
) => {
  return sections
    .map((section) => {
      const links = section.links
        .map((options) => new NavLink(options))
        .map((link) => {
          if (!link.roles.length) {
            return link;
          }
          link.validate(roles);
          return link;
        });

      return { ...section, links };
    })
    .filter((section) => {
      return section.links.some((link) => !link.disabled);
    })
    .map(
      ({ label, links, expanded, icon }) =>
        new SectionHeader(label, links, expanded, icon)
    );
};
