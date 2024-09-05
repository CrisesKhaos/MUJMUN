import React, { useEffect, useState } from "react";
import { motion, useTransform, useAnimationControls } from "framer-motion";
import "./OurTeam.css";
import tanay from "./../../assets/tanay.png";
import jatin from "./../../assets/jatin.png";
import ananya from "./../../assets/ananya.png";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Footer from "../Footer/Footer";
import useMediaQuery from "../Landing/useMediaQuery";

export default function OurTeam(props) {
  const [box0, setBox0] = useState(false);
  const [box1, setBox1] = useState(false);
  const [box2, setBox2] = useState(false);

  const boxCont0 = useAnimationControls();
  const boxCont1 = useAnimationControls();
  const boxCont2 = useAnimationControls();

  const matches = useMediaQuery("(max-width:500px)");
  const teamId = document.getElementById("topScroll");

  const xx = useTransform(props.teamOpacity, [0.8, 1], ["none", "block"]);
  const boxStyles = {
    boxOpen: {
      width: matches ? "80vw" : "66vw",
      left: matches ? "10vw" : "15vw",
      filter: "none",
      top: "35vh",
      height: matches ? "fit-content" : "50vh",
      scale: 1.1,
      zIndex: 2,
    },
    boxNormal: {
      width: matches ? "80vw" : "20vw",
      zIndex: 1,
      height: "50vh",
      filter: "grayscale(100%)",
      scale: 1,
    },
    boxNormal1: {
      width: matches ? "80vw" : "20vw",
      left: matches ? "10vw" : "38vw",
      height: "50vh",
      top: matches ? "90vh" : "35vh",
      zIndex: 1,
      filter: "grayscale(100%)",
      scale: 1,
    },
    boxNormal2: {
      width: matches ? "80vw" : "20vw",
      left: matches ? "10vw" : "61vw",
      height: "50vh",
      top: matches ? "145vh" : "35vh",

      zIndex: 1,
      filter: "grayscale(100%)",
      scale: 1,
    },
  };
  const tapHandler = (boxNumber) => {
    matches ? teamId.scrollIntoView() : null;

    switch (boxNumber) {
      case 0:
        if (box0) {
          boxCont0.start("boxNormal");
        } else {
          boxCont0.start("boxOpen");
          boxCont1.start("boxNormal1");
          boxCont2.start("boxNormal2");
          setBox1(false);
          setBox2(false);
        }
        setBox0(!box0);
        break;
      case 1:
        setBox1(!box1);
        if (box1) {
          boxCont1.start("boxNormal1");
        } else {
          boxCont1.start("boxOpen");
          boxCont0.start("boxNormal");
          boxCont2.start("boxNormal2");
          setBox0(false);
          setBox2(false);
        }
        break;

      case 2:
        setBox2(!box2);
        if (box2) {
          boxCont2.start("boxNormal2");
        } else {
          boxCont2.start("boxOpen");
          boxCont1.start("boxNormal1");
          boxCont0.start("boxNormal");
          setBox0(false);
          setBox1(false);
        }
        break;
    }
  };

  return (
    <>
      <motion.div
        className="team-container"
        style={{ opacity: props.teamOpacity }}
      >
        {true && (
          <motion.div
            style={{
              height: "fit-content",
              width: "fit-content",
              flexDirection: "column",
              display: xx,
            }}
          >
            <motion.div
              className="team-title"
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              Our Team
            </motion.div>
            <motion.div
              style={{ flexDirection: "row", display: "flex" }}
              transition={{ staggerChildren: 0.5 }}
            >
              <div id="topScroll"></div>
              <motion.div
                className="team-box1"
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.15,
                }}
                animate={boxCont0}
                variants={boxStyles}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                onTap={() => {
                  tapHandler(0);
                }}
              >
                <img
                  src={jatin}
                  style={{ marginLeft: matches ? "0px" : "25px" }}
                ></img>
                <div className="big-div">
                  <div className="person-container">
                    <div className="person-name">Jatin Juneja</div>
                    <div className="person-role">Secretary General</div>
                    <div className="person-writeup">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam vel risus a lacus porttitor tincidunt. Nam
                      elementum et orci sit amet dapibus. Mauris luctus, ante ut
                      accumsan blandit, elit quam viverra lorem, ut elementum
                      tellus urna in sem. Curabitur cursus ac ipsum ut ornare.
                      Sed placerat condimentum pharetra. Quisque sem augue,
                      venenatis non fermentum in, ullamcorper sed tellus. In
                      porttitor pellentesque eleifend. Praesent at magna
                      feugiat, congue sapien vitae, tristique metus. Ut eget
                      arcu dolor. In vestibulum tempus libero a finibus.
                    </div>
                  </div>
                  <div className="person-socials">
                    <a
                      target="_blank"
                      href=" https://www.instagram.com/jatinjuneja04?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    >
                      <FaInstagram className="person-icon1" />
                    </a>

                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/jatin-juneja-920131283/"
                    >
                      <FaLinkedin className="person-icon2" />
                    </a>
                    <a href=" jatinjuneja004@gmail.com">
                      <IoMdMail className="person-icon3" />
                    </a>
                  </div>
                </div>
                {!box0 && (
                  <motion.div
                    className="temp-text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                  >
                    <>
                      <div style={{ fontSize: "2em", fontWeight: "500" }}>
                        Jatin Juneja
                      </div>
                      <div style={{ fontWeight: "400" }}>Secretary General</div>
                    </>
                  </motion.div>
                )}
              </motion.div>
              <motion.div
                className="team-box2"
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.3,
                }}
                animate={boxCont1}
                variants={boxStyles}
                whileHover={{ scale: 1.05 }}
                onTap={() => {
                  tapHandler(1);
                }}
              >
                {!box1 && (
                  <motion.div
                    className="temp-text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                  >
                    <>
                      <div style={{ fontSize: "2em", fontWeight: "500" }}>
                        Tanay Shah
                      </div>
                      <div style={{ fontWeight: "400" }}>
                        {" "}
                        Deputy Secretary General
                      </div>
                    </>
                  </motion.div>
                )}
                <img
                  src={tanay}
                  style={{ marginLeft: matches ? "0px" : "25px" }}
                ></img>

                <div className="big-div">
                  <div className="person-container">
                    <div className="person-name">Tanay Shah</div>
                    <div className="person-role">Deputy Secretary General</div>
                    <div className="person-writeup">
                      "I am honored to serve as the Deputy Secretary General at
                      the upcoming MUJMUN. I've been part of the MUN circuit
                      since 6th grade, so this is something I've been passionate
                      about for a long time. Along the way, I've had the chance
                      to take on different leadership roles, which have taught
                      me how to guide teams, especially when things get intense
                      or complicated."
                    </div>
                  </div>
                  <div className="person-socials">
                    <a
                      target="_blank"
                      href="https://www.instagram.com/tanayshah23/
