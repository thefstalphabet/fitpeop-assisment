import {
  AppstoreFilled,
  BellFilled,
  MailFilled,
  SearchOutlined,
  SettingFilled,
} from "@ant-design/icons";
import { Avatar, Badge, Input } from "antd";
import * as Styles from "./HeaderStyles";

export default function Header() {
  return (
    <Styles.Container>
      <div>
        <AppstoreFilled className="logo" />
        <Input style={{backgroundColor: "#292b2f"}} bordered={false} size="middle" placeholder="Search" prefix={<SearchOutlined />} />
      </div>
      <div>
        <div>
          <MailFilled className="icon bg" />
          <SettingFilled className="icon bg" />
          <Badge dot>
            <BellFilled className="icon bg" />
          </Badge>
        </div>
        <Avatar
          style={{ backgroundColor: "gray", verticalAlign: "middle" }}
          size="large"
          src="https://api.dicebear.com/7.x/miniavs/svg?seed=1"
        />
      </div>
    </Styles.Container>
  );
}
