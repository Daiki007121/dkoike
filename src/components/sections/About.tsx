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
          <div className="flex max-w-2xl flex-1 flex-col gap-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              I came to the U.S. as an international student who was not able
              to speak English, and left San Francisco State with a physics
              degree.
            </p>
            <p>
              In my final year I taught physics at a public high school in San
              Francisco. Some of my students spent their evenings looking after
              younger siblings. One was losing their housing. Teachers had
              stopped assigning homework because there was no time at home to
              do it. I could explain Newton&apos;s laws, but nothing I knew
              could change any of that.
            </p>
            <p>
              That is why I moved into computer science, and why I build
              companies and not only software. I want to solve social
              problems with technology and the power of the market: build a product that
              helps people, run it as a business so it lasts, and eventually
              make it infrastructure.
            </p>
            <p>
              For now I&apos;m an MS student at Northeastern, learning by
              shipping: privacy-first AI tools like MaskLM, and an AI voice
              interviewer that helps founders test their ideas before they
              build.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
