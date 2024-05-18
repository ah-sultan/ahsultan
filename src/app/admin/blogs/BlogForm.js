"use client";

import DescriptionEditor from "@/components/Admin/DescriptionEditor";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const BlogForm = ({
  type,
  title,
  category,
  thumbnail,
  blogBanner,
  keywords,
  body,
}) => {
  const [blogCategories, setBlogCategories] = useState([]);
  const [newTitle, setNewTitle] = useState(title);
  const [newCategory, setNewCategory] = useState(category);
  const [newThumbnail, setNewThumbnail] = useState(thumbnail);
  const [newBlogBanner, setNewBlogBanner] = useState(blogBanner);
  const [newBody, setNewBody] = useState(body);
  const [newKeywords, setNewKeywords] = useState(keywords);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Get BlogCategories Data
    fetch("/api/blog-category", {
      method: "GET",
    })
      .then((getData) => getData.json())
      .then((data) => setBlogCategories(data.categories));
  }, []);

  // HANDLE POST
  const handlePost = async () => {
    if (
      title.length > 0 &&
      category.length > 0 &&
      thumbnail.length > 0 &&
      blogBanner.length > 0 &&
      body.length > 0 &&
      keywords.length > 0
    ) {
      const blogData = {
        title: newTitle,
        category: newCategory,
        thumbnail: newThumbnail,
        blogBanner: newBlogBanner,
        body: newBody,
        keywords: newKeywords,
      };

      try {
        setLoading(true);
        const res = await fetch("/api/blogs/", {
          method: "POST",
          body: JSON.stringify(blogData),
        });
      } catch (error) {}
    } else {
    }
  };

  // HANDLE UPDATE
  const handleUpdate = async () => {};

  // HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    if (type === "post") {
      handlePost();
    }

    if (type === "update") {
      handleUpdate();
    }
  };
  return (
    <>
      <form className="dash-add-blog-from" onSubmit={handleSubmit}>
        {/* Blog title */}
        <div className="row">
          <div className="col-8">
            <label htmlFor="BlogTitle">Blog Title</label>
            <input
              type="text"
              className="dash-input-form"
              name="BlogTitle"
              placeholder="Write BLog Title"
              required
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </div>

          {/* Blog Categories */}
          <div className="col-4">
            <label htmlFor="PublishedDate">Select Category:</label>
            <select name="PublishedDate" className="dash-input-form">
              {Array.isArray(blogCategories) &&
                blogCategories.map((data, index) => {
                  return (
                    <option key={index} onClick={() => setNewCategory(data)}>
                      {data.title}
                    </option>
                  );
                })}
            </select>
          </div>
        </div>
        {/* BLOG THUMBNAIL AND BANNER */}
        <div className="row mt-4">
          <div className="col-6">
            <label htmlFor="BlogThumbnail">Add Blog Thumbnail</label>
            <ImageGallery gridCols={4} getSingleImage={setNewThumbnail} />
          </div>

          <div className="col-6">
            <label htmlFor="BlogBanner">Add Banner Image</label>
            <ImageGallery gridCols={4} getSingleImage={setNewBlogBanner} />
          </div>
        </div>

        {/* BLOG DESCRIPTION */}
        <div className="mt-4">
          <label>BLog Description</label>
          <div>
            <DescriptionEditor setValue={setNewBody} value={newBody} />
          </div>
        </div>
        <br />
        <br />
        {/* BLOG DESCRIPTION */}
        <div className="mt-4">
          <label htmlFor="blogKeyWords">Key Words</label>
          <textarea
            name="blogKeyWords"
            className="dash-input-form"
            style={{ minHeight: "100px" }}
            placeholder="Write Keywords"
          />
        </div>
        {/* BUTTON AREA */}
        <div className="flex align-items-center mt-4">
          <Button type="button" variant="primary" size="lg" className="me-3">
            Save Blog
          </Button>
          <Button type="button" variant="success" size="lg">
            Published
          </Button>
        </div>
      </form>
    </>
  );
};

export default BlogForm;
