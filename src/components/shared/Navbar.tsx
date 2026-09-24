"use client";
import Image from 'next/image';
import logo from "@/assets/logo.png";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { usePlan } from "@/context/PlanContext";
const Navbar = () => {
    const pathname = usePathname();
    const { plan, saved } = usePlan();
    return (
        <div className='sticky top-0 z-50'>
            <div className="navbar bg-neutral text-neutral-content shadow-sm px-10 lg:px-20 border-b-gray-700 border">
  
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         <Link href="/"  className={pathname === "/" ? "text-[#ccff00]" : "text-black"}>Workouts</Link>
         <Link href="/my-plan" className={pathname === "/my-plan" ? "text-[#ccff00]" : "text-black"}>My Plan</Link>
      </ul>
    </div>
     <Image 
     src={logo}
     alt='logo' />
     <h1 className='font-bold text-2xl mx-2'>FITLOG</h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-2">
      <Link href="/" className={pathname === "/" ? "text-[#ccff00]" : ""} > Workouts </Link>
       <Link href="/my-plan" className={ pathname === "/my-plan" ? "text-[#ccff00]" : "" } > My Plan </Link>
    </ul>
  </div>
  <div className="navbar-end gap-4">
    <button className='flex gap-1'> 
        <Link href="/my-plan">
       <p className='text-gray-300'>Plan</p>
        </Link>
    <Link href="/my-plan" className="rounded-full bg-[#ccff00] text-black px-2  font-semibold">
   {plan.length}
    </Link>
    </button>
    <button className='gap-1 flex'>
        <Link href="/my-plan">
        <p className='text-gray-300'>Saved</p>
        </Link>
        <Link href="/my-plan"className="rounded-full border border-[#ccff00] px-2  font-semibold">
        {saved.length}
        </Link>
    </button>
    
  </div>
</div>
        </div>
    );
};

export default Navbar;