import { useEffect, useState } from "react";
import Service from "./Service";
import AOS from "aos";
import 'aos/dist/aos.css';
AOS.init({
    duration:3000,
    offset:250,
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
        <div data-aos="fade-top" className="py-10 mt-6">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6 underline decoration-blue-600">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
           {
              services.map((service) => <Service key={service.id} service={service}></Service>)
           }
            </div>
        </div>
    );
};

export default Services;