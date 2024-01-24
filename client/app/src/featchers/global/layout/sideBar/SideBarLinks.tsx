import SideBarButtons from "../../types/sideBarButtons";
import {
  NavLinks,
  NavBtn,
  Newest,
  Arrow,
} from "../../styledComponents/sideBar/NavLinks.styled";
import { Icon } from "../../styledComponents/globalStyles/Icon.styled";
import SubMenu, {
  SubLinks,
} from "../../styledComponents/sideBar/SubMenu.styled";
import useOpen from "../../hooks/useOpen";
import Typography from "../../components/Typography";

const SideBarLinks = ({
  to,
  icon,
  title,
  span,
  subBtn,
}: SideBarButtons) => {
  const { on, set, toggle } = useOpen();

  const handleSubMenu = () => {
    if (subBtn) {
      set(!on);
    }
  };

  return (
    <>
      <li>
        {!subBtn ? (
          <NavLinks
            to={{
              pathname: to,
            }}
            onClick={toggle}
          >
            <Icon>{icon}</Icon>
            <Typography childern={title}></Typography>
            {span && <Newest>{span}</Newest>}
          </NavLinks>
        ) : (
          <NavBtn
            onClick={() => {
              handleSubMenu();
            }}
          >
            <Icon>{icon}</Icon>
            {title}
            {span && <Newest>{span}</Newest>}
            {subBtn && (
              <Arrow open={!on && "open"}>
                <span></span>
              </Arrow>
            )}
          </NavBtn>
        )}
        {subBtn && (
          <SubMenu tall={subBtn.length} opened={on ? "true" : "false"}>
            {subBtn.map((btn, i) => (
              <div key={i}>
                <SubLinks
                  key={i}
                  to={to + "/" + btn.toLocaleLowerCase()}
                  onClick={toggle}
                >
                  {btn.slice(0, 2).toUpperCase()}
                  <span>{btn}</span>
                </SubLinks>
              </div>
            ))}
          </SubMenu>
        )}
      </li>
    </>
  );
};

export default SideBarLinks;
