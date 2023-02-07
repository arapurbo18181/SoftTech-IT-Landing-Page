import React from "react";
import { Link } from "react-router-dom";

const pages = [
    {
        url: "https://www.facebook.com/softtechitinstitute",
        title: "SoftTech-IT Institute"
    },
    {
        url: "https://www.facebook.com/softtechitofficial",
        title: "SoftTech-IT Limited"
    },
    {
        url: "https://www.facebook.com/softtechitsupport",
        title: "Softtechit InstituteWordpress/WebSupport"
    },
    {
        url: "https://www.facebook.com/profile.php?id=100083388510319",
        title: "SoftTech-IT"
    },
    {
        url: "https://www.facebook.com/softtechitinstitutegraphic",
        title: "SoftTech-IT Institute - Graphic Design"
    },
    {
        url: "facebook.com/softtechitskills",
        title: "SoftTech IT Skills"
    },
    {
        url: "https://www.facebook.com/softtechitinstitutecareers",
        title: "SoftTech-IT Institute Careers"
    },
    {
        url: "https://www.facebook.com/softtechitcareer",
        title: "SoftTech-IT Career"
    },
    {
        url: "https://www.facebook.com/getthemeplugin",
        title: "GetThemePlugin.com"
    },
]

const Pages = () => {
  return (
    <section className="my-10 px-10" id="pages">
      <div>
        <h1 className="text-[1.7rem] font-extrabold text-sky-500">
          Facebook <span className="underline underline-offset-[10px] text-[#f1971a]">
            Pages
          </span>
        </h1>
      </div>
      <div className="grid grid-cols-6 gap-10 w-full mt-10 px-5">
        {pages.map((item) => {
          return (
            <Link
              to={item.url}
              target="_blank"
              className="bg-gray-300 w-full rounded-lg cursor-pointer border-2 shadow-lg shadow-gray-600 hover:scale-110 transition-all duration-500 p-2"
            >
              <div className="overflow-hidden">
                <img className="w-full scale-[1.05] transition-all duration-500 object-contain rounded-sm" src="softtechitinstitute.png" />
              </div>
              <div className="my-1 mx-2">
                <h2 className="text-base font-semibold"> {item.title} </h2>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Pages;
