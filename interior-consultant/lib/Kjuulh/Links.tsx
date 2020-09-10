import React, { FC } from "react";
import { NavLink } from "./NavLink";

export interface Props {
  links: LinkModel[];
}

export const Links: FC<Props> = ({ links }) => (
  <>
    {links.map((link) => (
      <NavLink key={link.text} active={link.active}>
        {link.text}
      </NavLink>
    ))}
  </>
);
