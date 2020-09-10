import React from "react";
import { MobileNavLinks } from "./MobileNavLinks";
import { InteriorHomeView } from "../components/InteriorHomeView";
import { NavBar } from "./NavBar";
import { NavSpacer } from "./NavSpacer";
import { NavLogo } from "./NavLogo";
import { MenuCloseButton } from "./MenuCloseButton";
import { LinkModel } from "../data/models";
import { MenuBody } from "./MenuBody";

export const MenuOpenView = (props: {
  onMenuClose: () => void;
  title: string;
  links: LinkModel[];
}) => (
  <InteriorHomeView>
    <NavBar>
      <NavLogo>{props.title}</NavLogo>
      <NavSpacer />
      <MenuCloseButton onClick={props.onMenuClose} />
    </NavBar>
    <MenuBody>
      <MobileNavLinks links={props.links} />
    </MenuBody>
  </InteriorHomeView>
);
