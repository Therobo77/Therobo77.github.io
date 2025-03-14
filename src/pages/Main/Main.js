import React from "react";
import { Helmet } from "react-helmet";

import {
  Navbar,
  Footer,
  Landing,
  About,
  Skills,
  Testimonials,
  Blog,
  Education,
  Experience,
  Contacts,
  Projects,
  Services,
  // Achievement,
} from "../../Components";
import { headerData } from "../../data/headerData";
import Github from "./../../Components/Calendar/Github";
// import { Stars } from './../../Components/Calendar/Stars';
import ThreeDModal from './ThreeDModal';

function Main() {
  return (
    <div>
      {/* <p>vikash</p> */}
      <Helmet>
        <title>{headerData.name} - Porfolio</title>
      </Helmet>

      <Navbar />

      <Landing />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      {/* <Achievement /> */}
      <Services />
      <Testimonials />
      <Blog />
      <Github />
      {/* <Stars /> */}
      <Contacts />
      <Footer />

      <ThreeDModal />
    </div>
  );
}

export default Main;
