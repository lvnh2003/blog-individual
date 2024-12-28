import HeaderTitle from "../icon/HeaderTitle";
import Image from "../Image";
import Progress from "../Progress";


const AboutSection = () => (
  <div className="mt-[400px] py-16 flex bg-white justify-center space-x-6">
    <div className="p-4">
      <Image src="/assets/images/avatar.png" size={500} alt="avatar" />
    </div>
    <div className="text-black mt-6">
      <HeaderTitle
        color={"black"}
        value={"About me."}/>
      <p className="text-gray-400 pb-3">
        WEBSITE DEVELOPER & AI INTEGRATION
      </p>
      <p className="mb-6 max-w-4xl text-gray-400 font-semibold">
      My name is <span className="text-gray-600">Lanh</span>, and I am a software engineer with a strong passion for 
      creating websites and applying AI technology to real-world solutions, 
      aiming to deliver practical value and innovation to everyday life. 
      I believe in the power of technology to transform ideas into impactful solutions. 
      With a focus on crafting user-friendly websites and leveraging AI, I strive to bridge the gap
       between innovation and practicality, creating experiences that truly make a difference.
      </p>
      <HeaderTitle
        color={"black"}
        value={"My Skills."}/>
         <div className="flex flex-col space-y-16 pt-6">
              <Progress value={90} title="Website Deloveloper" className="h-2" />
              <Progress value={70} title="AI Integration" className="h-2" />
          </div>
    </div>
  </div>
);

export default AboutSection;