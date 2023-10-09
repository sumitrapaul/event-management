import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";



const Root = () => {
    return (
        <div>
            <div className="lg:max-w-[1300px] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
          </div>
          </div>
    );
};

export default Root;