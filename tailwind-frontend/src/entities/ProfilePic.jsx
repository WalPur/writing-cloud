import { ChevronDownIcon } from "@heroicons/react/24/outline";

function ProfilePic({ imagePath = "/images/profile pic sample.png" }) {
  return (
    <div className="flex">
      <img
        src={imagePath}
        alt="profile picture"
        className=" box-content h-11 w-11 rounded-full border-4 border-main-100 border-main-300 object-fill"
      />
      <ChevronDownIcon className="h-2 w-4 text-white opacity-60" />
    </div>
  );
}

export default ProfilePic;
