import NavigationTextLink from "../shared/NavTextLink";

function NavigationLinks() {
  return (
    <div className="flex w-6/12 items-center justify-between">
      <NavigationTextLink text="Лента" link="#" isActive={true} />
      <NavigationTextLink text="Отслеживаемое" link="#" isActive={false} />
      <NavigationTextLink text="Сообщество" link="#" isActive={false} />
      <NavigationTextLink text="Рейтинги" link="#" isActive={false} />
    </div>
  );
}

export default NavigationLinks;
