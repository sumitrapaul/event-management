import { useEffect, useState } from "react";
import Service from "./Service";
import AOS from "aos";
import 'aos/dist/aos.css';
AOS.init({
    duration:1000,
    offset:200,
})

const Services = () => {
    const [services,setServices] = useState([])
  

    useEffect(()=>{
        fetch('/services.json')
        .then(res => res.json())
        .then(data =>{
            setServices(data)
        } )},[])
    return (
        <div data-aos="fade-up" className="py-10 mt-6">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6 underline decoration-blue-600">Our <span className="text-blue-800">Services</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
           {
              services.map((service) => <Service key={service.id} service={service}></Service>)
           }
            </div>
        </div>
    );
};

export default Services;