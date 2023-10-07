import Banner from "../../components/Banner/Banner";
import Services from "../../components/Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <div>
        <h1 className="text-3xl font-bold text-center mt-24 underline">
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
     
    </div>
  );
};

export default Home;
