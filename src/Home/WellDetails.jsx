import well from '../../public/images/Wellness-Wheel.png'
const WellDetails = () => {
    return (
        <div className='m-5'>
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
          <p className="text-3xl font-semibold">Physical Wellness:</p>
          <p className="text-lg ">
          Engaging in regular exercise, maintaining a balanced diet, and getting adequate sleep are essential components of physical wellness, ensuring a healthy and active lifestyle.
          </p>
          <p className="text-3xl font-semibold">Environmental Wellness:</p>
          <p className="text-lg ">
          Embracing eco-conscious habits, such as reducing waste, conserving energy, and supporting sustainable initiatives, fosters environmental wellness, ensuring a harmonious relationship between individuals and the planet they inhabit.
          </p>
          <p className="text-3xl font-semibold">Intellectual Wellness:</p>
          <p className="text-lg ">
          Nurturing intellectual wellness involves a commitment to lifelong learning, critical thinking, and stimulating curiosity, enriching the mind and promoting personal growth, creativity, and adaptability.
          </p>
          <p className="text-3xl font-semibold">Occupational Wellness:</p>
          <p className="text-lg ">
          Achieving occupational wellness means finding fulfillment in one's work, balancing career aspirations with personal life, and cultivating a positive work environment, leading to a sense of purpose and satisfaction in professional pursuits.
          </p>
          <p className="text-3xl font-semibold">Spiritual Wellness:</p>
          <p className="text-lg ">
          Spiritual wellness is cultivated through self-reflection, meditation, or engaging in practices aligned with personal beliefs and values, fostering inner peace, mindfulness, and a deep sense of connection with oneself and the universe.
          </p>
          <p className="text-3xl font-semibold">Financial Wellness:</p>
          <p className="text-lg ">
          Practicing financial wellness involves effective budgeting, saving, investing, and managing debt, empowering individuals to achieve their financial goals, reduce stress, and secure a stable future, ensuring peace of mind and a sense of financial security.
          </p>
        </div>
      </div>
        </div>
    );
};

export default WellDetails;