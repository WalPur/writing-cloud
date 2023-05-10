function NavigationTextLink({ text, link, isActive }) {
  return (
    <a
      href={link}
      className={
        "font-main-200 text-base font-semibold text-white hover:opacity-100 " +
        (isActive ? "opacity-100" : "opacity-60")
      }
    >
      {text}
    </a>
  );
}

export default NavigationTextLink;
