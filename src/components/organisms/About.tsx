import { motion } from "framer-motion";
import { SkillTag } from "../molecules/SkillTag";
import { personalInfo, skills } from "../../data/portfolio";

function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
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
              &lt;About Me /&gt;
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate about creating exceptional user experiences through clean code and innovative design
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 border border-gray-200 dark:border-gray-600 hover:border-purple-500 dark:hover:border-purple-400 transition-colors duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">My Journey</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {personalInfo.summary}
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 border border-gray-200 dark:border-gray-600 hover:border-purple-500 dark:hover:border-purple-400 transition-colors duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">What I Do</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <i className="fas fa-code text-purple-500"></i>
                  <span className="text-gray-600 dark:text-gray-300">Frontend Development & Architecture</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-mobile-alt text-indigo-500"></i>
                  <span className="text-gray-600 dark:text-gray-300">Mobile App Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-paint-brush text-pink-500"></i>
                  <span className="text-gray-600 dark:text-gray-300">UI/UX Implementation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-cog text-purple-500"></i>
                  <span className="text-gray-600 dark:text-gray-300">Performance Optimization</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Technical Skills</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Languages */}
              <div className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 dark:from-purple-500/20 dark:to-indigo-500/20 rounded-xl p-4 border border-purple-500/20 dark:border-purple-500/30">
                <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-3">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill, index) => (
                    <SkillTag key={index} skill={skill} />
                  ))}
                </div>
              </div>

              {/* Frameworks */}
              <div className="bg-gradient-to-br from-indigo-500/10 to-pink-500/10 dark:from-indigo-500/20 dark:to-pink-500/20 rounded-xl p-4 border border-indigo-500/20 dark:border-indigo-500/30">
                <h4 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.technologies.map((skill, index) => (
                    <SkillTag key={index} skill={skill} />
                  ))}
                </div>
              </div>

              {/* UI Libraries */}
              <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 dark:from-pink-500/20 dark:to-purple-500/20 rounded-xl p-4 border border-pink-500/20 dark:border-pink-500/30">
                <h4 className="font-semibold text-pink-600 dark:text-pink-400 mb-3">UI Libraries</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.styling.map((skill, index) => (
                    <SkillTag key={index} skill={skill} />
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 rounded-xl p-4 border border-purple-500/20 dark:border-purple-500/30">
                <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-3">Tools & Testing</h4>
                <div className="flex flex-wrap gap-2">
                  {[...skills.testing, ...skills.tools].map((skill, index) => (
                    <SkillTag key={index} skill={skill} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export { About };
