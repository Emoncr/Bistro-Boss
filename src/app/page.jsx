import About from "@/Components/About";
import CallUs from "@/Components/CallUs";
import ChefRecommends from "@/Components/ChefRecommends";
import FromOurMenu from "@/Components/FromOurMenu";
import Hero from "@/Components/Hero";
import Blog from "@/Components/Blog";
import OrderOnline from "@/Components/OrderOnline";
import Testimonial from "@/Components/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <OrderOnline />
      <About />
      <FromOurMenu />
      <CallUs />
      <ChefRecommends />
      <Blog />
      <Testimonial />
    </>
  );
}
