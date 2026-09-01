import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { Footer } from "../components/site/Footer";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Aditya Enterprises — Anodizing Facility in Pune" },
      {
        name: "description",
        content:
          "Reach the Aditya Enterprises team in Pune. Phone, email and facility address for anodizing enquiries.",
      },
      { property: "og:title", content: "Contact Aditya Enterprises" },
      { property: "og:description", content: "Reach our Pune anodizing facility." },
    ],
  }),
});

function ContactPage() {
  return (
    <>
      <main className="pt-32">
        <section className="mx-auto max-w-6xl px-6 py-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-600">
            Get in touch
          </span>
          <h1 className="mt-4 text-5xl font-bold tracking-tight text-[#130B29] md:text-6xl">
            Talk to our finishing team
          </h1>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <Phone className="h-6 w-6 text-yellow-600" />
              <div className="mt-4 text-sm text-gray-500">Call the works</div>
              <div className="mt-2 space-y-4">
                <div>
                  <a href="tel:+919850292893" className="block text-lg font-semibold text-[#130B29]">
                    +91 9850292893
                  </a>
                  <div className="mt-1 text-sm text-gray-500">Mr. Sachin Kirdak</div>
                </div>
                <div>
                  <a href="tel:+918208302347" className="block text-lg font-semibold text-[#130B29]">
                    +91 8208302347
                  </a>
                  <div className="mt-1 text-sm text-gray-500">Mr. Sunil Kirdak</div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <Mail className="h-6 w-6 text-yellow-600" />
              <div className="mt-4 text-sm text-gray-500">Email us</div>
              <a href="mailto:adityaentp123@gmail.com" className="mt-1 block text-lg font-semibold text-[#130B29]">
                adityaentp123@gmail.com
              </a>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <MapPin className="h-6 w-6 text-yellow-600" />
              <div className="mt-4 text-sm text-gray-500">Facility</div>
              <a
                href="https://maps.app.goo.gl/x43jxXPCLZxDKrGg6"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-lg font-semibold text-[#130B29] hover:underline"
              >
                SR No. 95/1, Landge Nagar, Pune Nashik Highway, Bhosari, Pune-411039
              </a>
            </div>
          </div>

          <div className="mt-14 overflow-hidden rounded-3xl border border-gray-200 shadow-xl">
            <iframe
              title="Aditya Enterprises facility location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.9592476140417!2d73.84387597595568!3d18.639293582477383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c778f0fdf0d1%3A0x7536a6807d7c070c!2sAditya%20Enterprises!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              className="h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}