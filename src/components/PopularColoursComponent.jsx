import React from "react";

const PopularColoursComponent = ({
  homeColoursSubtitle,
  homeColoursTitle,
  homeColoursButtonTitle,
  colourCategories,
}) => {
  return (
    <section id="colour" className="my-20">
      <p className="my-4 text-lg font-semibold">{homeColoursSubtitle}</p>
      <div className="flex justify-between">
        <p className="my-2 text-3xl font-extrabold">{homeColoursTitle}</p>
        <button className="my-4 px-6 py-2 border border-green-600 text-green-700 text-xs font-semibold rounded-2xl">
          {homeColoursButtonTitle}
        </button>
      </div>
      <div className="my-4 grid grid-cols-6 gap-5">
        {colourCategories[0].colours.nodes.map((node, index) => (
          <div key={index} className="grid-item text-center">
            <div
              className="aspect-square p-2"
              style={{
                backgroundColor: node.colourInfo.selectColor,
              }}
            >
              <div className="aspect-square border border-white"></div>
            </div>
            <p className="p-1 text-md">{node.title}</p>
            <p className="p-1 text-sm text-gray-500">
              RGB: {node.colourInfo.colourRgb}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularColoursComponent;
