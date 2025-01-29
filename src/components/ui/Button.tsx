import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center text-zinc-950 text-[13px] justify-center font-semibold gap-[6px] py-[6px] pl-3 pr-[10px] bg-white border-[1px] border-zinc-950/8 hover:border-zinc-950/30 hover:bg-primary-300 active:bg-primary-500 active:border-zinc-950/50 focus:outline-primary-500 rounded-md shadow-[0_1px_2px_rgba(16,24,40,0.05)] transition-all duration-100"
    >
      {children}
    </button>
  );
}
