import Image from "next/image";

const NavbarComponent = () => {
  return (
    <nav id="navbar" className="px-20 py-5 bg-[#0060af]">
      <div className="w-full flex justify-between items-center">
        <div>
          <a href="#navbar">
            <Image
              src="https://astral-paints-landing.vercel.app/_next/image?url=%2FImages%2Flogo.png&w=256&q=75"
              width={150}
              height={100}
              alt="logo"
            />
          </a>
        </div>
        <div>
          <ul className="flex space-x-10">
            <li>
              <a
                href="#about"
                className="text-white hover:text-gray-400 font-semibold"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#category"
                className="text-white hover:text-gray-400 font-semibold"
              >
                Category
              </a>
            </li>

            <li>
              <a
                href="#service"
                className="text-white hover:text-gray-400 font-semibold"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#colour"
                className="text-white hover:text-gray-400 font-semibold"
              >
                Colours
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-gray-400 font-semibold"
              >
                Downloades
              </a>
            </li>
            <li>
              <a
                href="#join"
                className="text-white hover:text-gray-400 font-semibold"
              >
                Become a Dealer
              </a>
            </li>
            <li>
              <a
                href="#blog"
                className="text-white hover:text-gray-400 font-semibold"
              >
                Blogs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-gray-400 font-semibold"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 bg-white rounded-2xl text-[#0060af] hover:text-gray-400 font-semibold"
              >
                Enquire Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
