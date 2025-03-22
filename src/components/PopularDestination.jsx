const destinations = [
  { image: "/paris.jpg", title: "Paris, France", description: "A Nice place" },
  {
    image: "/new_york.jpg",
    title: "New York, USA",
    description: "A Nice place",
  },
  { image: "/sydney.jpg", title: "Sydney", description: "A Nice place" },
  { image: "/tokyo.jpg", title: "Tokyo, Japan", description: "A Nice place" },
];

const PopularDestination = () => {
  return (
    <section id="popularPlace" className=" py-12 bg-gray-100 max-w-5xl mx-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Popular Destinations
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {destinations.map((city, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
            >
              <img
                src={city.image}
                alt={city.title}
                className="w-full h-fit object-cover transform transition duration-300 hover:scale-110"
              />

              <div className="p-4">
                <h4 className="text-xl font-bold mb-2">{city.title}</h4>
                <p className="text-gray-600">{city.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default PopularDestination;
