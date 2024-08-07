import { Avatar, Space, Table, Tag } from "antd";
import React from "react";
import * as Styles from "./RecentOrdersStyles";

export default function RecentOrders() {
  const data = [
    {
      customer: "Wade Warren",
      orderNo: 1547895,
      amount: "12400",
      status: 0,
    },
    {
      customer: "Wade Warren",
      orderNo: 1547895,
      amount: "12400",
      status: 1,
    },
    {
      customer: "Wade Warren",
      orderNo: 1547895,
      amount: "12400",
      status: 2,
    },
    {
      customer: "Wade Warren",
      orderNo: 1547895,
      amount: "12400",
      status: 0,
    },
    
  ];
  const columns = [
    {
      title: "Customer",
      dataIndex: "customer",
      key: "customer",
      render: (customer: number) => {
        return (
          <Space>
            <Avatar
              style={{ backgroundColor: "gray", verticalAlign: "middle" }}
              size="large"
              src="https://api.dicebear.com/7.x/miniavs/svg?seed=1"
            />
            <span>{customer}</span>
          </Space>
        );
      },
    },
    {
      title: "Order No.",
      dataIndex: "orderNo",
      key: "orderNo",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (amount: number) => {
        return `$${amount}`;
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: number) => {
        let text, color = "Red";
        switch (status) {
          case 0:
            text = "Pending";
            break;
          case 1:
            text = "Delivered";
            color = "Green"
            break;
          default:
            text = "Cancelled";
            break;
        }
        return <Tag color={color}>{text}</Tag>;
      },
    },
  ];
  return (
    <Styles.Container>
      <Table
        className="table"
        pagination={false}
        bordered={false}
        dataSource={data}
        columns={columns}
      />
    </Styles.Container>
  );
}
