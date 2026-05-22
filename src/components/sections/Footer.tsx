const stackLinkClass =
  "underline-offset-4 hover:text-foreground hover:underline";

export function Footer() {
  return (
    <footer className="w-full border-t border-border px-6 py-8 sm:px-8 md:px-12">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-1 text-center text-sm text-muted-foreground">
        <p>© 2026 Daiki Koike</p>
        <p>
          Built with{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className={stackLinkClass}
          >
            Next.js
          </a>{" "}
          +{" "}
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
            className={stackLinkClass}
          >
            Tailwind
          </a>
          . Deployed on{" "}
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className={stackLinkClass}
          >
            Vercel
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
