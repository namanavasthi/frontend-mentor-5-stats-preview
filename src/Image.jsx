import React from "react";

import Mobile from "./images/image-header-mobile.jpg";
import Desktop from "./images/image-header-desktop.jpg";

export const Image = ({ isDesktop }) => {
  const imageSrc = isDesktop ? Desktop : Mobile;

  return (
    <div className="relative overflow-hidden rounded-t-xl lg:rounded-t-none lg:rounded-r-xl w-full">
      <img src={imageSrc} alt="header" className="w-full h-full" />
      <div className="bg-primary-violet absolute left-0 top-0 w-full h-full opacity-50"></div>
    </div>
  );
};
