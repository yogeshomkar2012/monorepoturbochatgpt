 const BlogContent = ({ content }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <p className="text-slate-700 leading-relaxed whitespace-pre-line">
          {content}
        </p>
      </div>
    </section>
  );
};
export default BlogContent