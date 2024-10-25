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
    .filter((section) => section.links.length)
    .map(({ label, links, icon }) => new SectionHeader(label, links, icon));
};
