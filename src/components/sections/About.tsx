import Image from "next/image";

export function About() {
  return (
    <section
      id="about"
      className="w-full px-6 py-24 sm:px-8 sm:py-32 md:px-12"
    >
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          About
        </h2>
        <div className="mt-10 flex flex-col items-start gap-10 md:flex-row md:gap-12">
          <Image
            src="/profile.jpg"
            alt="Daiki Koike"
            width={256}
            height={256}
            priority={false}
            className="aspect-square w-40 shrink-0 rounded-2xl object-cover sm:w-56 md:w-64"
          />
          <div className="flex-1">
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Physics undergrad turned CS grad student, building privacy-first
              AI tools. More to come.
            </p>
            {/* TODO: rewrite when ready */}
          </div>
        </div>
      </div>
    </section>
  );
}
