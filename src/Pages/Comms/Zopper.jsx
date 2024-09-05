import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Comss.css";
import { commNames } from "./CommNames";
export default function Zopper(props) {
  const [yVal, setYVal] = useState("0%");

  useEffect(() => {
    const temp = props.currentComm * 14.28;
    setYVal(`-${temp}%`);
  }, [props]);

  return (
    <>
      <div className="zoop-container">
        <motion.div
          className="zoop-title"
          animate={{ y: yVal }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          {commNames.map((commName, index) => (
            <motion.div className="zoop-text">{commName.name}</motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
