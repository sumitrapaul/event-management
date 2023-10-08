import Banner from "../../components/Banner/Banner";
import Services from "../../components/Services/Services";
import { FaPeopleLine } from "react-icons/fa6";
import { BsCameraFill } from "react-icons/bs";
import { GoGoal } from "react-icons/go";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <div>
        <h1 className="text-3xl font-bold text-center mt-24 underline decoration-blue-600">
          Our Workers
        </h1>
     <div className="flex gap-12 justify-center items-center">
     <div className="avatar mt-8 block">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://i.ibb.co/JQCgNDn/formal-wear-11549834728t2iml5osmr.png" />
          </div>
         </div>
     <div className="avatar mt-8 block">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://i.ibb.co/1f5Fbmh/8640550.jpg" />
          </div>
         </div>
     <div className="avatar mt-8 block">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://i.ibb.co/G0vgfNL/cz-Nmcy1wcml2-YXRl-L3-Jhd3-Bpe-GVs-X2lt-YWdlcy93-ZWJza-XRl-X2-Nvbn-Rlbn-Qv-Mz-Y2-LW1ja2luc2-V5-LTIx.webp" />
          </div>
         </div>
     <div className="avatar mt-8 block">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://i.ibb.co/GJ7YsFJ/cz-Nmcy1wcml2-YXRl-L3-Jhd3-Bpe-GVs-X2lt-YWdlcy93-ZWJza-XRl-X2-Nvbn-Rlbn-Qvb-HIv-Mzk2-LW1q-LTIx-YTAy.webp" />
          </div>
         </div>
       
      <div className="avatar mt-8">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://i.ibb.co/Bt84XDY/sales-guy-formal-wear-11563233989mnadqijtxf.png" />
          </div>
        </div>
      <div className="avatar mt-8">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://i.ibb.co/y4q60wN/elly-r-pinkaqua-stripe-formal-wear-11564002054xcj5op8kr9.png" />
          </div>
        </div>
       
        </div>
        <div className="flex justify-center items-center gap-12 mt-4">
        <h1 className="font-bold">Jessica Taylor</h1>
        <h1 className="font-bold">John Smith</h1>
        <h1 className="font-bold">James Turner</h1>
        <h1 className="font-bold">Maria Garcia</h1>
        <h1 className="font-bold">Daniel Brown</h1>
        <h1 className="font-bold">Olivia hall</h1>
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold text-center mt-24 underline decoration-blue-600 mb-8">About Us for event proposal</h1>
        <div className="flex">
            <div className="flex-1">
                <img className="w-full mx-auto h-[260px]" src="https://i.ibb.co/dDp7SRk/photo-1519167758481-83f550bb49b3.jpg" alt="" />
            </div>
           <div className="flex-1 flex flex-col justify-center items-center">
           <div className="mb-8">
            <div className="flex justify-center items-center gap-2 mb-4 border-2 border-indigo-600 p-5 w-[500px]">
               <FaPeopleLine className="text-2xl text-red-700"></FaPeopleLine>
                <h1 className="text-2xl font-bold">Value Clients</h1>
            </div>
            <div className="flex justify-center items-center gap-2 mb-4 border-2 border-indigo-600 p-5">
               <BsCameraFill className="text-2xl text-red-700"></BsCameraFill>
                <h1 className="text-2xl font-bold">Photography</h1>
            </div>
            <div className="flex justify-center items-center gap-2 mb-4 border-2 border-indigo-600 p-5">
               <GoGoal className="text-2xl text-red-700"></GoGoal>
                <h1 className="text-2xl font-bold">Event Goals</h1>
            </div>
            </div>
           </div>
        </div>
      </div>
     
    </div>
  );
};

export default Home;
