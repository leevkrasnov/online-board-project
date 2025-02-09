import {
  greetingText,
  titleTextFirst,
  titleTextSecond,
  descriptionText,
} from '../data/authText';
import BackgroundIcons from '../components/authPage/BackgroundIcons';
import ThemeToggle from '../components/mainPage/ThemeToggle';
import LoginButton from '../components/authPage/LoginButton';

export default function AuthPage() {
  return (
    <>
      <div className="font-encode text-slate dark:text-silver relative z-0 flex min-h-screen flex-col items-center justify-between">
        <BackgroundIcons />

        <div className="mt-20 flex flex-grow flex-col items-end gap-6 self-end px-6 text-2xl md:px-12 md:text-4xl xl:mt-40 xl:px-20 xl:text-5xl 2xl:text-7xl">
          <h1 className="font-black">{greetingText}</h1>
          <h2 className="dark:text-mist text-azure text-3xl font-black md:text-5xl xl:text-6xl 2xl:text-8xl">
            {titleTextFirst}
          </h2>
          <h2 className="dark:text-mist text-azure text-3xl font-black md:text-5xl xl:text-6xl 2xl:text-8xl">
            {titleTextSecond}
          </h2>
          <p className="text-base font-bold opacity-70 md:text-2xl lg:mt-8 xl:text-3xl 2xl:text-4xl">
            {descriptionText}
          </p>
        </div>

        <div className="font-encode mb-30 flex flex-col items-center gap-3 text-xl font-extrabold md:text-3xl lg:mb-40 lg:gap-6 xl:text-4xl 2xl:mb-60 2xl:text-5xl">
          <LoginButton text="Log in with Google" />
          <p className="text-lg opacity-50 md:text-2xl xl:text-3xl 2xl:text-[42px]">
            or
          </p>
          <LoginButton text="Continue as a guest" />
        </div>
        <ThemeToggle />
      </div>
    </>
  );
}
