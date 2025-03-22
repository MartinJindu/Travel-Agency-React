import { Link } from "react-router-dom";
import Clients from "../components/Clients";
import PopularDestination from "../components/PopularDestination";
import Services from "../components/Services";

const Home = () => {
  const scrollToSection = () => {
    document.getElementById("popularPlace").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <main className="bg-gray-100 scroll-smooth">
      <section className="relative h-screen bg-cover bg-center bg-[url(/travel_img.jpeg)]">
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-6xl text-center font-bold mb-4">
            Explore the World with Us
          </h1>
          <p className="text-lg md:text-2xl mb-8">
            Discover amazing places at exclusive deals
          </p>

          <button
            className="border px-6 py-3 rounded-full text-lg md:text-xl hover:bg-blue-500 transform transition duration-300 hover:scale-105 cursor-pointer"
            onClick={scrollToSection}
          >
            Get Started
          </button>
        </div>
      </section>

      <PopularDestination />
      <Services />
      <Clients />
    </main>
  );
};
export default Home;
