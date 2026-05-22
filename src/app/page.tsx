import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        {/* About will mount here in step 8.5 */}
        <Projects />
      </main>
    </>
  );
}
