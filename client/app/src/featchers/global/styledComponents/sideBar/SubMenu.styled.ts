import { NavLink } from "react-router-dom";
import styled from "styled-components";

type SubMenuProps = {
  opened: "true" | "false";
  tall: number ;
};

const SubMenu = styled.div<SubMenuProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #00000029;
  overflow: hidden;
  height: ${({ opened, tall }) => (opened === "true" ? tall * 59 + 0 : 0)}px;
  transition: all 0.4s ease;
  padding: ${({ opened }) => (opened === "true" ? "0px 0px" : "0px")};
  margin: 2px 0 2px;
`;

export const SubLinks = styled(NavLink)`
  color: #fff;
  padding: 0px 20px;
  height: 55px !important;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: left;
  margin: 2px 10px;
  border-radius: 10px;
  > span {
    margin-left: 14px;
  }
  &:hover {
    background: #ffffff24;
  }
  &.active {
    background: #fff;
    color: #e15ff9;
    transition: all 0.4s ease;
  }
`;
export default SubMenu;
