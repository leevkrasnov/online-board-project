import { useEffect } from 'react';
import { Theme } from '../store/theme';
import { useThemeStore } from '../store/theme';

const applyThemePreference = (theme: Theme) => {
  const root = document.documentElement;
  const isLight = theme === 'light';

  root.classList.remove(isLight ? 'dark' : 'light');
  root.classList.add(theme);
};

const selector = (state: { theme: Theme }) => state.theme;

export const useTheme = () => {
  const theme = useThemeStore(selector);

  useEffect(() => {
    applyThemePreference(theme);
  }, [theme]);

  return theme;
};
