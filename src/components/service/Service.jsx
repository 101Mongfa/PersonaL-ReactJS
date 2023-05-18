import React from "react";
import "./service.css";
import {motion, useScroll, useTransform } from "framer-motion";



const Service = () => {
    const {scrollYProgress} = useScroll()
    const frontend = useTransform(scrollYProgress, [0,1],[0,600]);
    const projek = useTransform(scrollYProgress, [0,1],[0,400]);
    const daffa = useTransform(scrollYProgress, [0,1],[0,200]);

  return <section id="service">
  <div className="serviceTypo">
    <motion.span style={{x: frontend}}>
        Frontend <span className="outlineTypo">Developer</span> - Frontend{" "}
        <span className="outlineTypo">Developer</span> - Frontend{" "}
        <span className="outlineTypo">Developer</span> -{" "}
        </motion.span>
    <motion.span style={{x: projek}}>
    Projek <span className="outlineTypo">Iseng</span> - Projek{" "}
        <span className="outlineTypo">Iseng</span> - Projek{" "}
        <span className="outlineTypo">Iseng</span> -{" "}
    </motion.span>
    <motion.span style={{x: daffa}}>
         <span className="outlineTypo">Daffa</span> Abrk - {" "}
         <span className="outlineTypo">Daffa</span> Abrk - {" "}
         <span className="outlineTypo">Daffa</span> Abrk - {" "}
    </motion.span>
  </div>
  <div className="serviceStack">
    <div className="serviceTechStack">
        <span>D</span>
        <span>A</span>
        <span>F</span>
        <span>F</span>
        <span>A</span>
    </div>
    <div className="serviceTechStack">
        <span>A</span>
        <span>B</span>
        <span>R</span>
        <span>K</span>
    </div>
  </div>
  </section>
};

export default Service