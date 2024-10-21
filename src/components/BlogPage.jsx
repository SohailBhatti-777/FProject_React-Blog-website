import React, { useEffect, useState } from "react";
import BlogCards from "./BlogCards";
import Pagination from "./Pagination";
import CategorySelection from "./CategorySelection";
import SideBar from "./SideBar";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12; // blogs per page
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  // Fetch blogs based on selected category and current page
  useEffect(() => {
    async function fetchBlogs() {
      let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;

      // filterl by category
      if (selectedCategory) {
        url += `&category=${selectedCategory}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      setBlogs(data); // Update blog data
    }
    fetchBlogs();
  }, [currentPage, pageSize, selectedCategory]); // Re-fetch when page or category changes

  // page changing btn
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category); // Set selected category
    setCurrentPage(1); // Reset to first page
    setActiveCategory(category);
  };
  return (
    <div>
      {/* category section */}
      <div>
        <CategorySelection
          onSelectCategory={handleCategoryChange}
          selectedCategory={selectedCategory}
          activeCategory={activeCategory}
        />
      </div>

      {/* blogCards section */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* blog cards component */}
        <BlogCards
          blogs={blogs}
          currentPage={currentPage}
          selectedCategory={selectedCategory} // Pass selected category to BlogCards
          pageSize={pageSize}
        />

        {/* sidebar component */}
        <div>
          <SideBar />
        </div>
      </div>
      {/* pagination section */}
      <div>
        <Pagination
          onPageChange={handlePageChange}
          currentPage={currentPage}
          blogs={blogs}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
};
export default BlogPage;
