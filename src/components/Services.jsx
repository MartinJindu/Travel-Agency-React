import {
  FaConciergeBell,
  FaHotel,
  FaPlane,
  FaUmbrellaBeach,
} from "react-icons/fa";

const services = [
  {
    icon: <FaPlane className="text-4xl text-blue-500" />,
    title: "Flight Booking",
    description: "Get best flight to your destination.",
  },
  {
    icon: <FaHotel className="text-4xl text-blue-500" />,
    title: "Hotel Booking",
    description: "Best of hotels for your comfort.",
  },
  {
    icon: <FaUmbrellaBeach className="text-4xl text-blue-500" />,
    title: "Beach Tours",
    description: "Amazing scenery to feel relaxed.",
  },
  {
    icon: <FaConciergeBell className="text-4xl text-blue-500" />,
    title: "Concierge Services",
    description: "A Personal Concierge at your service.",
  },
];

const Services = () => {
  return (
    <section className="py-12 bg-gray-100 max-w-5xl mx-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid gap-6 sm:grid-cols-2 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md flex flex-col p-8 items-center cursor-pointer transform transition duration-300 hover:scale-105"
            >
              <div className="mb-4">{service.icon} </div>

              <h4 className="text-xl font-bold mb-2">{service.title}</h4>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
