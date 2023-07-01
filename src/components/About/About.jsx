import logo from "../../assets/logo.png";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { BiLogoGmail } from "react-icons/bi";
import { MdWhatsapp } from "react-icons/md";
import SectionHeader from "../SectionHeader/SectionHeader";
const About = () => {
  return (
    <div className="bg-slate-100 dark:bg-slate-400 h-screen">
      <div className="">
        {/* Header */}
        <SectionHeader
          heading="About US"
          tagline=" Discovering Passion, Purpose, and Possibilities!"
        />
        {/* //about me top*/}
        <div className="project-container p-10">
          <div className="project-content grid grid-cols-1 lg:grid-cols-2 gap-10 justify-between items-center">
            <div>
              <p className="py-6 space-x-4 text-black dark:text-white">
                At Job Freak We Post daily updates on internships and jobs
                postings ! ! Our aim is to empower the youth of our country and
                make them Self-dependent. By providing them job/internships all
                kinds of opportunities from various sectors, sharing knowledge
                and make them competent enough so that they could excel in any
                field. If you have any query regrading Site, Advertisement and
                any other issue, please feel free to
                <br />
                <br />
                contact at our email shyam_25@jobfreak.in
              </p>

              <div className="flex flex-row justify-evenly gap-3">
                <a href="#" className="">
                  <CiFacebook className="text-3xl hover:text-zinc-600 dark:text-white" />
                </a>
                <a href="#" className="">
                  <CiLinkedin className="text-3xl hover:text-zinc-600 dark:text-white" />
                </a>
                <a href="#" className="">
                  <BiLogoGmail className="text-3xl hover:text-zinc-600 dark:text-white" />
                </a>
                <a href="#" className="">
                  <MdWhatsapp className="text-3xl hover:text-zinc-600 dark:text-white" />
                </a>
              </div>
            </div>

            <div className="w-full h-full lg:w-96 lg:h-96 bg-transparent rounded-full overflow-hidden">
              <img
                src={logo}
                alt="Profile"
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
