import MenuIcon from '../icons/MenuIcon';
import Logo from './Logo';

export default function TopBar() {
  return (
    <header className="flex md:hidden w-full items-center justify-between px-2 py-3 border-b-[1px] border-zinc-950/8">
      <Logo />
      <button>
        <MenuIcon className="fill-zinc-950 hover:fill-primary-600 size-6" />
      </button>
    </header>
  );
}
