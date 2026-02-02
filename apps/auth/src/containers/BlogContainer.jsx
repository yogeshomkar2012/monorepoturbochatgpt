import BlogHero from "../components/blog/BlogHero";
import { BlogList } from "../components/blog/BlogLIst";

import { useBlog } from "../hooks/useBlog";
import FooterContainer from "./FooterContainer";

const BlogContainer = () => {
  const { resolveBlogs } = useBlog();

  // future API response
  const serverBlogs = [];

  const resolvedBlogs = resolveBlogs(serverBlogs);

  return (
    <main className="grid gap-0">
      <BlogHero />
      <BlogList blogs={resolvedBlogs} />
     
    </main>
  );
};

export default BlogContainer;
