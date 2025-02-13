type LoginButtonProps = {
  text: string;
  onHoverChange: (hovered: boolean) => void;
};

export default function LoginButton({ text, onHoverChange }: LoginButtonProps) {
  return (
    <button
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={() => onHoverChange(false)}
    >
      {text}
    </button>
  );
}
