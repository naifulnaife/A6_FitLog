import Image from 'next/image';
import banner from "@/assets/banner.png"
import { CircleArrowRight } from 'lucide-react';

const Banner = () => {
    return (
        <div className='bg-black p-10 lg:p-20'>
            <div className="hero  border-gray-700 border  bg-gray-900 rounded-xl p-15 ">
  <div className="hero-content lg:gap-30 flex-col lg:flex-row-reverse">
    <Image
    src={banner}
    alt='banner'></Image>
    <div>
      <p className='text-[#C2F800] pb-2'>WORKOUT LIBRARY</p>
      <h1 className="text-5xl font-extrabold text-white">TRAIN WITH INTENT. LOG <br></br> EVERY SET.</h1>
      <p className="py-6 text-gray-400">FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br></br> into todays plan, and watch the weeks work add up.</p>
      <a href="#library" className="btn bg-[#C2F800] rounded-lg p-5 text-black" >  <CircleArrowRight size={20} /> BROWSE WORKOUTS </a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;