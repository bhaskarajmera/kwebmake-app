import React from "react";
import Image from "next/image";

const CategoriesComponent = ({
  homeCategorySubtitle,
  homeCategoryTitle,
  categories,
}) => {
  return (
    <section id='category' className="my-20">
      {/* Category - Wide Range of Colours */}
      <p className="my-4 text-lg font-semibold">{homeCategorySubtitle}</p>
      <p className="my-4 text-3xl font-extrabold">{homeCategoryTitle}</p>
      <div className="my-10 grid grid-cols-4 grid-rows-2 gap-4">
        {categories.map((category, index) => {
          const { sourceUrl } = category.image.node;
          let className = "";

          switch (index) {
            case 0:
              className = "col-span-2 row-span-2";
              break;
            case 1:
              className = "col-start-3 row-start-1";
              break;
            case 2:
              className = "col-start-4 row-start-1";
              break;
            case 3:
              className = "col-start-3 row-start-2";
              break;
            case 4:
              className = "col-start-4 row-start-2";
              break;
            default:
              break;
          }

          return (
            <a
              key={index}
              href={category.link}
              className={`${className} relative`}
            >
              <Image
                className="object-cover w-full h-full"
                src={sourceUrl}
                width={300}
                height={300}
                alt={category.title}
              />
              <div className="absolute inset-0 flex items-end justify-start">
                <h2 className="px-4 py-4 text-white text-xl font-semibold">
                  {category.title}
                </h2>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default CategoriesComponent;
