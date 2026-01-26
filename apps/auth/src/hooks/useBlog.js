import { blogSchema } from "@repo/app-schema";

export const useBlog = () => {
  const resolveBlogs = (serverData) => {
    const hasData =
      serverData && Array.isArray(serverData) && serverData.length > 0;

    return hasData ? serverData : blogSchema;
  };
  const resolveBlogDetailesById = (id, serverData) => {
   console.log(blogSchema)
    const blogDetailes =
      Array.isArray(serverData) && serverData.length > 0
        ? serverData
        : blogSchema;
    return blogDetailes.find((blog) => blog.id === id);
  };
  return {
    resolveBlogs,
    resolveBlogDetailesById,
  };
};
