import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`inline-flex flex-col leading-none ${className}`} aria-label="Go2Epoxy home">
      <span className="font-display text-2xl font-extrabold italic tracking-tight text-foreground">
        GO<span className="text-primary">2</span>
      </span>
      <span className="font-display text-sm font-bold tracking-[0.35em] text-muted-foreground">
        EPOXY
      </span>
    </Link>
  );
}
