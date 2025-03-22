import Hero from "../components/Hero";

const About = () => {
  return (
    <main className="min-h-screen">
      <Hero name={"About"} />

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          <div>
            <img
              src="/nigeria.jpg"
              alt="about"
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Who we are</h3>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At sint
              perferendis quo labore est veritatis architecto ipsam tenetur,
              culpa aperiam cum praesentium pariatur corrupti fugit quibusdam,
              ullam facere magni omnis?
            </p>

            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,
              voluptate dolores minima eaque nihil mollitia id natus at nemo
              exercitationem illum ratione, sequi animi iure facilis? Quae,
              iure! Voluptatum, perferendis?
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
export default About;
