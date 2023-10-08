/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

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
          Service Details
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
    <div className="flex pt-8 mb-12">
      <div className="flex justify-center items-center navbar-start">
        <div className="text-3xl text-blue-700 font-bold">Social Events</div>
        <img
          className="w-24 h-16"
          src="https://i.ibb.co/vHmDRSj/social-relationship-logo-and-icon-concept-of-teamwork-and-great-work-logo-design-vector.jpg"
          alt=""
        />
      </div>
      <div className="flex justify-center items-center navbar-center gap-5">
        <ul className="flex gap-6">{navlinks}</ul>
      </div>
      <div className="navbar-end flex justify-center items-center gap-20">
     {
      user?.email ?  <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user.photoURL} />
        </div>
      </label>
      
         <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
          <li>
            <button className="btn btn-sm mb-1">{user.displayName}</button>
          </li>
          <li>
          <button onClick={handleSignOut} className="btn btn-sm">
          Signout
        </button>
          </li>
         </ul>
      </div> 
         :
        <Link to="/login">
          <button className="btn mx-32">Login</button>
        </Link>
     }
  
      </div>
    </div>
  );
};

export default Navbar;
