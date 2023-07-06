interface IButtonProps {
  children?: string;
  className?: string;
  leftIcon?: React.ReactNode;
  centerIcon?: React.ReactNode;
  selected?: boolean;
  variant?: "primary" | "secondary";
  title?: string;
  onClick: (evt: React.MouseEvent<Element, MouseEvent>) => void;
}

export function Button(props: IButtonProps) {
  const {
    children,
    leftIcon,
    centerIcon,
    className,
    selected,
    variant = "primary",
    title,
    onClick,
  } = props;
  return (
    <button
      onClick={onClick}
      className={`flex flex-1 items-center px-4 py-3 rounded-lg text-sm text-red-600 ${
        variant === "primary"
          ? "bg-red-200 hover:bg-red-300 hover:text-red-900"
          : "border-solid border-[1px] border-red-400 hover:bg-red-200 hover:border-transparent"
      } ${
        selected
          ? "bg-red-600 text-white hover:bg-red-700 hover:text-white"
          : ""
      } ${className}`}
      title={title}
    >
      {leftIcon && <span className="pr-2">{leftIcon}</span>}
      {centerIcon && (
        <span className="flex flex-1 justify-center">{centerIcon}</span>
      )}
      <span className={selected ? "text-white" : ""}>{children}</span>
    </button>
  );
}
