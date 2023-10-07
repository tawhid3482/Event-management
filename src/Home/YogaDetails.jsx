import { useLoaderData } from "react-router-dom";
import YogaDetailsCard from "./YogaDetailsCard";

const YogaDetails = () => {
    const data = useLoaderData()
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            {
                data.map((yoga)=><YogaDetailsCard key={yoga.id} yoga={yoga}></YogaDetailsCard>)
            }
        </div>
    );
};

export default YogaDetails;