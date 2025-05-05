import React, { useEffect, useRef } from "react";

const RefForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  useEffect(() => {
    nameRef.current.focus();
  }, []);
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  };
  return (
    <div>
      <form
        onSubmit={formSubmitHandler}
        className="border-2 p-10 rounded-xl bg-slate-400  hover:bg-slate-300  duration-500"
      >
        <input
          ref={nameRef}
          className="border-2 pl-5 py-3 w-96 rounded-xl"
          type="name"
          name="name"
          placeholder="Enter Your Name"
        />
        <br />
        <br />
        <input
          ref={emailRef}
          className="border-2 pl-5 py-3 w-96 rounded-xl"
          type="email"
          name="email"
          placeholder="Enter Your Email"
        />
        <br />
        <br />
        <input
          ref={passwordRef}
          className="border-2 pl-5 py-3 w-96 rounded-xl"
          type="password"
          name="password"
          placeholder="Password"
        />
        <br />
        <button className="mt-5 py-3 w-96 hover:bg-blue-800 hover:text-white duration-300 border-none">
          Login
        </button>
      </form>
    </div>
  );
};

export default RefForm;
