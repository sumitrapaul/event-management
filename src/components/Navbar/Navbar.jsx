import { NavLink } from "react-router-dom";
import { GiLovers } from 'react-icons/gi';


const Navbar = () => {


    return (
        <div className="flex p-8 mb-12">
        <div className="flex gap-4">
         <h1 className="text-3xl">Wedding</h1>
         <GiLovers className="text-red-600 text-4xl"></GiLovers>
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