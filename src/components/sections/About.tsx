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
          {/* TODO: replace placeholder with <Image src="/profile.jpg" /> once uploaded */}
          <div
            aria-label="Daiki Koike profile photo placeholder"
            className="flex aspect-square w-40 shrink-0 items-center justify-center rounded-2xl bg-zinc-200 text-3xl font-semibold tracking-tight text-zinc-500 sm:w-56 md:w-64 dark:bg-zinc-800 dark:text-zinc-400"
          >
            DK
          </div>
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
