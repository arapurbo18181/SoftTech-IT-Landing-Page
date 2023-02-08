import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import GeneralGroups from "./GeneralGroups";
import OtherGroups from "./OtherGroups";
import SkillsGroups from "./SkillsGroups";
import WordpressOfflineGroups from "./WordpressOfflineGroups";

const generalGroups = [
  {
    url: "https://www.facebook.com/groups/softtechitinstitute/",
    title: "SoftTech-IT Institute - ফ্রিল্যান্সিং / আউটসোর্সিং",
  },
  {
    url: "https://www.facebook.com/groups/softtechit/",
    title: "SoftTech-IT - ফ্রিল্যান্সিং / আউটসোর্সিং",
  },
  {
    url: "https://www.facebook.com/groups/softtechitforum/",
    title: "SoftTech-IT Student's Forum",
  },
  {
    url: "https://www.facebook.com/groups/onlinesofttechit/",
    title: "SoftTech-IT Web Development Online Course",
  },
];

const skillsGroups = [
  {
    url: "https://www.facebook.com/groups/1549107172231327/",
    title: "SoftTech-IT: Digital Marketing (Online Batch)",
  },
];

const wordpressOfflineGroups = [
  {
    url: "https://www.facebook.com/groups/softtechit225/",
    title: "SoftTech-IT Batch. 225",
  },
  {
    url: "https://www.facebook.com/groups/softtechit142/",
    title: "SoftTech-IT Batch 142",
  },
  {
    url: "https://www.facebook.com/groups/softtechit237",
    title: "SoftTech-IT Batch 237",
  },
  {
    url: "https://www.facebook.com/groups/softtechit169",
    title: "SoftTech-IT Batch 169",
  },
];

const otherGroups = [
  {
    url: "https://www.facebook.com/groups/softtechitgraphic/",
    title: "SoftTech-IT Graphic Design - ফ্রিল্যান্সিং / আউটসোর্সিং",
  },
];

const Groups = () => {
  return (
    <section className="my-10 px-10" id="groups">
    {/* //! Title */}
      <div>
        <h1 className="text-[2rem] font-extrabold text-sky-500">
          Facebook{" "}
          <span className="underline underline-offset-[10px] text-[#f1971a]">
            Groups
          </span>
        </h1>
      </div>
      <div className="px-5 flex flex-col justify-start items-start space-y-16"
      >

        {/* //! General Groups */}
        <GeneralGroups generalGroups={generalGroups} />

        {/* //! Skills Group */}
        <SkillsGroups skillsGroups={skillsGroups} /> 

        {/* //! Wordpress Offline Groups */}
        <WordpressOfflineGroups wordpressOfflineGroups={wordpressOfflineGroups} />

        {/* //! Other Groups */}
        <OtherGroups otherGroups={otherGroups} />

      </div>
    </section>
  );
};

export default Groups;
