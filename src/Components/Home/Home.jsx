import React, { useEffect, useState } from "react";
import "./Home.css";
import profile from "../Images/profile.png";
import { FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { TiArrowUp } from "react-icons/ti";
import { RiLinkedinFill } from "react-icons/ri";
import { Box, SimpleGrid, useColorMode } from "@chakra-ui/react";
import resume from "../Resume/Vikash_Kumar_Lal_Resume.pdf";
import Typewriter from "typewriter-effect";
import { useMediaQuery } from "react-responsive";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};

const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};

export const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Desktop>
        <div
          style={{
            backgroundColor: colorMode == "light" ? "#edf2f8" : "#1a202c",
          }}
          className="home_Container"
          id="home"
        >
          <SimpleGrid columns={[1, 1, 1, 2]}>
            <Box height="auto">
              <div className="home_Container_box">
                <div className="home_box_content">
                  <h6>Hey, I am </h6>
                  <h4>Vikash Lal</h4>

                  <div className="full">
                    <p>I'm a</p>
                    <span>
                      <Typewriter
                        options={{
                          strings: [
                            "Vikash Kumar Lal",
                            "Mern Stack Developer.",
                            "Full Stack Developer.",
                            
                          ],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </span>
                  </div>
                  <a download href={resume}>
                    <button>Resume</button>
                  </a>
                </div>
              </div>
            </Box>

            {/* -------------------------------------------------------------------------------- */}

            <Box height="auto">
              <div className="home_Container_box">
                <div className="home_box_img">
                  {/* <img src={profile} alt="Profile_image" /> */}
                  <img src="https://avatars.githubusercontent.com/u/105917542?v=4" alt="Profile_image" />
                </div>
              </div>
            </Box>
          </SimpleGrid>

          <div className="home_box_ul">
            <ul className="header_ul">
              <li>
                <a
                  href="https://github.com/Therobo77"
                  rel="noopener norefferer"
                  target="_blank"
                >
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/Therobo77"
                  rel="noopener norefferer"
                  target="_blank"
                >
                  <RiLinkedinFill />
                </a>
              </li>

              <li>
                <a
                  href="mailto:sp.srp1999@gmail.com"
                  rel="noopener norefferer"
                  target="_blank"
                >
                  <FiMail />
                </a>
              </li>
            </ul>
          </div>

          <div className="home_up_arrow">
            <a href="#home">
              <TiArrowUp />
            </a>
          </div>
        </div>
      </Desktop>

      <Tablet>
        <div
          style={{
            backgroundColor: colorMode == "light" ? "#edf2f8" : "#1a202c",
          }}
          className="home_Container_tablet"
          id="home"
        >
          <SimpleGrid columns={[1, 1, 1, 2]}>
            <Box height="auto">
              <div className="home_Container_box">
                <div className="home_box_img_tablet">
                  {/* <img src={profile} alt="Profile_image" /> */}
                  <img src="https://avatars.githubusercontent.com/u/105917542?v=4" alt="Profile_image" />
                </div>
              </div>
            </Box>
            <Box height="auto">
              <div className="home_Container_box_tablet">
                <div className="home_box_content_tablet">
                  <h6>Hey, I am </h6>
                  <h4>Vikash Lal</h4>
                  <div className="full_tablet">
                    <p>I'm a</p>
                    <span id="changing-str">
                      <Typewriter
                        options={{
                          strings: [
                            "Vikash Kumar Lal",
                            "Mern Stack Developer.",
                            "Full Stack Developer.",
                          ],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </span>
                  </div>
                  <a download href={resume}>
                    <button>Resume</button>
                  </a>
                </div>
              </div>
            </Box>

            {/* -------------------------------------------------------------------------------- */}
          </SimpleGrid>

          <div className="home_box_ul">
            <ul className="header_ul">
              <li>
                <a
                  href="https://github.com/Therobo77"
                  rel="noopener norefferer"
                  target="_blank"
                >
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/vikashlal7722/"
                  rel="noopener norefferer"
                  target="_blank"
                >
                  <RiLinkedinFill />
                </a>
              </li>

              <li>
                <a
                  href="mailto:sp.anshusinha8873@gmail.com"
                  rel="noopener norefferer"
                  target="_blank"
                >
                  <FiMail />
                </a>
              </li>
            </ul>
          </div>

          <div className="home_up_arrow">
            <a href="#home">
              <TiArrowUp />
            </a>
          </div>
        </div>
      </Tablet>

      <Mobile>
        <div
          style={{
            backgroundColor: colorMode == "light" ? "#edf2f8" : "#1a202c",
            // backgroundColor: colorMode == "dark" ? "#edf2f8" : "#1a202c",
          }}
          className="home_Container_mobile"
          id="home"
        >
          <SimpleGrid columns={[1, 1, 1, 2]}>
            <Box height="auto">
              <div className="home_Container_box_mobile">
                <div className="home_box_img_mobile">
                  {/* <img src={profile} alt="Profile_image" /> */}
                  <img src="https://avatars.githubusercontent.com/u/105917542?v=4" alt="Profile_image" />
                </div>
              </div>
            </Box>
            <Box height="auto">
              <div className="home_Container_box_mobile">
                <div className="home_box_content_mobile">
                  <h6>Hey Folks, I am </h6>
                  <h4>Vikash Lal</h4>
                  <div className="full_phone">
                    <p>I'm a</p>
                    <span>
                      <Typewriter
                        options={{
                          strings: [
                            "Vikash Kumar Lal",
                            "Mern Stack Developer.",
                            "Full Stack Developer.",
                           
                          ],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </span>
                  </div>
                  <a download href={resume}>
                    <button>Resume</button>
                  </a>
                </div>
              </div>
            </Box>

            {/* -------------------------------------------------------------------------------- */}
          </SimpleGrid>
        </div>
      </Mobile>
    </>
  );
};
