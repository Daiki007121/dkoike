import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen w-full items-center justify-center px-6 py-24 sm:px-8 md:px-12"
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8">
        <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
          Engineer and entrepreneur. Physics → CS.
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
          MS Align @ Northeastern &apos;26. Building privacy-first AI from
          first principles. Based in the Bay Area.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button asChild size="lg" className="h-11 px-5 text-base">
            <Link href="#projects">View projects</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-11 px-5 text-base"
          >
            <Link href="#contact">Contact</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
