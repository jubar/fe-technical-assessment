import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useState } from 'react';
import EditIcon from '../../icons/EditIcon';
import ThreeDots from '../../icons/ThreeDots';
import TrashIcon from '../../icons/TrashIcon';
import ActionButton from './ActionButton';
import { WorkflowItem } from './grid';
import TagsBadge from './TagsBadge';

dayjs.extend(duration);
dayjs.extend(relativeTime);

interface WorkflowRowProps {
  item: WorkflowItem;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onAddTag: (id: number) => void;
}

export default function WorkflowRow({
  item,
  onEdit,
  onDelete,
  onAddTag,
}: WorkflowRowProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="relative flex py-2 sm:hidden flex-col gap-1 w-full border-b-[1px] border-zinc-950/8">
        <button className="absolute right-0 top-3 p-2 bg-white border-[1px] border-zinc-950/8 hover:border-zinc-950/30 hover:bg-primary-300 active:bg-primary-500 active:border-zinc-950/50 focus:outline-primary-500 rounded-md shadow-[0_1px_2px_rgba(16,24,40,0.05)] transition-all duration-100">
          <ThreeDots className="fill-zinc-950 w-3 h-3" />
        </button>
        <span className="text-sm text-gray-400">{item.type}</span>
        <span className="text-base">{item.name}</span>
        <div className="flex w-full items-center gap-4 mt-1">
          <span className="text-sm text-gray-400 italic">
            Updated: {dayjs(item.lastUpdated).fromNow()}
          </span>
          <TagsBadge
            showAdd={false}
            showBorders={false}
            itemId={item.id}
            tags={item.tags}
            onAddTag={onAddTag}
          />
        </div>
      </div>

      <div
        className="hidden sm:flex min-w-full w-fit items-center border-b-[1px] border-zinc-950/8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center px-4 py-[18px] h-14 text-sm leading-5 min-w-[107px] max-w-[107px] text-[#868686]">
          {item.type}
        </div>
        <div className="flex flex-1 items-center gap-3 px-4 py-[18px] h-14 text-sm font-medium leading-5 min-w-[280px] text-zinc-950">
          {item.name}
        </div>
        <div className="flex items-center px-4 py-[18px] h-14 text-sm font-semibold leading-5 min-w-[190px] max-w-[190px]">
          <TagsBadge
            showAdd={isHovered}
            itemId={item.id}
            tags={item.tags}
            onAddTag={onAddTag}
          />
        </div>
        <div className="flex items-center px-4 py-[18px] h-14 text-sm leading-5 min-w-[135px] max-w-[135px] text-[#868686]">
          {dayjs(item.lastUpdated).fromNow()}
        </div>
        <div className="flex items-center px-4 py-[18px] h-14 text-sm font-semibold leading-5 min-w-[88px] max-w-[88px]">
          <div className="flex gap-2">
            <ActionButton onClick={() => onEdit(item.id)}>
              <EditIcon className="fill-zinc-950 h-3 w-3" />
            </ActionButton>
            <ActionButton onClick={() => onDelete(item.id)}>
              <TrashIcon className="fill-zinc-950 h-3 w-2" />
            </ActionButton>
          </div>
        </div>
      </div>
    </>
  );
}
