import CaretDownIcon from '../icons/CaretDownIcon';
import SearchBox from './SearchBox';

interface PageHeaderProps {
  title: string;
}

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <header className="flex flex-col pb-3 md:pb-0 md:flex-row w-full items-start justify-between px-5 pt-5 md:min-h-[80px] border-b-[0.5px] border-bottom-[#ecedef]">
      <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
      <div className="flex items-center gap-2 mt-2 md:mt-0 flex-wrap">
        <div className="flex items-center gap-1 rounded-md border-[0.5px] border-[#ecedef] hover:border-black/40 hover:bg-primary-300 active:bg-primary-500 h-8 w-[65px] justify-center transition-all duration-100 cursor-pointer">
          <span className="text-[13px] font-semibold">Sort</span>
          <CaretDownIcon className="fill-zinc-950 w-[11px] h-[6px] flex flex-shrink-0" />
        </div>
        <SearchBox />
      </div>
    </header>
  );
}
