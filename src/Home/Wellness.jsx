import { Link } from "react-router-dom";
import well from "../../public/images/Wellness-Wheel.png";
const Wellness = () => {
  return (
    <div className="m-5">
      <p className="text-3xl font-bold text-center">Wellness</p>
      <div className="flex-col justify-center md:flex-row md:flex md:justify-between items-center ">
        <div className="w-1/2 mx-auto">
          <img src={well} className="h-96" alt="" />
        </div>
        <div className="md:w-1/2 w-full mx-auto">
          <p className="text-3xl font-semibold">Emotional Balance: </p>
          <p className="text-lg ">
            Cultivating self-awareness, managing stress effectively, and
            expressing emotions in healthy ways promote emotional wellness,
            fostering a sense of inner peace and stability.
          </p>
          <p className="text-3xl font-semibold">Social Connection:</p>
          <p className="text-lg ">
            Building and nurturing meaningful relationships with family,
            friends, and communities is vital for social wellness, creating a
            supportive network that enhances overall well-being and happiness.
          </p>
        </div>
      </div>
      <div className="text-center">
      <Link to='/wellnessDetails'>
      <button className="btn bg-blue-500 text-white ">See details</button>
      </Link>
      </div>
    </div>
  );
};

export default Wellness;
