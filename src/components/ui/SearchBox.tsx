import SearchIcon from '../icons/SearchIcon';

export default function SearchBox() {
  return (
    <div
      role="searchbox"
      className="flex group items-center h-8 px-3 gap-2 max-w-[200px] rounded-md border-[1px] border-black/16 hover:border-black/40 overflow-hidden shadow-[0_1px_3px_rgba(16,24,40,0.05)] transition-all duration-100"
    >
      <SearchIcon className="w-[13px] h-[13px] fill-black flex flex-shrink-0" />
      <input
        role="search"
        type="text"
        placeholder="Search workflows"
        className="text-sm text-[#828282] group-hover:text-gray-700 focus:outline-primary-500"
      />
    </div>
  );
}
