export default function ServicesSkeleton() {
  return (
    <section className="grid gap-12">
      <div className="h-8 w-64 bg-gray-400 rounded mx-auto" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-48 bg-gray-400 rounded-lg" />
        ))}
      </div>
    </section>
  );
}
