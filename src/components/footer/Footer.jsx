import React from "react";
import {Link} from "react-router-dom"
import Picture from "../../assets/backprofileimage.jpg";
import "./footer.css";

const Footer = () => {
  return <section id="footer">
<div className="footerText">
    <img src={Picture} alt="" />
    <span>Belum di isi!</span>
</div>
<div className="footerLink">
    <a href="#">Email</a>
    <a href="#">WhatsApp</a>
</div>
<div className="footerSosmed">
    <a href="#">Instagram</a>
    <a href="#">Youtube</a>
    <a href="#">Tiktok</a>
</div>
  </section>
};

export default Footer;