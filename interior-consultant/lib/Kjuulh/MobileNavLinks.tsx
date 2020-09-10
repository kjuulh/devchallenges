import { Links } from "./Links";
import React, { FC } from "react";
import { LinkModel } from "../data/models";
import { MenuNavLinks } from "./MenuNavLinks";

export interface MobileNavLinksProps {
  links: LinkModel[];
}

export const MobileNavLinks: FC<MobileNavLinksProps> = ({ links }) => (
  <MenuNavLinks>
    <Links links={links} />
  </MenuNavLinks>
);
