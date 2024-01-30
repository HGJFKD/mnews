import { RiDashboardFill } from "react-icons/ri";
import { MdAccountCircle } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { RiCustomerService2Fill } from "react-icons/ri";
import { RiCentosFill } from "react-icons/ri";
import { FaNewspaper } from "react-icons/fa6";

import SideBarButtons from '../../types/sideBarButtons';
import ROUTER from '../../router/router';

const makeButtons: SideBarButtons[] = [
    {
        to: ROUTER.Dashboard,
        icon: <i> <RiDashboardFill /></i>,
        title: "Dashboard"
    },
    {
        to: ROUTER.NewsPaper,
        icon: <i> <FaNewspaper /> </i>,
        title: "NewsPaper",
        subBtn: ["Pages", "Elements", "Portfolios"]
    },
    {
        to: ROUTER.Consumers,
        icon: <i> <RiCustomerService2Fill /> </i>,
        title: "Customers",
    },
    {
        to: ROUTER.Orders,
        icon: <i> <RiCentosFill /> </i>,
        title: "Orders",
    },
    {
        to: ROUTER.Calendar,
        icon: <i> <FaCalendarAlt /></i>,
        title: "Calendar"
    },
    {
        to: ROUTER.Profile,
        icon: <i> <MdAccountCircle /></i>,
        title: "Profile",
        subBtn: ["Passwords", "Mail", "Accounts"]
    },
    {
        to: ROUTER.Settings,
        icon: <i> <IoMdSettings /></i>,
        title: "Settings"
    },
]

export default makeButtons