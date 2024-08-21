import Button from '../../../component/ui/Button';
import homePage from '/homePage.png';

const Home = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse  gap-80">
        <img src={homePage} className="max-w-3xl hidden md:block " />
        <div>
          <h1 className="text-5xl  md:text-8xl font-bold text-[#F77B00]">
            Consumer
          </h1>
          <h1 className="text-5xl  md:text-8xl mt-3">Service</h1>
          <div className="flex flex-row  items-center gap-2">
            <span className=" text-[#F77B00] text-7xl md:text-8xl font-semibold ">
              |
            </span>
            <p className="py-10  text-sm md:text-xl mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing quae aliquid
              blanditiis odit
            </p>
          </div>
          <div className="flex flex-row gap-3 justify-center">
            <Button
              title="My Complaints"
              onClick={() => {
                console.log('clicked');
              }}
              variant={'custom'}
            />
            <Button
              title="FAQ"
              onClick={() => {
                console.log('clicked');
              }}
              variant={'secondary'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
