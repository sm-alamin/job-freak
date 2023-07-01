import banner from '../../assets/banner.svg';
const Home = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row h-full lg:h-screen bg-slate-100 dark:bg-slate-400 justify-between items-center gap-5 mt-5">
      <div>
          <img src={banner} alt=""/>
      </div>
      <div className='space-y-7 text-center'>
          <h3 className='lg:text-3xl'><span className='lg:text-green-400 dark:text-white'>Get Updates</span> for Jobs and Internships openings from different companies</h3>
          <h1 className='text-xl lg:text-5xl'>We are Here for you ! ! !</h1>
      </div>
    </div>
          
        
    </>
  );
};

export default Home;
