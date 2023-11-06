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
    // getMenuItem("Business Snapshot", "sales"),
    getMenuItem("Cast Flow", "cashflow"),
  ]),
  getMenuItem("Sales", "sub4", <PoundCircleFilled className="large-icon" />, [
    getMenuItem("Invoices ", "invoices"),
  ]),
  getMenuItem("Transactions", "sub5", <GiftFilled className="large-icon" />, [
    getMenuItem("Bills to pay", "billsToPay"),
  ]),
  getMenuItem("Expenses", "expenses", <GiftFilled className="large-icon" />),
  getMenuItem("Reports", "reports", <GiftFilled className="large-icon" />),
  getMenuItem("Projects", "projects", <GiftFilled className="large-icon" />),
  getMenuItem("Contacts", "contacts", <GiftFilled className="large-icon" />),
];

export default function SideMenu({
  toggleCollapsed,
  collapsed,
}: {
  toggleCollapsed?: () => void;
  collapsed: boolean;
}) {
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
      <div className="sidebar-logo pt-23 ">
        <Image
          src={IconMenu}
          alt="icon menu"
          onClick={toggleCollapsed}
          className="mr-12 large-icon cursor-pointer"
        />
        <Logo icon={collapsed} />
      </div>
      <div className="sidebar-menu pt-36 ">
        <Menu
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          items={items}
          onClick={navigateToPage}
        />
        <div className="sidebar-bottom-content">
          <h4 className="medium">Rhombus UI Kit</h4>
          <p className="paragraph2 mt-8">
            Want to get more info about Rhombus?{" "}
            <span className="primary-color underline">Contact us</span>
          </p>
        </div>
      </div>
    </div>
  );
}
