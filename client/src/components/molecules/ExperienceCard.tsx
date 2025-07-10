import { motion } from "framer-motion";

interface ExperienceCardProps {
  company: string;
  position: string;
  period: string;
  current: boolean;
  responsibilities: string[];
  side?: "left" | "right";
}

function ExperienceCard({ company, position, period, current, responsibilities, side = "left" }: ExperienceCardProps) {
  return (
    <motion.div
      className={`relative flex items-center ${side === "right" ? "md:justify-end" : ""}`}
      initial={{ opacity: 0, x: side === "right" ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
      <div className="md:hidden absolute left-4 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
      
      <div className={`ml-12 md:ml-0 ${side === "right" ? "md:w-5/12 md:pl-8" : "md:w-5/12 md:pr-8"}`}>
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-300"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {position}
            </h3>
            {current && (
              <span className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                Current
              </span>
            )}
          </div>
          <h4 className="text-lg font-medium text-purple-600 dark:text-purple-400 mb-2">
            {company}
          </h4>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            {period}
          </p>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            {responsibilities.map((responsibility, index) => (
              <li key={index} className="flex items-start">
                <i className="fas fa-check-circle text-purple-500 mr-2 mt-1 flex-shrink-0"></i>
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}

export { ExperienceCard };
