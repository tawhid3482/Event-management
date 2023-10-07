import { Link } from "react-router-dom";

const Yoga = () => {
  return (
    <div>
      <div
        className="hero h-[550px]"
        style={{
          backgroundImage:
            "url(https://thumbs.dreamstime.com/b/yoga-poses-silhouettes-woman-body-balance-asana-position-people-workout-exercise-115595870.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Yoga and Fitness</h1>
            <p
              className="mb-5 text-lg
      "
            >
              Yoga is a holistic practice that originated in ancient India and
              has been around for thousands of years. It encompasses a variety
              of physical, mental, and spiritual exercises designed to promote
              overall well-being and balance in life. The word "yoga" itself
              means union, signifying the integration of body, mind, and spirit.
            </p>
            <Link to='/yogaDetails'>
            <button className="btn bg-blue-500 text-white">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yoga;
