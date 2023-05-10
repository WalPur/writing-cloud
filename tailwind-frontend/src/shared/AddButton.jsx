import { PlusIcon } from "@heroicons/react/24/outline";

function AddButton() {
  return (
    <div className="group box-content  h-fit cursor-pointer rounded-2xl border border-white bg-white p-3 hover:bg-main-300">
      <PlusIcon className="h-6 w-6 group-hover:text-white" />
    </div>
  );
}

export default AddButton;
