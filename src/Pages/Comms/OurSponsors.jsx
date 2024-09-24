import React, { useRef } from "react";
import "./OurSponsors.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { sponsors } from "./OurSponsorList.js";
import globalLogo from "../../assets/global-logo.png";
import laPinozLogo from "../../assets/laPinoz.png";
import kwissLogo from "../../assets/kwissLogo.png";
import spiceLogo from "../../assets/spiceLogo.png";

function OurSponsors(props) {
  const contRef = useRef();
  const { scrollYProgress } = useScroll({
    target: contRef,
    offset: ["start start", "end end"],
  });

  const boxOffset1 = useTransform(
    scrollYProgress,
    [0.1, 0.3],
    ["100vh", "5vh"]
  );
  const boxScale1 = useTransform(scrollYProgress, [0.3, 0.45], [1, 0.97]);
  const boxScale2 = useTransform(scrollYProgress, [0.55, 0.65], [1, 0.97]);
  const boxScale3 = useTransform(scrollYProgress, [0.75, 0.85], [1, 0.97]);

  const boxOffset2 = useTransform(
    scrollYProgress,
    [0.3, 0.5],
    ["100vh", "8vh"]
  );
  const boxOffset3 = useTransform(
    scrollYProgress,
    [0.5, 0.7],
    ["100vh", "11vh"]
  );
  const boxOffset4 = useTransform(
    scrollYProgress,
    [0.7, 0.9],
    ["100vh", "15vh"]
  );

  return (
    <motion.div
      ref={contRef}
      id="sponID"
      className="sponsor-wrapper"
      style={{
        height: "250vh",
        position: "relative",
        backgroundColor: "var(--cream)",
        width: "100vw",
      }}
    >
      <motion.div
        style={{ opacity: props.sponOpacity }}
        className="sponsor-info-container"
      >
        <div className="sponsor-title">
          <div>Our Sponsors</div>
        </div>
        <motion.div
          className="card-container"
          style={{ top: boxOffset1, scale: boxScale1 }}
        >
          <div className="card1">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
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
                transition={{ delay: 0.2 }}
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="card-container"
          style={{ top: boxOffset2, scale: boxScale2 }}
        >
          <div className="card2">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="sponsor-info"
            >
              <div className="card-title">{sponsors[1].title}</div>
              <div className="card-desc">{sponsors[1].description}</div>
            </motion.div>
            <motion.div className="card-imgs">
              <motion.img
                className="card-img"
                src={spiceLogo}
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="card-container"
          style={{ top: boxOffset3, scale: boxScale3 }}
        >
          <div className="card1">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="sponsor-info"
            >
              <div className="card-title">{sponsors[2].title}</div>
              <div className="card-desc">{sponsors[2].description}</div>
            </motion.div>
            <motion.div className="card-imgs">
              <motion.img
                className="card-img"
                src={kwissLogo}
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              />
            </motion.div>
          </div>
        </motion.div>
        <motion.div className="card-container" style={{ top: boxOffset4 }}>
          <div className="card2">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="sponsor-info"
            >
              <div className="card-title">{sponsors[3].title}</div>
              <div className="card-desc">{sponsors[3].description}</div>
            </motion.div>
            <motion.div className="card-imgs">
              <motion.img
                className="card-img"
                src={laPinozLogo}
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default OurSponsors;
