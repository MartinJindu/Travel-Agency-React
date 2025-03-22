const testimonials = [
  {
    name: "John Doe",
    image: "/p3.jpg",
    text: "I got to say at one of the best hotel in NY. They offer superb services.",
    location: "New York, USA",
  },
  {
    name: "Jane Smith",
    image: "/p4.webp",
    text: "Well detailed services. I recommend them!",
    location: "London, UK",
  },
  {
    name: "Alice Johnson",
    image: "/p1.jpeg",
    text: "I was skeptical at first, but I got the best of what i need. They are really good.",
    location: "Sydney, Australia",
  },
  {
    name: "Paul Rogers",
    image: "/p2.jpg",
    text: "I was on budget and they help provide the best it could offer. I was really amazing",
    location: "Tokyo, Japan",
  },
];

const Clients = () => {
  return (
    <section className="py-12 bg-gray-100 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Client Say</h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center cursor-pointer transform transition duration-300 hover:scale-110"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />

              <h4 className="text-xl font-bold mb-2">{testimonial.name}</h4>
              <p className="text-gray-600">{testimonial.location}</p>
              <p className="text-gray-600 italic">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Clients;
