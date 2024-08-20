import homePage from '/homePage.png';

const Home = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse  gap-80">
        <img src={homePage} className="max-w-3xl hidden md:block " />
        <div>
          <h1 className="text-2xl  md:text-8xl font-bold text-[#F77B00]">Consumer</h1>
          <h1 className="text-2xl  md:text-8xl mt-3">Service</h1>
          <div className="flex flex-row mt-8 items-center gap-2">
            <span className=" text-[#F77B00] text-7xl font-bold ">|</span>
            <p className="py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing quae aliquid
              blanditiis odit sit delectus mollitia. Facilis, aspernatur?
            </p>
          </div>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
