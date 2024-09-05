import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { FiGithub } from "react-icons/fi";

import "./Footer.css";
export default function Footer() {
  return (
    <div className="footer-container" id="teamID">
      <div className="credits">
        <div className="credit-normal">Developed by&nbsp;</div>
        <div></div>
        <a href="https://www.linkedin.com/in/vedanttewari" target="_blank">
          <div className="credit-name">Vedant</div>
        </a>
      </div>
      <div className="heading-container">
        <div className="footer-heading">MUJMUN 11.0</div>
        <div className="footer-subheading">#BreakTheSilence</div>
      </div>
      <div className="footer-socials">
        <a href="https://www.instagram.com/muj.mun/" target="_blank">
          <div className="btn">
            <FaInstagram className="insta-footer" />
          </div>
        </a>
        <a>
          <div className="btn">
            <FaLinkedinIn className="linkedin-footer" />
          </div>
        </a>
        <a>
          <div className="btn">
            <FiGithub className="github-footer" />
          </div>
        </a>
        <a>
          <div className="btn">
            <MdMailOutline className="mail-footer" />
          </div>
        </a>
      </div>
    </div>
  );
}
