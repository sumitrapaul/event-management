import { NavLink } from "react-router-dom";



const Navbar = () => {
const navlinks=<>
<li><NavLink to='/' className={({isActive, isPending}) => isPending ? "pending" : isActive? "text-red-500" : ""}>Home</NavLink></li>
        <li><NavLink to='/gallery' className={({isActive, isPending}) => isPending ? "pending" : isActive? "text-red-500" : ""}>Gallery</NavLink></li>
        <li><NavLink to='/blog' className={({isActive, isPending}) => isPending ? "pending" : isActive? "text-red-500" : ""}>Blog</NavLink></li>
        <li><NavLink to='/login' className={({isActive, isPending}) => isPending ? "pending" : isActive? "text-red-500" : ""}>Login</NavLink></li>


</>

    return (
        <div className="flex pt-8 mb-12">
        <div className="flex justify-center items-center navbar-start">
         <div className="text-3xl text-red-700 font-bold">Social Events</div>
         <img className="w-24 h-16" src="https://i.ibb.co/vHmDRSj/social-relationship-logo-and-icon-concept-of-teamwork-and-great-work-logo-design-vector.jpg" alt="" />
        </div>
       <div className="flex justify-center items-center navbar-center gap-5">
       <ul className="flex gap-6">
        {navlinks}
        </ul>
       </div>
       <div className="navbar-end flex justify-center items-center">
    <button className="btn mx-32">Login</button>
  </div>
      </div>
    );
};

export default Navbar;