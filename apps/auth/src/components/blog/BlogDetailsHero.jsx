export default function BlogDetailsHero({ title, author, date }) {
  return (
    <section className="pt-24 pb-12 bg-slate-900 text-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-slate-300 text-sm">
          {date} · {author}
        </p>
      </div>
    </section>
  );
}
