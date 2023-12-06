import About from "./components/about/About";
import Hero from "./components/home/Hero";
import NavbarHome from "./components/navbar/NavbarHome";

export default function Home() {
  return (
    <main>
      <NavbarHome/>
      <Hero/>
      <About/>
    </main>
  )
}
