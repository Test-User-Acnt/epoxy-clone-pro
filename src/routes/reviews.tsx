import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { reviews } from "@/lib/reviews";
import { site } from "@/lib/site";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Customer Reviews | Go2Epoxy Vancouver Epoxy Flooring" },
      {
        name: "description",
        content:
          "Read real feedback from Metro Vancouver homeowners and businesses who chose Go2Epoxy for their epoxy floor installation.",
      },
      { property: "og:title", content: "Customer Reviews | Go2Epoxy" },
      {
        property: "og:description",
        content: "5.0-rated epoxy flooring reviews from across Metro Vancouver.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/reviews" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: Reviews,
});

function Reviews() {
  return (
    <>
      <Header />
      <main>
        <section className="mx-auto max-w-3xl px-4 py-16 text-center">
          <p className="eyebrow">Real results, real feedback</p>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">Customer reviews</h1>
          <p className="mt-5 text-muted-foreground">
            Feedback from Metro Vancouver homeowners and businesses who chose Go2Epoxy for their
            floor upgrade. Rated {site.rating} on Google.
          </p>
        </section>

        <section className="mx-auto grid max-w-6xl gap-5 px-4 pb-16 md:grid-cols-2">
          {reviews.map((r) => (
            <figure key={r.name} className="panel border-l-2 border-l-primary p-6">
              <blockquote className="text-sm text-muted-foreground">"{r.text}"</blockquote>
              <figcaption className="mt-4 text-sm font-semibold">
                {r.name}
                <span className="block text-xs font-normal text-muted-foreground">{r.location}</span>
              </figcaption>
            </figure>
          ))}
        </section>

        <section className="mx-auto grid max-w-6xl gap-8 px-4 pb-20 md:grid-cols-2">
          <h2 className="text-3xl font-extrabold">Your floors could be next.</h2>
          <QuoteForm heading="Get your free quote" />
        </section>
      </main>
      <Footer />
    </>
  );
}
