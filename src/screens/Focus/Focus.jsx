import React from "react";
import { Excellence } from "../../components/Excellence";

export const Focus = () => {
  return (
    <div className="w-[1440px] h-[869px] bg-primary-1000 overflow-hidden">
      <div className="relative w-[1869px] h-[1178px] top-[-150px] left-[-246px]">
        <div className="absolute w-[1857px] h-[1091px] top-[88px] left-0">
          <div className="absolute w-[769px] h-[580px] top-[511px] left-[1088px] bg-primary-1100 rounded-[384.5px/290px] blur-[201px]" />
          <div className="absolute w-[769px] h-[580px] top-0 left-0 bg-primary-1100 rounded-[384.5px/290px] blur-[201px]" />
        </div>
        <div className="absolute w-[769px] h-[580px] top-[598px] left-[1100px] bg-primary-1100 rounded-[384.5px/290px] blur-[201px]" />
        <div className="absolute w-[769px] h-[580px] top-[118px] left-[70px] bg-primary-1100 rounded-[384.5px/290px] blur-[201px]" />
        <div className="absolute w-[1168px] h-[1168px] top-0 left-[382px] rounded-[584px] border-[3px] border-dashed border-primary-500" />
        <img
          className="absolute w-[1440px] h-[869px] top-[150px] left-[246px]"
          alt="Noise"
          src="https://c.animaapp.com/YHaDdAKD/img/noise.png"
        />
        <header className="inline-flex items-center gap-[11px] absolute top-[190px] left-[288px] bg-transparent">
          <div className="relative w-fit font-secondary-body-2 font-[number:var(--secondary-body-2-font-weight)] text-primary-50 text-[length:var(--secondary-body-2-font-size)] text-center tracking-[var(--secondary-body-2-letter-spacing)] leading-[var(--secondary-body-2-line-height)] whitespace-nowrap [font-style:var(--secondary-body-2-font-style)]">
            Our
          </div>
          <div className="relative w-fit mt-[-1.00px] font-primary-h2 font-[number:var(--primary-h2-font-weight)] text-primary-50 text-[length:var(--primary-h2-font-size)] tracking-[var(--primary-h2-letter-spacing)] leading-[var(--primary-h2-line-height)] whitespace-nowrap [font-style:var(--primary-h2-font-style)]">
            FOCUS
          </div>
        </header>
        <div className="inline-flex flex-col items-start gap-[40px] absolute top-[476px] left-[1101px]">
          <div className="relative w-[474px] h-[72px] mr-[-2.00px]">
            <p className="absolute w-[451px] top-0 left-[21px] [font-family:'Visby-Medium',Helvetica] font-medium text-primary-50 text-[16px] tracking-[0] leading-[24px]">
              We pursue excellence in every facet of our resort, from the warmest of services to the finest of
              amenities, all with one goal: crafting an extraordinary guest experience.
            </p>
            <img
              className="absolute w-[20px] h-[19px] top-[2px] left-0"
              alt="Gg tree"
              src="https://c.animaapp.com/YHaDdAKD/img/gg-tree-2.svg"
            />
          </div>
          <div className="relative w-[474px] h-[72px] mr-[-2.00px]">
            <p className="absolute w-[451px] top-0 left-[21px] [font-family:'Visby-Medium',Helvetica] font-medium text-primary-50 text-[16px] tracking-[0] leading-[24px]">
              We pursue excellence in every facet of our resort, from the warmest of services to the finest of
              amenities, all with one goal: crafting an extraordinary guest experience.
            </p>
            <img
              className="absolute w-[20px] h-[19px] top-[2px] left-0"
              alt="Gg tree"
              src="https://c.animaapp.com/YHaDdAKD/img/gg-tree-2.svg"
            />
          </div>
          <div className="relative w-[474px] h-[72px] mr-[-2.00px]">
            <p className="absolute w-[451px] top-0 left-[21px] [font-family:'Visby-Medium',Helvetica] font-medium text-primary-50 text-[16px] tracking-[0] leading-[24px]">
              We pursue excellence in every facet of our resort, from the warmest of services to the finest of
              amenities, all with one goal: crafting an extraordinary guest experience.
            </p>
            <img
              className="absolute w-[20px] h-[19px] top-[2px] left-0"
              alt="Gg tree"
              src="https://c.animaapp.com/YHaDdAKD/img/gg-tree-2.svg"
            />
          </div>
        </div>
        <div className="absolute w-[655px] h-[605px] top-[320px] left-[360px]">
          <div className="relative h-[605px]">
            <Excellence className="!absolute !left-0 !top-0" focusArea="default" text="02" text1="SUSTAINABILTY" />
            <Excellence className="!absolute !left-[305px] !top-0" focusArea="default" text="01" text1="EXCELLENCE" />
            <Excellence
              className="!absolute !left-[156px] !top-[255px]"
              focusArea="default"
              text="03"
              text1="INNOVATION"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
