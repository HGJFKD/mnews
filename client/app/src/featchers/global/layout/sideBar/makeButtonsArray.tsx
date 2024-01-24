
import SideBarButtons from '../../types/sideBarButtons';
import { RiDashboardFill } from "react-icons/ri";
import { MdAccountCircle } from "react-icons/md";
import { IoMdAnalytics } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { RiCentosFill } from "react-icons/ri";
import { FaNewspaper } from "react-icons/fa6";



const makeBottons: SideBarButtons[] = [
    {
        to: "dashboard/home",
        icon: <i> <RiDashboardFill /></i>,
        title: "Dashboard"
    },
    {
        to: "dashboard/newspaper",
        icon: <i> <FaNewspaper/> </i>,
        title: "NewsPaper",
        subBtn: ["Pages", "Elements", "Portofilio"]
    },
    {
        to: "dashboard/orders",
        icon: <i> <RiCentosFill/> </i>,
        title: "Orders",
    },
    {
        to: "dashboard/analytics",
        icon: <i> <IoMdAnalytics /></i>,
        title: "Analytics"
    },
    {
        to: "dashboard/calendar",
        icon: <i> <FaCalendarAlt /></i>,
        title: "Calendar"
    },
    {
        to: "dashboard/profile",
        icon: <i> <MdAccountCircle /></i>,
        title: "Profile",
        subBtn: ["Passwords", "Mail", "Accounts"]
    },
    {
        to: "dashboard/contens/settings",
        icon: <i> <IoMdSettings /></i>,
        title: "Settings"
    },
]

export default makeBottons