import NavigationTextLink from "../../shared/NavTextLink";

function Header() {
  return (
    <div className="h-20 bg-top-color">
      <div className="flex h-full max-w-screen-lg justify-between">
        <div className="w-2/12">logo</div>
        <div className="flex w-6/12 justify-between">
          <NavigationTextLink text="sample" link="#" isActive={false} />
          <NavigationTextLink text="sample" link="#" isActive={false} />
          <NavigationTextLink text="sample" link="#" isActive={false} />
          <NavigationTextLink text="sample" link="#" isActive={false} />
          <NavigationTextLink text="sample" link="#" isActive={false} />
        </div>
        <div className="w-2/12">logo</div>
      </div>
    </div>
  );
}

export default Header;
