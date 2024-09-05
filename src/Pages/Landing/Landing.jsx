import React, { useState, useRef } from "react";
import "./Landing.css";
import { FiMenu } from "react-icons/fi";
import {
  motion,
  useAnimationControls,
  useScroll,
  useTransform,
} from "framer-motion";
import { IoClose } from "react-icons/io5";
import Menu from "../Menu/Menu";
import Comms from "../Comms/Comms";
import logoLeft from "../../assets/logo_left.png";
import logoRight from "../../assets/logo_right.png";
import brochure from "../../assets/brochure.pdf";
import useMediaQuery from "./useMediaQuery";

export default function Landing() {
  const openMenu = useAnimationControls();
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const matches = useMediaQuery("(max-width:500px)");
  const scrollRef = useRef();
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], ["22vw", "100vw"]);
  const blueWidth = useTransform(scrollYProgress, [0, 1], ["40vw", "0vw"]);
  const leftOffesetMobile = useTransform(
    scrollYProgress,
    [0.25, 1],
    ["70vw", "0vw"]
  );

  const mobileWidth = useTransform(
    scrollYProgress,
    [0.25, 1],
    ["30vw", "100vw"]
  );
  const mobileHeight = useTransform(
    scrollYProgress,
    [0.1, 0.25],
    ["50vh", "100vh"]
  );
  const descriptionOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0.1, 0.5], [1, 0]);
  const commsOpacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);
  const leftLogoOpacity = useTransform(scrollYProgress, [0.05, 0.15], [1, 0]);

  return (
    <>
      <div className="landing-main" ref={scrollRef}>
        <div id="homeID"></div>
        <div className="landing-container">
          <motion.div
            className="logo-left-overlay"
            initial={{ height: "100%" }}
            animate={{ height: "0%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          ></motion.div>
          <motion.div className="logo-left">
            <motion.img src={logoLeft} style={{ opacity: leftLogoOpacity }} />
          </motion.div>

          <motion.div
            className="logo-right-overlay"
            style={{
              opacity: leftLogoOpacity,
            }}
          >
            <motion.img src={logoRight} />
          </motion.div>
          <motion.div
            className="logo-right"
            style={{
              width: matches ? mobileWidth : scale,
              left: matches ? leftOffesetMobile : blueWidth,
              height: matches ? mobileHeight : "100vh",
            }}
            initial={{ height: "0%" }}
            animate={{ height: matches ? "50%" : "100%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          ></motion.div>

          <motion.div
            className="about-section"
            style={{
              opacity: descriptionOpacity,
            }}
          >
            <motion.div
              className="text-landing"
              initial={{ y: "30%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div className="head">MUJMUN 11.0</motion.div>
              <motion.div className="subhead">28-29 September</motion.div>
              <motion.div className="description">
                MUJMUN is the largest, most glamorous MUN, in Rajasthan, hosted
                by Manipal University Jaipur’s prestigious Directorate of
                student welfare in collaboration with the university’s most
                eminent student club, LITMUS, the official MUNing, debating,
                reading and writing society of the college.
              </motion.div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: matches ? "center" : "flex-end",
                }}
              >
                <a
                  href={brochure}
                  target="_blank"
                  download="MUJMUN 11.0.pdf"
                  style={{ textDecoration: "none" }}
                >
                  <motion.div
                    onClick={() => {
                      window.open("https://forms.gle/78y1XPyzx29RYhL19");
                    }}
                    className="register-button"
                    whileHover={{ backgroundColor: "#906535", scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Register Now
                  </motion.div>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Comms
        lScrollProg={scrollYProgress}
        width={matches ? mobileWidth : scale}
        leftMargin={matches ? leftOffesetMobile : blueWidth}
        commsOpacity={commsOpacity}
      />
    </>
  );
}
