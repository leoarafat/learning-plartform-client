import React from "react";

const Faq = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
            Welcome to FAQ Worlds
          </p>
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
            <details open="">
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                why we use react?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  It's used for building interactive user interfaces and web
                  applications quickly and efficiently with significantly less
                  code than you would with vanilla JavaScript. In React, you
                  develop your applications by creating reusable components that
                  you can think of as independent Lego blocks.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                How does react works?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  React uses a declarative paradigm that makes it easier to
                  reason about your application and aims to be both efficient
                  and flexible. It designs simple views for each state in your
                  application, and React will efficiently update and render just
                  the right component when your data changes.
                </p>
              </div>
            </details>
            <details open="">
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                why we use redux in react?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  Redux is a predictable state container designed to help you
                  write JavaScript apps that behave consistently across client,
                  server, and native environments, and are easy to test. While
                  it's mostly used as a state management tool with React, you
                  can use it with any other JavaScript framework or library.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
