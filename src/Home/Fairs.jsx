import fair from "../../public/images/images.jfif";
import fair2 from "../../public/images/istockphoto-1306247421-170667a.webp";
import fair3 from "../../public/images/360_F_579232550_T652ihi4kkYuhOEJXMEJRb10DjiHZsw9.jpg";
import fair4 from "../../public/images/istockphoto-638362318-612x612.jpg"

const Fairs = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img src={fair} className="w-full h-96" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src={fair2}
            className="w-full h-96 "
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src={fair3}
            className="w-full h-96"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src={fair4}
            className="w-full h-96"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>

      <div className=" m-5 space-y-4">
        <p className="text-3xl text-center font-bold text-blue-600">About The Health Fair</p>
        <p className="text-left text-lg">A health fair is an organized event where a variety of healthcare providers, organizations, and professionals come together to provide health information, screenings, and services to the public. Health fairs are typically held in community centers, schools, workplaces, or other public venues and aim to promote health and wellness among attendees. Here are some key details about health fairs:</p>
        <p className="text-left text-lg"><span className="text-blue-600">1. Purpose:</span> Health fairs are organized to raise awareness about various health issues, promote preventive care, and educate the community about healthy lifestyles. They often focus on topics such as general health, nutrition, fitness, mental health, disease prevention, and available healthcare services.</p>

        <p className="text-left text-lg"><span className="text-blue-600">2.Services and Screenings:</span> Health fairs offer a range of services and screenings, including blood pressure checks, cholesterol screenings, diabetes screenings, vision and hearing tests, body mass index (BMI) measurements, and dental check-ups. Some health fairs also provide vaccinations, flu shots, and information about immunizations.</p>
        <p className="text-left text-lg"><span className="text-blue-600">3. Information and Education: </span> Health fairs provide informational booths and sessions where healthcare professionals and organizations share valuable health-related information. Attendees can learn about healthy eating habits, exercise routines, stress management techniques, and resources available in the community.</p>
        <p className="text-left text-lg"><span className="text-blue-600">4. Health Promotion:</span> Health fairs promote healthy behaviors and encourage individuals to take proactive steps toward improving their health. Participants can access resources that empower them to make informed decisions about their well-being and adopt healthier lifestyles.</p>
      </div>
    </div>
  );
};

export default Fairs;
