import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useAnimationControls,
  animate,
} from "framer-motion";
import "./Comss.css";
import intPress from "../../assets/int_press.png";
import lok_sabha from "../../assets/lok-sabha.png";
import cbfc from "../../assets/cbfc.png";
import iaea from "../../assets/iaea.png";
import unga from "../../assets/unga.png";
import unhrc from "../../assets/unhrc.png";
import unsc from "../../assets/unsc.png";

import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";
import Zopper from "./Zopper";
import { commNames } from "./CommNames.js";
import OurTeam from "../OurTeam/OurTeam.jsx";
import Sponsors from "../Sponsors/Sponsors.jsx";
import useMediaQuery from "../Landing/useMediaQuery.js";
export default function Comms(props) {
  const [imgyVal, setimgYVal] = useState("0%");
  const matches = useMediaQuery("(max-width:500px)");
  const commsRef = useRef();
  const animateInfo = useAnimationControls();
  const [currComm, setCurrComm] = useState(0);
  const changeIndex = (index) => {
    setCurrComm(index);
    animateInfo.start("intial");
  };

  const { scrollYProgress } = useScroll({
    target: commsRef,
    offset: ["start start", "end end"],
  });
  const topOffset = useTransform(scrollYProgress, [0, 1], ["0vh", "40vh"]);
  const ourTeam = useTransform(scrollYProgress, [0.2, 1], [1, 5]);
  const render = useTransform(scrollYProgress, [0.9, 1], ["none", "flex"]);

  useEffect(() => {
    const temp = currComm * 14.28;
    setimgYVal(`-${temp}%`);
  }, [currComm]);
  return (
    <>
      <motion.div ref={commsRef} className="comms-container" id="commsID">
        <motion.div
          className="comms-backround"
          style={{
            height: "100vh",
            display: "flex",
            position: "absolute",
            top: topOffset,
            width: props.width,
            left: props.leftMargin,
            backgroundColor: "var(--deep-blue)",
          }}
        ></motion.div>

        <motion.div
          className="comms-info-container"
          style={{ opacity: props.commsOpacity }}
        >
          <div className="comms-displayer">
            <motion.div
              className="comms-imgs-container"
              animate={{ y: imgyVal }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <div className="comms-equalizer">
                <img className="comms-logo" src={unga}></img>
              </div>
              <div className="comms-equalizer">
                <img className="comms-logo" src={unsc}></img>
              </div>
              <div className="comms-equalizer">
                <img className="comms-logo" src={unhrc}></img>
              </div>
              <div className="comms-equalizer">
                <img className="comms-logo" src={iaea}></img>
              </div>
              <div className="comms-equalizer">
                <img className="comms-logo" src={lok_sabha}></img>
              </div>
              <div className="comms-equalizer">
                <img className="comms-logo" src={intPress}></img>
              </div>
              <div className="comms-equalizer">
                <img className="comms-logo" src={cbfc}></img>
              </div>
            </motion.div>
          </div>
          <div className="comm-menu">
            <motion.div
              className="comm-menu-circle"
              onClick={() => {
                if (currComm - 1 < 0) changeIndex(6);
                else changeIndex((currComm - 1) % 7);
              }}
              style={{ rotate: matches ? "-90deg" : null }}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
            >
              <FaArrowUp />
            </motion.div>
            {commNames.map((x, index) => (
              <motion.div
                className={
                  index == currComm
                    ? "comm-menu-button-selected"
                    : "comm-menu-button"
                }
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  changeIndex(index);
                }}
              />
            ))}

            <motion.div
              className="comm-menu-circle"
              onClick={() => {
                changeIndex((1 + currComm) % 7);
              }}
              style={{ rotate: matches ? "-90deg" : null }}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
            >
              <FaArrowDown />
            </motion.div>
          </div>
          <div className="comms-info">
            <Zopper currentComm={currComm} />
            <div className="comms-info-description">
              <motion.div
                variants={{
                  initial: { opacity: 1, y: "10px" },
                  fadeOut: { opacity: 0, y: "-10px" },
                }}
                animate={animateInfo}
                initial="initial"
              >
                {commNames[currComm].description}
              </motion.div>
              <motion.div
                variants={{
                  initial: { opacity: 1, y: "10px" },
                  fadeOut: { opacity: 0, y: "-10px" },
                }}
                animate={animateInfo}
                initial="initial"
                style={{ marginTop: "20px" }}
              >
                <u>Agenda</u> -{commNames[currComm].agenda}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <Sponsors />
    </>
  );
}
