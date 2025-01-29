import { useCallback } from 'react';
import PluseIcon from '../../icons/PlusIcon';
import { GridTag } from './grid';

interface TagsBadgeProps {
  itemId: number;
  showAdd: boolean;
  showBorders?: boolean;
  tags: GridTag[];
  onAddTag: (id: number) => void;
}

export default function TagsBadge({
  itemId,
  tags,
  showAdd,
  showBorders = true,
  onAddTag,
}: TagsBadgeProps) {
  /**
   * This function gets the text for the tags badge based on the number of tags.
   * When onlyne 1 tag is passed, it returns the name of the tag.
   * Otherwise, it returns the number of tags.
   */
  const getTagText = useCallback(() => {
    if (tags.length === 1) {
      return tags[0].name;
    }

    return `${tags.length} tags`;
  }, [tags]);

  if (tags.length === 0 && !showAdd) {
    return null;
  }

  if (tags.length === 0 && showAdd) {
    return (
      <div
        className="flex group items-center px-[10px] py-[5px] text-sm font-semibold text-center rounded-full border-[1px] border-zinc-950/8 cursor-pointer hover:bg-primary-300 active:bg-primary-600"
        onClick={() => onAddTag(itemId)}
      >
        <div className="flex items-center gap-2 text-gray-400 group-hover:text-gray-600 ">
          <PluseIcon className="w-3 h-3 fill-gray-400 group-hover:fill-gray-600" />
          Add Tag
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex items-center px-[10px] py-[5px] text-sm font-semibold text-center rounded-full ${
        showBorders && 'border-[1px] border-zinc-950/8'
      }`}
    >
      <div className="flex items-center gap-1 mr-2">
        {tags.map((tag) => (
          <span
            key={tag.name}
            className="w-2 h-2 rounded-sm"
            style={{ backgroundColor: tag.color }}
          ></span>
        ))}
      </div>
      <span className="text-ellipsis line-clamp-1">{getTagText()}</span>
    </div>
  );
}
