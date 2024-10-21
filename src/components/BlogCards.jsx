import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa6";

// Destructuring props
const BlogCards = ({ blogs, currentPage, seclectedCategory, pageSize }) => {
  // Filter blogs based on selected category
  const filteredBlogs = blogs
    .filter(
      (blogs) => !seclectedCategory || blogs.category === seclectedCategory
    ) // If no category selected, show all blogs
    .slice((currentPage - 1) * pageSize, currentPage * pageSize); // Pagination
  // console.log(filteredBlogs);

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
      {filteredBlogs.length > 0 ? (
        filteredBlogs.map((blog) => (
          <Link
            to={`/blogs/${blog.id}`}
            key={blog.id}
            className="p-5 shadow-lg rounded cursor-pointer"
          >
            <div>
              <img src={blog.image} ate="" className="w-full" />
            </div>
            <h3 className="mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer">
              {blog.title}
            </h3>
            <p className="mb-2 text-gray-600">
              <FaUser className="inline-flex items-center mr-2" />
              {blog.author}
            </p>
            <p className="text-sm text-gray-500">
              Published: {blog.published_date}
            </p>
          </Link>
        ))
      ) : (
        <p>No blogs available for this category.</p>
      )}
    </div>
  );
};

export default BlogCards;
