import { useCallback } from 'react';
import ChartIcon from '../../icons/ChartIcon';
import DataBaseIcon from '../../icons/DataBaseIcon';
import SettingsIcon from '../../icons/SettingsIcon';
import { SidebarMenuItem as SidebarMenuItemType } from './sidebar.d';

interface SidebarMenuItemProps {
  item: SidebarMenuItemType;
}

export default function SidebarMenuItem({ item }: SidebarMenuItemProps) {
  /**
   * This function gets the icon for the menu item based on the menu id.
   */
  const getIcon = useCallback(() => {
    switch (item.id) {
      case 1:
        return <DataBaseIcon className="fill-sidebar-icon-600 size-3" />;
      case 2:
        return <ChartIcon className="fill-sidebar-icon-500 size-3" />;
      case 3:
        return <SettingsIcon className="fill-sidebar-icon-500 size-3" />;
      default:
        return null;
    }
  }, [item.id]);

  return (
    <li
      className="flex items-center px-2 mx-2 gap-2 py-2 h-[32px] text-xs leading-[20px] font-medium text-sidebar-link-500 hover:text-sidebar-link-600 hover:bg-primary-300 focus:outline-primary-500 transition-all duration-100 rounded-md"
      role="menuitem"
      tabIndex={0}
      key={item.id}
    >
      {getIcon()}
      <a>{item.text}</a>
    </li>
  );
}
