import React from "react";
import { Link } from "react-router-dom";

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
    <section className="my-5 px-10" id="websites">
      <div>
        <h1 className="text-[1.7rem] font-extrabold text-sky-500">
          Web
          <span className="underline underline-offset-[10px] text-[#f1971a]">
            sites
          </span>
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-10 w-full mt-10 px-5">
        {websites.map((item) => {
          return (
            <Link
              to={item.url}
              target="_blank"
              className="bg-gray-300 w-full rounded-lg cursor-pointer border-2 shadow-lg shadow-gray-600 hover:scale-110 transition-all duration-500 p-2"
            >
              <div className="overflow-hidden rounded-t-md">
                <img className="w-full scale-[1.05] transition-all duration-500 object-contain" src="skills.png" />
              </div>
              <div className="my-3 mx-2">
                <h2 className="font-semibold"> {item.title} </h2>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Websites;
