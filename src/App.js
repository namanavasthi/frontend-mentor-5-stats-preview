import React, { useState, useEffect } from "react";

import { Wrapper } from "./Wrapper";
import { Image } from "./Image";

const List = ({ stat, preview }) => {
  return (
    <li className="flex flex-col justify-center items-center pb-5">
      <h2 className="text-white font-bold text-24 line-29 tracking-0">{stat}</h2>
      <h3 className="text-white text-opacity-75 uppercase font-deca text-12 leading-25 tracking-1">{preview}</h3>
    </li>
  );
};

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="App flex justify-center bg-primary-blue-dark font-inter text-15 font-normal">
      <Wrapper className="h-full min-h-screen">
        <div className="flex flex-col justify-center items-center rounded-xl overflow-hidden m-6 lg:mt-32 text-center bg-primary-blue-desaturated lg:flex-row-reverse lg:items-stretch max-w-1110 mx-auto">
          <Image isDesktop={windowWidth >= 1024} />
          <section className="lg:text-left">
            <h1 className="text-28 lg:text-36 leading-32 lg:leading-44 tracking-0 p-8 pt-9 pb-5 lg:p-16 lg:pt-20 lg:pb-12 font-bold text-white">
              Get <span className="text-primary-violet">insights</span> that help your business grow.
            </h1>
            <p className="leading-25 text-opacity-75 text-white px-8 pb-8 lg:px-16 lg:pr-24">
              Discover the benefits of data analytics and make better decisions regarding revenue, customer experience,
              and overall efficiency.
            </p>
            <ul className="flex flex-col lg:flex-row lg:justify-between lg:py-5 lg:px-16 lg:pr-32 ">
              <List stat="10k+" preview="companies" />
              <List stat="314" preview="templates" />
              <List stat="12M+" preview="queries" />
            </ul>
          </section>
        </div>
      </Wrapper>
    </div>
  );
};

export default App;
