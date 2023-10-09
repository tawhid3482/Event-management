import { useState } from "react";
import { Link } from "react-router-dom";
import JsonHook from "../JsonHook/JsonHook";

const ServiceCard = ({ services }) => {
  const { id, name, img, price, description } = services;

  return (
    <div className="" data-aos="fade-right">
      <div className="card w-80 md:w-80 lg:w-96  h-[500px] bg-base-100 shadow-xl">
        <figure className="px-10 pt-10 h-full">
          <img src={img} alt="Shoes" className="rounded-xl h-52 " />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <p>$ {price}</p>
          <div className="card-actions">
            <Link to={`/service/${id}`}>
              <button className="btn bg-blue-500 text-white">
                Event Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
