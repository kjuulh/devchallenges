import React, { FC } from "react";
import { ActiveLink } from "./ActiveLinks";
import { Link } from "./Link";

export const NavLink: FC<{ active?: boolean }> = ({ active, children }) =>
  active ? <ActiveLink>{children}</ActiveLink> : <Link>{children}</Link>;
