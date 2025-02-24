import React from "react";
import Section from "./Section";
import Heading from "./heading";
import { roadmap } from "../constants/index";
import TagLine from "./Tagline";
import { grid } from "../assets";

const Roadmap = () => {
  return (
    <div>
      <Section crosses id="roadmap" className="overflow-hidden">
        <div className="container md:pb-10 ">
          <Heading tag="Ready to get started" title="What we're working on" />
          <div className="relative grid gap-6 md:grid-col-2 md:gap-4 md:pb-[7rem]">
            {roadmap.map((item) => {
              const status = item.status === "done" ? "Done" : "In progress";
              return (
                <div key={item.id}>
                  <div>
                    <div>
                      <img
                        src={grid}
                        className="w-full"
                        width={550}
                        height={550}
                        alt="Grid"
                      />
                    </div>
                    <div className="relative z-1">
                      <div className="flex items-center justify-between ">
                        <TagLine>{item.date}</TagLine>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Roadmap;
