import {
  BarChartOutlined,
  FileProtectOutlined,
  HomeOutlined,
  LogoutOutlined,
  ProjectOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import * as Styles from "./SideMenuStyles";
import { componentBgColor } from "../../Config/GlobalVariables";

export default function SideMenu() {
  type MenuItem = Required<MenuProps>["items"][number];
  const items: MenuItem[] = [
    { key: "1", icon: <HomeOutlined />, label: "Option 1" },
    { key: "2", icon: <BarChartOutlined />, label: "Option 2" },
    { key: "3", icon: <FileProtectOutlined />, label: "Option 3" },
    { key: "4", icon: <ProjectOutlined />, label: "Option 4" },
    { key: "5", icon: <ShoppingOutlined />, label: "Option 5" },
  ];
  return (
    <Styles.Container>
      <Menu
        defaultSelectedKeys={["1"]}
        mode="inline"
        inlineCollapsed={true}
        items={items}
        style={{border: "none", backgroundColor: componentBgColor}}
      />
      <LogoutOutlined />
    </Styles.Container>
  );
}
