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
        
        <div className="max-w-5xl mx-auto">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Get in Touch */}
            <motion.div
              className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-300"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Get in Touch</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <ContactInfo
                  icon="fas fa-globe"
                  label="Languages"
                  value={personalInfo.languages.join(", ")}
                />
              </div>
            </motion.div>
            
            {/* Download CV */}
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-300"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="w-16 h-16 retro-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-download text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Download CV</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">Get a copy of my complete resume</p>
                <Button
                  size="lg"
                  className="w-full"
                  icon={<i className="fas fa-file-pdf"></i>}
                  iconPosition="left"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/attached_assets/CV_ KERLIS AGUADO_FRONTEND_DEVELOPER (1)_1752170801413.pdf';
                    link.download = 'Kerlis_Aguado_CV.pdf';
                    link.click();
                  }}
                >
                  Download PDF
                </Button>
              </div>
            </motion.div>
          </div>
          
          {/* Social Links */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Let's Connect</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">Follow me on social media or reach out for collaborations</p>
              <div className="flex justify-center space-x-6">
                <motion.a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center space-y-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-16 h-16 retro-gradient rounded-full flex items-center justify-center text-white group-hover:opacity-90 transition-opacity duration-200">
                    <i className="fab fa-linkedin-in text-xl"></i>
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">LinkedIn</span>
                </motion.a>
                
                <motion.a
                  href="#"
                  className="group flex flex-col items-center space-y-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-16 h-16 retro-gradient-alt rounded-full flex items-center justify-center text-white group-hover:opacity-90 transition-opacity duration-200">
                    <i className="fab fa-github text-xl"></i>
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">GitHub</span>
                </motion.a>
                
                <motion.a
                  href="#"
                  className="group flex flex-col items-center space-y-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-16 h-16 retro-gradient rounded-full flex items-center justify-center text-white group-hover:opacity-90 transition-opacity duration-200">
                    <i className="fab fa-twitter text-xl"></i>
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Twitter</span>
                </motion.a>
                
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  className="group flex flex-col items-center space-y-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-16 h-16 retro-gradient-alt rounded-full flex items-center justify-center text-white group-hover:opacity-90 transition-opacity duration-200">
                    <i className="fas fa-envelope text-xl"></i>
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export { Contact };
