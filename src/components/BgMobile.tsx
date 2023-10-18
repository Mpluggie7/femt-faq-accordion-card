import React from "react";
import bgShadowMobile from "/images/bg-pattern-mobile.svg";
import bgWomanMobile from "/images/illustration-woman-online-mobile.svg";

const BgMobile: React.FC = () => {
  return (
    <div className="w-full h-fit absolute -top-[8.25em] left-0 right-0 bottom-0">
      <img
        src={bgShadowMobile}
        alt="bg-pattern-mobile"
        className="bgShadow absolute top-[115px] left-[50%] -translate-x-[50%]"
      />
      <img
        src={bgWomanMobile}
        alt="illustration-woman-online-mobile"
        className="bgWomen absolute w-[240px] top-0 left-[50%] -translate-x-[50%]"
      />
    </div>
  );
};

export default BgMobile;
