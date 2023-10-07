
import { useEffect, useState } from "react";
import Service from "./Service";


const Services = () => {
    const [services,setServices] = useState([])

    useEffect(()=>{
        fetch('/services.json')
        .then(res => res.json())
        .then(data =>{
            setServices(data)
        } )},[])
    return (
        <div className="py-96 -mt-96">
            <h1 className="text-3xl font-bold text-center mt-16 underline">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-8 mb-48" style={{maxHeight:"300px",height:'auto'}}>
           {
              services.map((service) => <Service key={service.id} service={service}></Service>)
           }
            </div>
        </div>
    );
};

export default Services;