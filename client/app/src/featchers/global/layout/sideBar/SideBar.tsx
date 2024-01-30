import { FC, useLayoutEffect } from "react";
import { Scrollbars } from "react-custom-scrollbars";

import {
  SideBarWrappet,
  SideBarBody,
  UnorderList,
} from "../../styledComponents/sideBar/SideBar.styled";

import { Logo } from "../header/logo/Logo";
import SideBarFooter from "./SideBarFooter";
import SideBarButtons from "./SideBarLinks";
import makeButtons from "./makeButtonsArray";

import useOpen from "../../hooks/useOpen";
import openProps from "../../types/open";

const SideBar: FC<openProps> = ({ open }) => {
  const { on, set } = useOpen();

  useLayoutEffect(() => {
    const updateSize = () => {
      if (window.innerWidth > 775) {
        if (on) {
          set(false);
        }
      }
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);

  }, []);

  return (
    <>
      <SideBarWrappet open={open}>
        <SideBarBody>
          <Logo open={open} issidebar={"true"} />
          <Scrollbars
            autoHide
            autoHideTimeout={800}
            autoHideDuration={200}
            style={{ height: "calc(100vh - 180px)" }}
          >
            <UnorderList>
              {makeButtons.map((btn, i) => (
                <SideBarButtons
                  key={i}
                  to={btn.to}
                  icon={btn.icon}
                  title={btn.title}
                  span={btn.span}
                  subBtn={btn.subBtn}
                />
              ))}
            </UnorderList>
          </Scrollbars>
          <SideBarFooter />
        </SideBarBody>
      </SideBarWrappet>
    </>
  );
};

export default SideBar;
