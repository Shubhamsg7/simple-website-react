import React from "react";
import pw from "./images/progressive_web.svg";

const Service = () => {
  return (
    <>
        <section className="d-flex align-content-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-12 mx-auto">
                    <h1 className="text-center mt-5"><span className="brand">Service</span> Page<span className="brand">.</span></h1>
                        <img src={pw} className="img-fluid p-5 animated" />
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}

export default Service;
