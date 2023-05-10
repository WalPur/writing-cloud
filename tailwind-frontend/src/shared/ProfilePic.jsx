import { ChevronDownIcon } from "@heroicons/react/24/outline";

function ProfilePic({ imagePath = "/images/profile pic sample.png" }) {
  return (
    <div className="flex items-center gap-3 cursor-pointer">
      <img
        src={imagePath}
        alt="profile picture"
        className=" box-content h-11 w-11 rounded-full border-4 border-main-100 object-fill"
      />
      <ChevronDownIcon className="h-4 text-white opacity-60" />
    </div>
  );
}

export default ProfilePic;
