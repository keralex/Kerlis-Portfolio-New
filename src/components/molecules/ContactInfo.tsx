import { motion } from "framer-motion";

interface ContactInfoProps {
  icon: string;
  label: string;
  value: string;
  href?: string;
}

function ContactInfo({ icon, label, value, href }: ContactInfoProps) {
  const content = (
    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0 w-12 h-12 retro-gradient rounded-lg flex items-center justify-center">
        <i className={`${icon} text-white`}></i>
      </div>
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
        <p className="text-lg text-gray-900 dark:text-white">{value}</p>
      </div>
    </div>
  );

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="transition-transform duration-200"
    >
      {href ? (
        <a href={href} className="block">
          {content}
        </a>
      ) : (
        content
      )}
    </motion.div>
  );
}

export { ContactInfo };
