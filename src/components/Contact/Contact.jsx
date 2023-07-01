
import { FaEnvelope, FaPhone } from "react-icons/fa";
import SectionHeader from "../SectionHeader/SectionHeader";
import contact from '../../assets/contact.svg';
const Contact = () => {
    return (
        <div className="bg-slate-100 dark:bg-slate-400">
        
        <div className="container mx-auto px-4">
        <div className="w-full px-8 mx-auto">
          {/* Header */}
          <SectionHeader
          heading="Contact With US"
          tagline="Reach out and let's make things happen!"
        />
          
          {/* contact left side */}
          <div className="flex flex-wrap -mx-4 pt-2 mt-5">
            <div className="w-full md:w-1/2 px-4 mb-8">
              <form className="bg-white dark:bg-gray-700 dark:border rounded-lg overflow-hidden shadow-md p-6">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="your name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your email address"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message here"
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-primary text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* contact right side */}
            <div className="w-full md:w-1/2 px-4 mb-8 relative pt-12 border">
              <img
                src={contact} className=""
                alt=""
              />
              <div className="bg-white dark:bg-slate-300 rounded-lg overflow-hidden shadow-md p-4 lg:absolute lg:bottom-0 lg:right-0">
                <h2 className="text-lg font-bold">
                  We are here to help you
                </h2>
                <div className="flex flex-col md:flex-row items-center mb-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <FaEnvelope className="text-white" />
                  </div>
                  <p className="text-gray-700 text-sm">job.freak@gmail.com</p>
                </div>
                <div className="flex flex-col md:flex-row items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <FaPhone className="text-white" />
                  </div>
                  <p className="text-gray-700 text-sm">+8801637131835</p>
                </div>
                <div
                  className="text-white text-center p-2 font-bold bg-indigo-700 relative top-4 left-8
                        "
                >
                  Contact information
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
    );
};

export default Contact;