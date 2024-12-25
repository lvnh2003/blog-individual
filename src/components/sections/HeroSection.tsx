const HeroSection = () => (
  <div className="bg-backgroundmain w-full bg-no-repeat bg-center absolute top-0 -z-10">
    <div className="absolute inset-0 bg-black bg-opacity-70" />
    <div className="h-[500px] flex flex-col justify-center relative">
      <h2 className="self-center p-4 text-7xl font-semibold text-header">
        Nguyen Ngoc Lanh
      </h2>
      <p className="self-center text-white p-4 text-2xl">
        I am a Software Engineer
      </p>
    </div>
  </div>
);

export default HeroSection;