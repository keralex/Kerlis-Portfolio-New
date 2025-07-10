import { Layout } from "@/components/templates/Layout";
import { Hero } from "@/components/organisms/Hero";
import { About } from "@/components/organisms/About";
import { Experience } from "@/components/organisms/Experience";
import { Projects } from "@/components/organisms/Projects";
import { Contact } from "@/components/organisms/Contact";

function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default Home;
