import { icons } from '../../data/icons';

type hoveredButtonProps = { hoveredButton: string | null };

export default function BackgroundIcons({ hoveredButton }: hoveredButtonProps) {
  return (
    <div className="group absolute inset-0 -z-10 overflow-hidden">
      {icons.map((icon, index) => {
        const { Component, top, left, size, hide, rotate } = icon;

        const hoveredStyle =
          hoveredButton === 'login'
            ? 'dark:text-mist text-azure opacity-100'
            : hoveredButton === 'guest'
              ? 'opacity-100'
              : 'dark:text-silver dark:opacity-5 opacity-15';

        return (
          <Component
            key={index}
            style={{ top, left }}
            className={`absolute fill-current p-3 transition duration-800 ease-in-out ${size} ${rotate} ${hide} ${hoveredStyle}`}
          />
        );
      })}
    </div>
  );
}
