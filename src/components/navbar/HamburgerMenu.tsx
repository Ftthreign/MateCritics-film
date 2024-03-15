import MenuIcon from "@mui/icons-material/Menu";
import NavStyle from "@style/navbar.module.css";
type click = {
  onClicked: () => void;
};

const HamburgerMenu = ({ onClicked }: click) => {
  return (
    <div onClick={onClicked} className={NavStyle.HamburgerMenu}>
      <div>
        <MenuIcon />
      </div>
    </div>
  );
};

export default HamburgerMenu;
