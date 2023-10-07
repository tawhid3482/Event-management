import JsonHook from "../JsonHook/JsonHook";
import ServiceCard from "./ServiceCard";

const Services = () => {
 
    const [service]=JsonHook()

    return (
        <div className="m-10">
            <p className="text-3xl mb-5 text-center font-bold">Our Main Services</p>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
               { 
               service?.map((services)=><ServiceCard key={services.id} services={services}></ServiceCard>)
               
               }
            </div>
        </div> 
    );
};

export default Services;