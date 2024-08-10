import HomeSvg from '/homeSvg.png';

const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        <div className="lg:col-span-2">
          <h1 className="text-6xl lg:text-8xl font-bold text-[#F77B00]">
            Consumer
          </h1>
          <h5 className="py-4 text-6xl lg:text-8xl">Service</h5>
          <div className="flex items-center mt-3">
            <span className="text-[#F57C00] text-6xl md:text-6xl">|</span>
            <div className="ml-4">
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
              <p className="text-sm">
                Voluptate neque in inventore illo voluptatem vel consequuntur
                officiis aliquid quo
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img
            src={HomeSvg}
            alt="Hero image"
            className="hidden lg:block"
            height={'auto'}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
