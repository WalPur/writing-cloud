import { SparklesIcon } from "@heroicons/react/24/solid";

const DatetimeTexts = [
  "С добрым утром",
  "Добрый день",
  "Добрый вечер",
  "Спокойной ночи",
];

function WelcomeText({ name }) {
  return (
    <>
      <SparklesIcon />
      <h2 className="text-xl font-black">
        {DatetimeTexts[2]}, {name}
      </h2>
    </>
  );
}

export default WelcomeText;
