import React from "react";
import "./work.css";
import Picture from "../../assets/Example2.jpeg"

const Work = () => {
  return <section id="work">
    <div className="workDesign">
      <div className="workTypo">
        <span>work</span>
        <span>work</span>
        <span>work</span>
      </div>
      <span className="workOpening" >Featured Projects</span>
    </div>
    <div className="workContainerMain">
    <div className="workMain">
<img className="workImage" src={Picture} alt="" />
<div className="workText">
  <span className="workNumber">01.</span>
  <div className="workTitle">
    <span>Kosongan</span>
    <span>Tagline produk 1</span>
  </div>
</div>
</div>
<div className="workLink">
    <a className="workLinked" href="#">
        <i class="uil uil-arrow-up-left"></i>
        <span>Online Preview</span>
        </a>
</div>
    </div>
  </section>
};

export default Work;