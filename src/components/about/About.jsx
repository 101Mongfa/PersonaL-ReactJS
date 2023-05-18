import React from "react";
import "./about.css";

const About = () => {
  return (
  <section className="about" id="about">
    <div className="aboutTypo">
    <span className="aboutTypoText">about me</span>
    <span className="aboutTypoText">about me</span>
    <span className="aboutTypoText">about me</span>
    </div>
    <div className="aboutContent">
      <h1 className="aboutInfo">Halo Perkenalkan Saya Daffa Ini Projek Gabut Aja Jadi Masih Kosongan,Untuk Next Mungkin Bakal Saya Isi Lainnya. Saya Jg Masih Tahap Belajar Tentang Program Alasan Saya Mengisi Frontend Di Atas Biar Gk Usah Ganti Lagi Nantinya Lebih Tepatnya Mager</h1>
      <a className="aboutButton" href="#">
        Read More About Me <i class="uil uil-arrow-up-right"></i>
      </a>
    </div>
  </section>

  );
};

export default About