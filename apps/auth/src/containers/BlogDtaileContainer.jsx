import React from "react";
import BlogDetailsHero from "../components/blog/BlogDetailsHero";
import BlogContent from "../components/blog/BlogContent";
import { useParams } from "react-router-dom";
import { useBlog } from "../hooks/useBlog";
import Footer from "../components/Footer";
import FooterContainer from "./FooterContainer";

const BlogDtaileContainer = () => {
  const { id } = useParams();
  const { resolveBlogDetailesById } = useBlog();
  const serverBlogData = [];
  const blog = resolveBlogDetailesById(id, serverBlogData);
  console.log(id);
  console.log(blog);
  return (
    <main>
      <BlogDetailsHero
        title={blog.title}
        author={blog.author}
        date={blog.date}
      />
      <BlogContent content={blog.content} />
      <FooterContainer />
    </main>
  );
};

export default BlogDtaileContainer;
