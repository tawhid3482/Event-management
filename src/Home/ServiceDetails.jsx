import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JsonHook from "../JsonHook/JsonHook";
import ServiceDetailsShow from "./ServiceDetailsShow";

const ServiceDetails = () => {
  const [servicecard, setService] = useState(null); 
  const [service] = JsonHook();
  const { id } = useParams();

  useEffect(() => {
    const findService = service?.find(service => service.id == id);
    setService(findService); 
  }, [id, service]);

  return (
    <div>
      {servicecard ? (
        <ServiceDetailsShow servicecard={servicecard} />
      ) : (
        <div className="text-center text-4xl">
          <span className="loading loading-spinner bg-blue-700 loading-lg"></span>

        </div>
      )}
    </div>
  );
};

export default ServiceDetails;
