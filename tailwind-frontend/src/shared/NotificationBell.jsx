import { BellIcon, BellAlertIcon } from "@heroicons/react/24/solid";
import {
  BellIcon as OutlineBellIcon,
  BellAlertIcon as OutLineBellAlertIcon,
} from "@heroicons/react/24/outline";

function NotificationBell({ isActive }) {
  const bell = isActive ? (
    <>
      <BellAlertIcon className="h-7 w-7 text-red-400 group-hover:hidden" />
      <OutLineBellAlertIcon className="hidden h-7 w-7 text-red-400 group-hover:block" />
    </>
  ) : (
    <>
      <BellIcon className="h-7 w-7 text-white group-hover:hidden" />
      <OutlineBellIcon className="hidden h-7 w-7 text-red group-hover:block" />
    </>
  );
  return <div className="group cursor-pointer">
    {bell}
  </div>;
}

export default NotificationBell;
