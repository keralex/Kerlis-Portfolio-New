import { motion } from "framer-motion";
import { Button } from "@/components/atoms/Button";
import { ContactInfo } from "@/components/molecules/ContactInfo";
import { personalInfo } from "@/data/portfolio";

function Contact() {

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="text-gradient font-mono">
              &lt;Contact /&gt;
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Let's connect and discuss your next project
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <ContactInfo
                  icon="fas fa-envelope"
                  label="Email"
                  value={personalInfo.email}
                  href={`mailto:${personalInfo.email}`}
                />
                <ContactInfo
                  icon="fas fa-phone"
                  label="Phone"
                  value={personalInfo.phone}
                  href={`tel:${personalInfo.phone}`}
                />
                <ContactInfo
                  icon="fas fa-map-marker-alt"
                  label="Location"
                  value={personalInfo.location}
                />
              </div>
            </div>
            
            {/* Social Links */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Connect with Me</h3>
              <div className="flex space-x-4">
                <motion.a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 retro-gradient rounded-lg flex items-center justify-center text-white hover:opacity-90 transition-opacity duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className="fab fa-linkedin-in"></i>
                </motion.a>
                <motion.a
                  href="#"
                  className="w-12 h-12 retro-gradient-alt rounded-lg flex items-center justify-center text-white hover:opacity-90 transition-opacity duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className="fab fa-github"></i>
                </motion.a>
                <motion.a
                  href="#"
                  className="w-12 h-12 retro-gradient rounded-lg flex items-center justify-center text-white hover:opacity-90 transition-opacity duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className="fab fa-twitter"></i>
                </motion.a>
              </div>
            </div>
            
            {/* Download CV */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Download CV</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Get a copy of my resume for your records</p>
              <Button
                icon={<i className="fas fa-download"></i>}
                iconPosition="left"
                onClick={() => window.open("/attached_assets/CV_ KERLIS AGUADO_FRONTEND_DEVELOPER (1)_1752170801413.pdf", "_blank")}
              >
                Download CV
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export { Contact };
