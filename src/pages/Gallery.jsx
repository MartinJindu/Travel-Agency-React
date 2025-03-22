import Hero from "../components/Hero";

const images = [
  "/london.jpg",
  "/paris.jpg",
  "/new_york.jpg",
  "/sydney.jpg",
  "/nigeria.jpg",
];

const Gallery = () => {
  return (
    <main className="min-h-screen">
      <Hero name={"Gallery"} />

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {images.map((img, i) => (
            <div
              key={i}
              className="rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:scale-110"
            >
              <img
                src={img}
                alt="city img"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
export default Gallery;
