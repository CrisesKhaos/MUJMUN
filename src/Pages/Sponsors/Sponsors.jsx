import React, { useRef } from "react";
import "./Sponsors.css";
import { motion, useScroll, useTransform } from "framer-motion";
import OurTeam from "../OurTeam/OurTeam";
import p_1 from "./SponLogos/p_1.jpeg";
import p_2 from "./SponLogos/p_2.jpeg";
import p_3 from "./SponLogos/p_3.jpeg";
import p_4 from "./SponLogos/p_4.jpeg";
import { ImInstagram } from "react-icons/im";
import useMediaQuery from "../Landing/useMediaQuery";

export default function Sponsors() {
  const sponsorsRef = useRef();
  const { scrollYProgress } = useScroll({
    target: sponsorsRef,
    offset: ["start start", "end end"],
  });

  const matches = useMediaQuery("(max-width: 500px)");

  const squareHeight = useTransform(
    scrollYProgress,
    [0, 1],
    [matches ? "20vh" : "25vh", "100vh"]
  );
  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale2 = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const scale3 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 2]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 4.7]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 5.2]);
  const scale7 = useTransform(scrollYProgress, [0, 1], [1, 2.8]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 5.7]);

  const squareWidth = useTransform(
    scrollYProgress,
    [0, 1],
    [matches ? "45vw" : "25vw", "100vw"]
  );
  return (
    <>
      <div className="sponsors-container" ref={sponsorsRef}>
        <div className="sponsors-sticky" id="aboutID">
          <motion.div className="sponsors-images">
            <motion.div className="sponsors-image-container">
              <motion.div
                className="scaled"
                style={{
                  width: squareWidth,
                  height: squareHeight,
                  zIndex: 3,
                }}
              >
                <motion.div
                  style={{
                    opacity: useTransform(scrollYProgress, [0.5, 0.85], [1, 0]),
                  }}
                >
                  About Us
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              className="sponsors-image-container"
              style={{ scale: scale1 }}
            >
              <motion.div
                className="sponsor1"
                style={{
                  opacity: useTransform(scrollYProgress, [0.5, 0.85], [1, 0]),
                }}
              >
                <img src={p_1} />
              </motion.div>
            </motion.div>
            <motion.div
              className="sponsors-image-container"
              style={{ scale: scale2 }}
            >
              <motion.div
                className="sponsor2"
                style={{
                  opacity: useTransform(scrollYProgress, [0.5, 0.85], [1, 0]),
                }}
              >
                <img src={p_2} />
              </motion.div>
            </motion.div>
            <motion.div
              className="sponsors-image-container"
              style={{ scale: scale3 }}
            >
              <motion.div
                className="sponsor3"
                style={{
                  opacity: useTransform(scrollYProgress, [0.5, 0.85], [1, 0]),
                }}
              >
                <img src={p_3} />
              </motion.div>
            </motion.div>
            <motion.div
              className="sponsors-image-container"
              style={{ scale: scale4 }}
            >
              <motion.div
                className="sponsor4"
                style={{
                  opacity: useTransform(scrollYProgress, [0.5, 0.85], [1, 0]),
                }}
              >
                <img src={p_4} />
              </motion.div>
            </motion.div>

            <motion.div
              className="sponsors-image-container"
              style={{ scale: scale5, zIndex: 2 }}
            >
              <motion.div
                className="sponsor5"
                style={{
                  opacity: useTransform(scrollYProgress, [0.5, 0.85], [1, 0]),
                }}
              ></motion.div>
            </motion.div>

            <motion.div
              className="sponsors-image-container"
              style={{ scale: scale6 }}
            >
              <motion.div
                className="sponsor6"
                style={{
                  opacity: useTransform(scrollYProgress, [0.5, 0.85], [1, 0]),
                }}
              >
                300+ Participating Institutions
              </motion.div>
            </motion.div>

            <motion.div
              className="sponsors-image-container"
              style={{ scale: scale7 }}
            >
              <motion.div
                className="sponsor7"
                style={{
                  opacity: useTransform(scrollYProgress, [0.5, 0.85], [1, 0]),
                }}
              >
                Largest Conference in Rajasthan in 2023 with 400+ Delegates from
                10+ Countries
              </motion.div>
            </motion.div>

            <motion.div
              className="sponsors-image-container"
              style={{ scale: scale8 }}
            >
              <motion.div
                className="sponsor8"
                style={{
                  opacity: useTransform(scrollYProgress, [0.5, 0.85], [1, 0]),
                }}
              >
                1,800,000+ Impressions Across Social Media Platforms
              </motion.div>
            </motion.div>

            <motion.div
              className="sponsors-image-container"
              style={{ scale: scale8 }}
            >
              <motion.div
                className="sponsor9"
                style={{
                  opacity: useTransform(scrollYProgress, [0.5, 0.85], [1, 0]),
                }}
              ></motion.div>
            </motion.div>
          </motion.div>
        </div>
        <OurTeam
          teamOpacity={useTransform(scrollYProgress, [0.9, 1], [0, 1])}
        />
      </div>
    </>
  );
}
