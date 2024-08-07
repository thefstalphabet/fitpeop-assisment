import { AuditOutlined, ControlOutlined, EuroOutlined, ShoppingOutlined } from "@ant-design/icons";
export interface ISmallStatsCardItems {
    icon: any,
    value: number,
    title: string,
    inProfit: boolean,
    tradeValue: number,
}
export const smallStatsCardItems = [
  {
    icon: <ShoppingOutlined className="icon" />,
    value: 74,
    title: "Total Order",
    inProfit: true,
    tradeValue: 3,
  },
  {
    icon: <AuditOutlined className="icon" />,
    value: 74,
    title: "Total Delivered",
    inProfit: false,
    tradeValue: 3,
  },
  {
    icon: <ControlOutlined className="icon" />,
    value: 74,
    title: "Total Cancelled",
    inProfit: false,
    tradeValue: 3,
  },
  {
    icon: <EuroOutlined className="icon" />,
    value: 74,
    title: "Total Revenue",
    inProfit: true,
    tradeValue: 3,
  },
];
