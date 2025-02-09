import { ReactNode, useEffect } from 'react';
import useThemeStore from '../../store/theme';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { theme } = useThemeStore();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark', 'light');

    if (theme === 'system') {
      const systemPrefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
      );

      const applySystemTheme = () => {
        const isDark = systemPrefersDark.matches;
        root.classList.toggle('dark', isDark);
        root.classList.toggle('light', !isDark);
      };

      applySystemTheme(); // Применяем тему при первой загрузке

      systemPrefersDark.addEventListener('change', applySystemTheme);
      return () =>
        systemPrefersDark.removeEventListener('change', applySystemTheme);
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  return (
    <div className="bg-sky dark:bg-charcoal min-h-screen transition-colors duration-500">
      <main>{children}</main>
    </div>
  );
}
