import Image from "next/image";

const ServicesComponent = ({ homeServicesSubtitle, homeServicesTitle }) => {
  return (
    <section id="service" className="my-20">
      {/* Services - Make your life comfortable */}
      <p className="my-4 text-lg font-semibold">{homeServicesSubtitle}</p>
      <p className="my-4 text-3xl font-extrabold">{homeServicesTitle}</p>
      <p className="text-gray-400 text-xs">No Query data for images.</p>

      <div className="my-10 grid grid-cols-3 gap-5">
        <div className="relative grid-item border border-gray-300 aspect-square">
          <Image
            className="w-full h-full"
            src="https://artaistry.com/cdn/shop/articles/wall_painting_ideas_18.png?v=1681800405&width=480"
            width={200}
            height={200}
            alt="logo"
          />
          <div className="absolute inset-0 h-fit top-auto bottom-0 p-4 flex flex-col justify-end items-start gap-3 bg-gradient-to-r from-yellow-200 from-10% via-yellow-300 via-30% to-orange-500 to-90%">
            <p className="text-lg font-bold">Wall Painting</p>
            <p className="text-md">Lorem, ipsum dolor sit amet consectetur.</p>
            <button className="px-3 py-2 text-xs bg-white rounded-2xl font-semibold">
              Read More
            </button>
          </div>
        </div>
        <div className="relative grid-item border border-gray-300 aspect-square">
          <Image
            className="w-full h-full"
            src="https://cdn.shopify.com/s/files/1/0565/4039/7655/files/wall_painting_ideas_2.png"
            width={200}
            height={200}
            alt="logo"
          />
          <div className="absolute inset-0 h-fit top-auto bottom-0 p-4 flex flex-col justify-end items-start gap-3 bg-gradient-to-r from-yellow-200 from-10% via-orange-200 via-30% to-orange-400 to-90%">
            <p className="text-lg font-bold">Water Solution</p>
            <p className="text-md">Lorem, ipsum dolor sit amet consectetur.</p>
            <button className="px-3 py-2 text-xs bg-white rounded-2xl font-semibold">
              Read More
            </button>
          </div>
        </div>
        <div className="relative grid-item border border-gray-300 aspect-square">
          <Image
            className="w-full h-full"
            src="https://cdn.shopify.com/s/files/1/0565/4039/7655/files/wall_painting_ideas_10.png"
            width={200}
            height={200}
            alt="logo"
          />
          <div className="absolute inset-0 h-fit top-auto bottom-0 p-4 flex flex-col justify-end items-start gap-3 bg-gradient-to-r from-yellow-500 from-10% via-yellow-600 via-30% to-orange-200 to-90%">
            <p className="text-lg font-bold">Painting</p>
            <p className="text-md">Lorem, ipsum dolor sit amet consectetur.</p>
            <button className="px-3 py-2 text-xs bg-white rounded-2xl font-semibold">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesComponent;
