import About from "@/components/about";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/sectiondivider";


export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 overflow-hidden">
      <Intro/>
      <SectionDivider/>
      <About/>
      <SectionDivider/>
      <Projects/>
    </main>
  )
}