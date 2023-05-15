import { ChevronRightIcon } from "@heroicons/react/24/solid";

function SeeMoreText({ text }) {
  return (
    <h3>
      {text} <ChevronRightIcon />
    </h3>
  );
}
