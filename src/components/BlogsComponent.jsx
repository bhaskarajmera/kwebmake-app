import React from "react";
import Image from "next/image";

const BlogsComponent = ({ blogSubtitle, blogTitle, blogs }) => {
  return (
    <section id="blog" className="my-20">
      {/* Blog */}
      <p className="my-4 text-lg font-semibold">{blogSubtitle}</p>
      <p className="my-4 text-3xl font-extrabold">{blogTitle}</p>
      <div className="my-10 grid grid-cols-3 grid-rows-2 gap-4">
        {blogs.map((blog, index) => {
          const { sourceUrl, __typename } = blog.featuredImage.node;
          let className = "";

          switch (index) {
            case 0:
              className = "col-span-2 row-start-1 row-end-1";
              break;
            case 1:
              className = "col-start-3 col-end-3 row-start-1 row-end-1";
              break;
            case 2:
              className = "col-start-1 col-end-1 row-start-2 row-end-2";
              break;
            case 3:
              className = "col-span-2 row-start-2 row-end-2";
              break;
            default:
              break;
          }

          return (
            <div key={index} className={`${className} relative`}>
              <Image
                src={sourceUrl}
                width={1000}
                height={1000}
                quality={100}
                alt={__typename}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex items-end justify-start">
                <div className="p-4">
                  <p className="text-white">
                    <i>
                      {new Date(blog.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </i>
                  </p>
                  <h2 className="text-white text-xl font-semibold">
                    {blog.title}
                  </h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BlogsComponent;
