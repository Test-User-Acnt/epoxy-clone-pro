import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CtaBand } from "@/components/CtaBand";
import { serviceAreas } from "@/lib/site";

export const Route = createFileRoute("/service-areas")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Service Areas | Epoxy Flooring Across Surrey BC" },
      {
        name: "description",
        content:
          "Pacific Floors and Coatings installs epoxy and concrete coatings in Surrey, Burnaby, Richmond, Delta, Coquitlam, Langley, and Abbotsford.",
      },
      { property: "og:title", content: "Service Areas | Pacific Floors and Coatings" },
      {
        property: "og:description",
        content: "Epoxy flooring across Surrey, BC and the Fraser Valley.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://epoxy-clone-pro.lovable.app/service-areas" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://epoxy-clone-pro.lovable.app/service-areas" }],
  }),
  component: ServiceAreasPage,
});

function ServiceAreasPage() {
  return (
    <>
      <Header />
      <main>
        <section className="mx-auto max-w-4xl px-4 py-16">
          <p className="eyebrow">Local service areas</p>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
            Serving Surrey businesses and families
          </h1>
          <ul className="mt-8 space-y-4 text-sm text-muted-foreground">
            <li>
              <strong className="text-foreground">On-site consultations:</strong> we visit
              commercial, industrial, and residential floor preparation questions directly at your
              property.
            </li>
            <li>
              <strong className="text-foreground">Fully equipped crews:</strong> our team arrives
              with professional diamond grinders and dust-free vacuums.
            </li>
            <li>
              <strong className="text-foreground">Regional coverage:</strong> we install across
               Surrey, BC and throughout the Fraser Valley.
            </li>
          </ul>
          <div className="mt-10 flex flex-wrap gap-2">
            {serviceAreas.map((a) => (
              <span
                key={a}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground"
              >
                {a}
              </span>
            ))}
          </div>
        </section>
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
