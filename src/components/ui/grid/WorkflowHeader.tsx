export default function WorkflowHeader() {
  return (
    <div className="hidden sm:flex min-w-full w-fit items-center border-b-[1px] border-zinc-950/8">
      <div className="flex items-center px-4 py-[18px] h-14 text-sm font-semibold leading-5 min-w-[107px] max-w-[107px]">
        Type
      </div>
      <div className="flex flex-1 items-center px-4 py-[18px] h-14 text-sm font-semibold leading-5 min-w-[280px]">
        Name
      </div>
      <div className="flex items-center px-4 py-[18px] h-14 text-sm font-semibold leading-5 min-w-[190px] max-w-[190px]">
        Tags
      </div>
      <div className="flex items-center whitespace-nowrap px-4 py-[18px] h-14 text-sm font-semibold leading-5 min-w-[135px] max-w-[135px]">
        Last Updated
      </div>
      <div className="flex items-center px-4 py-[18px] h-14 text-sm font-semibold leading-5 min-w-[88px] max-w-[88px]">
        Actions
      </div>
    </div>
  );
}
