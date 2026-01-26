import { Link } from "react-router-dom";
import { AUTH_ROUTES } from "../../constants/routes.constants";

export const BlogCard = ({ blog }) => {
  console.log(blog.id);
  return (
    <article className="bg-white border border-primary rounded-2xl p-6 hover:shadow-md transition">
      <div className="text-sm text-slate-500 mb-2">
        {blog.date} · {blog.author}
      </div>

      <h3 className="text-xl text-primary font-semibold mb-3 ">{blog.title}</h3>

      <p className="text-slate-600 mb-4">{blog.excerpt}</p>

      <Link
        to={`${AUTH_ROUTES.BLOG}/${blog.id}`}
        className="text-primary font-medium hover:underline hover:underline-offset-8 cursor-pointer"
      >
        Read More →
      </Link>
    </article>
  );
};
