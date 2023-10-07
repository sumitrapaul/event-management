import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";


const Root = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            </div>
            <div className="max-w-6xl mx-auto">
           <Outlet></Outlet>
           </div>
          <Footer></Footer>
         
           
        </div>
    );
};

export default Root;