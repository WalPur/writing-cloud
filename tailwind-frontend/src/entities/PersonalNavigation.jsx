import NotificationBell from "../shared/NotificationBell";
import AddButton from "../shared/AddButton";
import ProfilePic from "../shared/ProfilePic";

function PersonalNavigation({ bellStatus }) {
  return (
    <div className="flex w-3/12 items-center justify-end gap-7">
      <NotificationBell isActive={bellStatus} />
      <AddButton />
      <ProfilePic />
    </div>
  );
}

export default PersonalNavigation;
