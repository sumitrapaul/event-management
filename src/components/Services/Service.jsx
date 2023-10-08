/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Service = ({service}) => {

    const {id,name,image,price,description} = service
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
        <figure><img className="pt-4 w-[300px] h-[200px]" src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <p className="text-2xl text-blue-600">{price}</p>
          <div className="card-actions justify-end">
           <Link to={`/details/${id}`}>
           <button className="btn btn-primary">Details</button>
           </Link>
          </div>
        </div>
      </div>
    );
};

export default Service;