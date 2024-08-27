import React from "react";

export default function Contact() {
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <h1 className=" text-white">
              Contact Us
            </h1>
          </div>
        </div>
      <div className="row  " >
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control p-3 border border-dark name"
                  placeholder="Your Name"
                  aria-label="Your Name"
                />
              </div>
              <div className="col-md-6 ">
                <input
                  type="email"
                  className="form-control p-3 email border border-dark "
                  placeholder="Email"
                  aria-label="email"
                />
              </div>

              <div className="col-12 mt-4">
                <input
                  type="text"
                  className="form-control p-3 subject border border-dark "
                  id="inputSubject"
                  placeholder="Subject"
                />
              </div>

              <div className="mt-4">
                <textarea
                  placeholder="Message"
                  className="form-control textAria border border-dark "
                  id="exampleFormControlTextarea1"
                  rows="6"
                ></textarea>
              </div>
              <div className="col">
                <button
                  className="btn btn-primary w-100 mt-4 p-2 text-white button"
                  type="button"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
      
    </>
  );
}
