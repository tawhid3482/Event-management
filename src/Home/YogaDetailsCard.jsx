const YogaDetailsCard = ({ yoga }) => {
  const { img, name, description } = yoga;
  return (
    <div>
      <div className="card card-side h-60 bg-base-100 shadow-xl">
        <figure>
          <img className="" src={img} alt="Movie" />
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
