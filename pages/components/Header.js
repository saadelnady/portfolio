import DarkToggle from "./DarkToggle";
import NavBar from "./NavBar";

const Header = ({ isDark, HandleIsDark }) => {
  return (
    <>
      <DarkToggle isDark={isDark} HandleIsDark={HandleIsDark} />
      <NavBar isDark={isDark} />
    </>
  );
};

export default Header;
