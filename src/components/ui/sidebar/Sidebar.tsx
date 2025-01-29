import { useCallback } from 'react';
import PluseIcon from '../../icons/PlusIcon';
import Button from '../Button';
import Logo from '../Logo';
import SidebarMenu from './SidebarMenu';
import { SidebarMenuItem } from './sidebar.d';

export default function Sidebar() {
  const newHandler = useCallback(() => {
    console.log('New button clicked!');
  }, []);

  /**
   * This function gets the list of menus from the API for the current user.
   */
  const getMenuItems = useCallback(() => {
    return [
      {
        id: 1,
        text: 'Data Name',
      },
      {
        id: 2,
        text: 'Monitoring',
      },
      {
        id: 3,
        text: 'Settings',
      },
    ] as SidebarMenuItem[];
  }, []);

  return (
    <aside className="hidden md:flex flex-col w-[240px] border-r-[1px] border-zinc-950/8 ">
      <div className="flex flex-col p-2 gap-2">
        <Logo />
        <Button onClick={newHandler}>
          New <PluseIcon className="fill-zinc-950 size-3" />
        </Button>
      </div>

      <SidebarMenu items={getMenuItems()} />
    </aside>
  );
}
