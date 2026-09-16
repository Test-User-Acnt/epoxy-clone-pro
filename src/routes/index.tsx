import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { CtaBand } from "@/components/CtaBand";
import { services, site } from "@/lib/site";
import { reviews } from "@/lib/reviews";
import hero from "@/assets/hero-garage.jpg";
import metallic from "@/assets/metallic-epoxy.jpg";
import flake from "@/assets/flake-epoxy.jpg";
import solid from "@/assets/solid-epoxy.jpg";
import sealed from "@/assets/sealed-concrete.jpg";

const images: Record<string, string> = {
  "metallic-epoxy": metallic,
  "flake-epoxy": flake,
  "solid-epoxy": solid,
  "sealed-concrete": sealed,
};

const faqs = [
  {
    q: "How durable are epoxy floors, and how long do they last?",
    a: "A properly prepared and installed epoxy floor commonly lasts 10 to 20 years in a residential garage, and many years under heavy commercial traffic. Longevity comes down to surface prep, coating thickness, and how the floor is used.",
  },
  {
    q: "Are epoxy floors slippery when wet?",
    a: "A high-gloss coating can be slick when wet, so we can add an anti-slip aggregate to the top coat. We recommend it for entryways, wash bays, and any area that regularly sees water.",
  },
  {
    q: "How long does installation and curing take?",
    a: "Most residential garages are completed in one to two days. Light foot traffic is usually fine after 24 hours, and vehicles after roughly 72 hours depending on the system and temperature.",
  },
  {
    q: "Can you fix a cracked or pitted concrete slab?",
    a: "Yes. We diamond grind the slab, repair cracks, spalls, and pitting, and fill low spots before coating so the finished floor is smooth and well bonded.",
  },
  {
    q: "How much does a new epoxy floor cost?",
    a: "Pricing depends on square footage, slab condition, and the system you choose. We provide free on-site estimates so the quote reflects your actual floor.",
  },
  {
    q: "Do you install epoxy flooring outside Vancouver?",
    a: "We serve Metro Vancouver and the Fraser Valley, including Burnaby, Richmond, Surrey, Coquitlam, Langley, Abbotsford, and the North Shore.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Epoxy Flooring Vancouver | Garage & Shop Floors | Go2Epoxy" },
      {
        name: "description",
        content:
          "Professional epoxy flooring installation in Vancouver and the Fraser Valley. Metallic, flake, solid, and clear coatings for garages, shops, and warehouses. Free estimates.",
      },
      { property: "og:title", content: "Epoxy Flooring Vancouver | Go2Epoxy" },
      {
        property: "og:description",
        content:
          "Metallic, flake, solid, and sealed concrete epoxy floors installed across Metro Vancouver. Free on-site estimates.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Go2Epoxy",
          description: "Epoxy flooring and concrete coating contractor serving Metro Vancouver.",
          telephone: "+1-778-707-7090",
          email: "info@go2epoxy.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "2870 Arbutus St",
            addressLocality: "Vancouver",
            addressRegion: "BC",
            postalCode: "V6J 3Y7",
            addressCountry: "CA",
          },
          areaServed: "Metro Vancouver, British Columbia",
          aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "30" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden">
          <img
            src={hero}
            alt="Metallic epoxy garage floor installed in Vancouver"
            width={1600}
            height={1008}
            className="absolute inset-0 h-full w-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
          <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
            <div>
              <p className="eyebrow">5-star flooring transformations</p>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
                Professional Epoxy Flooring Installation in Vancouver
              </h1>
              <p className="mt-5 max-w-xl text-muted-foreground">
                Upgrade your space with a beautiful floor that's made to last. At Go2Epoxy we
                deliver clean, durable coatings for garages, basements, showrooms, and industrial
                spaces across Metro Vancouver and the Fraser Valley.
              </p>
              <ul className="mt-6 space-y-2 text-sm font-medium">
                <li>7+ years of experience</li>
                <li>Fast, well-managed installations</li>
                <li>Competitive warranty on every job</li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/services"
                  className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
                >
                  View Our Services
                </Link>
                <a
                  href={site.phoneHref}
                  className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition hover:border-primary"
                >
                  Call {site.phone}
                </a>
              </div>
            </div>
            <QuoteForm />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16">
          <p className="eyebrow">Our services</p>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
              Garage, Commercial & Industrial Epoxy Flooring
            </h2>
            <Link to="/services" className="text-sm font-semibold text-primary">
              View all services →
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {services.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group relative overflow-hidden rounded-xl border border-border"
              >
                <img
                  src={images[s.slug]}
                  alt={s.title}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-background/85 px-5 py-4">
                  <h3 className="text-base font-bold">{s.title}</h3>
                  <span className="text-primary">→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-surface py-16">
          <div className="mx-auto max-w-6xl px-4">
            <p className="eyebrow">Residential, commercial, industrial</p>
            <h2 className="mt-2 max-w-2xl text-3xl font-extrabold sm:text-4xl">
              Flooring solutions for any project, from single-car garages to commercial spaces
            </h2>
            <p className="mt-5 max-w-3xl text-muted-foreground">
              Whether you're a homeowner, a business owner, or a general contractor, we tailor the
              system to the way your floor gets used. Garages, basements, workshops, showrooms,
              warehouses, and retail spaces all get the same careful preparation and finish.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16">
          <p className="eyebrow">Our reviews speak for themselves</p>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
              See what our customers have to say
            </h2>
            <Link to="/reviews" className="text-sm font-semibold text-primary">
              View all reviews →
            </Link>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Rated {site.rating} on Google from customers across Metro Vancouver.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {reviews.slice(0, 3).map((r) => (
              <figure key={r.name} className="panel p-6">
                <blockquote className="text-sm text-muted-foreground">"{r.text}"</blockquote>
                <figcaption className="mt-4 text-sm font-semibold">
                  {r.name}
                  <span className="block text-xs font-normal text-muted-foreground">{r.location}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="bg-surface py-16">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-center text-3xl font-extrabold sm:text-4xl">
              Frequently asked questions
            </h2>
            <div className="mt-8 space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="panel px-5 py-4">
                  <summary className="cursor-pointer list-none text-sm font-semibold">{f.q}</summary>
                  <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
