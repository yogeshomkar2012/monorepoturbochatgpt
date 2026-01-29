// packages
import { SectionWrapper } from "@repo/ui";
// packages

export default function Contact() {
  return (
    <SectionWrapper>
      {/* ===== Main Grid ===== */}
      <div className="max-w-7xl mx-auto px-6 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* ===== Left: Contact Info ===== */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-primary font-serif underline decoration-warning underline-offset-8">
              Get in Touch
            </h2>
            <p className="text-slate-600">
              Reach out to us through any of the methods below.
            </p>

            <div className="grid gap-6">
              <div className="p-6 border rounded-xl border-border bg-text-white">
                <h3 className="font-semibold mb-1 text-primary">📍 Address</h3>
                <p className="text-slate-600">
                  123 Transport Street, Bangalore, India
                </p>
              </div>

              <div className="p-6 border rounded-xl border-border bg-text-white">
                <h3 className="font-semibold mb-1  text-primary">📞 Phone</h3>
                <p className="text-slate-600">+91 98765 43210</p>
              </div>

              <div className="p-6 border rounded-xl border-border bg-text-white">
                <h3 className="font-semibold mb-1 text-primary">✉️ Email</h3>
                <p className="text-slate-600">support@transportapp.com</p>
              </div>
            </div>
          </div>

          {/* ===== Right: Contact Form ===== */}
          <div className="border border-border bg-text-white rounded-2xl p-8 shadow-sm ">
            <h2 className="text-2xl font-semibold mb-6 text-primary underline underline-offset-8 decoration-warning font-serif text-center">
              Send a Message
            </h2>

            <form className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1 text-primary ">
                  Name
                </label>
                <input
                  type="text"
                  className="border-border w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-primary">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 border-border"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-primary">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 border-border"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
