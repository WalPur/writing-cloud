import { BellIcon, BellAlertIcon } from "@heroicons/react/24/solid";

function NotificationBell({ isActive }) {
  const bell = isActive ? (
    <BellAlertIcon className="h-7 w-7 text-white" />
  ) : (
    <BellIcon className="h-7 w-7 text-white" />
  );
  return bell;
}

export default NotificationBell;
