import { create } from 'zustand';

type Theme = 'light' | 'dark' | 'system';

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const getInitialTheme = (): Theme => {
  try {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      return savedTheme as Theme;
    }
  } catch (error) {
    console.error('Error accessing localStorage', error);
  }

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
};

const useThemeStore = create<ThemeState>((set, get) => ({
  theme: getInitialTheme(),

  setTheme: (theme) => {
    localStorage.setItem('theme', theme);
    set({ theme });
  },

  toggleTheme: () => {
    const { theme } = get();
    const nextTheme = theme === 'light' ? 'dark' : 'light';

    localStorage.setItem('theme', nextTheme);
    set({ theme: nextTheme });
  },
}));

export default useThemeStore;
