// Filename - components/SidebarData.js

import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
	{
		title: "Projects",
		// path: "/projects",
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "Ongoing",
				path: "/projects/ongoing",
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title: "Previous",
				path: "/projects/previous",
				icon: <IoIcons.IoIosPaper />,
			},
		],
	},
	{
		title: "WorkRequests",
		path: "/workRequests",
	},
	{
		title: "Business",
		// path: "/business",
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "Current",
				path: "/business/currentBusiness",
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title: "Add More",
				path: "/business/addBusiness",
				icon: <IoIcons.IoIosPaper />,
			},
		],
	},
	{
		title: "Profile",
		path: "/profile",
	},
	{
		title: "Support",
		path: "/support",
	},
	{
		title: "Logout",
        path: "/logout",
	}
];
