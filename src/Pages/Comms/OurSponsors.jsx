import React, { useRef } from "react";
import "./OurSponsors.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { sponsors } from "./OurSponsorList.js";
import globalLogo from "../../assets/global-logo.png";

function OurSponsors(props) {
  const contRef = useRef();
  const { scrollYProgress } = useScroll({
    target: contRef,
    offset: ["start start", "end end"],
  });

  const boxOffset1 = useTransform(props.scrollY, [0.5, 0.7], ["100vh", "4vh"]);
  const boxScale1 = useTransform(props.scrollY, [0.7, 0.8], [1, 0.95]);
  const boxOffset2 = useTransform(props.scrollY, [0.7, 0.9], ["100vh", "9vh"]);

  return (
    <motion.div
      ref={contRef}
      className="sposnsor-wrapper"
      style={{
        left: props.slideLeft,
        width: "100vw",
        height: "100vh",
        position: "relative",
        top: props.topOffset,
        backgroundColor: "var(--cream)",
      }}
    >
      <div className="sponsor-title">Our Sponsors</div>
      <motion.div
        className="card-container"
        style={{ top: boxOffset1, scale: boxScale1 }}
      >
        <div className="card1">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="sponsor-info"
          >
            <div className="card-title">{sponsors[0].title}</div>
            <div className="card-desc">{sponsors[0].description}</div>
          </motion.div>
          <motion.div className="card-imgs">
            <motion.img
              className="card-img"
              src={globalLogo}
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div className="card-container" style={{ top: boxOffset2 }}>
        <div className="card2">
          <div className="card-title">TBA</div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default OurSponsors;