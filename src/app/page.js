import { About } from "@/components/sites/about";
import { Services } from "@/components/sites/services";
import Projects from "./projects/page";


export default function Home() {
  return (
    <div>
      <div className="home-cover">
        <div className="container d-flex flex-column">
          <div className="col-xl-8 col-lg-8 col-12">
            <span className="xl-text fw-bolder">INVEST IN YOUR FUTURE PROPERTY</span>
          </div>

          <div className="col-xl-4 col-lg-4 col-12">
            <span className="sm-text">PropIQ represents a fresh perspective on living, acquiring, and possessing real estate, including opportunities for leasing.</span>
          </div>
        </div>
      </div>

      <About />

      <Services />

      <Projects />
    </div>
  );
}
