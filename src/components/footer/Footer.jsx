import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

import { FaGithub } from "react-icons/fa6";
function Footer() {
  return (
    <div className="footer__container ">
      {/* <div className="footer__container-text"> */}
      <span className="footer__container-copyright">
        © Copyright <strong>Mourad Shady Kahouech </strong>
        All Rights Reserved
      </span>
      <div className="footer__container-icons">
        <FaFacebook />
        <FaLinkedin />
        <FaInstagram />
        <FaGithub />
      </div>
      <span>Designed by Mourad Shady Kahouech</span>
      {/* </div> */}
    </div>
  );
}

export default Footer;
