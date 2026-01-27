// type Section = {
//   id: string;
//   title: string;
//   content: string[];
//   bullets?: string[];
// };

// type LegalPageProps = {
//   hero: {
//     title: string;
//     subtitle: string;
//     lastUpdated: string;
//   };
//   sections: Section[];
// };

export default function LegalPage({ hero, sections }) {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero */}
      <header className="mb-10">
        <h1 className="text-3xl font-bold">{hero.title}</h1>
        <p className="text-sm text-muted mt-2">
          Last updated: {hero.lastUpdated}
        </p>
        <p className="mt-4 text-gray-600">{hero.subtitle}</p>
      </header>

      {/* Sections */}
      <div className="space-y-8">
        {sections.map((section) => (
          <section key={section.id}>
            <h2 className="text-xl font-semibold mb-3">
              {section.title}
            </h2>

            {section.content.map((text, idx) => (
              <p key={idx} className="text-gray-600 mb-2">
                {text}
              </p>
            ))}

            {section.bullets && (
              <ul className="list-disc ml-6 mt-3 text-gray-600">
                {section.bullets.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
