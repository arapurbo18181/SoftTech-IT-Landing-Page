import React from "react";
import { Link } from "react-router-dom";
// import { motion } from 'framer-motion';

// const websiteVariants = {
//   hidden:{
//       opacity: 0,
//       x: -100
//   },
//   visible:{
//       opacity: 1,
//       x:0,
//       transition:{type:"just", delay: 1, duration:1}
//   }
// }

const websites = [
  {
    url: "https://softtechitskills.com/",
    title: "SoftTech-IT Skills",
  },
  {
    url: "https://softtechitskills.com/",
    title: "SoftTech-IT Skills",
  },
  {
    url: "https://softtechitskills.com/",
    title: "SoftTech-IT Skills",
  },
  {
    url: "https://softtechitskills.com/",
    title: "SoftTech-IT Skills",
  },
  {
    url: "https://softtechitskills.com/",
    title: "SoftTech-IT Skills",
  },
  {
    url: "https://softtechitskills.com/",
    title: "SoftTech-IT Skills",
  },
  {
    url: "https://softtechitskills.com/",
    title: "SoftTech-IT Skills",
  },
];

const Websites = () => {
  return (
    <section
      className="my-5 px-10"
      id="websites"
      // variants={websiteVariants}
      // initial="hidden"
      // animate="visible"
    >
      <div>
        <h1 className="text-[1.7rem] font-extrabold text-sky-500">
          Web
          <span className="underline underline-offset-[10px] text-[#f1971a]">
            sites
          </span>
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 w-full mt-10 px-5">
        {websites.map((item) => {
          return (
            <Link
              to={item.url}
              target="_blank"
              className="bg-gray-300 xl:w-full rounded-lg cursor-pointer border-2 shadow-lg shadow-gray-600 hover:scale-110 transition-all duration-500 p-2"
            >
              <div className="overflow-hidden rounded-t-md">
                <img
                  className="w-full scale-[1.05] transition-all duration-500 object-contain"
                  src="skills.png"
                />
              </div>
              <div className="flex justify-between items-center my-2 mx-2">
                <div className="">
                  <h2 className="text-lg font-bold"> {item.title} </h2>
                </div>
                <div>
                  <button className="text-sky-500 underline underline-offset-2 font-bold">
                    {" "}
                    View{" "}
                  </button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Websites;
