import Content from "./Content";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Section from "./Section";
import Testimonial from "./Testimonial";
import "./style.css";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Content />
      <Section />
      <Testimonial />
      <Footer />
    </div>
  );
}
