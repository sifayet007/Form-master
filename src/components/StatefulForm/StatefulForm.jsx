import { useState } from "react";

const StatefulForm = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const [error, setError] = useState("");

  const handleSummit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("password must be 6 characters or longer");
    } else {
      setError("");
    }
    console.log(name, email, password);
  };
  const handleEmailChange = (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="mt-5">
      <form
        onSubmit={handleSummit}
        className="border-2 p-10 rounded-xl  hover:bg-slate-300  duration-500"
      >
        <input
          onChange={handleNameChange}
          className="border-2 pl-5 py-3 w-96 rounded-xl"
          type="name"
          name="name"
          placeholder="Enter Your Name"
        />
        <br />
        <br />
        <input
          onChange={handleEmailChange}
          className="border-2 pl-5 py-3 w-96 rounded-xl"
          type="email"
          name="email"
          placeholder="Enter Your Email"
        />
        <br />
        <br />
        <input
          onChange={handlePasswordChange}
          className="border-2 pl-5 py-3 w-96 rounded-xl"
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <br />
        {error && (
          <p className="text-red-500 font-semibold hover:scale-105 duration-300">
            {error}
          </p>
        )}
        <br />
        <button className="mt-5 py-3 w-96 hover:bg-blue-800 hover:text-white duration-300 border-none">
          Login
        </button>
      </form>
    </div>
  );
};

export default StatefulForm;
