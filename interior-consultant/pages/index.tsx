import React, { useState } from "react";
import { HomeView } from "../lib/components/HomeView";
import { MenuOpenView } from "../lib/Kjuulh/MenuOpenView";
import {
  heroBlogTitle,
  heroCTA,
  heroEmployeeName,
  heroEmployeeTitle,
  heroText,
  heroTitle,
  links,
  title,
} from "../lib/data";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false),
    onMenuOpen = () => setMenuOpen(true),
    onMenuClosed = () => setMenuOpen(false);

  return menuOpen ? (
    <MenuOpenView links={links} onMenuClose={onMenuClosed} title={title} />
  ) : (
    <HomeView
      title={title}
      links={links}
      author="kjuulh"
      onMenuOpen={onMenuOpen}
      heroTitle={heroTitle}
      heroText={heroText}
      heroCTA={heroCTA}
      heroBlogTitle={heroBlogTitle}
      heroEmployeeTitle={heroEmployeeTitle}
      heroEmployeeName={heroEmployeeName}
    />
  );
};

export default Home;
