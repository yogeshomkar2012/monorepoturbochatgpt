export default function Career() {
  return (
    <section className="w-full">
      {/* ===== Hero ===== */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Careers</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Join our team and help us build the future of transportation.
          </p>
        </div>
      </div>

      {/* ===== Why Join Us ===== */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Why Work With Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border rounded-xl p-6 text-center">
            <h3 className="font-semibold text-lg mb-2">🚀 Growth</h3>
            <p className="text-slate-600">
              Learn fast, grow your career, and work on real-world problems.
            </p>
          </div>

          <div className="border rounded-xl p-6 text-center">
            <h3 className="font-semibold text-lg mb-2">🤝 Team Culture</h3>
            <p className="text-slate-600">
              Friendly team, open communication, and supportive leadership.
            </p>
          </div>

          <div className="border rounded-xl p-6 text-center">
            <h3 className="font-semibold text-lg mb-2">💡 Innovation</h3>
            <p className="text-slate-600">
              Work with modern tech and build impactful products.
            </p>
          </div>
        </div>
      </div>

      {/* ===== Open Positions ===== */}
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Open Positions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Job Card */}
            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">
                Frontend Developer
              </h3>
              <p className="text-slate-600 mb-4">
                React • Tailwind • Redux
              </p>
              <p className="text-slate-500 mb-6">
                Build beautiful, fast, and scalable user interfaces.
              </p>
              <button className="text-blue-600 font-medium hover:underline">
                Apply Now →
              </button>
            </div>

            {/* Job Card */}
            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">
                Backend Developer
              </h3>
              <p className="text-slate-600 mb-4">
                Node.js • API • Database
              </p>
              <p className="text-slate-500 mb-6">
                Design secure and scalable backend systems.
              </p>
              <button className="text-blue-600 font-medium hover:underline">
                Apply Now →
              </button>
            </div>

            {/* Job Card */}
            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">
                UI/UX Designer
              </h3>
              <p className="text-slate-600 mb-4">
                Figma • UX Research
              </p>
              <p className="text-slate-500 mb-6">
                Design intuitive and delightful user experiences.
              </p>
              <button className="text-blue-600 font-medium hover:underline">
                Apply Now →
              </button>
            </div>

            {/* Job Card */}
            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">
                Operations Manager
              </h3>
              <p className="text-slate-600 mb-4">
                Logistics • Planning
              </p>
              <p className="text-slate-500 mb-6">
                Manage and optimize transportation operations.
              </p>
              <button className="text-blue-600 font-medium hover:underline">
                Apply Now →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ===== CTA ===== */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Didn’t Find Your Role?
          </h2>
          <p className="text-slate-600 mb-8">
            Send us your resume and we’ll reach out when there’s a match.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Send Resume
          </button>
        </div>
      </div>
    </section>
  );
}
