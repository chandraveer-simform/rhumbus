"use client";
import { useState } from "react";
import Image from "next/image";
import { MenuProps } from "antd";
import {
  AppstoreFilled,
  HomeFilled,
  PoundCircleFilled,
  GiftFilled,
} from "@ant-design/icons";

import Logo from "@/molecules/logo/page";
import Menu, { getMenuItem } from "@/component/menu/page";

import IconMenu from "../../assets/icon/ic_menu.svg";

import "./sideBar.scss";
import { useRouter } from "next/navigation";

type MenuItem = Required<MenuProps>["items"][number];
// submenu keys of first level
const rootSubmenuKeys = ["sub2", "sub4"];

const items: MenuItem[] = [
  getMenuItem(
    "Overview",
    "overview",
    <AppstoreFilled className="large-icon" />
  ),
  getMenuItem("Business", "sub2", <HomeFilled className="large-icon" />, [
    getMenuItem("Business Snapshot", "5"),
    getMenuItem("Cast Flow", "cashflow"),
  ]),
  getMenuItem("Sales", "sub4", <PoundCircleFilled className="large-icon" />, [
    getMenuItem("Sales 9", "9"),
  ]),
  getMenuItem("Transactions", "sub5", <GiftFilled className="large-icon" />, [
    getMenuItem("Transactions 10", "10"),
  ]),
  getMenuItem("Expenses", "sub6", <GiftFilled className="large-icon" />),
  getMenuItem("Reports", "reports", <GiftFilled className="large-icon" />),
  getMenuItem("Projects", "sub8", <GiftFilled className="large-icon" />),
  getMenuItem("Contacts", "sub9", <GiftFilled className="large-icon" />),
];

export default function SideMenu() {
  const router = useRouter();
  const [openKeys, setOpenKeys] = useState(["sub1"]);

  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const navigateToPage = ({ key }: { key: String }) => {
    router.push(`/${key}`);
  };

  return (
    <div>
      <div className="sidebar-logo pt-23 row">
        <Image src={IconMenu} alt="icon menu" className="mr-12 large-icon" />
        <Logo />
      </div>
      <div className="sidebar-menu pt-36">
        <Menu
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          items={items}
          onClick={navigateToPage}
        />
      </div>
    </div>
  );
}
