interface IBadgeProps {
  text: string;
  selected?: boolean;
  onClick: () => void;
}

export function Badge(props: IBadgeProps) {
  const { text, selected, onClick } = props;
  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-center rounded-full px-2 py-1 text-sm
        border-[1px] border-red-400 cursor-pointer hover:bg-red-100 hover:border-red-100 ${
          selected
            ? "border-transparent bg-red-700 text-white hover:bg-red-500 hover:border-red-500"
            : "text-red-700"
        }`}
    >
      {text}
    </div>
  );
}
