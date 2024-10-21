import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaClock, FaUser, FaUserClock } from "react-icons/fa";
import SideBar from "../components/SideBar";
// import { FaClock } from "react-icons/fa";

const SingleBlog = () => {
  const data = useLoaderData();
  const {
    title,
    image,
    category,
    author,
    published_data,
    reading_time,
    content,
  } = data[0];

  return (
    <div>
      <div className="py-40 bg-black text-center text-white px-4">
        <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Single Blog Page
        </h2>
      </div>

      {/* blog details */}
      <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12">
        <div className="lg:w-3/4 mx-auto">
          <div>
            <img src={image} alt="" className="w-full mx-auto rounded" />
          </div>
          <h2 className="text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer">
            {title}
          </h2>
          <p className="mb-3 text-gray-600">
            <FaUser className="inline-flex items-center mr-2" /> {author} |{" "}
            {published_data}
          </p>
          <p className="mb-3 text-gray-600">
            <FaClock className="inline-flex items-center mr-2" /> {reading_time}
          </p>
          <p className="text-base text-gray-500 mb-6"> {content}</p>
          <div className="text-base text-gray-500">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
              itaque. Reiciendis provident, nihil nemo a facilis officia dolore
              totam similique sunt ducimus esse corrupti eum sed voluptates at.
              Quas hic tenetur distinctio, aliquid molestias quae, dolore
              perspiciatis culpa inventore itaque, excepturi veritatis unde
              porro consectetur! Tempora quisquam repellendus iste. Repellat?
            </p>
            <br />
            <a>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non vero
              est necessitatibus excepturi ipsa repellat cum recusandae magnam,
              corrupti laudantium ab, libero consequuntur. Saepe, molestias
              harum omnis commodi dignissimos recusandae dolore modi
              necessitatibus sit labore cum autem alias ipsa ducimus? Autem, rem
              tenetur. Consectetur necessitatibus, iusto aspernatur nesciunt ut
              provident?
            </a>
            <br />
            <a>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
              ex error delectus iusto sequi. Nulla excepturi, beatae rerum earum
              unde ea tempora distinctio? Voluptate accusantium deserunt, animi
              vitae eaque repudiandae iste, est exercitationem corrupti
              consequatur alias excepturi nam error architecto maxime obcaecati
              repellendus consequuntur laudantium. Cumque, nisi laborum adipisci
              deserunt voluptatem et nihil ex consectetur, tenetur distinctio
              illum, at iste? Aliquid, ea ipsam pariatur impedit sequi nostrum
              animi assumenda, facilis beatae corporis repellendus fugiat id
              maiores et labore praesentium. Adipisci consequatur ipsa assumenda
              praesentium sapiente quaerat porro expedita aliquid fugit in!
              Numquam consectetur nobis repellat accusamus possimus tenetur
              neque deserunt!
            </a>
          </div>
          <div></div>
        </div>
        <div className="lg:w-1/2">
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
