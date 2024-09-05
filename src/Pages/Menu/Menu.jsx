import React, { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import "../Landing/Landing.css";
import "./Menu.css";
import Comms from "../Comms/Comms";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import useMediaQuery from "../Landing/useMediaQuery";

export default function Menu(props) {
  const openMenu = useAnimationControls();
  const matches = useMediaQuery("(max-width:500px)");
  const pages = ["Home", "Committees", "Sponsors", "Our Team", "Contact Us"];
  const [isMenuOpen, setisMenuOpen] = useState(false);
  var homeId = document.getElementById("homeID");
  var commsId = document.getElementById("commsID");
  var aboutId = document.getElementById("aboutID");
  var teamId = document.getElementById("teamID");

  const menuHandler = () => {
    setisMenuOpen(!isMenuOpen);
    {
      isMenuOpen ? openMenu.start("initial") : openMenu.start("menuOpen");
    }
  };

  return (
    <>
      <motion.div
        className="menu-placeholder"
        transition={{ duration: 0.5, ease: "easeInOut" }}
        whileHover={{
          scale: 1.2,
          transition: {
            type: "spring",
            stiffness: 1000,
            damping: 25,
            duration: 1,
          },
        }}
        variants={{
          initial: {
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            top: "-50px",
            right: "-50px",
          },
          menuOpen: {
            width: matches ? "100vw" : "calc(92% + 30px)",
            height: "calc(100vh + 30px)",
            borderRadius: "0%",
            top: "-30px",
            right: matches ? "0px" : "-30px",
          },
        }}
        initial="initial"
        animate={openMenu}
        onClick={menuHandler}
      ></motion.div>
      <motion.div
        whileTap={{ scale: 0.5 }}
        whileHover={{ scale: 1.05 }}
        className="menu-logo"
        onClick={menuHandler}
        style={{ color: props.logoColor }}
      >
        {isMenuOpen ? (
          <IoClose fontSize={"2.8em"} />
        ) : (
          <FiMenu fontSize={"2.5em"} />
        )}
      </motion.div>
      {isMenuOpen && (
        <div className="menu-container">
          {!matches && (
            <motion.div
              initial={{ height: "0%" }}
              animate={{ height: "100% " }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="register-now"
            ></motion.div>
          )}

          <motion.div className="page-titles">
            <motion.div
              className="page-title"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.5,
                ease: "easeInOut",
              }}
              onClick={() => {
                menuHandler();
                homeId.scrollIntoView();
              }}
            >
              Home
            </motion.div>
            <motion.div
              className="page-title"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.5 + 0.1,
                ease: "easeInOut",
              }}
              onClick={() => {
                menuHandler();

                commsId.scrollIntoView();
              }}
            >
              Committees
            </motion.div>
            <motion.div
              className="page-title"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.5 + 0.2,
                ease: "easeInOut",
              }}
              onClick={() => {
                menuHandler();

                aboutId.scrollIntoView();
              }}
            >
              Sponsors
            </motion.div>
            <motion.div
              className="page-title"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.5 + 0.3,
                ease: "easeInOut",
              }}
              onClick={() => {
                menuHandler();

                teamId.scrollIntoView();
              }}
            >
              Our Team
            </motion.div>
            <motion.div
              className="page-title"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.5 + 0.4,
                ease: "easeInOut",
              }}
              onClick={() => {
                menuHandler();
              }}
            >
              Contact Us
            </motion.div>
          </motion.div>
          <div className="mun-title">
            {matches ? (
              <motion.hr
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.5 }}
                style={{
                  height: 5,
                  backgroundColor: "var(--cream)",
                  y: "-5vh",
                }}
              />
            ) : (
              <motion.hr
                className="menu-line"
                initial={{ height: "0%" }}
                animate={{ height: "100% " }}
                transition={{ delay: 0.5, duration: 0.5 }}
              ></motion.hr>
            )}

            <motion.div
              className="mun-text"
              initial={
                matches
                  ? { rotate: "0deg", opacity: 0, y: -35 }
                  : { opacity: 0, x: 35, rotate: "90deg" }
              }
              animate={
                matches
                  ? { rotate: "0deg", opacity: 1, y: 0 }
                  : { opacity: 1, x: 0, rotate: "90deg" }
              }
              transition={{ delay: 0.7, duration: 0.4, ease: "easeInOut" }}
            >
              MUJMUN11.0
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
}
