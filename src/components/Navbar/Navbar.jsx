/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then((res) => toast.success("Users logged out successfully"))
      .catch((error) => toast.error(error.message));
  };
  const navlinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500 font-bold" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/gallery"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500 font-bold" : ""
          }
        >
          Gallery
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500 font-bold" : ""
          }
        >
          Blog
        </NavLink>
      </li>
    
    </>
  );

  return (
    <div className="navbar bg-blue-400">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          {navlinks}
        </ul>
      </div>
      <a className="btn btn-ghost normal-case text-xl">
          <img
            className="h-16 w-20 md:w-24"
            src="https://i.ibb.co/zNwgG5b/image-removebg-preview.png"
            alt=""
          />
          <h3 className="text-4xl text-black fot-bold">
            Gather<span className="text-red-900 text-4xl font-bold">Joy</span>
          </h3>
        </a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
       {navlinks}
      </ul>
    </div>
    <div className="navbar-end">
    {user?.email ? (
          <div className="dropdown dropdown-end -right-20 top-3 md:-right-32 lg:-right-96">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} />
              </div>
            </label>

            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <button className="btn btn-sm mb-1">{user.displayName}</button>
              </li>
              <li>
                <button onClick={handleSignOut} className="btn btn-sm">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn my-4 lg:mx-32 btn-primary">Login</button>
          </Link>
        )}
    </div>
  </div>
  );
};

export default Navbar;
