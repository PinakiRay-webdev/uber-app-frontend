import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TiLocation } from "react-icons/ti";
import { FaDotCircle } from "react-icons/fa";
import { IoNavigate } from "react-icons/io5";
import { TbSquareDotFilled } from "react-icons/tb";
import homebg from "../../assets/home-bg.webp"


const Home = () => {

  const navigate = useNavigate()

  useEffect(() =>{
    const isToken = JSON.parse(localStorage.getItem('userCredentials'))?.token

    if(!isToken){
      navigate('/signup')
    }
  },[])
  return (
    <main className="flex-1">
      <div id="hero-section" className="flex w-full h-full lg:px-30 md:px-22 sm:px-12 px-8">
        <section id="left" className="h-full w-[50%] lg:pl-6">
          <p className="flex items-center gap-2 mt-16 font-[medium]">
            <TiLocation /> Bhubaneswar,IN{" "}
            <span className="font-[regular2] underline cursor-pointer">
              Change City
            </span>
          </p>
          <h1 className="font-[bold] text-6xl leading-tight">
            Go anywhere with <br /> Uber
          </h1>

          <form className="mt-3">
            <div className="py-3 px-4 w-[70%] bg-(--lightGray) rounded-md flex items-center gap-2">
              <i className="text-xl">
                <FaDotCircle />
              </i>
              <input
                type="text"
                className="flex-1 outline-none text-lg"
                placeholder="Pickup location"
              />
              <i className="text-xl">
                <IoNavigate />
              </i>
            </div>
            <div className="mt-4 py-3 px-4 w-[70%] bg-(--lightGray) rounded-md flex items-center gap-2">
              <i className="text-xl">
                <TbSquareDotFilled />
              </i>
              <input
                type="text"
                className="flex-1 outline-none text-lg"
                placeholder="Dropoff location"
              />
            </div>

            <div className="flex gap-6 items-center mt-8" >
                <button className="bg-black text-white font-[medium] px-8 py-3 rounded-lg" >See Prices</button>
                <button className="py-2 px-1 border-b cursor-pointer font-[regular2] ">Log in to see your recent activity</button>
            </div>
          </form>
        </section>
        <section id="right" className="h-full w-[50%] flex items-center lg:pr-6">
            <div className="w-full h-[87%] rounded-lg overflow-hidden mt-11 relative" >
                <img src={homebg} alt="" className="w-full h-full object-cover" />
                <div className="glasscard w-[90%] h-20 absolute-horizontal-center bottom-4 rounded-xl flex-space-between items-center px-5" >
                  <p className="text-white font-[medium]" >Reserve an airport drop off</p>
                  <button className="bg-white px-4 py-2 rounded-full font-[medium] text-sm">Schedule</button>
                </div>
            </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
