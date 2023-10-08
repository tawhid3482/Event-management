import React from "react";
import { Link } from "react-router-dom";

const Products = ({ products }) => {
  const {id,img,name,price,short_description}=products

  return (
    <div>
      <div className="card card-compact w-96 md:w-80 lg:w-96 h-96 bg-base-200 shadow-xl" data-aos="fade-up-right">
        <figure>
          <img
            src={img}
            alt={name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{short_description}</p>
          <div className="card-actions justify-end">
           <Link to={`/store/${id}`}>
           <button className="btn bg-blue-600 text-white ">Details</button>
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
