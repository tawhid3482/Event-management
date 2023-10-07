import { Helmet } from "react-helmet";

const ServiceDetailsShow = ({ servicecard }) => {
    console.log(servicecard)

  const { img, name, description } = servicecard

  return (
    <div>
        <Helmet>
                <title>Health-Service Details</title>
            </Helmet>
      <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure>
          <img
            src={img}
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-4xl font-bold">{name}</h2>
          <p className="text-xl">{description}</p>
         
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsShow;
