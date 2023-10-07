import { NavLink } from "react-router-dom";



const Navbar = () => {


    return (
        <div className="flex pt-8 mb-12">
        <div className="flex justify-center items-center">
         <div className="text-3xl text-red-700 font-bold">Social Events</div>
         <img className="w-24 h-16" src="https://i.ibb.co/vHmDRSj/social-relationship-logo-and-icon-concept-of-teamwork-and-great-work-logo-design-vector.jpg" alt="" />
        </div>
       <div className="flex justify-center items-center navbar-end gap-5">
       <ul className="flex gap-6">
        <li><NavLink to='/' className={({isActive, isPending}) => isPending ? "pending" : isActive? "text-red-500" : ""}>Home</NavLink></li>
        <li><NavLink to='/gallery' className={({isActive, isPending}) => isPending ? "pending" : isActive? "text-red-500" : ""}>Gallery</NavLink></li>
        <li><NavLink to='/blog' className={({isActive, isPending}) => isPending ? "pending" : isActive? "text-red-500" : ""}>Blog</NavLink></li>
        </ul>
       </div>
      
      </div>
    );
};

export default Navbar;