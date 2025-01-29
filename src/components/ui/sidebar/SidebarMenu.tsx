import { SidebarMenuItem as SidebarMenuItemType } from './sidebar.d';
import SidebarMenuItem from './SidebarMenuItem';

interface SidebarMenuProps {
  items: SidebarMenuItemType[];
}

export default function SidebarMenu({ items }: SidebarMenuProps) {
  // If there are no items, show a custom message.
  if (items.length === 0) {
    return (
      <div className="flex flex-col gap-2 items-center mt-8 px-2 text-center">
        <span>😟</span>
        <span className="text-gray-600">There are no menus</span>
        <span className="text-xs text-gray-400">
          Please get in touch with an administrator
        </span>
        <a href="#" className="text-sm text-primary-500 hover:text-primary-600">
          Contact support
        </a>
      </div>
    );
  }

  return (
    <ul role="menu" className="flex flex-col">
      {items.map((item) => (
        <SidebarMenuItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
