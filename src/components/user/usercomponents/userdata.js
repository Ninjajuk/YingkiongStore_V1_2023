import {
    FaHome,

    FaAddressBook,

    FaAngleDown,
    FaAngleUp,
    FaRegHeart,
    FaBookmark,
    FaFolder,

  } from "react-icons/fa";

  import { MdDashboard,  } from "react-icons/md";
  
  export const data = [
    {
      menu: "Profile",
      icon: <MdDashboard />,
      submenu: "",
      path: "/profile",
      active: false
    },
    // {
    //   menu: "My Order",
    //   icon: <FaFileAlt />,
    //   path: "/dashboard/products",
    //   active: false
    // },
    // {
    //   menu: "Add Products",
    //   icon: <MdShoppingCart  />,
    //   path: "/dashboard/addproducts",
    //   active: false
    // },
    {
      menu: "My Orders",
      icon: <FaFolder />,
      path: "/dashboard/orders",
      active: false
    },

    // {
    //   menu: "Customers",
    //   icon: <FaUserFriends/>,
    //   path: "/dashboard/customers",
    //   active: false
    // },
    // {
    //   menu: "Team",
    //   icon: <FaUsers />,
    //   path: "/dashboard/team",
    //   active: false
    // }
    // ,
    // {
    //   menu: "Setting",
    //   icon: <FaWrench />,
    //   path: "/dashboard/settings",
    //   active: false
    // }

  ];

  export const userprofile = [
    {
      id: 1,
      menu: "My Profile",
      icon: <FaHome />,
      submenu: [],
      path: "/profile",
      active: false
    },
    {
      id: 2,
      menu: "MY ORDERS",
      icon: <FaFolder />,
      submenu: [],
      path: "/user-order",
      active: false
    },
    {
      id: 3,
      menu: "Manage Address",
      icon: <FaAddressBook />,
      submenu: [],
      path: "/wishlist",
      active: false
    },
    {
        id: 3,
        menu: "MY Wishlist",
        icon: <FaRegHeart />,
        submenu: [],
        path: "/wishlist",
        active: false
      },
    // {
    //   id: 4,
    //   menu: "SETTINGS",
    //   icon: <FaCog />,
    //   iconDown: <FaAngleDown />,
    //   iconUp: <FaAngleUp />,
    //   submenu: [
    //     {
    //       title: "Profile Information",
    //       path: "/profile/information",
    //       active: false
    //     },
    //     { title: "Manage Address", path: "/profile/address", active: false },
    //     { title: "PAN Card", path: "/pan", active: false }
    //   ],
    //   path: "",
    //   active: false
    // },
    // {
    //   id: 5,
    //   menu: "PAYMENTS",
    //   icon: <FaCreditCard />,
    //   iconDown: <FaAngleDown />,
    //   iconUp: <FaAngleUp />,
    //   submenu: [
    //     { title: "Gift Cards", path: "payments/prof" },
    //     { title: "Saved UPI", path: "payments/savedupi" },
    //     { title: "Saved Cards", path: "payments/savedcards" }
    //   ],
    //   path: "/payment",
    //   active: false
    // },
    {
      id: 6,
      menu: "MY STUFF",
      icon: <FaBookmark />,
      iconDown: <FaAngleDown />,
      iconUp: <FaAngleUp />,
      submenu: [
        { title: "MY Coupons", path: "/mystuff/coupons", active: false },
        { title: "MY Reviews & Ratings", path: "/mystuff/review", active: false },
        {
          title: "All Notifications",
          path: "/mystuff/notifications",
          active: false
        }
      ],
      path: "/coupon",
      active: false
    },
    // { menu: "Project", icon: <FaFolder />, submenu: "", path: "" },
    // { menu: "Calender", icon: <FaRegCalendarAlt />, submenu: "", path: "" },
    // { menu: "Documents", icon: <FaFileAlt />, submenu: "", path: "" },
    // { id: 7, menu: "Logout", icon: <FaPowerOff />, submenu: [], path: "/logout" }
  ];