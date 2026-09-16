import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Go2Epoxy | Free Epoxy Flooring Quote in Vancouver" },
      {
        name: "description",
        content:
          "Request a free on-site epoxy flooring estimate in Vancouver. Call (778) 707-7090 or send us your project details and we'll get back to you.",
      },
      { property: "og:title", content: "Contact Go2Epoxy" },
      {
        property: "og:description",
        content: "Free on-site epoxy flooring estimates across Metro Vancouver.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <Header />
      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2">
          <div>
            <p className="eyebrow">Contact us</p>
            <h1 className="mt-3 text-4xl font-extrabold">Let's talk about your floor</h1>
            <p className="mt-5 text-muted-foreground">
              Tell us a bit about the space and we'll arrange a free on-site estimate anywhere in
              Metro Vancouver or the Fraser Valley.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              <li>
                <span className="eyebrow block">Phone</span>
                <a href={site.phoneHref} className="text-muted-foreground hover:text-foreground">
                  {site.phone}
                </a>
              </li>
              <li>
                <span className="eyebrow block">Email</span>
                <a href={`mailto:${site.email}`} className="text-muted-foreground hover:text-foreground">
                  {site.email}
                </a>
              </li>
              <li>
                <span className="eyebrow block">Address</span>
                <span className="text-muted-foreground">{site.address}</span>
              </li>
            </ul>
          </div>
          <QuoteForm heading="Request a free quote" />
        </section>
      </main>
      <Footer />
    </>
  );
}
