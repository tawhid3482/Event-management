import { Helmet } from "react-helmet";
import Banner from "./Banner";
import Services from "./Services";
import Wellness from "./Wellness";
import Yoga from "./Yoga";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Health-Home</title>
            </Helmet>
            <Banner></Banner>
            <Services></Services>
            <Yoga></Yoga>
            <Wellness></Wellness>
        </div>
    );
};

export default Home;