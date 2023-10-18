import React from "react";
import bgShadowDesktop from "/images/bg-pattern-desktop.svg";
import bgWomanDesktop from "/images/illustration-woman-online-desktop.svg";
import bgBoxDesktop from "/images/illustration-box-desktop.svg";

const BgDesktop: React.FC = () => {
  return (
    <div
      className="relative h-full"
      style={{
        background: `url(${bgWomanDesktop}), url(${bgShadowDesktop})`,
        backgroundRepeat: `no-repeat, no-repeat`,
        backgroundSize: `472px 359px, 966px 945px`,
        backgroundPosition: `-84px 66px, -574px -297px`,
      }}
    >
      <img
        src={bgBoxDesktop}
        alt="illustration-box-desktop"
        className="absolute top-[202px] -left-[92px]"
      />
    </div>
  );
};

export default BgDesktop;
