import React from "react";
import Image from "next/image";

const AboutComponent = ({
  homeAboutSubtitle,
  homeAboutTitle,
  homeAboutDescription,
  homeAboutButtonTitle,
  homeAboutVideoImage,
  homeAboutVideoImageName,
}) => {
  const __handleHomeAboutDescription = () => {
    let content = homeAboutDescription.replace("\n/g", "<br>");
    return content;
  };
  return (
    <section id="about" className="my-20">
      {/* About - Bringing your Dreams to life */}
      <div className="my-4 grid grid-cols-2 gap-5">
        <div className="grid-item">
          <p className="my-4 text-lg font-semibold">{homeAboutSubtitle}</p>
          <p className="my-4 text-3xl font-extrabold">{homeAboutTitle}</p>
          <p
            className="my-4 text-md text-gray-700 leading-6 space-y-3"
            dangerouslySetInnerHTML={{ __html: __handleHomeAboutDescription() }}
          />
          <button className="my-4 px-6 py-2 border border-red-600 text-red-700 text-xs font-semibold rounded-2xl">
            {homeAboutButtonTitle}
          </button>
        </div>
        <div className="grid-item">
          <Image
            className="w-full h-fit"
            src={homeAboutVideoImage}
            alt={homeAboutVideoImageName}
            width={700}
            height={700}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
