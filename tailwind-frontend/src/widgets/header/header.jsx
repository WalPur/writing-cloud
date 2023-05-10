import NavigationLinks from "../../entities/NavigationLinks";
import PersonalNavigation from "../../entities/PersonalNavigation";
import HeaderLogo from "../../shared/HeaderLogo";

function Header() {
  return (
    <div className="h-20 bg-main-300">
      <div className="mx-auto flex h-full max-w-screen-lg justify-between">
        <div className="flex w-3/12 items-center">
          <HeaderLogo />
        </div>
        <NavigationLinks />
        <PersonalNavigation bellStatus={true} />
      </div>
    </div>
  );
}

export default Header;
