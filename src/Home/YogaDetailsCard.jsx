import { Helmet } from "react-helmet";

const YogaDetailsCard = ({ yoga }) => {
  const { img, name, description } = yoga;
  return (
    <div>
        <Helmet>
                <title>Health-Yoga Details</title>
            </Helmet>
      <div className="card card-side w-full h-60 bg-base-100 shadow-xl"  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <figure>
          <img className="w-full" src={img} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          
        </div>
      </div>
    </div>
  );
};

export default YogaDetailsCard;
