import { useThemeStore } from '../../store/theme';
import { Contrast } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <motion.button
      onClick={toggleTheme}
      className="dark:text-sky text-charcoal cursor-pointer bg-transparent transition-colors duration-500"
      animate={{ rotate: theme === 'dark' ? 180 : 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 12 }}
    >
      <Contrast size={24} />
    </motion.button>
  );
}
