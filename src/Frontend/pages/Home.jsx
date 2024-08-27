import React from "react";
import image from "./../../Assests/frontsaylani.jpg"

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col mt-4">
            <h1 className="text-center text-white">
              Saylani Mass IT Institute
            </h1>
            <hr className="text-white" />
            <div className="row">
                <div className="col-12 col-md-6">
                <p className="text-white fs-4">
              Saylani Walfare Trust is a well-known charitable organization in Pakistan, established
              in 1999, that provides various social services, including free
              meals, healthcare, education, and financial assistance to those in
              need. The organization is particularly recognized for its
              large-scale food distribution programs and its efforts to uplift
              the underprivileged in Pakistan. Saylani Welfare Trust has also
              been involved in numerous other projects like providing clean
              water, running vocational training programs, and offering
              interest-free loans for small businesses.
            </p>
                </div>
                <div className="col-12 col-md-6">
                    <img src={image} alt="" className="img-fluid" style={ {width : "600px" , height : "350px"} } />
                </div>
            </div>
          
          </div>
        </div>
      </div>
    </>
  );
}
