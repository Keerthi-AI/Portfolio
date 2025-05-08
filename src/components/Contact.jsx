import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section className="py-20 md:py-32 bg-[var(--color-bg)] text-white" id="contact">
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
        >
          Let's Connect
        </motion.h2>
        <p className="text-center mt-4 text-gray-300">
          Have a question or want to work together? Feel free to reach out!
        </p>

        <div className="mt-12 flex justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-xl bg-[#0d1117] p-8 rounded-2xl shadow-md"
          >
            <h3 className="text-2xl font-semibold mb-6 text-amber-50">
              Contact Information
            </h3>
            <div className="space-y-4 text-amber-50">
              <div className="flex items-center gap-4">
                <FontAwesomeIcon icon={faEnvelope} className="text-xl text-blue-400" />
                <div>
                  <p className="text-sm">Email</p>
                  <p className="font-medium">keerthinathan2004@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FontAwesomeIcon icon={faLocationDot} className="text-xl text-purple-400" />
                <div>
                  <p className="text-sm">Location</p>
                  <p className="font-medium">India</p>
                </div>
              </div>
            </div>

            <a
              href="mailto:keerthinathan2004@gmail.com"
              className="mt-6 inline-block w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg text-center font-medium transition duration-300"
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Send Email
            </a>

            <div className="mt-6 text-amber-50">
              <p className="text-sm mb-2">Find me on</p>
              <div className="flex gap-4">
                <a href="https://github.com/Keerthi-AI" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="text-xl hover:text-white" />
                </a>
                <a href="https://linkedin.com/in/keerthinathan-a-4a8810222" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className="text-xl hover:text-white" />
                </a>
                <a href="https://x.com/Keerthinathan13" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faXTwitter} className="text-xl hover:text-white" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
