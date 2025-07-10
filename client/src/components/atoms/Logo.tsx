import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
}

function Logo({ className }: LogoProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="text-xl font-bold font-mono text-gradient">
        &lt;KA /&gt;
      </span>
    </motion.div>
  );
}

export { Logo };
