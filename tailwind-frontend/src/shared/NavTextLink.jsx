function NavigationTextLink({ text, link, isActive }) {
  return (
    <a
      href={link}
      className={
        "font-bold text-white" + isActive ? "opacity-100" : "opacity-60"
      }
    >
      {text}
    </a>
  );
}

export default NavigationTextLink;
