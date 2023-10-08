/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
   

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters or longer!!");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one capital character!!");
      return;
    } else if (!/[@$!%*?&]/.test(password)) {
      toast.error("Password must contain at least one special character!!");
      return;
    }



    createUser(email, password)
   
      .then((result) => {
        toast.success("Users created successfully!!");
        console.log('toast.success called')
        navigate("/");
      })
      .catch((error) => {
       
        toast.error(error.message);
      });
  };

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold my-8 text-center">Register now!</h1>
      </div>
      <div className="card flex-shrink-0 w-[500px] mx-auto shadow-2xl bg-base-100">
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              className="input input-bordered"
            
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary" type="submit">Register</button>
          </div>
        </form>

        <p className="text-center mt-3 mb-8">
          Already have an account?Please
          <Link to="/login" className="text-blue-600 font-bold">
            Login
          </Link>
        </p>
      </div>
      <Toaster/>
    </div>
  );
};

export default Register;
