import React from "react";

const SimpleForm = () => {
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);

    console.log("Hello Bangladesh");
  };
  return (
    <div className="mt-10">
      <form
        onSubmit={formSubmitHandler}
        className="border-2 p-10 rounded-xl  hover:bg-slate-300  duration-500"
      >
        <input
          className="border-2 pl-5 py-3 w-96 rounded-xl"
          type="text"
          name="name"
          id=""
          placeholder="Enter Your Name"
        />
        <br />
        <br />
        <input
          className="border-2 pl-5 py-3 w-96 rounded-xl"
          type="text"
          name="email"
          id=""
          placeholder="Enter Your Email"
        />
        <br />
        <br />
        <input
          className="border-2 pl-5 py-3 w-96 rounded-xl"
          type="text"
          name="password"
          id=""
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

export default SimpleForm;
