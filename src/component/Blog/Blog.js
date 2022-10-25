import React from "react";

const Blog = () => {
  return (
    <div className="w-[50%] mx-auto text-center">
      <label htmlFor="my-modal" className="btn btn-outline btn-secondary">
      1: what is cors?
      </label>

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Ans!
          </h3>
          <p className="py-4">
          Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
      <br />
      <br />
      <label htmlFor="my-modal" className="btn btn-outline btn-secondary">
      2: Why are you using firebase? What other options do you have to implement authentication?
      </label>

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Ans!
          </h3>
          <p className="py-4">
          Firebase provides tools to grow your app and business, for startups & global enterprises. Get your app up and running quickly & securely with fully managed backend infrastructure. Monitor App Performance. Cross-Platform Solutions. For Mobile or Web Apps.
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
      <br />
      <br />
      <label htmlFor="my-modal" className="btn btn-outline btn-secondary">
      3: How does the private route work?
      </label>

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Ans!
          </h3>
          <p className="py-4">
          The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
      <br />
      <br />
      <label htmlFor="my-modal" className="btn btn-outline btn-secondary">
      4: What is Node? How does Node work?
      </label>

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Ans!
          </h3>
          <p className="py-4">
          It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
