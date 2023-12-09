import About from "./components/about/About";
import Blog from "./components/blog/Blog";
import Hero from "./components/home/Hero";
import NavbarHome from "./components/navbar/NavbarHome";
import Services from "./components/services/Services";
import Testimonial from "./components/testimonial/Testimonial";

export default function Home() {
  return (
    <main>
      <NavbarHome/>
      <Hero/>
      <About/>
      <Services/>
      {/* <TestimonialCard/> */}
      <Testimonial/>
      {/* <BlogCard/> */}
      <Blog/>
    </main>
  )
}
