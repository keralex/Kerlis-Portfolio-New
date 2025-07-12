import { Badge } from "../atoms/Badge";
import { motion } from "framer-motion";

interface SkillTagProps {
  skill: string;
  variant?: "primary" | "secondary" | "outline";
}

function SkillTag({ skill, variant = "outline" }: SkillTagProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Badge variant={variant}>{skill}</Badge>
    </motion.div>
  );
}

export { SkillTag };
