import { icons } from '../../data/icons';

export default function BackgroundIcons() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {icons.map((icon, index) => {
        const { Component, top, left, size, lgSize, xlSize, xxlSize, rotate } =
          icon;
        return (
          <Component
            key={index}
            style={{ top, left }}
            className={`dark:text-silver text-slate absolute fill-current opacity-15 transition duration-500 hover:opacity-30 dark:opacity-5 dark:hover:opacity-15 ${size} ${lgSize} ${xlSize} ${xxlSize} ${rotate} `}
          />
        );
      })}
    </div>
  );
}
