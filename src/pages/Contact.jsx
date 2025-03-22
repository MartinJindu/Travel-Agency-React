import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import Hero from "../components/Hero";

const contacts = [
  {
    icon: <FaEnvelope className="text-blue-500 mr-2" />,
    detail: "info@travelagency.com",
  },
  {
    icon: <FaPhone className="text-blue-500 mr-2" />,
    detail: "+123 456 7890",
  },
  {
    icon: <FaMapMarkedAlt className="text-blue-500 mr-2" />,
    detail: "123 Travel St, City, Country",
  },
];

const Contact = () => {
  return (
    <main className="min-h-screen bg-gray-100">
      <Hero name={"Contact"} />

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Contact Details</h3>
            {contacts.map((contact, i) => (
              <div key={i} className="flex items-center mb-4">
                {contact.icon}
                <p>{contact.detail}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Get in touch</h3>

            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="w-full p-2 border border-gray-300 outline-blue-500 rounded"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full p-2 border border-gray-300 outline-blue-500 rounded"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Enter Message"
                  className="w-full p-2 border border-gray-300 outline-blue-500 rounded"
                />
              </div>
              <button
                type="submit"
                className="py-2 px-4 bg-blue-500 text-white rounded"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Contact;
