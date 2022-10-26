import React from "react";

const Blog = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
            Welcome to Blog Site
          </p>
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Questions & Ans
          </h2>
          <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
            <div>
              <h3 className="font-semibold">1: what is cors?</h3>
              <p className="mt-1 dark:text-gray-400">
                {" "}
                Cross-Origin Resource Sharing (CORS) is an HTTP-header based
                mechanism that allows a server to indicate any origins (domain,
                scheme, or port) other than its own from which a browser should
                permit loading resources.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                {" "}
                2: Why are you using firebase? What other options do you have to
                implement authentication?
              </h3>
              <p className="mt-1 dark:text-gray-400">
                {" "}
                Firebase provides tools to grow your app and business, for
                startups & global enterprises. Get your app up and running
                quickly & securely with fully managed backend infrastructure.
                Monitor App Performance. Cross-Platform Solutions. For Mobile or
                Web Apps. Firebase Authentication provides backend services,
                easy-to-use SDKs, and ready-made UI libraries to authenticate
                users to your app. It supports authentication using passwords,
                phone numbers, popular federated identity providers like Google,
                Facebook and Twitter, and more.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                {" "}
                3: How does the private route work?
              </h3>
              <p className="mt-1 dark:text-gray-400">
                The react private route component renders child components (
                children ) if the user is logged in. If not logged in the user
                is redirected to the /login page with the return url passed in
                the location state property.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                {" "}
                4: What is Node? How does Node work?
              </h3>
              <p className="mt-1 dark:text-gray-400">
                It is a used as backend service where javascript works on the
                server-side of the application. This way javascript is used on
                both frontend and backend. Node. js runs on chrome v8 engine
                which converts javascript code into machine code, it is highly
                scalable, lightweight, fast, and data-intensive.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
