/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menubar, setMenubar] = useState(false);

  const toggleMenu = () => {
    setMenubar(!menubar);
  };

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
            isPending ? "pending" : isActive ? "text-red-500" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/details"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500" : ""
          }
        >
          Details
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/gallery"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500" : ""
          }
        >
          Gallery
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500" : ""
          }
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500" : ""
          }
        >
          Login
        </NavLink>
      </li>
    </>
  );

  return (
   <div className="">
     <div className="flex flex-row pt-8 mb-12 w-full">
      <div className=" navbar-start">
        <img
          className="w-32 h-16"
          src="https://i.ibb.co/vHmDRSj/social-relationship-logo-and-icon-concept-of-teamwork-and-great-work-logo-design-vector.jpg"
          alt=""
        />
      </div>
      <div className="md:hidden flex ">
        <button onClick={toggleMenu} className="text-2xl text-blue-700 p-2">
          <AiOutlineMenu />
        </button>
      </div>
      <div className={menubar ? "block md:hidden" : "hidden"}>
        <ul className="flex flex-col gap-6 md:flex-row p-3">{navlinks}</ul>
      </div>
      <div className="hidden md:flex md:justify-center md:items-center md:navbar-center gap-5">
        <ul className="flex gap-6">{navlinks}</ul>
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
            <button className="btn my-4 lg:mx-32">Login</button>
          </Link>
        )}
      </div>
    </div>
   </div>
  );
};

export default Navbar;
