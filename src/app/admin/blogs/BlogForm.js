"use client";

import DescriptionEditor from "@/components/Admin/DescriptionEditor";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";

const BlogForm = ({
  type,
  _id,
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

  // Router
  const router = useRouter();

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
      newTitle.length > 0 &&
      newCategory &&
      newThumbnail.length > 0 &&
      newBlogBanner.length > 0 &&
      newBody.length > 0 &&
      newKeywords.length > 0
    ) {
      const blogData = {
        title: newTitle,
        category: newCategory,
        thumbnail: newThumbnail,
        blogBanner: newBlogBanner,
        body: newBody,
        keywords: newKeywords.split(","),
      };

      try {
        setLoading(true);
        const res = await fetch("/api/blog", {
          method: "POST",
          body: JSON.stringify(blogData),
        });

        if (res.ok) {
          setLoading(false);
          setNewTitle("");
          setNewCategory("");
          setNewThumbnail("");
          setNewBlogBanner("");
          setNewBody("");
          setNewKeywords("");
          toast.success("Blog Created Successfully");
          router.refresh();
        } else {
          setLoading(false);
        }
      } catch (error) {
        toast.error("Something went wrong please try agin");
        setLoading(false);
      }
    } else {
      toast.warning("Please fill required filed");
    }
  };

  // HANDLE UPDATE
  const handleUpdate = async () => {
    setLoading(true);

    const blogData = {
      title: newTitle,
      category: newCategory,
      thumbnail: newThumbnail,
      blogBanner: newBlogBanner,
      body: newBody,
      keywords: newKeywords.toString().split(","),
    };

    try {
      const res = await fetch(`/api/blog?id=${_id}`, {
        method: "PATCH",
        body: JSON.stringify(blogData),
      });
      if (res.ok) {
        setLoading(false);
        toast.success("Blog Updated successfully");
        router.refresh();
      } else {
        setLoading(false);
        toast.error("Failed to update blog");
      }
    } catch (error) {
      setLoading(false);
      toast.error("Failed to update blog");
    }
  };

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

 const arr = ["april", "april", "may", "JULM"]

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
              value={newTitle}
            />
          </div>

          {/* Blog Categories */}
          <div className="col-4">
            <label htmlFor="PublishedDate">Select Category:</label>
            <select
              name="PublishedDate"
              className="dash-input-form"
              onChange={(e) => setNewCategory(e.target.value)}
            >
              {Array.isArray(blogCategories) &&
                blogCategories.map((data, index) => {
                  return (
                    <option
                      key={index}
                      value={newCategory}
                      selected={data._id === newCategory?._id}
                      onClick={() => setNewCategory(data)}
                    >
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
            <ImageGallery
              gridCols={4}
              getSingleImage={setNewThumbnail}
              prevImages={newThumbnail && [newThumbnail]}
            />
          </div>

          <div className="col-6">
            <label htmlFor="BlogBanner">Add Banner Image</label>
            <ImageGallery
              gridCols={4}
              getSingleImage={setNewBlogBanner}
              prevImages={newBlogBanner && [newBlogBanner]}
            />
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
            value={newKeywords?.toString()}
            onChange={(e) => setNewKeywords(e.target.value.toString())}
          />
        </div>
        {/* BUTTON AREA */}
        <div className="d-flex align-items-center mt-4">
          <Button
            disabled={loading}
            type="submit"
            variant="success"
            size="lg"
            className="me-3"
          >
            Published
          </Button>
          {loading && <Spinner />}
        </div>
      </form>
    </>
  );
};

export default BlogForm;
