import Image from "next/image";

const FooterComponent = () => {
  return (
    <section
      id="footer"
      style={{
        backgroundImage: `url(
          https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0yMzJiYXRjaDMtbnVubnktMDEuanBn.jpg
        )`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="px-20 py-10"
    >
      <div className="grid grid-rows-2 gap-10">
        <div className="flex justify-center items-center">
          <p className="text-3xl text-white font-semibold">Group Company</p>
        </div>
        <div>
          <ul className="flex justify-around items-center">
            <li>
              <Image
                src="https://www.astralpipes.com/wp-content/themes/astral_pipes/images/logo.png"
                width={120}
                height={120}
                alt="logo"
              />
            </li>
            <li>
              <Image
                src="https://www.astraladhesives.com/assets/images/logo.svg"
                width={120}
                height={120}
                alt="logo"
              />
            </li>
            <li>
              <Image
                src="https://astralbathware.com/wp-content/uploads/2022/09/astral_bathware.svg"
                width={120}
                height={120}
                alt="logo"
              />
            </li>
            <li>
              <Image
                src="https://gem-paints.com/images/header_gem_logo.png"
                width={120}
                height={120}
                alt="logo"
              />
            </li>
            <li>
              <Image
                src="https://www.bonditusa.com/cdn/shop/files/bond-it-logo_300x300.jpg?v=1617204484"
                width={120}
                height={120}
                alt="logo"
              />
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-10" />
      <div className="grid grid-cols-12 gap-5 items-center">
        <div className="grid-item col-span-5">
          <div className="flex justify-between items-center">
            <div>
              <a href="#navbar">
                <Image
                  src="https://astral-paints-landing.vercel.app/_next/image?url=%2FImages%2Flogo.png&w=256&q=75"
                  width={180}
                  height={180}
                  alt="logo"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="grid-item col-span-7">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-[#eedcb2] font-semibold">
                Sign Up for our Newsletter
              </p>
              <p className="text-xs text-white">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <div>
              <input
                type="text"
                placeholder="Your Email Address"
                className="w-60 px-10 py-3 bg-transparent border border-gray-300 rounded-2xl focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-grya-400"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 items-start">
        <div className="my-5 grid-item col-span-5">
          <ul className="leading-loose">
            <li className="my-5">
              <a className="text-sm text-[#eedcb2] font-semibold">Reach Us</a>
            </li>
            <li className="my-5">
              <a className="text-sm text-white flex items-center gap-5">
                <span>
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="20px"
                    height="20px"
                    viewBox="0 0 92.26 122.88"
                    style={{ enableBackground: "new 0 0 92.26 122.88" }}
                    xmlSpace="preserve"
                    fill="#ffffff"
                  >
                    <g>
                      <path d="M47.49,116.85c6.31-4.01,11.98-8.87,16.92-14.29c10.73-11.75,17.97-26.11,20.87-40.2c2.88-13.91,1.52-27.54-4.85-38.06 c-1.81-3.02-4.08-5.78-6.78-8.26c-7.74-7.05-16.6-10.41-25.52-10.5c-9.37-0.07-18.87,3.45-27.27,10.14 c-3.58,2.86-6.53,6.15-8.82,9.78c-5.9,9.28-7.69,20.8-5.74,32.85c1.97,12.23,7.78,25.02,17.04,36.61 c6.44,8.08,14.54,15.58,24.18,21.91L47.49,116.85L47.49,116.85z M46.13,21.16c7.05,0,13.45,2.86,18.06,7.49 c4.63,4.63,7.49,11,7.49,18.06c0,7.05-2.86,13.45-7.49,18.06c-4.63,4.63-11,7.49-18.06,7.49c-7.05,0-13.45-2.86-18.06-7.49 c-4.63-4.63-7.49-11-7.49-18.06c0-7.05,2.86-13.45,7.49-18.06C32.7,24.02,39.07,21.16,46.13,21.16L46.13,21.16z M60.51,32.33 c-3.67-3.67-8.78-5.97-14.38-5.97c-5.63,0-10.71,2.27-14.38,5.97c-3.67,3.67-5.97,8.78-5.97,14.38c0,5.63,2.27,10.71,5.97,14.38 c3.67,3.67,8.78,5.97,14.38,5.97c5.63,0,10.71-2.27,14.38-5.97c3.67-3.67,5.97-8.78,5.97-14.38C66.47,41.08,64.21,36,60.51,32.33 L60.51,32.33z M68.52,106.27c-5.6,6.12-12.09,11.61-19.42,16.06c-0.88,0.66-2.13,0.75-3.13,0.11 c-10.8-6.87-19.85-15.13-26.99-24.09C9.15,86.02,2.94,72.34,0.83,59.16c-2.15-13.36-0.14-26.2,6.51-36.68 c2.63-4.13,5.97-7.89,10.07-11.14C26.78,3.88,37.51-0.07,48.17,0c10.28,0.09,20.42,3.9,29.22,11.93c3.09,2.81,5.67,5.99,7.78,9.48 c7.15,11.77,8.69,26.81,5.56,42.01c-3.11,15.04-10.8,30.33-22.18,42.8L68.52,106.27L68.52,106.27z" />
                    </g>
                  </svg>
                </span>
                #417/418, 11th Cross, 4th Phase, Peenya industrial Area,
                <br />
                Bangalore - 560058
              </a>
            </li>
            <li className="my-5">
              <a className="text-xs text-white flex items-center gap-5">
                {" "}
                <span>
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="20px"
                    height="20px"
                    viewBox="0 0 122.88 122.267"
                    enableBackground="new 0 0 122.88 122.267"
                    xmlSpace="preserve"
                    fill="#fff"
                  >
                    <g>
                      <path d="M33.822,50.291c4.137,7.442,8.898,14.604,15.074,21.133C55.1,77.984,62.782,83.962,72.771,89.03l0.01,0.005l0.002-0.005 c0.728,0.371,1.421,0.362,2.072,0.118c0.944-0.353,1.927-1.137,2.883-2.086c0.729-0.726,1.643-1.924,2.631-3.223 c3.846-5.054,8.601-11.301,15.314-8.193c0.142,0.065,0.276,0.141,0.402,0.226l22.373,12.852c0.08,0.046,0.157,0.095,0.23,0.147 c2.966,2.036,4.177,5.172,4.19,8.683c0.014,3.621-1.329,7.674-3.274,11.101c-2.565,4.517-6.387,7.502-10.761,9.525 c-4.17,1.928-8.798,2.954-13.267,3.608c-6.989,1.025-13.578,0.374-20.288-1.692c-6.55-2.017-13.176-5.385-20.4-9.86l-0.526-0.326 c-3.326-2.06-6.906-4.276-10.389-6.904C31.108,93.296,18.007,79.283,9.512,63.904C2.361,50.958-1.552,36.995,0.581,23.681 C1.75,16.375,4.901,9.743,10.333,5.35c4.762-3.853,11.188-5.94,19.448-5.203c0.973,0.084,1.793,0.639,2.255,1.419l0.006-0.003 l14.324,24.27c2.11,2.718,2.344,5.415,1.203,8.096c-0.943,2.218-2.892,4.251-5.476,6.168c-0.786,0.65-1.708,1.325-2.659,2.021 C36.236,44.459,32.578,47.136,33.822,50.291L33.822,50.291z M44.67,75.422C38.066,68.44,33.035,60.88,28.695,53.065 c-0.076-0.123-0.144-0.253-0.202-0.39c-3.174-7.459,2.52-11.625,7.493-15.262c0.845-0.618,1.663-1.217,2.401-1.829l0.002,0.003 c0.043-0.036,0.088-0.071,0.135-0.105c1.843-1.354,3.171-2.647,3.678-3.837c0.289-0.679,0.182-1.426-0.466-2.265 c-0.111-0.129-0.213-0.271-0.303-0.423L27.795,5.852c-5.869-0.241-10.419,1.321-13.784,4.044 c-4.239,3.429-6.723,8.759-7.674,14.699c-1.905,11.894,1.716,24.594,8.292,36.5c8.078,14.623,20.575,27.977,32.864,37.25 c3.379,2.55,6.776,4.653,9.932,6.607l0.526,0.326c6.818,4.223,13.017,7.386,19.052,9.244c5.876,1.809,11.634,2.38,17.729,1.486 c4.009-0.587,8.113-1.485,11.668-3.129c3.351-1.55,6.248-3.785,8.134-7.104c1.496-2.637,2.53-5.653,2.521-8.222 c-0.006-1.63-0.472-3.029-1.605-3.844L93.2,80.93c-2.461-1.081-5.629,3.081-8.193,6.45c-1.104,1.452-2.125,2.792-3.156,3.817 c-1.477,1.466-3.118,2.723-4.962,3.411c-2.136,0.799-4.395,0.834-6.755-0.37l0.002-0.004C59.522,88.849,51.323,82.457,44.67,75.422 L44.67,75.422z" />
                    </g>
                  </svg>
                </span>
                +91 - 80 - 42552555
              </a>
            </li>
            <li className="my-5">
              <a className="text-xs text-white flex items-center gap-5">
                <span>
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="20px"
                    height="20px"
                    viewBox="0 0 122.879 88.855"
                    enableBackground="new 0 0 122.879 88.855"
                    xmlSpace="preserve"
                    fill="#ffffff"
                  >
                    <g>
                      <path d="M7.048,0h108.784c1.939,0,3.701,0.794,4.977,2.069c1.277,1.277,2.07,3.042,2.07,4.979v74.759 c0,1.461-0.451,2.822-1.221,3.951c-0.141,0.365-0.361,0.705-0.662,0.994c-0.201,0.189-0.422,0.344-0.656,0.461 c-1.225,1.021-2.799,1.643-4.508,1.643H7.048c-1.937,0-3.701-0.793-4.979-2.07C0.794,85.51,0,83.748,0,81.807V7.048 c0-1.941,0.792-3.704,2.068-4.979C3.344,0.792,5.107,0,7.048,0L7.048,0z M5.406,78.842l38.124-38.22L5.406,9.538V78.842 L5.406,78.842z M47.729,44.045L8.424,83.449h105.701L76.563,44.051L64.18,54.602l0,0c-0.971,0.83-2.425,0.877-3.453,0.043 L47.729,44.045L47.729,44.045z M80.674,40.549l36.799,38.598V9.198L80.674,40.549L80.674,40.549z M8.867,5.406l53.521,43.639 l51.223-43.639H8.867L8.867,5.406z" />
                    </g>
                  </svg>
                </span>
                info@gem-paints.com
              </a>
            </li>
          </ul>
        </div>
        <div className="my-5 grid-item col-span-7">
          <div className="flex justify-between items-start">
            <div>
              <ul className="leading-8">
                <li>
                  <a className="text-[#eedcb2] text-sm font-semibold" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="text-white text-sm " href="#">
                    About Astrals
                  </a>
                </li>
                <li>
                  <a className="text-white text-sm " href="#">
                    Paint Journey
                  </a>
                </li>
                <li>
                  <a className="text-white text-sm " href="#">
                    Group Companies
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="leading-8">
                <li>
                  <a className="text-[#eedcb2] text-sm font-semibold" href="#">
                    Category
                  </a>
                </li>
                <li>
                  <a className="text-white text-sm " href="#">
                    Interior Paints
                  </a>
                </li>
                <li>
                  <a className="text-white text-sm " href="#">
                    Exterior Paints
                  </a>
                </li>
                <li>
                  <a className="text-white text-sm " href="#">
                    Undercoats
                  </a>
                </li>
                <li>
                  <a className="text-white text-sm " href="#">
                    Painting Tools
                  </a>
                </li>
                <li>
                  <a className="text-white text-sm " href="#">
                    Water Proofing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="leading-8">
                <li>
                  <a className="text-[#eedcb2] text-sm font-semibold" href="#">
                    Services
                  </a>
                </li>
                <li>
                  <a className="text-white text-sm " href="#">
                    Wall Painting
                  </a>
                </li>
                <li>
                  <a className="text-white text-sm " href="#">
                    Water Solution
                  </a>
                </li>
                <li>
                  <a className="text-white text-sm " href="#">
                    Painting
                  </a>
                </li>
                <li>
                  <a className="text-white text-sm " href="#">
                    Colour Shades
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="leading-8">
                <li>
                  <a className="text-[#eedcb2] text-sm font-semibold" href="#">
                    Downloads
                  </a>
                </li>
                <li>
                  <a className="text-[#eedcb2] text-sm font-semibold" href="#">
                    Become A Dealer
                  </a>
                </li>
                <li>
                  <a className="text-[#eedcb2] text-sm font-semibold" href="#">
                    Blogs
                  </a>
                </li>
                <li>
                  <a className="text-[#eedcb2] text-sm font-semibold" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterComponent;
