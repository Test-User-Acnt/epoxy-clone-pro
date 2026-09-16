import { Link } from "@tanstack/react-router";
import installer from "@/assets/installer.jpg";

export function CtaBand() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="relative overflow-hidden rounded-2xl border border-border">
        <img
          src={installer}
          alt="Installer applying an epoxy coating to a garage floor"
          loading="lazy"
          width={1400}
          height={900}
          className="h-[340px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center gap-5 p-8 sm:p-12">
          <h2 className="max-w-md text-3xl font-extrabold sm:text-4xl">
            Transform your floors with Vancouver's epoxy coating experts
          </h2>
          <Link
            to="/contact"
            className="w-fit rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
          >
            Let's Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
