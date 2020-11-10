import React from "react";
import mobile from "./images/mobile.svg";

const Home = () => {
  return (
    <>
        <section className="d-flex align-content-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1 className=" text-center text-lg-left">
                                    Grow Your Business With <strong className="brand">React Web</strong>
                                </h1>
                                <h3 className="text-secondary  text-center text-lg-left">
                                    We Are the team of talented developer making websites.
                                </h3>
                                <div className="mt-5 text-center text-lg-left">
                                    <a href="" className="button">Get Started</a>
                                </div>
                            </div>
                            <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-2 d-flex justify-content-center">
                                <img src={mobile} alt="image" className="mt-5 image animated" width="300" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}

export default Home;
