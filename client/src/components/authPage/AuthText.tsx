const greetingText = 'WELCOME TO YOUR';
const titleTextFirst = 'REAL TIME ONLINE';
const titleTextSecond = 'WHITEBOARD';
const descriptionText = 'Create.Teamwork.Connect.Elevate';

export default function AuthText() {
  return (
    <div className="flex flex-col items-end gap-3 px-6 md:mt-60 md:gap-6 md:px-14 xl:mt-50">
      <h2 className="text-2xl font-black md:text-4xl xl:text-5xl">
        {greetingText}
      </h2>

      <section className="dark:text-mist text-azure flex flex-col items-end text-3xl font-black md:text-5xl lg:gap-3 xl:text-6xl">
        <h1>{titleTextFirst}</h1>
        <h1>{titleTextSecond}</h1>
      </section>
      <p className="text-base font-bold opacity-70 md:text-2xl xl:text-3xl">
        {descriptionText}
      </p>
    </div>
  );
}
