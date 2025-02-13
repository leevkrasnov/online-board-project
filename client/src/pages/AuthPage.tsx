import { useState } from 'react';
import AuthText from '../components/authPage/AuthText';
import BackgroundIcons from '../components/authPage/BackgroundIcons';
import ThemeToggle from '../components/mainPage/ThemeToggle';
import LoginButton from '../components/authPage/LoginButton';

export default function AuthPage() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  return (
    <>
      <div className="font-encode bg-sky dark:bg-charcoal text-slate dark:text-silver relative z-0 flex min-h-screen flex-col justify-center md:justify-between">
        <BackgroundIcons hoveredButton={hoveredButton} />

        <AuthText />

        <div className="mt-40 flex flex-col items-center gap-3 text-xl font-extrabold md:mt-0 md:mb-60 md:gap-6 md:text-3xl xl:mb-40 xl:text-4xl">
          <LoginButton
            text="Log in with Google"
            onHoverChange={(hover) => setHoveredButton(hover ? 'login' : null)}
          />
          <p className="text-lg opacity-50 md:text-2xl xl:text-3xl">or</p>
          <LoginButton
            text="Continue as a guest"
            onHoverChange={(hover) => setHoveredButton(hover ? 'guest' : null)}
          />
        </div>
      </div>
      <ThemeToggle />
    </>
  );
}
