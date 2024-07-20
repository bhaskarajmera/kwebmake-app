import Image from "next/image";
import React from "react";

const JoinComponent = ({
  homeJoinSubtitle,
  homeJoinTitle,
  homeJoinDescription,
  homeJoinBackgroundImage,
  homeJoinBackgroundImageName,
  homeJoinButtonTitle,
}) => {
  const __handleHomeJoinDescription = () => {
    return homeJoinDescription;
  };
  return (
    <section id="join" className="my-20">
      {/* Successs Journey */}
      <div className="relative">
        <Image
          className="object-cover w-full h-full"
          src={homeJoinBackgroundImage}
          width={1000}
          height={1000}
          alt={homeJoinBackgroundImageName}
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="px-50 flex flex-col items-center gap-1 justify-center">
            <p className="text-lg text-white font-semibold">
              {homeJoinSubtitle}
            </p>
            <p className="text-3xl text-white font-bold">{homeJoinTitle}</p>
            <p
              className="my-2 text-md text-white text-center"
              dangerouslySetInnerHTML={{
                __html: __handleHomeJoinDescription(),
              }}
            />
            <button className="my-2 px-4 py-2 bg-white text-xs font-semibold rounded-2xl">
              {homeJoinButtonTitle}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinComponent;
