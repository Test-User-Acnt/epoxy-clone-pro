import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { reviews } from "@/lib/reviews";
import { site } from "@/lib/site";

export const Route = createFileRoute("/reviews")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Customer Reviews | Pacific Floors and Coatings Surrey BC" },
      {
        name: "description",
        content:
          "Read feedback from Surrey and Fraser Valley homeowners and businesses who chose Pacific Floors and Coatings for epoxy flooring.",
      },
      { property: "og:title", content: "Customer Reviews | Pacific Floors and Coatings" },
      {
        property: "og:description",
        content: "5.0-rated epoxy flooring reviews from Surrey, BC and the Fraser Valley.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://epoxy-clone-pro.lovable.app/reviews" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://epoxy-clone-pro.lovable.app/reviews" }],
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
            Feedback from Surrey and Fraser Valley homeowners and businesses who chose Pacific Floors and Coatings for their
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
