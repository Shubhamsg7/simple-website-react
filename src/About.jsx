import React from "react";
import About_img from "./images/about.svg";

const About = () => {
  return (
    <>
        <section className="d-flex align-content-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-12 mx-auto">
                    <h1 className="text-center mt-4"><span className="brand">About</span> Page<span className="brand">.</span></h1>
                        <img src={About_img} className="img-fluid p-5 animated" />
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}

export default About;
