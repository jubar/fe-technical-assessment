import { ReactNode } from 'react';

interface ActionButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export default function ActionButton({ onClick, children }: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center rounded-md bg-zinc-950/5 w-6 h-6 hover:bg-primary-300 active:bg-primary-500 transition-all duration-100"
    >
      {children}
    </button>
  );
}
