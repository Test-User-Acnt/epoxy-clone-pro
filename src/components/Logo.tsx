import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`inline-flex flex-col -skew-x-6 leading-none ${className}`} aria-label="Go2Epoxy home">
      <span className="font-display text-[25px] font-black italic text-foreground">
        GO<span className="text-primary">2</span>
      </span>
      <span className="font-display text-[11px] font-black text-muted-foreground">
        EPOXY
      </span>
    </Link>
  );
}