"
                    >
                      <FaInstagram className="person-icon1" />
                    </a>

                    <a
                      target="_blank"
                      href="www.linkedin.com/in/tanay-shah-b6b657230
"
                    >
                      <FaLinkedin className="person-icon2" />
                    </a>
                    <a
                      href="mailto:tanaynshah@gmail.com
"
                    >
                      <IoMdMail className="person-icon3" />
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="team-box3"
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.4,
                }}
                animate={boxCont2}
                variants={boxStyles}
                onTap={() => {
                  tapHandler(2);
                }}
              >
                {!box2 && (
                  <motion.div
                    className="temp-text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                  >
                    <>
                      <div style={{ fontSize: "2em", fontWeight: "500" }}>
                        Ananya Jaitly
                      </div>
                      <div style={{ fontWeight: "400" }}>Charge D'Affaires</div>
                    </>
                  </motion.div>
                )}
                <img
                  src={ananya}
                  style={{ marginLeft: matches ? "0px" : "25px" }}
                ></img>

                <div className="big-div">
                  <div className="person-container">
                    <div className="person-name">Ananya Jaitly</div>
                    <div className="person-role">Charge D'Affaires</div>
                    <div className="person-writeup">
                      "I'm thrilled to be stepping into the role of Chargé
                      d'Affaires at the upcoming MUJMUN. My passion for
                      international relations and diplomacy has driven me to
                      take on various leadership roles, where I've had the
                      opportunity to organize and manage major university
                      events, bringing recognition to our institution."
                    </div>
                  </div>
                  <div className="person-socials">
                    <a
                      target="_blank"
                      href="https://www.instagram.com/ananyaa.06"
                    >
                      <FaInstagram className="person-icon1" />
                    </a>

                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/ananya-jaitly-549771220/"
                    >
                      <FaLinkedin className="person-icon2" />
                    </a>
                    <a href="mailto:tanaynshah@gmail.com">
                      <IoMdMail className="ananya.jaitly2003@gmail.com" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </>
  );
}
